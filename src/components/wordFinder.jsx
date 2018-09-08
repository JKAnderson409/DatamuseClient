import React, { PureComponent } from 'react';

import WordList from './WordList.jsx';
import { lookupWords } from '../../helpers.js';

export default class WordLookup extends PureComponent {
  constructor () {
    super();
    this.state = {
			textInput: '',
			lastSearchInput: '',
      words: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleLookup = this.handleLookup.bind(this);
  }

  handleInput ( e ) {
    e.preventDefault();
    this.setState({
      textInput: e.target.value
		});

  }
	
	async handleLookup ( e ) {
		const selectedOptions = [];
    for ( let category in this.props.associations ) {
      for ( let option in this.props.associations[category] ) {
        let optionValue = this.props.associations[category][option];
        if ( optionValue ) {
          selectedOptions.push( option );
        }
      }
		}
		
		await lookupWords( selectedOptions, this.state.textInput )
			.then( newWords => {
				this.setState({
					words: newWords
				});
			});
	}

  render() {
    return (
      <div className="box word-finder">
        <hr />
				<input
					type="text"
					autoFocus="autofocus"
					onChange={ this.handleInput }
					onInput={ this.handleSubmit }
					placeholder={ 'type in a word and select search criteria...' }
				/>

				<button 
					type="submit"
					onClick={ this.handleLookup }
					style={{
						'minHeight': '30px'
					}}
				>
					Search
				</button>
				
        <hr className="underline" />
        <hr />
				<br />
				<WordList 
					allWordData={ this.state.words }
				/>
      </div>
    );
  }
}
