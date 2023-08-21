import React from 'react';

const SearchClean: React.FC<any> = (props) => {
  return(
    <svg onClick={props.onClick} className="search-clean" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="38.3137" y="42.5564" width="38" height="5" rx="2.5" transform="rotate(-135 38.3137 42.5564)" fill="#A9A9A9"/>
      <rect x="12.1508" y="39.0209" width="38" height="5" rx="2.5" transform="rotate(-45 12.1508 39.0209)" fill="#A9A9A9"/>
    </svg>
  );
}

export default React.memo(SearchClean);
