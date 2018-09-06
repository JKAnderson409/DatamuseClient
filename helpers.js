import axios from "axios";

const datamuse = {
  words: 'https://api.datamuse.com/words?',
  datamuseSuggest: 'https://api.datamuse.com/sug?s=',
  postfix: '&max=1000&md=df&v=enwiki',
  spelledLike: 'sp=',

  'definition': 'ml=',
  'synonym': 'rel_syn=',
  'antonym': 'rel_ant=',
  'comprises': 'rel_com=',
  'kind of': 'rel_spc=',
  'more general': 'rel_gen=',

  'part': 'rel_par=',
  'modified by': 'rel_jja=',
  'modifies': 'rel_jjb=',
  'triggers': 'rel_trg=',
  'follower': 'rel_bga=',
  'predecessor': 'rel_bgb=',

  'sounds like': 'sl=',
  'assonant rhyme': 'rel_rhy=',
  'consonant rhyme': 'rel_cns=',
  'approximate rhyme': 'rel_nry=',
  'homophone': 'rel_hom='

};

const lookupWords = async ( selectedOptions, textInput = 'smith' ) => {
  const endpointsRequested = [];
  for ( let option of selectedOptions ) {
    endpointsRequested.push(
      getWordsAtEndpoint( datamuse[option], textInput)
    );
  }

	return await axios.all( endpointsRequested )
    .then( axios.spread( ( ...wordData ) => {
      return wordData.flat();
    }))
    .catch( error => { console.error( error ); });
};

const getWordsAtEndpoint = ( endpoint, wordToLookUp ) => {
  return axios.get( datamuse.words + endpoint + wordToLookUp )
    .then( res => ( res.data ))
    .catch( error => { console.error( error ); });
};

export {
  getWordsAtEndpoint, 
  lookupWords
};
