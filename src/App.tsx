import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';

// Import Pages
import Home from './Pages/Home/Home';
import Strimers from './Pages/strimers/Strimers';
import RangoSamurai from './Pages/Rangos/RangoSamurai';
import RangoKami from './Pages/Rangos/RangoKami';
import RangoDaimyo from './Pages/Rangos/RangoDaimyo';
import RangoSensei from './Pages/Rangos/RangoSensei';
import TermsAndConditions from './Pages/Legals/TermsAndConditions';
import RangoShogun from './Pages/Rangos/RangoShogun';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ForgotPassword from './Pages/Login/ForgotPassword';
import RangosPage from "./Pages/RangosPage/RangosPage";
import Blog from "./Pages/Blog/Blog";



import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strimers" element={<Strimers />} />
            <Route path="/rango-samurai" element={<RangoSamurai />} />
            <Route path="/rango-kami" element={<RangoKami />} />
            <Route path="/rango-daimyo" element={<RangoDaimyo />} />
            <Route path="/rango-sensei" element={<RangoSensei />} />
            <Route path="/terminos" element={<TermsAndConditions />} />
            <Route path="/rango-shogun" element={<RangoShogun />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/ver-rangos" element={<RangosPage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
