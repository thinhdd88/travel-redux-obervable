import React, {PureComponent} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Slider from "react-slick";
import './bannerSlider.css'

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export class BannerSlider extends PureComponent {
    render() {
        const banners = this.props.items.toJS();
        return (
            <div id="home-banner" className="slick banner-slider">
                <Slider {...settings}>
                    {
                        banners.map((val, key) => {
                            return (
                                <picture key={key}>
                                    <source media="(min-width: 601px)" srcSet={val.lg} />
                                    <img src={val.sm} alt="" />
                                </picture>
                            );
                        })
                    }
                </Slider>
            </div>
        );
    }
}

BannerSlider.propTypes  = {
    items: ImmutablePropTypes.list,
}