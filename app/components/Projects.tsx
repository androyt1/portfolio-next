"use client";
import React, { Suspense } from "react";
import Man from "./models/Man";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

const Projects = () => {
    return (
        <section id='projects' className='h-screen pt-[70px] '>
            Projects
            <Canvas
                camera={{ fov: 70, near: 0.1, far: 1000, position: [-5, 5, 18] }}
                className='w-[50%] h-[50vh] bg-[#1E293B] flex justify-center items-center border-4 border-white'>
                <directionalLight position={[5, 5, 0]} intensity={5} />
                <ambientLight intensity={5} />
                <spotLight intensity={4} />
                <OrbitControls enableZoom={false} autoRotate={true} />
                <Suspense
                    fallback={
                        <Html>
                            <span className='w-full text-white text-2xl font-semibold'>
                                Loading Model please wait
                            </span>
                        </Html>
                    }>
                    <Man position={[0, -10, 0]} />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Projects;
