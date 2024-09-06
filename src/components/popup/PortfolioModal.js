import Modal from "./Modal";

const PortfolioModal = ({ close, open, project }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          {project && <img src={project.banner} alt="" />}
        </div>
        <div className="portfolio_main_title">
          <h3>{project && project.title}</h3>
          <span>
           {project && <a href={project.url}>Detail</a>} 
          </span>
          <div />
        </div>

        {project && (
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>
        )}
        <div className="additional_images">
          <ul className="gallery_zoom">
            {project && project.images.length > 0 && project.images.map((image,index)=>(
                    <li key={index+image}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={image} alt="" />
     
                      </div>
                    </div>
                  </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
