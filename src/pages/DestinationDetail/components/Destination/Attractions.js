import React, {PureComponent} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes';

class Attractions extends PureComponent {
	render() {

		return(
			<div>
				<ul className="list-attraction row list-unstyled">
					{
                        this.props.attractions.size && this.props.attractions.toJS().map( (item, key) => {
							return (
								<li key={key} className="col-md-2 col-xs-3 item" >
									<div className="content">
										{item.acf.image && (<img 
											className="img-responsive"
											width={item.acf.image.sizes.thumbnail} height={item.acf.image.sizes.thumbnail}
											src={item.acf.image.sizes.thumbnail} alt={item.name} />)}
										<h3>{item.name}</h3>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

Attractions.propTypes  = {
    attractions: ImmutablePropTypes.map.isRequired,
}

export default Attractions;


