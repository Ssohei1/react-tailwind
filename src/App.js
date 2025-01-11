import { Category } from "./Components/Category";
import { Food } from "./Components/Food";
import HeadLineCard from "./Components/HeadlineCards";
import Hero from "./Components/Hero";
import { Navbar } from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadLineCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
