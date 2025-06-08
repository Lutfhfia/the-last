import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar"; 

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      
    </BrowserRouter>
  );
};

export default MainLayout;
