import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useTexture } from "@react-three/drei";

function LogoImage() {
  const texture = useTexture("/logo.png");

  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial
        map={texture}
        transparent
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function LogoScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 4, 4]} intensity={1.3} />

      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.6}>
        <LogoImage />
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
