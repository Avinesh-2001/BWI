import React, { Component } from "react";
import "./../Css/slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      autoPlay: true,
    };
    this.timeOut = null;
    this.images = [
      { image: require("./../../Assests/Bed.png") },
      { image: require("./../../Assests/OT.png") },
      { image: require("./../../Assests/Sink.png")}
    ];
  }

  componentDidMount() {
    this.setAutoPlay();
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.autoPlay !== prevState.autoPlay || this.state.current !== prevState.current) {
      clearTimeout(this.timeOut);
      this.setAutoPlay();
    }
  }

  setAutoPlay() {
    if (this.state.autoPlay) {
      this.timeOut = setTimeout(() => {
        this.slideRight();
      }, 2500);
    }
  }

  slideRight = () => {
    this.setState({
      current: this.state.current === this.images.length - 1 ? 0 : this.state.current + 1,
    });
  };

  slideLeft = () => {
    this.setState({
      current: this.state.current === 0 ? this.images.length - 1 : this.state.current - 1,
    });
  };

  handleMouseEnter = () => {
    this.setState({ autoPlay: false });
    clearTimeout(this.timeOut);
  };

  handleMouseLeave = () => {
    this.setState({ autoPlay: true });
  };

  render() {
    const { current } = this.state;

    return (
      <div className="carousel" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="carousel_wrapper">
          {this.images.map((image, index) => (
            <div
              key={index}
              className={index === current ? "carousel_card carousel_card-active" : "carousel_card"}
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          ))}
          <div className="carousel_arrow_left" onClick={this.slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={this.slideRight}>
            &rsaquo;
          </div>
          <div className="carousel_pagination">
            {this.images.map((_, index) => (
              <div
                key={index}
                className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
                onClick={() => this.setState({ current: index })}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;