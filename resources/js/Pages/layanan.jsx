import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Col, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const servicesData = [
    {
        id: 1,
        title: 'Hak dan Kewajiban Pemohon',
        description: 'Ketahui hak dan kewajiban Anda sebagai pemohon informasi publik.',
        icon: '📋',
        link: '/hak-kewajiban',
        color: '#1890ff'
    },
    {
        id: 2,
        title: 'Tata Cara Mendapatkan Informasi',
        description: 'Prosedur lengkap untuk memperoleh informasi dari instansi kami.',
        icon: '📝',
        link: '/tata-cara',
        color: '#52c41a'
    },
    {
        id: 3,
        title: 'Formulir Permohonan Informasi',
        description: 'Download formulir permohonan informasi publik yang diperlukan.',
        icon: '📑',
        link: '/formulir',
        color: '#faad14'
    },
    {
        id: 4,
        title: 'Mekanisme dan Standar Pelayanan',
        description: 'Standar pelayanan kami dan mekanisme pengaduannya.',
        icon: '⚙️',
        link: '/mekanisme-pelayanan',
        color: '#13c2c2'
    },
    {
        id: 5,
        title: 'Daftar dan Informasi Publik',
        description: 'Kumpulan informasi publik yang tersedia di instansi kami.',
        icon: '📊',
        link: '/daftar-informasi',
        color: '#722ed1'
    },
    {
        id: 6,
        title: 'Permintaan Informasi',
        description: 'Ajukan permintaan informasi secara online melalui sistem kami.',
        icon: '✉️',
        link: '/permintaan-informasi',
        color: '#f5222d'
    },
    {
        id: 7,
        title: 'Laporan Kinerja',
        description: 'Laporan kinerja instansi kami yang tersedia untuk publik.',
        icon: '📈',
        link: '/laporan-kinerja',
        color: '#fa8c16'
    }
];

const PublicServicesSection = () => {
    const servicesCarouselRef = React.useRef();

    // Membagi data layanan menjadi grup-grup @3 item
    const groupedServices = [];
    for (let i = 0; i < servicesData.length; i += 3) {
        groupedServices.push(servicesData.slice(i, i + 3));
    }

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                marginBottom: '60px',
                padding: '0 24px'
            }}
        >
            <div
                style={{
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
                    padding: '40px 30px',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Title level={2} style={{ color: '#2c3e50', marginBottom: '8px' }}>
                        Layanan Publik
                    </Title>
                    <Text style={{ color: '#7f8c8d', fontSize: '16px' }}>
                        Akses berbagai layanan dan informasi publik dari instansi kami
                    </Text>
                </div>

                <div style={{ position: 'relative' }}>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<LeftOutlined />}
                        onClick={() => servicesCarouselRef.current.prev()}
                        style={{
                            position: 'absolute',
                            left: '-40px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                        }}
                        size="large"
                    />

                    <Carousel
                        ref={servicesCarouselRef}
                        dots={false}
                        infinite
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {groupedServices.map((group, index) => (
                            <div key={index}>
                                <Row gutter={[24, 24]} justify="center">
                                    {group.map((service) => (
                                        <Col
                                            key={service.id}
                                            xs={24}
                                            sm={12}
                                            md={8}
                                        >
                                            <Card
                                                hoverable
                                                style={{
                                                    borderRadius: '12px',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                    border: 'none',
                                                    height: '100%',
                                                    transition: 'transform 0.3s',
                                                    overflow: 'hidden'
                                                }}
                                                bodyStyle={{
                                                    padding: '24px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: '100%'
                                                }}
                                            >
                                                <div style={{
                                                    fontSize: '48px',
                                                    textAlign: 'center',
                                                    marginBottom: '16px',
                                                    color: service.color
                                                }}>
                                                    {service.icon}
                                                </div>
                                                <Title level={4} style={{
                                                    textAlign: 'center',
                                                    marginBottom: '12px',
                                                    color: '#2c3e50'
                                                }}>
                                                    {service.title}
                                                </Title>
                                                <Text style={{
                                                    color: '#7f8c8d',
                                                    textAlign: 'center',
                                                    marginBottom: '24px',
                                                    flexGrow: 1
                                                }}>
                                                    {service.description}
                                                </Text>
                                                <Button
                                                    type="primary"
                                                    shape="round"
                                                    style={{
                                                        backgroundColor: service.color,
                                                        borderColor: service.color,
                                                        alignSelf: 'center',
                                                        width: '80%'
                                                    }}
                                                >
                                                    Akses Layanan
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
                        onClick={() => servicesCarouselRef.current.next()}
                        style={{
                            position: 'absolute',
                            right: '-40px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                        }}
                        size="large"
                    />
                </div>
            </div>
        </div>
    );
};

export default PublicServicesSection;
