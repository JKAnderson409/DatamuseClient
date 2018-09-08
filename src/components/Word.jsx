import React, { Component } from 'react';

export default class Word extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDefinitions: false
		};

		this.handleShowDefinitions = this.handleShowDefinitions.bind(this);
	}

	handleShowDefinitions ( e ) {
		this.setState({
			showDefinitions: !this.state.showDefinitions
		});
	}

	render() {
		const wordData = this.props.wordData;
		return (
			<span
				onClick={ this.handleShowDefinitions }
			>
				<p>{ wordData.word }</p>
				<hr />
				{
					( this.state.showDefinitions )
					? 
						( wordData.defs )
						?
							wordData.defs.map(( def, i ) => {
								if ( i === wordData.defs.length - 1 ) {
									return (
										<span key={ i }>
											<p>{ def }</p>
											<hr />
										</span>
									);
								}
								return (
									<span key={ i }>
										<p>{ def }</p>
										<hr className="underline"/>
									</span>
								);
							})
						: 
							<span>
								<p>No definitions found...</p>
								<hr />
							</span>
					: null
				}
			</span>
		);
	}
}
