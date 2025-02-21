// import React from "react";

import Navbar from "./section/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;

// here is the old code
// // import "./App.css";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sparkles } from "@react-three/drei";
// import { useRef } from "react";

// const RotatingCylinder = () => {
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.001;
//       meshRef.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <cylinderGeometry args={[1, 1, 1, 32]} />
//       <meshLambertMaterial color="#468585" emissive="#468585" />
//       <Sparkles
//         count={10000}
//         size={1}
//         speed={0.006}
//         noise={0.2}
//         color={"orange"}
//       />
//     </mesh>
//   );
// };

// function App() {
//   return (
//     <>
//       <Canvas
//         style={{
//           height: "100vh",
//           width: "100vw",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#F0F0F0",
//         }}
//       >
//         <OrbitControls enableZoom enablePan enableRotate />

//         {/* Light source */}
//         <directionalLight
//           position={[1, 1, 1]}
//           intensity={2}
//           color={"#9cdba6"}
//         />

//         {/* Rotating Cylinder */}
//         <RotatingCylinder />
//       </Canvas>
//     </>
//   );
// }

// export default App;
