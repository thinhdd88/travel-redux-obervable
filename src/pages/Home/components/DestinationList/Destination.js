import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Destination = ({ image, title, shortDescription, url, classNames, handleClick }) => (
    <li role="presentation" className={classNames} onClick={handleClick}>
        <figure className="effect-lily">
            <img className="img-responsive" src={image} alt={title}/>
            <figcaption>
                <div>
                    <h2>{title}</h2>
                    {shortDescription &&
                        <p className="description" >
                            {shortDescription}
                        </p>
                    }
                </div>
                {url && (<Link className="nav-link" to={url}>View more</Link>)}
            </figcaption>
        </figure>
    </li>
);

Destination.defaultProps = {
    image: '',
    title: '',
    shortDescription: '',
    url: '',
    classNames: '',
};

Destination.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    url: PropTypes.string,
    classNames: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};

export default Destination;