import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as actions from '../actions/toolbar'
import { HOME_STATE_PATH } from '../contants';

// Material UI
import {orange400} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const styles = {
    color: {
        color: orange400,
    },
    underlineStyle: {
        borderColor: orange400,
    },
    floatingLabelStyle: {
        color: orange400,
    },
    floatingLabelFocusStyle: {
        color: orange400,
    },
};

const Content = ({model, handleSearch, handleSort}) => {
    return (
        <div className="search-bar">
            <MuiThemeProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <TextField
                                hintText="Search..."
                                value={model.get('searchString')}
                                onChange={(event) => {handleSearch(event.target.value)}}
                                underlineFocusStyle={styles.underlineStyle}
                            />
                        </div>


                        <div className="col-sm-6 d-flex justify-content-end">
                            <SelectField
                                className="pull-right"
                                value={model.get('sort')}
                                onChange={(event, index, value) => {handleSort(value)}}
                                maxHeight={200}
                                selectedMenuItemStyle={styles.color}
                            >
                                <MenuItem value={0} primaryText="Popular" />
                                <MenuItem value={1} primaryText="A->Z" />
                                <MenuItem value={2} primaryText="Z->A" />
                            </SelectField>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    )
}

const mapStateToProps = state => ({
    model: state.getIn(HOME_STATE_PATH),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Toolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);

Toolbar.propTypes  = {
    handleSort: PropTypes.func,
    handleSearch: PropTypes.func,
    model: ImmutablePropTypes.map,
}

export default Toolbar;
