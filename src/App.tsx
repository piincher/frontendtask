import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import HomePage from "./pages/Homepage/HomePage.component";
import "./App.css";
import CreateEventPage from "./pages/CreateEvent/CreateEventPage.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<CreateEventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
