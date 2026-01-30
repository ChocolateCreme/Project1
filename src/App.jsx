import Card from "./components/Card";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Avani from "./assets/Avani.jpg";
import Dog from "./assets/Dog.jpg";
import Wrapper from "./components/Wrapper";
import Filters from "./components/Filters";
import "./App.css";
import { useState } from "react";

function App() {
  const profiles = [
    {id: 0, name: "Avani", title: "Purdue University student", image: Avani},
    {id: 1, name: "Dog", title: "Large stuffed dog", image: Dog},
    {id: 2, name: "Girl", title: "Rocking the ray-bans", image: Avani},
    {id: 3, name: "Child", title: "Child hugging dog", image: Dog},
  ]

  const titles = [...new Set(profiles.map(profile => profile.title))];
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked (prev => !prev);
    setClicked (prev => !prev);
    console.log(clicked);
  };
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  };

  const handleSearch = () => {
    setName(event.target.value)
  };

  const handleClear = () => {
    setTitle("")
    setName("")
  };

  const filteredProfiles = profiles.filter(profile => (
    (profile.title === title||!title) && (profile.name.toLowerCase().includes(name.toLowerCase()))
  ))

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar />
      <Wrapper id="about">
        <About/>
      </Wrapper>
      <Wrapper id="profiles">
        <Filters 
        titles={titles}
        title={title}
        name={name}
        handleChange={handleChangeTitle}
        handleSearch={handleSearch} 
        handleClick={handleClear}/>

        <div className="grid">
          {filteredProfiles.length > 0? (
            filteredProfiles.map((profile)=>(
              <Card 
                key={profile.id}
                name={profile.name}
                title={profile.title} 
                image={profile.image}
              />
            ))
          ) : (
            <p>No profiles matched your search.</p>
          )}
        </div>
        </Wrapper>
        <div className={darkMode ? ".dark-theme" : ".light-theme"}>
          <button onClick={() => setDarkMode(!darkMode)}>
            Change Theme
          </button>
        </div>
    </>
  );
}

export default App;
