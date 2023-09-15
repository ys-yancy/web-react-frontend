import React, {useState} from 'react';
import useAnimateFadeoutup from '@/hooks/useAnimateFadeoutup';
import Card from '@/components/card';
import FishImage from './images/muyu.png';
import CursorImage from './images/bang.png';
import './style';

const MERIT_NAME = '功德';
const MAX_MERIT_COUNT = 100;

const Meriter: React.FC = () => {
  const [meritCount, setMeritCount] = useState(0);
  const {$interactive, connect} = useAnimateFadeoutup();

  const accumulate = async () => {
    if (meritCount >= MAX_MERIT_COUNT) {
      window.alert('没做亏心事吧？');
      return;
    }

    await connect();

    setMeritCount(meritCount + 1);
  }

  return (
    <Card className="meriter" name="功德无量机">
      <div className="count">
        <span className="count-content">{MERIT_NAME}：{meritCount}</span>
      </div>
      <div className="interactive">
        <span ref={$interactive} className="interactive-content animate-fadeoutup animate-animated">
          {MERIT_NAME} +1
        </span>
      </div>
      <img
        alt="fish"
        className="fish"
        onClick={accumulate}
        src={FishImage} style={{cursor: `url(${CursorImage}),auto`}}
        />
    </Card>
  );
};

export default Meriter;