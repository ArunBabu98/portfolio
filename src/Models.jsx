import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  PresentationControls,
  ContactShadows,
  Sparkles,
} from '@react-three/drei'
import * as THREE from 'three'

/* Palette shared with the 3D layer — warm, artistic, Devs-gold + quantum teal. */
const C = {
  skin: '#e2b088',
  skinShadow: '#c98f66',
  hair: '#241c15',
  hoodie: '#2b2f36',
  hoodieDark: '#20242a',
  gold: '#c9922f',
  goldBright: '#e8bd57',
  teal: '#2f6d68',
  tealBright: '#59b3a8',
  glass: '#171a1f',
  paperGlow: '#f2e7cf',
}

/* ========================================================= *
 * AVATAR — a stylised, nerdy, tech-forward founder.
 * ========================================================= */
function Avatar() {
  const group = useRef()
  const head = useRef()
  const halo = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) group.current.position.y = -0.2 + Math.sin(t * 1.1) * 0.045
    if (head.current) {
      const tx = state.pointer.x * 0.6
      const ty = state.pointer.y * 0.35
      head.current.rotation.y += (tx - head.current.rotation.y) * 0.05
      head.current.rotation.x += (-ty - head.current.rotation.x) * 0.05
    }
    if (halo.current) halo.current.rotation.z = t * 0.3
  })

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* golden Devs-style halo behind the head */}
      <mesh ref={halo} position={[0, 0.15, -0.55]}>
        <torusGeometry args={[0.95, 0.02, 16, 80]} />
        <meshStandardMaterial
          color={C.gold}
          emissive={C.goldBright}
          emissiveIntensity={0.9}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>

      {/* torso / hoodie */}
      <mesh position={[0, -1.2, 0]} castShadow>
        <capsuleGeometry args={[0.62, 0.75, 10, 24]} />
        <meshStandardMaterial color={C.hoodie} roughness={0.85} />
      </mesh>
      {/* hood behind neck */}
      <mesh position={[0, -0.62, -0.28]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.3, 0.12, 12, 24]} />
        <meshStandardMaterial color={C.hoodieDark} roughness={0.9} />
      </mesh>
      {/* zipper */}
      <mesh position={[0, -1.15, 0.6]}>
        <boxGeometry args={[0.03, 0.8, 0.02]} />
        <meshStandardMaterial color={C.hoodieDark} roughness={0.7} />
      </mesh>
      {/* chest emblem — the TenshiLabs diamond, glowing gold */}
      <mesh position={[0, -0.95, 0.6]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.12, 0.12, 0.03]} />
        <meshStandardMaterial color={C.gold} emissive={C.goldBright} emissiveIntensity={0.7} />
      </mesh>
      {/* drawstrings */}
      <mesh position={[-0.13, -0.78, 0.58]}>
        <cylinderGeometry args={[0.015, 0.015, 0.28, 8]} />
        <meshStandardMaterial color={C.paperGlow} roughness={0.6} />
      </mesh>
      <mesh position={[0.13, -0.78, 0.58]}>
        <cylinderGeometry args={[0.015, 0.015, 0.28, 8]} />
        <meshStandardMaterial color={C.paperGlow} roughness={0.6} />
      </mesh>

      {/* arms */}
      <mesh position={[-0.66, -1.15, 0.05]} rotation={[0, 0, 0.35]} castShadow>
        <capsuleGeometry args={[0.17, 0.6, 8, 16]} />
        <meshStandardMaterial color={C.hoodie} roughness={0.85} />
      </mesh>
      <mesh position={[0.66, -1.15, 0.05]} rotation={[0, 0, -0.35]} castShadow>
        <capsuleGeometry args={[0.17, 0.6, 8, 16]} />
        <meshStandardMaterial color={C.hoodie} roughness={0.85} />
      </mesh>

      {/* neck */}
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.16, 0.19, 0.3, 20]} />
        <meshStandardMaterial color={C.skinShadow} roughness={0.6} />
      </mesh>

      {/* ---- HEAD ---- */}
      <group ref={head} position={[0, -0.08, 0]}>
        <mesh scale={[0.92, 1, 0.9]} castShadow>
          <sphereGeometry args={[0.5, 40, 40]} />
          <meshStandardMaterial color={C.skin} roughness={0.55} />
        </mesh>

        {/* ears */}
        <mesh position={[-0.46, -0.02, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={C.skinShadow} roughness={0.6} />
        </mesh>
        <mesh position={[0.46, -0.02, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={C.skinShadow} roughness={0.6} />
        </mesh>

        {/* hair — top cap with a slight sweep */}
        <mesh position={[0, 0.08, -0.02]} scale={[1.04, 1, 1.02]}>
          <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshStandardMaterial color={C.hair} roughness={0.9} />
        </mesh>
        {/* side-part fringe */}
        <mesh position={[0.16, 0.28, 0.4]} rotation={[0.3, 0, 0.4]} scale={[1, 0.5, 0.6]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={C.hair} roughness={0.9} />
        </mesh>

        {/* eyebrows */}
        <mesh position={[-0.19, 0.12, 0.44]}>
          <boxGeometry args={[0.16, 0.03, 0.03]} />
          <meshStandardMaterial color={C.hair} roughness={0.9} />
        </mesh>
        <mesh position={[0.19, 0.12, 0.44]}>
          <boxGeometry args={[0.16, 0.03, 0.03]} />
          <meshStandardMaterial color={C.hair} roughness={0.9} />
        </mesh>

        {/* eyes */}
        <mesh position={[-0.19, 0.02, 0.45]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color={C.glass} roughness={0.3} />
        </mesh>
        <mesh position={[0.19, 0.02, 0.45]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color={C.glass} roughness={0.3} />
        </mesh>

        {/* nose */}
        <mesh position={[0, -0.06, 0.5]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.06, 0.14, 12]} />
          <meshStandardMaterial color={C.skinShadow} roughness={0.6} />
        </mesh>

        {/* ---- GLASSES (the nerdy signature) ---- */}
        <group position={[0, 0.03, 0.46]}>
          <mesh position={[-0.19, 0, 0]}>
            <torusGeometry args={[0.15, 0.022, 12, 32]} />
            <meshStandardMaterial color={C.glass} roughness={0.35} metalness={0.4} />
          </mesh>
          <mesh position={[0.19, 0, 0]}>
            <torusGeometry args={[0.15, 0.022, 12, 32]} />
            <meshStandardMaterial color={C.glass} roughness={0.35} metalness={0.4} />
          </mesh>
          {/* lenses — faint teal quantum tint */}
          <mesh position={[-0.19, 0, -0.01]}>
            <circleGeometry args={[0.14, 32]} />
            <meshStandardMaterial color={C.tealBright} transparent opacity={0.22} roughness={0.1} />
          </mesh>
          <mesh position={[0.19, 0, -0.01]}>
            <circleGeometry args={[0.14, 32]} />
            <meshStandardMaterial color={C.tealBright} transparent opacity={0.22} roughness={0.1} />
          </mesh>
          {/* bridge */}
          <mesh position={[0, 0.01, 0]}>
            <boxGeometry args={[0.09, 0.02, 0.02]} />
            <meshStandardMaterial color={C.glass} metalness={0.4} />
          </mesh>
          {/* temples */}
          <mesh position={[-0.34, 0, -0.14]} rotation={[0, 0.5, 0]}>
            <boxGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial color={C.glass} metalness={0.4} />
          </mesh>
          <mesh position={[0.34, 0, -0.14]} rotation={[0, -0.5, 0]}>
            <boxGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial color={C.glass} metalness={0.4} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

export function HeroScene() {
  return (
    <Canvas
      className="r3f"
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 5, 4]} intensity={2.2} color="#ffdf9e" castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-4, 1, 2]} intensity={1.1} color={C.teal} />
        <pointLight position={[0, 3, -3]} intensity={0.8} color={C.goldBright} />

        <PresentationControls
          global
          polar={[-0.15, 0.25]}
          azimuth={[-0.6, 0.6]}
          config={{ mass: 1, tension: 150 }}
          snap={{ mass: 1, tension: 180 }}
        >
          <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.5}>
            <Avatar />
          </Float>
        </PresentationControls>

        <Sparkles count={40} scale={[6, 6, 4]} size={2.5} speed={0.3} color={C.goldBright} opacity={0.55} />
        <ContactShadows position={[0, -1.85, 0]} opacity={0.35} scale={7} blur={2.6} far={3} color="#4a3a1e" />
      </Suspense>
    </Canvas>
  )
}

/* ========================================================= *
 * DOMAIN OBJECTS — purposeful, not decorative.
 * ========================================================= */

/* AI bot / agent */
function Bot() {
  const g = useRef()
  const eyeL = useRef()
  const eyeR = useRef()
  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (g.current) g.current.rotation.y = Math.sin(t * 0.5) * 0.5
    const blink = Math.sin(t * 2.4) > 0.96 ? 0.1 : 1
    if (eyeL.current) eyeL.current.scale.y = blink
    if (eyeR.current) eyeR.current.scale.y = blink
  })
  return (
    <group ref={g} position={[0, -0.1, 0]}>
      {/* antenna */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
        <meshStandardMaterial color="#8a949e" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={C.gold} emissive={C.goldBright} emissiveIntensity={1} />
      </mesh>
      {/* head */}
      <mesh scale={[1.1, 0.9, 0.9]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#cdd3d8" metalness={0.5} roughness={0.35} />
      </mesh>
      {/* face plate */}
      <mesh position={[0, 0, 0.46]}>
        <boxGeometry args={[0.85, 0.62, 0.06]} />
        <meshStandardMaterial color="#14181c" roughness={0.3} />
      </mesh>
      {/* eyes */}
      <mesh ref={eyeL} position={[-0.2, 0.05, 0.5]}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshStandardMaterial color={C.tealBright} emissive={C.tealBright} emissiveIntensity={1.4} />
      </mesh>
      <mesh ref={eyeR} position={[0.2, 0.05, 0.5]}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshStandardMaterial color={C.tealBright} emissive={C.tealBright} emissiveIntensity={1.4} />
      </mesh>
      {/* smile bar */}
      <mesh position={[0, -0.2, 0.5]}>
        <boxGeometry args={[0.3, 0.04, 0.04]} />
        <meshStandardMaterial color={C.gold} emissive={C.goldBright} emissiveIntensity={0.8} />
      </mesh>
      {/* ears */}
      <mesh position={[-0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
        <meshStandardMaterial color="#9aa2aa" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
        <meshStandardMaterial color="#9aa2aa" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  )
}

/* Mobile phone */
function Phone() {
  const g = useRef()
  useFrame((s) => {
    if (g.current) {
      g.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.6) * 0.6
      g.current.rotation.z = Math.cos(s.clock.elapsedTime * 0.4) * 0.08
    }
  })
  const apps = []
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      apps.push([(-0.24 + c * 0.24), (0.42 - r * 0.24)])
  return (
    <group ref={g} rotation={[0.1, -0.3, 0]}>
      {/* body */}
      <mesh>
        <boxGeometry args={[0.95, 1.9, 0.1]} />
        <meshStandardMaterial color="#20242a" metalness={0.5} roughness={0.35} />
      </mesh>
      {/* screen */}
      <mesh position={[0, 0, 0.055]}>
        <planeGeometry args={[0.82, 1.72]} />
        <meshStandardMaterial color="#0e2b2a" emissive={C.teal} emissiveIntensity={0.35} roughness={0.2} />
      </mesh>
      {/* app grid */}
      {apps.map((p, i) => (
        <mesh key={i} position={[p[0], p[1], 0.065]}>
          <boxGeometry args={[0.15, 0.15, 0.01]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? C.gold : C.tealBright}
            emissive={i % 3 === 0 ? C.goldBright : C.tealBright}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}
      {/* notch */}
      <mesh position={[0, 0.78, 0.066]}>
        <boxGeometry args={[0.22, 0.05, 0.01]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* home bar */}
      <mesh position={[0, -0.78, 0.066]}>
        <boxGeometry args={[0.28, 0.03, 0.01]} />
        <meshStandardMaterial color={C.paperGlow} />
      </mesh>
    </group>
  )
}

/* Abstract blockchain — linked blocks */
function Bond({ a, b }) {
  const { pos, quat, len } = useMemo(() => {
    const start = new THREE.Vector3(...a)
    const end = new THREE.Vector3(...b)
    const mid = start.clone().add(end).multiplyScalar(0.5)
    const dir = end.clone().sub(start)
    const length = dir.length()
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    )
    return { pos: mid.toArray(), quat: q, len: length }
  }, [a, b])
  return (
    <mesh position={pos} quaternion={quat}>
      <cylinderGeometry args={[0.03, 0.03, len, 8]} />
      <meshStandardMaterial color={C.gold} emissive={C.goldBright} emissiveIntensity={0.5} />
    </mesh>
  )
}
function Blockchain() {
  const g = useRef()
  useFrame((s, dt) => {
    if (g.current) {
      g.current.rotation.y += dt * 0.4
      g.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.2
    }
  })
  const nodes = [
    [-1.5, 0.85, 0],
    [-0.5, 0.28, 0.2],
    [0.5, -0.28, -0.2],
    [1.5, -0.85, 0],
  ]
  return (
    <group ref={g}>
      {nodes.slice(0, -1).map((n, i) => (
        <Bond key={i} a={n} b={nodes[i + 1]} />
      ))}
      {nodes.map((n, i) => (
        <group key={i} position={n}>
          <mesh>
            <boxGeometry args={[0.62, 0.62, 0.62]} />
            <meshStandardMaterial color={C.teal} wireframe />
          </mesh>
          <mesh rotation={[0.4, 0.4, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color={C.gold} emissive={C.goldBright} emissiveIntensity={0.7} roughness={0.3} metalness={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/* Quantum atom */
function Orbit({ index }) {
  const e = useRef()
  const tilts = [
    [0, 0, 0],
    [Math.PI / 2.3, 0, Math.PI / 3],
    [Math.PI / 2, Math.PI / 3, 0],
  ]
  useFrame((s, dt) => {
    if (e.current) e.current.rotation.z += dt * (1 + index * 0.5)
  })
  const R = 1.15
  return (
    <group rotation={tilts[index]}>
      <mesh>
        <torusGeometry args={[R, 0.012, 12, 80]} />
        <meshStandardMaterial color={C.teal} emissive={C.teal} emissiveIntensity={0.5} />
      </mesh>
      <group ref={e}>
        <mesh position={[R, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color={C.tealBright} emissive={C.tealBright} emissiveIntensity={1.4} />
        </mesh>
      </group>
    </group>
  )
}
function Quantum() {
  const g = useRef()
  useFrame((s, dt) => {
    if (g.current) g.current.rotation.y += dt * 0.25
  })
  return (
    <group ref={g}>
      <mesh>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial color={C.gold} emissive={C.goldBright} emissiveIntensity={0.9} roughness={0.3} metalness={0.5} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <Orbit key={i} index={i} />
      ))}
    </group>
  )
}

const OBJECTS = { bot: Bot, phone: Phone, chain: Blockchain, quantum: Quantum }

export function DomainCanvas({ kind }) {
  const Obj = OBJECTS[kind] || Bot
  return (
    <Canvas
      className="r3f domain-canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} color="#ffe6ad" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color={C.teal} />
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.9}>
          <Obj />
        </Float>
      </Suspense>
    </Canvas>
  )
}
