import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Man = (props) => {
    const { nodes, materials } = useGLTF("/models/generic_human_male_free_3d_model.glb");
    return (
        <group {...props} dispose={null}>
            <primitive object={nodes._rootJoint} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.male_muscle_13290}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials["high-poly"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials.eyebrow002}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials.eyelashes01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_15.geometry}
                material={materials.teeth_shape02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.tongue01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials.male_casualsuit01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials.shoes03}
            />
        </group>
    );
};

export default Man;
