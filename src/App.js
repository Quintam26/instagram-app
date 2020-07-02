import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from './pages/feed';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/edit-profile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './pages/not-found';
import PostModal from './components/post/PostModal';
import { useHistory, useLocation } from 'react-router-dom';


function App() {
  const history = useHistory();
  const location = useLocation();
  const prevLocation = React.useRef(location);
  const modal = location.state?.modal;

  React.useEffect(() => {
    if(history.action !== 'POP' && !modal) {
      prevLocation.current = location;
    }
  }, [location, modal, history.action])

  return (
      <Switch>
        <Route exact path='/' component={FeedPage} />
        <Route path='/explore' component={ExplorePage} />
        <Route exact path='/:username' component={ProfilePage} />
        <Route exact path='/p/:postId' component={PostPage} />
        <Route path='/accounts/edit' component={EditProfilePage} />
        <Route path='/accounts/login' component={LoginPage} />
        <Route path='/accounts/emailsignup' component={SignUpPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
  );
}

export default App;
