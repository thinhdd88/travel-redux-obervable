import React from 'react'
import { Loading } from 'components/common';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Attractions from './Attractions';

export const Destination = ({data, fetching, attractions}) => {
    if(fetching) return <Loading />;
    if(!data.size) return '';

    const {acf, title, content, metadata} = data.toJS();
    const geocoder = metadata.martygeocoderlatlng && metadata.martygeocoderlatlng[0].slice(1, -1).split(',');
    const position = geocoder && {
        lat: parseFloat(geocoder[0]),
        lng: parseFloat(geocoder[1])
    };

    return (
        <div className="destination-detail">
            <div style={{ backgroundImage: `url(${acf.main_image})` }} className="destination-banner">
                <img src={acf.main_image} alt={title.redered} />
                <div className="destination-title">
                    <h1 className="container">{title.rendered}</h1>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 pull-right">
                        <div className="description"
                             dangerouslySetInnerHTML={ {__html: content.rendered} } />
                        <Attractions
                            destination={title.rendered}
                            attractions={attractions}
                            center={position} />
                    </div>
                    <div className="col-sm-3 pull-left">
                    </div>
                </div>
            </div>
        </div>
    )
};

Destination.propTypes  = {
    data: ImmutablePropTypes.map.isRequired,
    attractions: ImmutablePropTypes.map.isRequired,
    fetching: PropTypes.bool.isRequired,
}