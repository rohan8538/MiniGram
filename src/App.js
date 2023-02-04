import { Routes, Route } from 'react-router-dom';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import ProfileDetails from './components/profileDetails/ProfileDetails';
import RequireUser from './components/RequireUser';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RequireUser />} >
          <Route element={<Home />}>
            <Route path="/" element = {<Feed />} />
            <Route path="/profile/:userId" element = {<Profile />} />
            <Route path="/updateProfile" element = {<ProfileDetails />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
