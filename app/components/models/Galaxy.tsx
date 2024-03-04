import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh;
    };
    materials: {
        material: THREE.MeshStandardMaterial;
    };
    animations: any[];
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>>;

const Galaxy = (props: JSX.IntrinsicElements["group"]) => {
    const { nodes, materials } = useGLTF("/models/galaxy.glb") as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={308.781}>
                <mesh
                    geometry={nodes.Object_4.geometry}
                    material={materials.material}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    );
};

export default Galaxy;
