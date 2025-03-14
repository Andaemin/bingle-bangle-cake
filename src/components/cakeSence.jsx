import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cake = () => {
  const cakeRef = useRef();
  const { scene } = useGLTF("/cake.glb");

  useFrame(() => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      {/* 3D 케이크 */}
      <primitive object={scene} ref={cakeRef} scale={1.5} />  
      {/* Happy Birthday 텍스트 추가 */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.32}
        fontWeight={300}
        color="black"
        anchorX="center" 
        anchorY="middle"
      >
        Happy Birthday for me!
      </Text>
      <Text
        position={[0, 1.13, 0]}
        fontWeight={100}
        fontSize={0.25}
        color="black" 
        anchorX="center" 
        anchorY="middle"
      >2.16 / Daemin's 26th birthday!!
      </Text>
    </>
  );
};

export default function CakeScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Cake />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

