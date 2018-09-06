import React from 'react';

export default (props) => {
	console.log(props.words[0]);
	return (
		<table>
			<thead>
				<tr>
					<td>word</td>
					<td>frequency (per 1 million words)</td>
				</tr>
					<hr />
			</thead>
			<tbody>
				{ props.words.map( ( word, i ) => (
					<tr key={ i }>
						<td>{ word.word }</td>
						<td>{ word.score / 10000 }</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
