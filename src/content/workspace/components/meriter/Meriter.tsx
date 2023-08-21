import React from 'react';
import useAnimateFadeoutup from '@/hooks/useAnimateFadeoutup';
import Card from '@/components/card';
import FishImage from './images/muyu.png';
import CursorImage from './images/bang.png';
import './style';

const Meriter: React.FC = () => {
  const {$interactive, connect} = useAnimateFadeoutup();

  return (
    <Card className="meriter">
      <div className="count">
        <span className="count-content">功德：49</span>
      </div>
      <div className="interactive">
        <span ref={$interactive} className="interactive-content animate-fadeoutup animate-animated">
          功德 +1
        </span>
      </div>
      <img
        className="fish"
        onClick={connect}
        src={FishImage} style={{cursor: `url(${CursorImage}),auto`}}
        />
    </Card>
  );
};

export default Meriter;