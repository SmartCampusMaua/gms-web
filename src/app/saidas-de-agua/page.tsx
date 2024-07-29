"use client";

import { useEffect } from 'react';
import DashboardLayout from "@/app/components/DashboardLayout";

const Page = () => {
    useEffect(() => {
        let animation: NodeJS.Timeout;
        let width = 0;
        let height = 0;

        function frame() {
            if (height === 150 && width === 15) {
                clearInterval(animation);
                return;
            }
            width += 0.375;
            if (height < 150) {
                height += 7.5;
            }
            const polygon = document.getElementById('animated-polygon');
            if (polygon) {
                polygon.setAttribute('points', `50,0 60,0 ${70 + width},${height} ${40 - width},${height}`);
            }
        }

        setTimeout(() => {
            animation = setInterval(frame, 10);
        }, 600);

        return () => {
            clearInterval(animation);
        };
    }, []);

    return (
        <DashboardLayout>
            <div>
                <div className="sticky top-0 z-40 w-full bg-neutral-50/30 p-8 backdrop-blur-sm dark:bg-[#121212]/30">
                    <div
                        className="flex w-fit min-w-52 items-center space-x-14 rounded-full bg-white px-7 py-2 dark:bg-neutral-900"
                        style={{ boxShadow: '8px 8px 25px rgba(0,0,0,.2)' }}
                    >
                        <div>
                            <div className="flex items-center space-x-1">
                                <p className="text-[0.8rem] font-medium tracking-wide text-neutral-900 dark:text-neutral-100">
                                    Nível de Risco
                                </p>
                                <div className="group relative">
                                    <p className="cursor-default leading-none text-neutral-900 dark:text-neutral-100">🛈</p>
                                    <div
                                        className="animate-fade-in absolute left-4 top-4 z-40 hidden w-max border border-neutral-300 bg-white px-2 py-1 group-hover:block dark:border-neutral-700 dark:bg-neutral-800"
                                    >
                                        <p className="text-nowrap text-sm text-neutral-900 dark:text-neutral-100">
                                            Defina o nível de risco de vazão de água.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1 flex space-x-1">
                                <input
                                    className="w-[5.5rem] rounded-full bg-transparent px-2.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
                                    type="text"
                                    readOnly
                                    value="300"
                                />
                                <p className="w-[1rem] text-nowrap font-medium text-neutral-900 dark:text-neutral-100">
                                    ml/min
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="3xl:grid-cols-6 grid grid-cols-3 justify-items-center gap-y-10 xl:grid-cols-4 2xl:grid-cols-5"
                >
                    <div
                        className="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
                        style={{ boxShadow: '8px 8px 25px rgba(0,0,0,.2)' }}
                    >
                        <div className="relative">
                            <div className="absolute left-[4.45rem] top-12 z-10">
                                <div
                                    className="animate-current relative w-[0.7rem] bg-cyan-300 dark:bg-cyan-400"
                                    style={{ animationFillMode: 'forwards' }}
                                >
                                    <div
                                        className="animate-current-particle-1 absolute left-0.5 top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
                                    ></div>
                                    <div
                                        className="animate-current-particle-2 absolute right-0.5 top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
                                    ></div>
                                    <div
                                        className="animate-current-particle-3 absolute right-1 top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
                                    ></div>
                                </div>
                            </div>
                            <svg
                                className="relative z-20 ml-6 mt-4 text-neutral-900 dark:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
                                />
                            </svg>
                        </div>
                        <div
                            className="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
                        ></div>
                        <div className="absolute bottom-2 right-3 z-30 text-right text-cyan-950 dark:text-cyan-100">
                            <h1 className="text-3xl font-semibold">
                                100<span className="text-base font-medium text-cyan-950/70 dark:text-cyan-300">ml/min</span>
                            </h1>
                            <p className="text-sm font-medium">Saída de água 1</p>
                        </div>
                    </div>
                    <div
                        className="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
                        style={{ boxShadow: '8px 8px 25px rgba(0,0,0,.2)' }}
                    >
                        <div className="relative">
                            <div className="absolute left-[1.35rem] top-12">
                                <svg>
                                    <polygon
                                        id="animated-polygon"
                                        className="fill-red-300 dark:fill-red-400"
                                        points="50,0 60,0 70,0 40,0"
                                    />
                                </svg>
                            </div>
                            <div className="absolute left-[4.75rem] top-12 bg-amber-500">
                                <div className="relative bg-amber-500">
                                    <div
                                        className="animate-waterfall-particle-1 absolute right-1 top-1 h-5 w-0.5 rounded-full bg-white opacity-0 rotate-[11deg]"
                                    ></div>
                                    <div
                                        className="animate-waterfall-particle-2 absolute right-0.5 top-1 h-5 w-0.5 rounded-full bg-white opacity-0 rotate-[5deg]"
                                    ></div>
                                    <div
                                        className="animate-waterfall-particle-3 absolute top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
                                    ></div>
                                    <div
                                        className="animate-waterfall-particle-4 absolute left-0.5 top-1 h-5 w-0.5 rounded-full bg-white opacity-0 rotate-[-5deg]"
                                    ></div>
                                    <div
                                        className="animate-waterfall-particle-5 absolute left-1 top-1 h-5 w-0.5 rounded-full bg-white opacity-0 rotate-[-11deg]"
                                    ></div>
                                </div>
                            </div>
                            <svg
                                className="relative z-20 ml-6 mt-4 text-neutral-900 dark:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
                                />
                            </svg>
                        </div>
                        <div
                            className="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
                        ></div>
                        <div className="absolute bottom-2 right-3 z-30 text-right text-amber-950 dark:text-amber-100">
                            <h1 className="text-3xl font-semibold">
                                300<span className="text-base font-medium text-amber-950/70 dark:text-amber-300">ml/min</span>
                            </h1>
                            <p className="text-sm font-medium">Saída de água 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Page;
