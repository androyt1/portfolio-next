"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Object_7: THREE.Mesh;
        Object_9: THREE.Mesh;
        Object_11: THREE.Mesh;
        Object_13: THREE.Mesh;
        Object_15: THREE.Mesh;
        Object_17: THREE.Mesh;
        Object_19: THREE.Mesh;
        Object_21: THREE.Mesh;
        _rootJoint: THREE.Bone;
    };
    materials: {
        male_muscle_13290: THREE.MeshStandardMaterial;
        ["high-poly"]: THREE.MeshStandardMaterial;
        eyebrow002: THREE.MeshStandardMaterial;
        eyelashes01: THREE.MeshStandardMaterial;
        teeth_shape02: THREE.MeshStandardMaterial;
        tongue01: THREE.MeshStandardMaterial;
        male_casualsuit01: THREE.MeshStandardMaterial;
        shoes03: THREE.MeshStandardMaterial;
    };
    animations: any[];
};

type ContextType = Record<
    string,
    React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"] | JSX.IntrinsicElements["bone"]>
>;

const Man = (props: JSX.IntrinsicElements["group"]) => {
    const { nodes, materials } = useGLTF(
        "/models/generic_human_male_free_3d_model.glb"
    ) as GLTFResult;
    return (
        <group {...props}>
            <primitive object={nodes._rootJoint} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.male_muscle_13290} />
            <mesh geometry={nodes.Object_9.geometry} material={materials["high-poly"]} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.eyebrow002} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.eyelashes01} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.teeth_shape02} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.tongue01} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.male_casualsuit01} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.shoes03} />
        </group>
    );
};

export default Man;
