import Navbar from "./components/Navbar";
import Avani from "./assets/Avani.jpg";
import Dog from "./assets/Dog.jpg";
import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage"
import FetchedProfilePage from "./pages/FetchedProfilePage";

function App() {
  const [profiles, setProfiles] = useState([
    {id: 0, name: "Avani", title: "Purdue University student", email:"", bio:"", image: Avani},
    {id: 1, name: "Dog", title: "Large stuffed dog", email:"", bio:"", image: Dog},
    {id: 2, name: "Girl", title: "Rocking the ray-bans", email:"", bio:"", image: Avani},
    {id: 3, name: "Child", title: "Child hugging dog", email:"", bio:"", image: Dog},
  ]);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  };

  const handleSearch = (event) => {
    setName(event.target.value)
  };

  const handleClear = () => {
    setTitle("")
    setName("")
  };

  const updateProfiles = (profile) => {
    setProfiles(pre => ([...pre, profile]))
  }

  const [darkMode, setDarkMode] = useState(false);

  return (
    <HashRouter>
      <div className="routes">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles}/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
