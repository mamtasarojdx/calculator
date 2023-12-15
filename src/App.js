// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Calculator from "./Calculator/Calculator";
import ToDoList from "./Todo/ToDoList";
import Custom_Slider from "./ImageSlider/Custom_Slider";
import Local_Api from "./Search_Api/Local_Api";
import Scroll_Api from "./Scroll-Api/Scroll._Api.jsx";
import Search_Api from "./Search_Api/Search_Api";
import UseReducer from "./UseReducer/UseReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ToDoList />}></Route>
          <Route exact path="/calculator" element={<Calculator />}></Route>
          <Route exact path="/local-api" element={<Local_Api />}></Route>
          <Route exact path="/reducer" element={<UseReducer />}></Route>
          <Route exact path="/search-api" element={<Search_Api />}></Route>
          <Route exact path="/custom-slider" element={<Custom_Slider />}></Route>
          <Route exact path="/scroll" element={<Scroll_Api />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
