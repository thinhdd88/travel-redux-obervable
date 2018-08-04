import React, {Fragment} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Destination } from '../components';

import  * as actions from '../actions';
import { DESTINATION_REDUCER, ATTRACTIONS_REDUCER } from '../contants';
import './style.css';


class DestinationDetail extends React.Component {
    componentDidMount(){
        const {slug} = this.props.match.params;
        this.props.getDestinationDetail(slug);
    }

    render() {
        const {model, fetching, attractionModel} = this.props;
        return (
            <Fragment>
                {<Destination fetching={fetching} data={model} attractions={attractionModel} />}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    model: state.getIn([...DESTINATION_REDUCER, 'model']),
    attractionModel: state.getIn([...ATTRACTIONS_REDUCER, 'model']),
    fetching: state.getIn([...ATTRACTIONS_REDUCER, 'fetching']),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

DestinationDetail.propTypes  = {
    model: ImmutablePropTypes.map.isRequired,
    attractionModel: ImmutablePropTypes.map.isRequired,
    getDestinationDetail: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DestinationDetail);

