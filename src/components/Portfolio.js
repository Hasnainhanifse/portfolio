import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
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
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/uni-sync-main-portfolio.png"
                        />
                      </div>
                      <div className="details">
                        <h3>Unisync</h3>
                        <span>Angular, TailwindCSS</span>
                      </div>
                      <a
                        className="rs_tm_full_link popup-vimeo"
                        href="img/portfolio/uni-sync-main-portfolio.png"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/oclass-main-portfolio.png"
                        />
                      </div>
                      <div className="details">
                        <h3>OClass</h3>
                        <span>Angular, Ionic, Strencils</span>
                      </div>
                      <a
                        className="rs_tm_full_link popup-youtube"
                        href="img/portfolio/oclass-main-portfolio.png"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/tekgenii-main-portfolio.png"
                        />
                      </div>
                      <div className="details">
                        <h3>Tekgenii</h3>
                        <span>Next.js, tailwindCSS</span>
                      </div>
                      <a
                        className="rs_tm_full_link soundcloude_link mfp-iframe audio"
                        href="img/portfolio/tekgenii-main-portfolio.png"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/apea-main-portfolio.png"
                        />
                      </div>
                      <div className="details">
                        <h3>Apea</h3>
                        <span>Django, React, Graphql</span>
                      </div>
                      <a
                        className="rs_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/three-you-main-portfolio.png"
                        />
                      </div>
                      <div className="details">
                        <h3>Three You</h3>
                        <span>React, TailwindCSS, FireBase</span>
                      </div>
                      <a
                        className="rs_tm_full_link zoom"
                        href="img/portfolio/three-you-main-portfolio.png"
                      />
                    </div>
                  </SwiperSlide>
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
