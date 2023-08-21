import React, {useMemo} from 'react';
import SearchClean from './images/clean';
import SearchButton from './images/button';
import SearchIcon from './images/search.png';
import './style';

export const SearchInternals = {
  open: (keyword: string) => {
    window.open('https://www.baidu.com/s?wd=' + keyword);
  }
};

interface ISearchProps {
  value?: string;
  onClear: (event: React.MouseEvent<Element>) => void;
}

const Search: React.FC<
  ISearchProps & Partial<React.DOMAttributes<HTMLInputElement>>
> = ({
  onClear,
  ...props
}) => {
  const cleanContent = useMemo(() => {
    if (props.value) {
      return (
        <SearchClean onClick={onClear} />
      );
    }

    return null;
  }, [props.value, onClear]);
  
  return (
    <div className="search-container">
      <div className="search-toolbar" />
      <div className="search-content">
        <img className="search-icon" src={SearchIcon} />
        <input
          {...props}
          type="text"
          className="search-input"
          placeholder="Seach & ChatGPT"
        />
        {cleanContent}
        <span className="search-button" >
          <SearchButton />
        </span>
      </div>
    </div>
  );
};



export default Search;