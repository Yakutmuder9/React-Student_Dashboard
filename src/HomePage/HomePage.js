import "./homePage.css";
import Header from "./component/Header";
import Main from "./component/Main";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";

const HomePage = () => {
  return (
    <div className="Home overflow-auto bg-dark" id="HomeComp">
      <Header />
      <Main />
      {/* <About />
      <Project />
      <Contact /> */}
    </div>
  );
};

export default HomePage;
