"use client";
import React, { Suspense } from "react";
import Globe from "./models/Globe";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

const Projects = () => {
    return (
        <section
            id='projects'
            className='h-screen  flex flex-col justify-center items-center pt-[70px]'>
            Projects
            <Canvas
                camera={{ fov: 70, near: 0.1, far: 1000, position: [-5, 5, 18] }}
                className='w-[50%] h-[40vh]  flex justify-center items-center'
                style={{
                    height: "40vh",
                    maxWidth: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                }}>
                <directionalLight position={[5, 5, 0]} intensity={3} />
                <ambientLight intensity={3} />

                <OrbitControls enableZoom={false} autoRotate={true} />
                <Suspense
                    fallback={
                        <Html>
                            <span className='w-full text-white text-2xl font-semibold'>
                                Loading Model please wait.
                            </span>
                        </Html>
                    }>
                    <Globe position={[0, 3, 0]} scale={6} />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Projects;
