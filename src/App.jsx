import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { format } from 'date-fns';

// Use a CSS-in-JS approach for a clean, single-file component
const containerStyle = {
  width: '100%',
  height: '50vh', // Changed to 2/3 of previous height
  borderRadius: '1rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  backgroundColor: '#f1f5f9', // slate-100
  position: 'relative',
};

// Main App component
const App = () => {
  const [diameter, setDiameter] = useState(10);
  const [divisionsPeriphery, setDivisionsPeriphery] = useState(24);
  const [divisionsRadius, setDivisionsRadius] = useState(10);
  const [cylinderHeight, setCylinderHeight] = useState(10);
  const [walkwayWidth, setWalkwayWidth] = useState(3);
  const [walkwayDivsRadius, setWalkwayDivsRadius] = useState(10);
  const [description, setDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nodeCoordinates, setNodeCoordinates] = useState([]);
  const [plateIncidences, setPlateIncidences] = useState([]);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  
  // Use useMemo to generate the export text
  const exportText = useMemo(() => {
    const lines = [];
    const formattedDate = format(new Date(), 'dd-MMM-yy');
    lines.push("STAAD SPACE");
    lines.push("START JOB INFORMATION");
    lines.push("ENGINEER DATE " + formattedDate);
    lines.push("END JOB INFORMATION");
    lines.push("INPUT WIDTH 79");
    lines.push("UNIT METER KN");
    lines.push("JOINT COORDINATES");

    const round3 = (num) => parseFloat(num.toFixed(3));
    const charLimit = 74;
    let currentLine = '';

    nodeCoordinates.forEach((n) => {
      const jointStr = `${n.node} ${round3(n.x)} ${round3(n.y)} ${round3(n.z)}`;
      if (currentLine === '') {
        currentLine = jointStr;
      } else if ((currentLine + '; ' + jointStr).length <= charLimit) {
        currentLine += '; ' + jointStr;
      } else {
        lines.push(currentLine + ';');
        currentLine = jointStr;
      }
    });

    if (currentLine !== '') {
      lines.push(currentLine + ';');
    }
    
    // Add Plate Incidences
    lines.push("\nELEMENT INCIDENCES SHELL");
    currentLine = '';
    plateIncidences.forEach((p, index) => {
        let plateStr = `${index + 1} `;
        p.nodes.forEach((node, nodeIndex) => {
            plateStr += node;
            if (nodeIndex < p.nodes.length - 1) {
                plateStr += ' ';
            }
        });

        if (currentLine === '') {
            currentLine = plateStr;
        } else if ((currentLine + '; ' + plateStr).length <= charLimit) {
            currentLine += '; ' + plateStr;
        } else {
            lines.push(currentLine + ';');
            currentLine = plateStr;
        }
    });

    if (currentLine !== '') {
      lines.push(currentLine + ';');
    }

    return lines.join('\n');
  }, [nodeCoordinates, plateIncidences]);

  // Function to download the export text
  const downloadTxt = () => {
    const filename = "coordinates.txt";
    const element = document.createElement("a");
    const file = new Blob([exportText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
    document.body.removeChild(element);
  };

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.75), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialiasing: true, alpha: true });

    // Set renderer size to match container
    const container = canvasRef.current;
    if (!container) return;

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = Math.max(diameter * 1.5, cylinderHeight * 1.5, walkwayWidth * 1.5, 20);
    camera.position.y = Math.max(diameter * 0.5, cylinderHeight * 0.5, 10);
    camera.lookAt(new THREE.Vector3(0, (cylinderHeight + 1) / 2, 0));

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 500;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Create and add the combined structure
    const createStructure = () => {
      // Clear previous meshes
      const oldMesh = scene.getObjectByName('combinedMesh');
      if (oldMesh) {
        scene.remove(oldMesh);
        oldMesh.geometry.dispose();
        oldMesh.material.dispose();
      }
      const oldGrid = scene.getObjectByName('gridMesh');
      if (oldGrid) {
        scene.remove(oldGrid);
        oldGrid.geometry.dispose();
        oldGrid.material.dispose();
      }

      const radius = diameter / 2;
      const cylinderDivsPeriphery = divisionsPeriphery; // Now takes from slab
      const cylinderDivsHeight = divisionsRadius;
      const walkwayOuterRadius = radius + walkwayWidth;
      const tempNodeData = [];
      const tempPlateData = [];
      const combinedVertices = [];
      const combinedIndices = [];
      const gridVertices = [];
      const gridColor = new THREE.Color(0x444444);
      let nodeNumber = 1;

      // --- 1. Create SLAB NODES and FACES ---
      
      // Central node
      combinedVertices.push(0, 0, 0); // x, y, z
      tempNodeData.push({ node: nodeNumber++, x: 0, y: 0, z: 0 });

      // Nodes on concentric circles
      for (let i = 1; i <= divisionsRadius; i++) {
        const r = (i / divisionsRadius) * radius;
        for (let j = 0; j < divisionsPeriphery; j++) {
          const angle = (j / divisionsPeriphery) * 2 * Math.PI;
          const x = r * Math.cos(angle);
          const y = 0; // Flat slab
          const z = r * Math.sin(angle); // Z is downward direction
          combinedVertices.push(x, y, z);
          tempNodeData.push({ node: nodeNumber++, x: x, y: y, z: z });
        }
      }

      // Indices for slab
      // First ring of triangles around the center
      const centerNodeIndex = 0;
      for (let j = 0; j < divisionsPeriphery; j++) {
        const b = 1 + j;
        const c = 1 + (j + 1) % divisionsPeriphery;
        combinedIndices.push(centerNodeIndex, c, b);
        tempPlateData.push({ nodes: [tempNodeData[centerNodeIndex].node, tempNodeData[c].node, tempNodeData[b].node] });
      }

      // Outer rings
      for (let i = 0; i < divisionsRadius - 1; i++) {
        for (let j = 0; j < divisionsPeriphery; j++) {
          const baseIndex = 1 + i * divisionsPeriphery;
          const a = baseIndex + j;
          const b = baseIndex + (j + 1) % divisionsPeriphery;
          const c = baseIndex + divisionsPeriphery + (j + 1) % divisionsPeriphery;
          const d = baseIndex + divisionsPeriphery + j;
          combinedIndices.push(a, b, d);
          combinedIndices.push(b, c, d);
          // tempPlateData.push({ nodes: [tempNodeData[a].node, tempNodeData[b].node, tempNodeData[c].node, tempNodeData[d].node] });
          tempPlateData.push({ nodes: [tempNodeData[b].node, tempNodeData[c].node, tempNodeData[d].node, tempNodeData[a].node] });
        }
      }
      
      const slabNodeCount = tempNodeData.length;
      
      // --- 2. Create CYLINDER NODES and FACES ---

      const startNodeIndex = slabNodeCount - divisionsPeriphery;
      
      // Nodes for cylinder body
      for (let i = 1; i <= cylinderDivsHeight; i++) {
        const h = (i / cylinderDivsHeight) * cylinderHeight;
        for (let j = 0; j < cylinderDivsPeriphery; j++) {
          const angle = (j / cylinderDivsPeriphery) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = h;
          const z = radius * Math.sin(angle);
          combinedVertices.push(x, y, z);
          tempNodeData.push({ node: nodeNumber++, x: x, y: y, z: z });
        }
      }
      
      // Indices for cylinder body
      for (let i = 0; i < cylinderDivsHeight; i++) {
          const prevRingBaseIndex = startNodeIndex + i * cylinderDivsPeriphery;
          const currentRingBaseIndex = slabNodeCount + i * cylinderDivsPeriphery;
          for (let j = 0; j < cylinderDivsPeriphery; j++) {
              const a = prevRingBaseIndex + j;
              const b = prevRingBaseIndex + (j + 1) % cylinderDivsPeriphery;
              const c = currentRingBaseIndex + (j + 1) % cylinderDivsPeriphery;
              const d = currentRingBaseIndex + j;
              combinedIndices.push(a, b, d);
              combinedIndices.push(b, c, d);
              tempPlateData.push({ nodes: [tempNodeData[a].node, tempNodeData[b].node, tempNodeData[c].node, tempNodeData[d].node] });
          }
      }

      const cylinderNodeCount = tempNodeData.length;

      // --- 3. Create WALKWAY NODES and FACES ---
      
      // Nodes for walkway top surface
      for (let i = 1; i <= walkwayDivsRadius; i++) {
          const r = radius + (i / walkwayDivsRadius) * walkwayWidth;
          for (let j = 0; j < divisionsPeriphery; j++) {
              const angle = (j / divisionsPeriphery) * 2 * Math.PI;
              const x = r * Math.cos(angle);
              const y = cylinderHeight;
              const z = r * Math.sin(angle);
              combinedVertices.push(x, y, z);
              tempNodeData.push({ node: nodeNumber++, x: x, y: y, z: z });
          }
      }

      // Indices for walkway
      const walkwayBaseIndex = cylinderNodeCount - cylinderDivsPeriphery;
      for (let i = 0; i < walkwayDivsRadius; i++) {
          const prevRingBaseIndex = walkwayBaseIndex + i * divisionsPeriphery;
          const currentRingBaseIndex = cylinderNodeCount + i * divisionsPeriphery;
          for (let j = 0; j < divisionsPeriphery; j++) {
              const a = prevRingBaseIndex + j;
              const b = prevRingBaseIndex + (j + 1) % divisionsPeriphery;
              const c = currentRingBaseIndex + (j + 1) % divisionsPeriphery;
              const d = currentRingBaseIndex + j;
              combinedIndices.push(a, b, d);
              combinedIndices.push(b, c, d);
              tempPlateData.push({ nodes: [tempNodeData[a].node, tempNodeData[b].node, tempNodeData[c].node, tempNodeData[d].node] });
          }
      }

      // --- 4. Create GRID LINES ---
      
      // Slab Radial lines
      for (let j = 0; j < divisionsPeriphery; j++) {
        const angle = (j / divisionsPeriphery) * 2 * Math.PI;
        const x_end = radius * Math.cos(angle);
        const z_end = radius * Math.sin(angle);
        gridVertices.push(0, 0.01, 0); // Start slightly above the surface
        gridVertices.push(x_end, 0.01, z_end); // End slightly above the surface
      }

      // Slab Concentric circles
      for (let i = 1; i <= divisionsRadius; i++) {
        const r = (i / divisionsRadius) * radius;
        for (let j = 0; j < divisionsPeriphery; j++) {
          const angle1 = (j / divisionsPeriphery) * 2 * Math.PI;
          const angle2 = ((j + 1) / divisionsPeriphery) * 2 * Math.PI;
          const x1 = r * Math.cos(angle1);
          const z1 = r * Math.sin(angle1);
          const x2 = r * Math.cos(angle2);
          const z2 = r * Math.sin(angle2);
          gridVertices.push(x1, 0.01, z1);
          gridVertices.push(x2, 0.01, z2);
        }
      }

      // Cylinder vertical lines
      for (let j = 0; j < cylinderDivsPeriphery; j++) {
          const angle = (j / cylinderDivsPeriphery) * 2 * Math.PI;
          const x_base = radius * Math.cos(angle);
          const z_base = radius * Math.sin(angle);
          gridVertices.push(x_base, 0, z_base);
          gridVertices.push(x_base, cylinderHeight, z_base);
      }

      // Cylinder horizontal rings
      for (let i = 1; i < cylinderDivsHeight; i++) {
          const h = (i / cylinderDivsHeight) * cylinderHeight;
          for (let j = 0; j < cylinderDivsPeriphery; j++) {
              const angle1 = (j / cylinderDivsPeriphery) * 2 * Math.PI;
              const angle2 = ((j + 1) / cylinderDivsPeriphery) * 2 * Math.PI;
              const x1 = radius * Math.cos(angle1);
              const z1 = radius * Math.sin(angle1);
              const x2 = radius * Math.cos(angle2);
              const z2 = radius * Math.sin(angle2);
              gridVertices.push(x1, h, z1);
              gridVertices.push(x2, h, z2);
          }
      }
      
      // Walkway radial lines
      for (let j = 0; j < divisionsPeriphery; j++) {
          const angle = (j / divisionsPeriphery) * 2 * Math.PI;
          const x1 = radius * Math.cos(angle);
          const z1 = radius * Math.sin(angle);
          const x2 = walkwayOuterRadius * Math.cos(angle);
          const z2 = walkwayOuterRadius * Math.sin(angle);
          gridVertices.push(x1, cylinderHeight, z1);
          gridVertices.push(x2, cylinderHeight, z2);
      }

      // Walkway concentric circles
      for (let i = 1; i <= walkwayDivsRadius; i++) {
          const r = radius + (i / walkwayDivsRadius) * walkwayWidth;
          for (let j = 0; j < divisionsPeriphery; j++) {
              const angle1 = (j / divisionsPeriphery) * 2 * Math.PI;
              const angle2 = ((j + 1) / divisionsPeriphery) * 2 * Math.PI;
              const x1 = r * Math.cos(angle1);
              const z1 = r * Math.sin(angle1);
              const x2 = r * Math.cos(angle2);
              const z2 = r * Math.sin(angle2);
              gridVertices.push(x1, cylinderHeight, z1);
              gridVertices.push(x2, cylinderHeight, z2);
          }
      }

      // --- 5. Finalize and add to scene ---
      const combinedGeometry = new THREE.BufferGeometry();
      combinedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(combinedVertices, 3));
      combinedGeometry.setIndex(combinedIndices);
      combinedGeometry.computeVertexNormals();
      
      const combinedMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff, // White for the surface
        metalness: 0.5,
        roughness: 0.5,
        side: THREE.DoubleSide
      });
      const combinedMesh = new THREE.Mesh(combinedGeometry, combinedMaterial);
      combinedMesh.name = 'combinedMesh';
      scene.add(combinedMesh);

      const gridGeometry = new THREE.BufferGeometry();
      gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(gridVertices, 3));
      const gridMaterial = new THREE.LineBasicMaterial({ color: gridColor });
      const gridMesh = new THREE.LineSegments(gridGeometry, gridMaterial);
      gridMesh.name = 'gridMesh';
      scene.add(gridMesh);

      setNodeCoordinates(tempNodeData);
      setPlateIncidences(tempPlateData);
    };

    createStructure();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onResize = () => {
      if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    };
    window.addEventListener('resize', onResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      const currentScene = sceneRef.current;
      if (currentScene) {
        currentScene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
      }
      renderer.dispose();
      controls.dispose();
    };
  }, [diameter, divisionsPeriphery, divisionsRadius, cylinderHeight, walkwayWidth, walkwayDivsRadius]);

  const generateDescription = async () => {
    setIsLoading(true);
    setError(null);
    setDescription(null);

    const prompt = `Generate a descriptive, creative title and a short paragraph about a 3D white cylindrical structure with a flat circular base and a walkway extending from the top. The entire structure is covered in a grid of numbered nodes and plates. Focus on a poetic or scientific description. Do not mention the input parameters in the output. The output should be just the title and the description, separated by a newline, no extra text.`;

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (generatedText) {
        setDescription(generatedText);
      } else {
        setError('Could not generate description. Please try again.');
      }

    } catch (err) {
      console.error(err);
      setError(`An error occurred: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = (label, value, setter, step) => (
    <div className="flex flex-row items-center justify-between w-full">
      <label className="text-gray-700 font-semibold flex-shrink-0">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setter(Math.max(1, Number(e.target.value)))}
        step={step}
        className="text-center px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow w-2/5"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans flex flex-col md:flex-row items-start gap-8">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://cdn.jsdelivr.net/npm/date-fns@2.30.0/dist/date-fns.min.js"></script>
      
      {/* Left Sidebar (Control Panel) */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">3D Structure Generator</h1>
          <p className="text-center text-gray-500 mb-6">Adjust the parameters below to generate a new 3D model.</p>
          <div className="flex flex-col gap-6">
              {renderInput("Slab Diameter", diameter, setDiameter, 0.1)}
              {renderInput("Slab Divisions (Periphery)", divisionsPeriphery, setDivisionsPeriphery, 1)}
              {renderInput("Slab Divisions (Radius)", divisionsRadius, setDivisionsRadius, 1)}
              {renderInput("Cylinder Height", cylinderHeight, setCylinderHeight, 0.1)}
              {renderInput("Cylinder Divisions (Height)", divisionsRadius, setDivisionsRadius, 1)}
              {renderInput("Walkway Width", walkwayWidth, setWalkwayWidth, 0.1)}
              {renderInput("Walkway Divisions (Radius)", walkwayDivsRadius, setWalkwayDivsRadius, 1)}
          </div>
         
        </div>

        {description && (
          <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
            <div className="whitespace-pre-line text-gray-600">{description}</div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4" role="alert">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}
      </div>

      {/* Right Content Panel (3D Model) */}
      <div className="w-full md:flex-1">
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-8 h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">3D Model View</h2>
          <div ref={canvasRef} style={containerStyle}></div>
        </div>
        
        {/* Export Preview */}
        <div className="bg-white rounded-2xl shadow p-3 mt-8">
          <div className="font-medium mb-2">Export Preview</div>
          <textarea
            className="w-full min-h-[720px] border rounded-xl p-2 text-xs font-mono"
            readOnly
            value={exportText}
          />
          <div className="flex justify-end mt-2">
            <button onClick={downloadTxt} className="border px-3 py-2 rounded-2xl shadow-sm hover:shadow bg-indigo-600 text-white">
              Download File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
