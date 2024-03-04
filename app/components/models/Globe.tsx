import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Object_2: THREE.Mesh;
        Object_3: THREE.Mesh;
        Object_4: THREE.Mesh;
    };
    materials: {
        ["Material.002"]: THREE.MeshStandardMaterial;
        ["Material.003"]: THREE.MeshStandardMaterial;
        ["Material.005"]: THREE.MeshStandardMaterial;
    };
    animations: any[];
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>>;

const Globe = (props: JSX.IntrinsicElements["group"]) => {
    const { nodes, materials } = useGLTF("/models/globe.glb") as GLTFResult;
    return (
        <group {...props}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object_2.geometry} material={materials["Material.002"]} />
                <mesh geometry={nodes.Object_3.geometry} material={materials["Material.003"]} />
                <mesh geometry={nodes.Object_4.geometry} material={materials["Material.005"]} />
            </group>
        </group>
    );
};

export default Globe;
