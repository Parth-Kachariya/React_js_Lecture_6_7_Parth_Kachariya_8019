import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Help from "./Help";
import Home from "./Home";
import Services from "./Services";

const PageRoute = {
  home: <Home />,
  service: <Services />,
  error: <Error />,
  contact: <Contact />,
  about: <About />,
  help: <Help />,
};

export default PageRoute;
