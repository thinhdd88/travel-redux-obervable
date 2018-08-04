import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './Header';

describe('Header', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});
