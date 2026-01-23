import Card from "./components/Card";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Avani from "./assets/Avani.jpg";
import Dog from "./assets/Dog.jpg";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  const profiles = [
    {id: 0, name: "Avani", title: "Purdue University Student", image: Avani},
    {id: 1, name: "Dog", title: "Large Stuffed Dog", image: Dog},
    {id: 2, name: "Avani", title: "Purdue University Student", image: Avani},
    {id: 3, name: "Dog", title: "Large Stuffed Dog", image: Dog},
  ]

  return (
    <>
      <Navbar />
      <Wrapper id="about">
        <About/>
      </Wrapper>
      <Wrapper id="profiles">
        <div className="grid">
            {profiles.map((profile) => (
              <Card 
                key={profile.id}
                name={profile.name}
                title={profile.title} 
                image={profile.image}
              />
            ))}
        </div>
        </Wrapper>
    </>
  );
}

export default App
