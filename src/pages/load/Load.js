import React from 'react';
import ReactLoading from 'react-loading';
import { Section, Article } from './generic';
import './styles.css';

const Load = () => (
  <Section style={{ backgroundColor: 'black', position: 'absolute', top: '40%' }}>
    <Article key="spinningBubbles" >
      <ReactLoading type="spinningBubbles" color="#fff" />
    </Article>
  </Section>
);

export default Load;
