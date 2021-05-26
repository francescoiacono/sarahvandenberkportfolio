import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/header/header';
import Items from './components/items/items';
import VideoPage from './components/videoPage/videoPage';
import { fetchWorks } from './store/reducers/works/worksActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Items />
        </Route>

        <Route path='/'>
          <Header />
          <VideoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
