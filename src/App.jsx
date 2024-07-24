import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home-Page/Home";
import About from "./About-Page/About";
import Projects from "./Projects-Page/Projects";
import Blog from "./Blog-Page/Blog";
import Contact from "./Contact-Page/Contact";
import { ProjectsData } from "./Projects-Page/ProjectData";
import { BlogData } from "./Blog-Page/BlogData";
import Html from "../Pages/Html";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<Projects projectsData={ProjectsData} />}
        />
        <Route path="/blog" element={<Blog BlogData={BlogData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/html-html5" element={<Html />} />
      </Routes> */}
      <div className="container">
        <div className="content">
          <h1>Menuk Fernando</h1>
          <p>Under Maintanence. Please check back soon!</p>
          <p>
            Email:{" "}
            <a href="https://mail.google.com" target="_blank">
              menukfernando7@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/menuk-fernando"
              target="_blank"
            >
              linkedin.com/menukfernando
            </a>
          </p>
          <p>
            Instagram:
            <a href="https://www.instagram.com/menukk___/" target="_blank">
              menukk___
            </a>
          </p>
          <div className="construction-icon">🚧</div>
        </div>
      </div>
    </>
  );
}

export default App;
