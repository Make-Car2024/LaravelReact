import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  fontSize: '24px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

const App = () => (
  <Carousel autoplay autoplaySpeed={2000}>
    <div style={{ position: 'relative' }}>
      <img src="https://media.newyorker.com/photos/5c0195240591e72cf6b59d12/master/w_1920,c_limit/Duke-Spongebob_01.jpg/800x400?text=Image+1" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
      <div style={contentStyle}>ACUMALAKA</div>
    </div>
    <div style={{ position: 'relative' }}>
      <img src="https://media.newyorker.com/photos/5c0195240591e72cf6b59d12/master/w_1920,c_limit/Duke-Spongebob_01.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
      <div style={contentStyle}>WIKWOK</div>
    </div>
    <div style={{ position: 'relative' }}>
      <img src="https://media.newyorker.com/photos/5c0195240591e72cf6b59d12/master/w_1920,c_limit/Duke-Spongebob_01.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
      <div style={contentStyle}>JOKOM</div>
    </div>
    <div style={{ position: 'relative' }}>
      <img src="https://media.newyorker.com/photos/5c0195240591e72cf6b59d12/master/w_1920,c_limit/Duke-Spongebob_01.jpg" alt="Image 4" style={{ width: '100%', height: 'auto' }} />
      <div style={contentStyle}>WOWO</div>
    </div>
  </Carousel>

);

export default App;
