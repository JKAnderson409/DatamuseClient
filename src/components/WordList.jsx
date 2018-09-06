import React from 'react';

import Word from './Word.jsx';

export default (props) => {
	return (
		<div className="wordList">
			{
				props.allWordData.map(( wordData, i )  => (
					<Word
						key={ i }
						wordData={ wordData }
					/>
				)) 
			}
		</div>
	);
};
