import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

const VisiMisi = () => {
    return (
        <GuestLayout>
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white bg-gray-900">
                <h1 className="text-4xl font-bold mb-8 text-center">Visi & Misi</h1>

                <div className="bg-gray-800 rounded-lg p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-300">VISI</h2>
                    <p className="italic text-lg">
                        "Bersatu, Berdaulat, Berkepribadian, Sejahtera dan Mandiri (BERDIKARI), dengan Semangat Gotong Royong, berdasarkan Pancasila dalam Bingkai Negara Kesatuan Republik Indonesia yang ber-Bhinneka Tunggal Ika"
                    </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-300">MISI</h2>
                    <ol className="space-y-4 list-decimal pl-6 text-lg">
                        {[
                            "Meningkatkan kualitas SDM Unggul yang Beriman dan Bertaqwa",
                            "Meningkatkan Kemandirian Perekonomian Daerah",
                            "Meningkatkan Pemerintahan yang baik dan bersih",
                            "Meningkatkan Pemerataan Pembangunan",
                            "Meningkatkan kepastian Hukum dan penegakan HAM",
                            "Meningkatkan Pengelolaan SDA dan Lingkungan Hidup",
                            "Meningkatkan Pemberdayaan Pemuda dan Olahraga"
                        ].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </GuestLayout>
    );
};

export default VisiMisi;
