import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ListPage from './pages/Admin/ListPage/ListPage';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import Login from './pages/Login/login';

import Homepage from './pages/User/HomePage/HomePage';
import SelectMember from './pages/Login/selectmember';
import Book from './pages/Admin/ListPage/Book';


function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/selectmember/*" element={<SelectMember />} />
            <Route path="/user/login" element={<Login func='login' title='user' />} />
            <Route path="/admin/login" element={<Login func='login' title='admin' />} />
            <Route path="/register" element={<Login func='register' title='user' />} />
            <Route path="/admin/">
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path='books/*' element={<ListPage />} />
            </Route>
            {/* <Route path='/books/*' element={<Book />} /> */}
          </Routes>
        </section>
      </Router>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/adminlist/*' element={<ListPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;