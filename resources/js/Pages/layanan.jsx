import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const newsData = [
  {
    id: 1,
    title: 'Berita Terkini 1',
    description: 'Deskripsi singkat berita pertama yang akan ditampilkan di card.',
    image: 'https://via.placeholder.com/300x200?text=News+1'
  },
  {
    id: 2,
    title: 'Update Penting 2',
    description: 'Informasi penting kedua yang perlu diketahui publik.',
    image: 'https://via.placeholder.com/300x200?text=News+2'
  },
  {
    id: 3,
    title: 'Perkembangan Terbaru 3',
    description: 'Perkembangan terbaru di bidang teknologi dan inovasi.',
    image: 'https://via.placeholder.com/300x200?text=News+3'
  },
  {
    id: 4,
    title: 'Berita Terkini 4',
    description: 'Deskripsi singkat berita keempat yang akan ditampilkan di card.',
    image: 'https://via.placeholder.com/300x200?text=News+4'
  },
  {
    id: 5,
    title: 'Update Penting 5',
    description: 'Informasi penting kelima yang perlu diketahui publik.',
    image: 'https://via.placeholder.com/300x200?text=News+5'
  },
  {
    id: 6,
    title: 'Perkembangan Terbaru 6',
    description: 'Perkembangan terbaru di bidang teknologi dan inovasi.',
    image: 'https://via.placeholder.com/300x200?text=News+6'
  },
];

const PublicServicesSection = () => {
  const newsCarouselRef = React.useRef();

  // Membagi data berita menjadi grup-grup @3 item
  const groupedNews = [];
  for (let i = 0; i < newsData.length; i += 3) {
    groupedNews.push(newsData.slice(i, i + 3));
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
      <div style={{
        background: 'rgba(240, 242, 245, 0.7)',
        padding: '30px',
        borderRadius: '8px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', color: '#333' }}>Layanan Publik</h2>
          <p style={{ color: '#666' }}>Update informasi dan berita terbaru untuk Anda</p>
        </div>

        <div style={{ position: 'relative' }}>
          <Button
            type="primary"
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => newsCarouselRef.current.prev()}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2
            }}
          />

          <Carousel
            ref={newsCarouselRef}
            dots={false}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {groupedNews.map((group, index) => (
              <div key={index}>
                <Row gutter={16} justify="center">
                  {group.map(news => (
                    <Col key={news.id} xs={24} sm={12} md={8}>
                      <Card
                        hoverable
                        style={{
                          borderRadius: '8px',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                          marginBottom: '16px'
                        }}
                        cover={<img alt={news.title} src={news.image} style={{ height: '160px', objectFit: 'cover' }} />}
                      >
                        <Card.Meta
                          title={news.title}
                          description={news.description}
                        />
                        <Button
                          type="link"
                          style={{
                            marginTop: '15px',
                            padding: 0
                          }}
                        >
                          Baca Selengkapnya
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>

          <Button
            type="primary"
            shape="circle"
            icon={<RightOutlined />}
            onClick={() => newsCarouselRef.current.next()}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicServicesSection;
