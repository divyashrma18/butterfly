import React from 'react';
import Lottie from 'lottie-react';
import butterfly1 from '../assets/butterfly1.json';
import butterfly2 from '../assets/butterfly2.json';
import butterfly3 from '../assets/butterfly3.json';
import './Butterflies.css';

const Butterflies = () => {
  return (
    <div className="butterfly-container">
      {/* 3 of Butterfly 1 */}
      <div className="b1-1-wrapper">
      <Lottie animationData={butterfly1} className="butterfly b1-1" loop />
</div>
      <Lottie animationData={butterfly1} className="butterfly b1-2" loop />
      <Lottie animationData={butterfly1} className="butterfly b1-3" loop />

      {/* 3 of Butterfly 2 */}
      <Lottie animationData={butterfly2} className="butterfly b2-1" loop />
      <Lottie animationData={butterfly2} className="butterfly b2-2" loop />
      <Lottie animationData={butterfly2} className="butterfly b2-3" loop />

      {/* 3 of Butterfly 3 */}
      <Lottie animationData={butterfly3} className="butterfly b3-1" loop />
      <Lottie animationData={butterfly3} className="butterfly b3-2" loop />
      <Lottie animationData={butterfly3} className="butterfly b3-3" loop />
    </div>
  );
};

export default Butterflies;
