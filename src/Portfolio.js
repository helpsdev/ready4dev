import './portfolio.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import MyWork from './Components/MyWork/MyWork'
import AboutMe from './Components/AboutMe/aboutMe'

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Home />
      <MyWork />
      <AboutMe />
    </div>
  );
}

export default Portfolio;
