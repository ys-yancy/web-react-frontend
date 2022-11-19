import React from 'react';
import {useSearchParams} from 'react-router-dom';

const Detail: React.FC = (props) => {
  const [search] = useSearchParams();
  const detailId = search.get('id');
  console.log(detailId)
  return (
    <div className="detail-container">
      Detail
    </div>
  );
};

export default Detail;
