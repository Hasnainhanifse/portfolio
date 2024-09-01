import { Helmet } from "react-helmet";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Scripts */}
      <Helmet>
        <script defer data-domain="rsroshi.dev" src="https://app.abralytics.com/assets/tracker/index.js"></script>
      </Helmet>

      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
    </Layout>
  );
};
export default Index;
