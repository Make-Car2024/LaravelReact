const RelatedLinks = () => {
    const linksData = [
        {
            id: 1,
            title: 'Update Covid-19 Kab.Semarang',
            image: 'https://webppid.semarangkab.go.id/upload/link/covid.jpeg',
            url: 'https://corona.semarangkab.go.id/',
        },
        {
            id: 2,
            title: 'Formulir Online Permohonan Informasi',
            image: 'https://webppid.semarangkab.go.id/upload/link/800px-LOGO_KABUPATEN_SEMARANG.png',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSf63ai93B54Me_9644Vv051xGOwks2j_2n8gHOkXJ69oYqJ-g/viewform',
        },
        {
            id: 3,
            title: 'Lapor.go.id',
            image: 'https://disdikpora.bulelengkab.go.id/uploads/konten/13-layanan-aspirasi-dan-pengaduan-online-rakyat.png',
            url: 'https://www.lapor.go.id/',
        },
    ];

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '20px auto',
                padding: '0 20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
        >
            {/* Header */}
            <div
                style={{
                    padding: '16px 20px 12px',
                    borderBottom: '1px solid #f0f0f0',
                }}
            >
                <h2
                    style={{
                        fontSize: '18px',
                        fontWeight: '500',
                        color: '#333',
                        margin: 0,
                    }}
                >
                    LINK TERKAIT
                </h2>
            </div>

            {/* Cards Container */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px',
                    padding: '20px',
                }}
            >
                {linksData.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'block',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        }}
                    >
                        {/* Image - Rectangle */}
                        <div
                            style={{
                                width: '100%',
                                height: '120px',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={link.image}
                                alt={link.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        {/* Text Below Image */}
                        <div
                            style={{
                                padding: '12px',
                                backgroundColor: '#fff',
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#333',
                                    margin: 0,
                                    textAlign: 'center',
                                    lineHeight: '1.4',
                                }}
                            >
                                {link.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default RelatedLinks;
