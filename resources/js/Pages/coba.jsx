import React from 'react';
import { Carousel } from 'antd';

const carouselImages = [
  {
    id: 1,
    src: "https://nagantour.com/wp-content/uploads/2023/10/Taman-Bunga-Celosia.webp",
  },
  {
    id: 2,
    src: "https://thumb.viva.id/vivawisata/1265x711/2024/12/14/675d742da9542-candi-gedongsongo-di-ungaran-kabupaten-semarang-jawa-tengah_wisata.jpg",
  },
  {
    id: 3,
    src: "https://thumb.tvonenews.com/thumbnail/2022/04/22/626251ef1b82a-suasana-kantor-bupati-semarang_665_374.jpg",
  }
];

const CarouselSection = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto 40px',
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
    }}>
      {/* Carousel dengan efek fade */}
      <Carousel autoplay autoplaySpeed={3000} effect="fade">
        {carouselImages.map((item) => (
          <div key={item.id}>
            <img
              src={item.src}
              alt={`Carousel ${item.id}`}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                filter: 'brightness(0.7)'
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay gelap full width untuk teks */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 2
      }}>
        {/* Container teks dengan padding */}
        <div style={{
          width: '100%',
          maxWidth: '800px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
            lineHeight: '1.2'
          }}>
            Selamat Datang di Web PPID Kabupaten Semarang
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.3rem',
            fontWeight: '300',
            marginTop: '1.5rem',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Portal Resmi Informasi Publik Pemerintah Kabupaten Semarang
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
