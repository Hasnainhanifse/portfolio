import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import { projects } from "src/constants";
import dynamic from "next/dynamic";

const PortfolioModal = dynamic(() => import("./popup/PortfolioModal"), {
  ssr: false,
});

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Open modal and set the project data
  const openModal = (project) => {
    setSelectedProject(project);
    setModal(true);
  };

  // Close modal and clear project data
  const closeModal = () => {
    setModal(false);
    setSelectedProject(null); // Clear the project to avoid lingering data
  };

  return (
    <Fragment>
      {modal && selectedProject && (
        <PortfolioModal
          open={modal}
          close={closeModal}
          project={selectedProject}
        />
      )}
      <div className="rs_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="rs_tm_portfolio swiper-section">
            <div className="rs_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {projects.map((project) => (
                    <SwiperSlide key={project.id} className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/1-1.jpg" alt="" />
                          <div className="main" data-img-url={project.banner} />
                        </div>
                        <div className="details">
                          <h3>{project.title}</h3>
                          <span>{project.subTitle}</span>
                        </div>
                        <a
                          className="rs_tm_full_link popup-vimeo"
                          href="#"
                          onClick={() => openModal(project)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="rs_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
