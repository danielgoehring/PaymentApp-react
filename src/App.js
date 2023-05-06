import Home from './Home';
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import AuthDetails from './components/AuthDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
        <BrowserRouter>
          <div className="App">
            <div style={{textAlign: 'right', marginRight: '40px'}}>
              <AuthDetails />
            </div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
