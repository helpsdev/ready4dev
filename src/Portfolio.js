import './portfolio.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import MyWork from './Components/MyWork/MyWork'
import AboutMe from './Components/AboutMe/aboutMe'
import Blog from  './Components/Blog/Blog'

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Home />
      <MyWork />
      <AboutMe />
      <Blog />
    </div>
  );
}

export default Portfolio;
