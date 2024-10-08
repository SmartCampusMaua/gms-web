"use client";

import classNames from 'classnames';
import Head from 'next/head';
import DashboardLayout from "@/app/components/DashboardLayout";

const Poco = () => {
    let dangerValue: any;
    let artesianWellData: any;

    artesianWellData = {
        'ArtesianWell_1': {
            data_pressure_0 : 300,
            data_pressure_1 : 600,
        }
    }
    dangerValue = 300;


    return (
        <DashboardLayout>
            <div>
                <Head>Poço | EcoVision GMS</Head>
                <div className="sticky top-0 z-40 w-full bg-neutral-50/30 p-8 backdrop-blur-sm dark:bg-[#121212]/30">
                    <div
                        className="flex w-fit min-w-52 items-center space-x-14 rounded-full bg-white px-7 py-2 dark:bg-neutral-900"
                        style={{boxShadow: '8px 8px 25px rgba(0,0,0,.2)'}}
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
                                            Defina o nível de risco da pressão do poço.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1 flex space-x-1">
                                <input
                                    className="w-[5.5rem] rounded-full bg-transparent px-2.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
                                    type="text"
                                />
                                <p className="w-[1rem] text-nowrap font-medium text-neutral-900 dark:text-neutral-100">N/m²</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-cols grid justify-items-center gap-y-10">
                    <div className="flex w-full items-end">
                        <div className="mb-4 grow">
                            <div
                                className={`pl-8 text-left text-cyan-950 ${
                                    artesianWellData['ArtesianWell_1'].data_pressure_0 > dangerValue ? "text-red" : "text-cyan"
                                }`}
                            >
                                <h1 className="text-3xl font-semibold">
                                    {artesianWellData['ArtesianWell_1'].data_pressure_0}<span
                                    className="text-base font-medium"
                                >N/m²</span
                                >
                                </h1>
                                <p className="text-sm font-medium">Pressão de entrada</p>
                            </div>
                            <div className="flex items-center">
                                <div
                                    className={classNames(
                                        "h-14 w-full border-y-4 border-cyan-200",
                                        {
                                            "bg-cyan": artesianWellData['ArtesianWell_1'].data_pressure_0 <= dangerValue,
                                            "bg-red": artesianWellData['ArtesianWell_1'].data_pressure_0 > dangerValue,
                                            "pipe-red": artesianWellData['ArtesianWell_1'].data_pressure_0 > dangerValue,
                                            "pipe-cyan": artesianWellData['ArtesianWell_1'].data_pressure_0 <= dangerValue,
                                        }
                                    )}
                                >
                                    {(artesianWellData['ArtesianWell_1'].data_pressure_0 <= dangerValue) ?
                                        <div>
                                            <div
                                                className="animate-current-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-current-particle-2 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-current-particle-3 relative left-0 top-9 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                        </div>
                                        :
                                        <div>
                                            <div
                                                className="animate-waterfall-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-waterfall-particle-2 relative left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-waterfall-particle-3 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-waterfall-particle-4 relative left-0 top-7 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                        </div>
                                    }
                                </div>
                                <div className="relative z-20 h-20 w-3 rounded-l-3xl bg-cyan-200"></div>
                            </div>
                        </div>
                        <div
                            className="relative flex h-52 w-96 items-end overflow-hidden rounded-xl dark:bg-neutral-900"
                            style={{boxShadow: '8px 8px 25px rgba(0,0,0,.2)'}}
                        >
                            <div className="w-full">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="water min-w-max" height="20">
                                        <g>
                                            <path
                                                className="fill-cyan-300 dark:fill-cyan-400"
                                                d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
                                            />
                                        </g>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="water absolute bottom-0 left-[18rem]"
                                        height="20"
                                    >
                                        <g>
                                            <path
                                                className="fill-cyan-300 dark:fill-cyan-400"
                                                d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
                                            />
                                        </g>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="water absolute bottom-0 left-[36rem]"
                                        height="20"
                                    >
                                        <g>
                                            <path
                                                className="fill-cyan-300 dark:fill-cyan-400"
                                                d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="h-36 w-full bg-cyan-300 dark:bg-cyan-400"></div>
                            </div>
                            <div
                                className="absolute flex size-full items-center justify-center bg-white/50 backdrop-blur-[3px] dark:bg-black/50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 264 264">
                                    {/* the droplet mask for the bar */}
                                    <clipPath id="mask_shape">
                                        <path
                                            d="M132.281 264.564c51.24 0 92.931-41.681 92.931-92.918 0-50.18-87.094-164.069-90.803-168.891L132.281 0l-2.128 2.773c-3.704 4.813-90.802 118.71-90.802 168.882.001 51.228 41.691 92.909 92.93 92.909z"
                                            fill="#000000"
                                        />
                                    </clipPath>

                                    {/* droplet shape that can be colored */}
                                    <path
                                        className="fill-white dark:fill-neutral-900"
                                        d="M132.281 264.564c51.24 0 92.931-41.681 92.931-92.918 0-50.18-87.094-164.069-90.803-168.891L132.281 0l-2.128 2.773c-3.704 4.813-90.802 118.71-90.802 168.882.001 51.228 41.691 92.909 92.93 92.909z"
                                    />

                                    <g clip-path="url(#mask_shape)">
                                        {/* bar that should be the same color as the ripple */}
                                        <rect
                                            width="200"
                                            height="250"
                                            className="fill-cyan-300 translate-x-10 translate-y-11 dark:fill-cyan-400"
                                        />

                                        {/* position the ripple at the top of the bar */}
                                        <g className="-translate-x-[19rem] scale-[2.2]">
                                            <path
                                                className="water-droplet fill-cyan-300 dark:fill-cyan-400"
                                                d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="mb-4 grow">
                            <div
                                className={classNames(
                                    "pr-8 text-right text-cyan-950",
                                    {
                                        "text-red": artesianWellData['ArtesianWell_1'].data_pressure_1 > dangerValue,
                                        "text-cyan": artesianWellData['ArtesianWell_1'].data_pressure_1 <= dangerValue,
                                    }
                                )}
                            >
                                <h1 className="text-3xl font-semibold">
                                    {artesianWellData['ArtesianWell_1'].data_pressure_1}<span
                                    className="text-base font-medium"
                                >N/m²</span
                                >
                                </h1>
                                <p className="text-sm font-medium">Pressão de saída</p>
                            </div>
                            <div className="flex items-center">
                                <div className="relative z-20 h-20 w-3 rounded-r-3xl bg-cyan-200"></div>
                                <div
                                    className={classNames(
                                        "h-14 w-full overflow-x-hidden border-y-4",
                                        {
                                            "bg-cyan": artesianWellData['ArtesianWell_1'].data_pressure_1 <= dangerValue,
                                            "bg-red": artesianWellData['ArtesianWell_1'].data_pressure_1 > dangerValue,
                                            "pipe-red": artesianWellData['ArtesianWell_1'].data_pressure_1 > dangerValue,
                                            "pipe-cyan": artesianWellData['ArtesianWell_1'].data_pressure_1 <= dangerValue,
                                        }
                                    )}
                                >
                                    {(artesianWellData['ArtesianWell_1'].data_pressure_1 <= dangerValue) ?
                                        <div>
                                            <div
                                                className="animate-current-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-current-particle-2 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-current-particle-3 relative left-0 top-9 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                        </div>
                                        :
                                        <div>
                                            <div
                                                className="animate-waterfall-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-waterfall-particle-2 relative left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-waterfall-particle-3 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                            <div
                                                className="animate-waterfall-particle-4 relative left-0 top-7 h-[2px] w-5 rounded-full bg-white opacity-0"
                                            ></div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="animate-fade-in relative col-span-1 ml-4 hidden h-48 w-96 rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
                        style={{boxShadow: '8px 8px 25px rgba(0,0,0,.2)'}}
                    >
                        <div className="relative">
                            <svg
                                className="relative ml-6 mt-4 text-neutral-900 dark:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
                                />
                            </svg
                            >
                        </div>
                        <div className="absolute bottom-2 right-3 z-30 text-right text-cyan-950 dark:text-white">
                            <h1 className="text-4xl font-semibold">
                                50<span className="text-xl font-medium text-cyan-950/70 dark:text-slate-100">min</span>
                            </h1>
                            <div className="flex items-center space-x-1">
                                <p className="text-[0.9rem] font-medium tracking-wide text-neutral-900 dark:text-neutral-100">
                                    Horário de funcionamento
                                </p>
                                <div className="group relative">
                                    <p className="cursor-default leading-none text-neutral-900 dark:text-neutral-100">🛈</p>
                                    <div
                                        className="animate-fade-in absolute right-2 top-4 hidden w-max border border-neutral-300 bg-white px-2 py-1 group-hover:block dark:border-neutral-700 dark:bg-neutral-800"
                                    >
                                        <p className="text-nowrap text-sm text-neutral-900 dark:text-neutral-100">
                                            Hora relativa à bomba de água do poço.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h1 className="text-center text-2xl text-neutral-900 dark:text-neutral-100">
                            Horas de funcionamento...
                        </h1>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Poco;