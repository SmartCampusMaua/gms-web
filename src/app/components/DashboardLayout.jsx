"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'

const Layout = ({children}) => {
    const pathname = usePathname();
    const [darkMode, setDarkMode] = useState(false); // Example state for dark mode
    const [displayName, setDisplayName] = useState("Carregando..."); // Estado para o nome de exibição

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Implement your dark mode logic here
    };

    const router = useRouter();

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const logoutUrl = `${apiBaseUrl}/auth/logout`;

    const handleMicrosoftLogout = async () => {
        router.push(logoutUrl)
    };

    useEffect(() => {
        const fetchDisplayName = async () => {
          try {
            const response = await fetch(`${apiBaseUrl}/auth/displayname`);
            if (!response.ok) {
              throw new Error('Erro ao obter o nome de exibição');
            }
            const data = await response.json();
            setDisplayName(data.displayName || "Nome não disponível"); // Atualiza o estado com o nome de exibição
          } catch (error) {
            console.error(error);
            setDisplayName("Erro ao carregar nome"); // Define um estado de erro se a chamada falhar
          }
        };
    
        fetchDisplayName(); // Chama a função para buscar o nome de exibição
    }, [apiBaseUrl]); // O efeito depende da URL da API

    return (
        <>
            <Head>
                {/* Define meta tags, title, etc. */}
                <title>EcoVision</title>
                <meta name="description" content="Your description here"/>
                {/* Add more meta tags as needed */}
            </Head>
            <nav
                className={`fixed top-0 z-50 w-full border-b border-neutral-300 bg-white ${darkMode ? 'dark:border-neutral-700 dark:bg-neutral-900' : 'dark:bg-neutral-700'}`}>
                <div className="mx-auto flex h-14 max-w-7xl 2xl:max-w-[120rem] items-center justify-between px-6">
                    <div className="flex space-x-8 items-center">
                        <div className="flex items-center space-x-2">
                            <div>
                                <img className="h-8 dark:hidden" src="/images/logo.svg" alt="EcoVision"/>
                                <img className="hidden h-8 dark:block" src="/images/logo_negative.svg" alt="EcoVision"/>
                            </div>
                            <p className="font-outfit text-2xl font-medium text-primary">
                                Eco<span className="text-tertiary dark:text-white">Vision</span>
                                {true && (
                                    <span
                                        className="ml-1.5 font-outfit text-xl font-normal text-tertiary dark:text-white">
                                        | admin
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                className="cursor-default rounded-full p-1 transition duration-150 ease-in dark:hover:cursor-pointer dark:hover:bg-neutral-800"
                                onClick={toggleDarkMode}
                            >
                                <svg
                                    className="text-neutral-900 dark:text-neutral-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12q0-.425.288-.712T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7q-.275.3-.687.288T5.65 7.05M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="font-medium text-neutral-900 dark:text-neutral-100">{displayName}</p>
                        <button
                            className="rounded-full bg-neutral-200 p-1.5 transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                            onClick={handleMicrosoftLogout}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
                                />
                                <path
                                    fill="currentColor"
                                    d="m20.65 11.65l-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className="mx-auto flex h-screen max-w-7xl divide-x divide-neutral-300 2xl:max-w-[120rem] dark:divide-neutral-700">
                <nav className="fixed top-14 w-60 overflow-y-auto px-5 py-8" style={{height: 'calc(100vh - 56px)'}}>
                    <div className="flex h-full flex-col justify-between space-y-16">
                        <div className="space-y-4">
                            <p className="pl-3 font-medium dark:text-white">Água</p>
                            <div className="mt-4 flex flex-col space-y-3">
                                <a
                                    className={`flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition ${pathname.match(/reservatorios/g) ? 'water-button-pressed' : 'water-button-unpressed'}`}
                                    href="/reservatorios"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M21.98 14H22zM5.35 13c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c.93 0 1.05.45 2.01.79c.63.22 1.3-.24 1.3-.91c0-.52-.23-.83-.64-.97c-.6-.22-1.15-.9-2.69-.9c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.54 0-2.13.71-2.68.91c-.41.13-.65.43-.65.97c0 .67.66 1.13 1.29.91c1.06-.36 1.1-.8 2.06-.8m13.32 2c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.1 1-3.34 1c-1.24 0-1.38-1-3.33-1c-1.53 0-2.15.71-2.69.91c-.41.14-.65.45-.65.98c0 .67.66 1.13 1.3.91c1.02-.36 1.08-.8 2.04-.8c1.24 0 1.38 1 3.33 1c1.95 0 2.1-1 3.34-1c1.19 0 1.42 1 3.33 1c1.94 0 2.09-1 3.33-1c.94 0 1.06.46 2.03.8c.63.22 1.3-.24 1.3-.91c0-.53-.24-.83-.65-.98c-.53-.19-1.14-.91-2.68-.91M5.35 9c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c.93 0 1.05.45 2.01.79c.63.22 1.3-.24 1.3-.91c0-.52-.23-.83-.64-.97c-.6-.23-1.15-.91-2.69-.91c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.54 0-2.13.71-2.68.91c-.41.14-.65.44-.65.98c0 .67.66 1.13 1.29.91c1.06-.36 1.1-.8 2.06-.8"
                                        />
                                    </svg
                                    >
                                    <span>RESERVATÓRIOS</span>
                                    <svg
                                        className="animate-pulse"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M2.725 21q-.275 0-.5-.137t-.35-.363q-.125-.225-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11v3q0 .425.288.713T12 15"
                                        />
                                    </svg
                                    >
                                </a
                                >
                                <a
                                    className={`flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition ${pathname.match(/saidas-de-agua/g) ? 'water-button-pressed' : 'water-button-unpressed'}`}
                                    href="/saidas-de-agua"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
                                        />
                                    </svg
                                    >
                                    <span>SAÍDAS DE ÁGUA</span></a
                                >
                                <a
                                    className={`flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition ${pathname.match(/poco/g) ? 'water-button-pressed' : 'water-button-unpressed'}`}
                                    href="/poco"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 15q.825 0 1.413-.587T14 13q0-.575-.238-1.137t-.912-1.613l-.425-.625Q12.275 9.4 12 9.4t-.425.225l-.425.625q-.675 1.05-.913 1.613T10 13q0 .825.588 1.413T12 15m0 3.25q-2.6 0-4.425-1.825T5.75 12t1.825-4.425T12 5.75t4.425 1.825T18.25 12t-1.825 4.425T12 18.25M21 11h-1.325q-.25-1.95-1.4-3.55T15.325 5H21q0-.425.288-.713T22 4t.713.288T23 5v6q0 .425-.288.713T22 12q-.4 0-.562-.363T21 11M1 19v-6q0-.425.288-.712T2 12t.713.288T3 13h1.325q.25 1.95 1.4 3.55T8.675 19H3q0 .425-.288.713T2 20t-.712-.288T1 19"
                                        />
                                    </svg
                                    >
                                    <span>POÇO</span></a
                                >
                            </div>
                            <p className="pl-3 font-medium dark:text-white">Energia</p>
                            <div className="mt-4 flex flex-col space-y-3">
                                <a
                                    className={`flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition ${pathname.match(/luzes/g) ? 'water-button-pressed' : 'water-button-unpressed'}`}
                                    href="/luzes"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m-3-3h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m3-17C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2"
                                        />
                                    </svg
                                    >
                                    <span>LUZES</span></a
                                >
                            </div>
                        </div>
                        <div>
                            <a
                                className={`flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition ${pathname.match(/configuracoes/g) ? 'water-button-pressed' : 'water-button-unpressed'}`}
                                href="/configuracoes"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"
                                    />
                                </svg
                                >
                                <span>CONFIGURAÇÕES</span></a
                            >
                        </div>
                    </div>
                </nav>
                <div className="ml-60 size-full overflow-y-auto pb-8 pt-14">
                    {children}
                </div>
            </div>
            <dialog className="rounded-xl backdrop:backdrop-blur-[2px] dark:bg-neutral-900">
                <div className="p-8">
                    <p className="dark:text-white">Tem certeza que deseja sair?</p>
                    <div className="mt-4 flex justify-center">
                        <button
                            className="rounded-full bg-neutral-200 px-3 py-1.5 text-[0.825rem] tracking-wider transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"                    
                            >SAIR
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Layout;
