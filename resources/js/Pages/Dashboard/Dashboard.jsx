import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <main className="h-full overflow-y-auto">
                <div className="container px-6 mx-auto grid">
                    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Dashboard
                    </h2>
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total Warga
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    250
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                <svg className="w-5 h-5" fill="#FF0000" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total Anggota Siskamling
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    5
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total Pengaduan
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    376
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Grafik
                    </h2>
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                                <center>Total Warga</center>
                            </h4>
                            <canvas id="pie"></canvas>
                            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
                                    <span>Anggota</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                                    <span>Warga</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                                    <span>RT</span>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                                <center>Total Pengaduan </center>
                            </h4>
                            <canvas id="line"></canvas>
                            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                                    <span>Organic</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                                    <span>Paid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
