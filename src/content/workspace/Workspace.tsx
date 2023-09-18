import React, {useState} from 'react';
import WorkspaceTimer from '@/components/timer';
import WorkspaceSearch, {
  SearchInternals
} from '@/components/search';
import WorkspaceWallpaper from '@/components/wallpaper';
import WorkspaceTools from './components';
import './style';

const EMPTY_SEARCH_CONTENT = '';

const Workspace: React.FC = (props) => {
  const [glass, setGlass] = useState(false);
  const [keyword, setKeyword] = useState(EMPTY_SEARCH_CONTENT);

  const showWorkspaceGlassState = () => {
    setGlass(true);
  };

  const hideWorkspaceGlassState = () => {
    setGlass(false);
  };

  const updateSearchContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const cleanSearchContent = () => {
    setKeyword(EMPTY_SEARCH_CONTENT);
  };

  const scheduleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      cleanSearchContent();
      SearchInternals.openGoogle(keyword);
    }
  };

  return (
    <div className={`workspace-container ${glass && 'glass'}`}>
      <WorkspaceTimer />
      <WorkspaceSearch
        value={keyword}
        onFocus={showWorkspaceGlassState}
        onBlur={hideWorkspaceGlassState}
        onClear={cleanSearchContent}
        onInput={updateSearchContent}
        onKeyDown={scheduleSearch}
        />
      <WorkspaceTools />
      <WorkspaceWallpaper />
      <div className="glass-masker" />
    </div>
  );
};

export default Workspace;
