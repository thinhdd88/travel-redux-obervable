import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Masonry from 'react-masonry-component';
import _ from 'lodash';
import Destination from './Destination';
import './destinations.css';

const masonryOptions = {
    transitionDuration: '0.8s'
};

export class DestinationList extends PureComponent {
    sortData (data, sort) {
        if (sort === 1) {
            return _.orderBy(data, e => {
                return e.title.rendered;
            }, ['asc']);
        }

        if (sort === 2) {
            return _.orderBy(data, e => {
                return e.title.rendered;
            }, ['desc']);
        }

        return _.sortBy(data, 'originalIndex');
    }

    buildData (destinations, searchString, sort) {
        let items = destinations ? this.sortData(destinations.toJS(), sort) : [];
        const search = searchString ? searchString.trim().toLowerCase() : '';

        // Update list when search
        if (search.length > 0) {
            items = items.filter(l => {
                return l.title.rendered.toLowerCase().match(search);
            });
        }

        return items;
    }

    render () {
        const { destinations, searchString, sort } = this.props;
        const list = this.buildData(destinations, searchString, sort);

        return (
            <div className="container">
                {list &&
                <Masonry
                    className='list-items list-unstyled destinations-masonry row' // default ''
                    elementType='ul' // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {list.map(item => {
                        return (
                            <Destination
                                key={item.id}
                                image={item.acf.main_image}
                                title={item.title.rendered}
                                shortDescription={item.acf.short_description}
                                url={`/destination/${item.slug}`}
                                classNames='hover-effect item col-md-4 col-xs-6'
                            />
                        );
                    })}
                </Masonry>
                }
            </div>
        );
    }
}

DestinationList.propTypes = {
    sort: PropTypes.number.isRequired,
    destinations: ImmutablePropTypes.list.isRequired,
    searchString: PropTypes.string.isRequired,
};