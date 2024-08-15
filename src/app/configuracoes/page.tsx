"use client";

import Head from 'next/head';
import DashboardLayout from "@/app/components/DashboardLayout";

import { useState } from 'react';

const Configurations = () => {
    const [option1, setOption1] = useState(true);

    const handleClick = () => {
        setOption1(!option1);
    };

    return (
        <DashboardLayout>
            <Head>
                <title>Configurações</title>
            </Head>
            <div className="px-10 py-14 text-neutral-900 dark:text-neutral-100">
                <h1 className="text-3xl font-medium dark:text-white">Configurações</h1>
                <div className="mt-12 space-y-12">
                    <div className="hidden">
                        <div>
                            <div className="flex space-x-3">
                                <p className="dark:text-white">Opção 1</p>
                                <button
                                    onClick={handleClick}
                                    className={`flex w-11 rounded-full p-0.5 shadow-inner-light transition duration-200 ease-out dark:shadow-inner-dark ${
                                        option1 ? 'bg-primary' : 'bg-transparent'
                                    }`}
                                >
                                    <svg
                                        className={`text-white drop-shadow transition-transform duration-200 ease-in-out transform ${
                                            option1 ? 'translate-x-full' : 'translate-x-0'
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="mt-1 text-sm text-neutral-500">
                                Última alteração por <span className="font-medium">Enrico Ricardo Saez</span> às{' '}
                                <span className="font-medium">14:56</span> em <span className="font-medium">26/04/2024</span>.
                            </p>
                        </div>
                        <div>
                            <div className="flex space-x-3">
                                <p className="dark:text-white">Opção 1</p>
                                <button
                                    onClick={handleClick}
                                    className={`flex w-11 rounded-full p-0.5 shadow-inner-light transition duration-200 ease-out dark:shadow-inner-dark ${
                                        option1 ? 'bg-primary' : 'bg-transparent'
                                    }`}
                                >
                                    <svg
                                        className={`text-white drop-shadow transition-transform duration-200 ease-in-out transform ${
                                            option1 ? 'translate-x-full' : 'translate-x-0'
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="mt-1 text-sm text-neutral-500">
                                Última alteração por <span className="font-medium">Enrico Ricardo Saez</span> às{' '}
                                <span className="font-medium">14:56</span> em <span className="font-medium">26/04/2024</span>.
                            </p>
                        </div>
                        <div>
                            <div className="flex space-x-3">
                                <p className="dark:text-white">Opção 1</p>
                                <button
                                    onClick={handleClick}
                                    className={`flex w-11 rounded-full p-0.5 shadow-inner-light transition duration-200 ease-out dark:shadow-inner-dark ${
                                        option1 ? 'bg-primary' : 'bg-transparent'
                                    }`}
                                >
                                    <svg
                                        className={`text-white drop-shadow transition-transform duration-200 ease-in-out transform ${
                                            option1 ? 'translate-x-full' : 'translate-x-0'
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="mt-1 text-sm text-neutral-500">
                                Última alteração por <span className="font-medium">Enrico Ricardo Saez</span> às{' '}
                                <span className="font-medium">14:56</span> em <span className="font-medium">26/04/2024</span>.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-medium underline decoration-primary decoration-2 underline-offset-4">
                            Bot Telegram
                        </p>
                        <div>
                            <div className="flex space-x-5">
                                <div className="flex w-24 space-x-1">
                                    <p>ChatID</p>
                                    <div className="group relative">
                                        <p className="cursor-default leading-none text-neutral-900 dark:text-neutral-100">🛈</p>
                                        <div className="animate-fade-in absolute left-4 top-4 z-40 hidden w-max border border-neutral-300 bg-white px-2 py-1 group-hover:block dark:border-neutral-700 dark:bg-neutral-800">
                                            <p className="text-nowrap text-sm text-neutral-900 dark:text-neutral-100">
                                                Insira o ChatID do destinatário a receber a mensagem de alerta.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <form method="POST" action="?/updateTelegramChatID">
                                    <div className="flex space-x-2.5">
                                        <input
                                            className="w-32 rounded-full bg-transparent px-2.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
                                            type="text"
                                            maxLength={10}
                                            name="chatID"
                                        />
                                        <button
                                            className="flex size-6 items-center justify-center rounded-full bg-neutral-200 transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                            type="submit"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zm7-3q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-5-8h7q.425 0 .713-.288T15 9V7q0-.425-.288-.712T14 6H7q-.425 0-.712.288T6 7v2q0 .425.288.713T7 10"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <p className="mt-1.5 text-sm text-neutral-500">
                                Lembre-se de iniciar manualmente uma conversa com o <span className="italic">bot</span> (
                                <a
                                    href="https://t.me/EcoVisionBot"
                                    target="_blank"
                                    className="text-neutral-900 transition hover:text-primary dark:text-neutral-300"
                                >
                                    @EcoVisionBot
                                </a>
                                ) para poder receber mensagens.
                            </p>
                        </div>
                        <div className="flex space-x-5">
                            <p className="w-24">Mensagem</p>
                            <form method="POST" action="?/updateTelegramMessage">
                                <div className="flex items-center space-x-2.5">
                <textarea
                    className="resize-none rounded-xl bg-transparent px-1.5 py-0.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
                    rows={5}
                    cols={50}
                    name="message"
                ></textarea>
                                    <button
                                        className="flex size-6 items-center justify-center rounded-full bg-neutral-200 transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                        type="submit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zm7-3q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-5-8h7q.425 0 .713-.288T15 9V7q0-.425-.288-.712T14 6H7q-.425 0-.712.288T6 7v2q0 .425.288.713T7 10"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-6 flex items-center justify-end space-x-3">
                            <button className="flex h-8 items-center justify-center rounded-full bg-transparent px-3 text-neutral-900 transition hover:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800">
                                <p className="text-sm font-medium">Cancelar</p>
                            </button>
                            <button className="flex h-8 items-center justify-center rounded-full bg-primary px-3 text-neutral-100 transition hover:bg-primary-dark dark:text-neutral-900">
                                <p className="text-sm font-medium">Salvar</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Configurations;
