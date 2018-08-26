// @flow
import React, { PureComponent } from 'react';

type Props = {
    attractions: Object,
};

class Attractions extends PureComponent<Props> {
    render () {
        return (
            <div>
                <ul className="list-attraction row list-unstyled">
                    {
                        this.props.attractions.size && this.props.attractions.map(item =>
                            <li key={item.id} className="col-md-2 col-xs-3 item">
                                <div className="content">
                                    {item.acf.image &&
                                        <img
                                            className="img-responsive"
                                            width={item.acf.image.sizes.thumbnail}
                                            height={item.acf.image.sizes.thumbnail}
                                            src={item.acf.image.sizes.thumbnail}
                                            alt={item.name} />
                                    }
                                    <h3>{item.name}</h3>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Attractions;