import React, { Component } from "react";
import "./slide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Slide = ({ data }) => {
  return (
    <div className="slide__item">
      <div className="slide__image">
        <img alt="sideproject" src={`/side/${data.image}`} />
        <span
          className={`slide__tag ${data.status == "live" ? "live" : "wip"}`}
        >
          {data.status}
        </span>
      </div>
      <div className="slide__content">
        <h2>{data.title}</h2>
        <p>{data.para}</p>
        <div className="tag__container">
          {data.tags.map((document, i) => (
            <div className="tag" key={i}>
              {document}
            </div>
          ))}
        </div>
      </div>
      <div className="slide__links">
        <a rel="noopener noreferrer" target="_blank" href={data.github}>
          <span className="slide__links-gt" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href={data.liveurl}>
          <span className="slide__links-link" />
        </a>
      </div>
    </div>
  );
};

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    const settings = {
      infinite: true,
      slidesToShow: 1,
      dot: true,
      arrow: true,
      speed: 500,
      autoplay: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 999999,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className="blog_post">
        <div className="blog_post__container">
          <h3 className="blog_post__name">Side Projects</h3>
          <h6 className="blog_post__text">Most of those are WIP</h6>
          <div className="slide__items">
            <Slider {...settings}>
              {data.map(document => (
                <div key={document.id}>
                  <Slide data={document} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Slides;
