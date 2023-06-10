import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import ProfileDetails from './components/profileDetails/ProfileDetails';
import RequireUser from './components/RequireUser';
import NotLogin from './components/NotLogin';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const isLoading = useSelector(state => {
    //console.log(state);
    return state.appConfigReducer.isLoading;
  });
  const loadingRef = useRef(null);
  useEffect(() => {
    if(isLoading) {
      loadingRef.current?.continuousStart();
    }
    else {
      loadingRef.current?.complete();
    }
    }, [isLoading]);

  return (
    <div className="App">
      <LoadingBar color='#5f9fff' ref={loadingRef} />
      <Routes>
        <Route element={<RequireUser />} >
          <Route element={<Home />}>
            <Route path="/" element = {<Feed />} />
            <Route path="/profile/:userId" element = {<Profile />} />
            <Route path="/updateProfile" element = {<ProfileDetails />} />
          </Route>
        </Route>
        <Route element={<NotLogin />}>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
