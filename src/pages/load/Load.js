import React from 'react';
import ReactLoading from 'react-loading';
import { Section, Article, Prop } from './generic';
import './styles.css';

const Load = () => (
  <Section style={{ backgroundColor: 'black', position: 'absolute', top: '40%' }}>
    <Article key="spinningBubbles" >
      <ReactLoading type="spinningBubbles" color="#fff" />
      <Prop>正在生成链码...</Prop>
    </Article>
  </Section>
);

export default Load;
