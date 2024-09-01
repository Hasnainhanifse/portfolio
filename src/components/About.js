import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Roshan",
  lastName: "Shahzad",
  birthday: "23.09.1995",
  address: "Park Road, Islamabad, Pakistan",
  phn: "+92 311 55 10 145",
  email: "rsroshidev@gmail.com",
  serviceLists: [
    "Full Stack Development",
    "DevOps",
    "Website Development",
    "App Development",
    "UI/UX & Product Designer",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "95" },
      { name: "JavaScript", value: "80" },
      { name: "Angular", value: "90" },
    ],
    language: [
      { name: "English", value: "90" },
      { name: "Urdu", value: "90" },
      { name: "Punjabi", value: "90" },
      { name: "Indonesian", value: "20" },
    ],
  },
  education: [
    { year: "2013 - 2017", unv: "FUUAST", degree: "Bachelor Degree (BSCS)" }
  ],
  working: [
    {
      year: "2018 - running",
      company: "BitsnIO Pvt Ltd",
      deg: "Sr. Full Stack Developer",
    },
    { year: "2015 - 2018", company: "Freelance", deg: "Web Developer" },
    { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="rs_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="rs_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Roshan Shahzad.</span> I am a full stack developer,
                  and {`I'm`} very passionate and dedicated to my work. With 5
                  years experience as a professional developer, I have
                  acquired the skills and knowledge related to many tech stacks. 
                </p>
              </div>
              <div className="rs_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
