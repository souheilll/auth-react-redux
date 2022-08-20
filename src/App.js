import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import { useSelector } from 'react-redux'
import Dashboard from './Pages/Dashboard';
import AddUser from './Pages/AddUser';
import AddPost from './Pages/AddPost';


function App() {
  // const state = useSelector(state => state)
  // console.log(state)
  const user = useSelector(state => state.AuthReducer)
  console.log(user)

  return (

    <BrowserRouter>
      <div className='App'>
        {user.connect && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/add-post' element={<AddPost />}/>
        </Routes>
      </div>


    </BrowserRouter>

  );
}

export default App;
