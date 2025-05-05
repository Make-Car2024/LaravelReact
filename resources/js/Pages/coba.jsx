import React from 'react';
import { Carousel } from 'antd';

const carouselImages = [
  {
    id: 1,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrWsYWwjkmQ1OcRq9bSsBfuQw_u1rk_7vQKmwt6kXd_Nq9A3yVsHKRkGgGkOA0TlsRTff19R9H9JSymrgYCGo_0KccsRqbXz10TCjL2ehG5R7eVMscpuNuL1eAfw6qXw97ke2yQn1k63bo/s0/LAPTOP-WALLPAPER-HD.jpg",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    id: 3,
    src: "https://media.newyorker.com/photos/5c0195240591e72cf6b59d12/master/w_1920,c_limit/Duke-Spongebob_01.jpg",
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
