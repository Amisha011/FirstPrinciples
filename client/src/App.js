
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Component/Home/home";
import Services from "./Component/Services/services";
import Testimonials from './Component/Testimonials/testimonial';
import Pricing from "./Component/Pricing/Pricing"
import GetInTouch from './Component/get-in-touch/getInTouch';
import Footer from './Component/footer/footer';
import AddTestimonial from './Component/Testimonials/addTestimonial';
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Home />
      <Services />
      <Pricing />
      <Testimonials />
      <GetInTouch />
      <Footer />
    
    </div>
  );
}

export default App;
