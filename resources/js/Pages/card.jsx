import { useState } from 'react';

const App = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const newsData = [
        {
            id: 1,
            title: 'Pembangunan Jembatan Baru',
            description:
                'Pemerintah meresmikan jembatan baru sepanjang 250m yang menghubungkan dua wilayah.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/pembangunan-jembatan-baru',
        },
        {
            id: 2,
            title: 'Inovasi Teknologi Terkini',
            description:
                'Startup lokal meluncurkan teknologi AI revolusioner untuk sektor kesehatan.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/inovasi-teknologi-terkini',
        },
        {
            id: 3,
            title: 'Festival Budaya Nasional',
            description:
                'Ribuan orang hadiri festival budaya tahunan yang menampilkan keragaman Indonesia.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/festival-budaya-nasional',
        },
        {
            id: 4,
            title: 'Prestasi Atlet Internasional',
            description:
                'Atlet kita raih medali emas di kejuaraan dunia cabang olahraga renang.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/prestasi-atlet-internasional',
        },
        {
            id: 5,
            title: 'Penemuan Spesies Baru',
            description:
                'Ilmuwan temukan spesies flora baru di hutan Kalimantan yang langka.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/penemuan-spesies-baru',
        },
        {
            id: 6,
            title: 'Ekonomi Tumbuh Positif',
            description:
                'Laporan triwulan menunjukkan pertumbuhan ekonomi mencapai 5.2% di kuartal ini.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/ekonomi-tumbuh-positif',
        },
        {
            id: 7,
            title: 'Revitalisasi Kota Tua',
            description:
                'Proyek revitalisasi kawasan bersejarah akan dimulai bulan depan.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/revitalisasi-kota-tua',
        },
        {
            id: 8,
            title: 'Pendidikan Inklusif',
            description:
                'Program baru untuk pendidikan inklusif akan menjangkau daerah terpencil.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/pendidikan-inklusif',
        },
        {
            id: 9,
            title: 'Energi Terbarukan',
            description:
                'Pembangkit listrik tenaga surya terbesar di Asia Tenggara akan dibangun di Indonesia.',
            image: 'https://wallpapercave.com/wp/wp2675445.jpg',
            url: '/berita/energi-terbarukan',
        },
    ];

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#f5f5f5',
            }}
        >
            {/* Header Section */}
            <div
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    padding: '16px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)',
                }}
            >
                <h2
                    style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        color: 'rgba(0, 0, 0, 0.85)',
                        marginBottom: '8px',
                    }}
                >
                    BERITA TERKINI
                </h2>
                <p
                    style={{
                        fontSize: '14px',
                        color: 'rgba(0, 0, 0, 0.45)',
                    }}
                >
                    Arahkan cursor ke berita untuk melihat detail informasi
                </p>
            </div>

            {/* News Grid Container */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '24px',
                    padding: '24px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)',
                }}
            >
                {newsData.map((news) => (
                    <div
                        key={news.id}
                        onMouseEnter={() => setHoveredCard(news.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            position: 'relative',
                            height: '250px', // Reduced height from 300px
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            transform:
                                hoveredCard === news.id
                                    ? 'translateY(-5px)'
                                    : 'none',
                            boxShadow:
                                hoveredCard === news.id
                                    ? '0 10px 20px rgba(0,0,0,0.1)'
                                    : 'none',
                        }}
                    >
                        {/* Background Image */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${news.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'all 0.3s ease',
                                filter:
                                    hoveredCard === news.id
                                        ? 'brightness(0.7)'
                                        : 'brightness(1)',
                            }}
                        />

                        {/* Title (Always Visible) */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '15px', // Reduced from 20px
                                left: 0,
                                width: '100%',
                                padding: '0 20px',
                                zIndex: 2,
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: '18px', // Reduced from 20px
                                    fontWeight: '600',
                                    color: 'white',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                    margin: 0,
                                    textAlign: 'center',
                                }}
                            >
                                {news.title}
                            </h3>
                        </div>

                        {/* Description (Visible when hovered) */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '15px', // Reduced from 20px
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                transform:
                                    hoveredCard === news.id
                                        ? 'translateY(0)'
                                        : 'translateY(100%)',
                                opacity: hoveredCard === news.id ? 1 : 0,
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '13px', // Reduced from 14px
                                    lineHeight: '1.4', // Reduced from 1.5
                                    marginBottom: '10px', // Reduced from 15px
                                }}
                            >
                                {news.description}
                            </p>
                            <a
                                href={news.url}
                                style={{
                                    display: 'inline-block',
                                    padding: '6px 12px', // Reduced from 8px 16px
                                    backgroundColor: '#1890ff',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease',
                                    fontSize: '13px', // Added smaller font size
                                }}
                                onMouseEnter={(e) => e.stopPropagation()}
                                onMouseLeave={(e) => e.stopPropagation()}
                            >
                                Baca Selengkapnya
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Read More Button Section */}
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '24px',
                    padding: '16px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)',
                }}
            >
                <a
                    href="#" // Link to news page
                    style={{
                        display: 'inline-block',
                        padding: '10px 24px',
                        backgroundColor: '#1890ff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: '500',
                        transition: 'background-color 0.2s ease',
                        ':hover': {
                            backgroundColor: '#40a9ff',
                        },
                    }}
                >
                    Lihat Semua Berita >>
                </a>
            </div>
        </div>
    );
};

export default App;
