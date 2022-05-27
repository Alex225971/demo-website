import React from "react";
import "./Gallery.scss";
import galleryImg1 from "../../assets/gallery.jpg";
import galleryImg2 from "../../assets/gallery1.jpg";
import galleryImg3 from "../../assets/gallery2.jpg";

export default function Gallery() {
  function showInfo(e) {
    e.target.style.opacity = 1;
  }
  function hideInfo(e) {
    e.target.style.opacity = 0;
  }

  return (
    <div className="gallery_container gallery-full">
      <div className="container">
        <h3 className="gallery_heading mt-5 text-center">Watch how we work</h3>
        <h5 className="gallery_subheading mb-3">
          Nisi fugiat et adipisicing laborum officia esse esse. Aliquip labore
          enim est est nostrud in sit. Culpa culpa laborum fugiat elit amet duis
          consectetur duis amet esse. Enim ea dolore quis excepteur consectetur.
          Ea eu id elit et. Nulla incididunt dolor adipisicing et amet aliqua
          consequat ullamco Lorem pariatur velit.
        </h5>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="gallery_info"
              onMouseOver={showInfo}
              onMouseOut={hideInfo}
            >
              Work in progress
            </div>
            <img src={galleryImg1} alt="Work in progress" />
          </div>
          <div className=" col-lg-4">
            <div
              className="gallery_info"
              onMouseOver={showInfo}
              onMouseOut={hideInfo}
            >
              Aliqua occaecat ipsum velit ad et eiusmod.
            </div>
            <img
              src={galleryImg2}
              alt="Aliqua occaecat ipsum velit ad et eiusmod."
            />
          </div>
          <div className=" col-lg-4">
            <div
              className="gallery_info"
              onMouseOver={showInfo}
              onMouseOut={hideInfo}
            >
              Deserunt dolore mollit in id duis Lorem consequat nulla cupidatat
              fugiat non sit.
            </div>
            <img
              src={galleryImg3}
              onMouseOver={showInfo}
              alt="Deserunt dolore mollit in id duis Lorem consequat nulla cupidatat fugiat non sit."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="gallery_info"
              onMouseOver={showInfo}
              onMouseOut={hideInfo}
            >
              Voluptate nostrud in sit minim ex aute nisi exercitation eu magna
              do in mollit.
            </div>
            <img
              src={galleryImg1}
              onMouseOver={showInfo}
              alt="Voluptate nostrud in sit minim ex aute nisi exercitation eu magna do in mollit."
            />
          </div>
          <div className=" col-lg-4">
            <div
              className="gallery_info"
              onMouseOver={showInfo}
              onMouseOut={hideInfo}
            >
              Fugiat nisi officia dolore excepteur amet est.
            </div>
            <img
              src={galleryImg2}
              onMouseOver={showInfo}
              alt="Fugiat nisi officia dolore excepteur amet est."
            />
          </div>
          <div className=" col-lg-4">
            <div
              className="gallery_info"
              onMouseOver={showInfo}
              onMouseOut={hideInfo}
            >
              Id ea labore sint aliquip aliqua sit esse labore quis esse sit.
            </div>
            <img
              src={galleryImg3}
              onMouseOver={showInfo}
              alt="Id ea labore sint aliquip aliqua sit esse labore quis esse sit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
