import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Blogs from './components/Blog';
import Addblog from './components/Addblog';
import UpdateBlog from './components/UpdateBlog';
import PrivateRoutes from './components/PrivateRoutes';
function App() {
  return (
    <div>

      <Routes>
        <Route path={'/'} element = {<Login/>}></Route>
        <Route path={'/sign'} element = {<Signup/>}></Route>
        <Route element = {<PrivateRoutes/>}>
            <Route path={'/blogs'} element = {<Main child={<Blogs/>}/>}></Route>
            <Route path={'/add'} element = {<Main child={<Addblog/>}/>}></Route>
            <Route path='/update/:blogId' element = {<UpdateBlog/>}></Route>
        </Route>
      </Routes>
    </div>
     
  
  );
}

export default App;
