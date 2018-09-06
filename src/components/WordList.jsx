import React from 'react';

export default (props) => {
	return (
		<div className="wordList">
			<span> word-finder results... </span>
			<hr />
			{
				props.words.map( ( word, i ) => (
					<span key={ i }>
						{ word.word }
						<hr />
							{
								( word.defs )
									?
										word.defs.map(( def, i ) => (
											<p key={ i }>
												{ def }
											</p>
										))
									:
										<p>no English definitions found...</p>
							}
						<br />
					</span>
				))
			}
		</div>
	);
};
