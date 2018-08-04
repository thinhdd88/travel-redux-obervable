import React, {Fragment} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BannerSlider, DestinationList } from '../components';
import { getBanners, getDestinations } from '../actions';
import Toolbar from './Toolbar';
import { HOME_STATE_PATH } from '../contants';
import './home.css';

class Home extends React.Component {
    componentDidMount(){
        this.props.getBanners();
        this.props.getDestinations();
    }

    render() {
        const {model} = this.props;
        return (
            <Fragment>
                {this.props.model.get('banners') && <BannerSlider items={model.get('banners')} />}
                <Toolbar />
                {this.props.model.get('destinations') &&
                    <DestinationList
                        destinations={model.get('destinations')}
                        searchString={model.get('searchString')}
                        sort={model.get('sort')} />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    model: state.getIn(HOME_STATE_PATH),
});

const mapDispatchToProps = dispatch => {
    return {
        getBanners: () => dispatch(getBanners()),
        getDestinations: () => dispatch(getDestinations()),
    }
};

Home.propTypes  = {
    model: ImmutablePropTypes.map,
    getBanners: PropTypes.func.isRequired,
    getDestinations: PropTypes.func.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

