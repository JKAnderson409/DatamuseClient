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

const lookupWords = ( selectedOptions ) => {
  const endpointsRequested = [];
  for ( let option of selectedOptions ) {
    console.log( option );
    endpointsRequested.push(datamuse[option]);
  }
  console.log( endpointsRequested );
};

const getWordsAtEndpoint = async ( url ) => {
  return await axios.get( url + datamuse.postfix )
    .then( res => {
      console.log(res.data);
      return res.data; 
    })
    .catch( error => { console.error( error ); });
};

const datamuseLookup = async ( associations, userInput ) => {
  const wordGetters = [];
  associations.forEach( association => {
    wordGetters.push( getWordsAtEndpoint(
      datamuse.datamuseWords + datamuse.endpoints[association] + userInput
    ));
  });

  await axios.all( wordGetters )
    .then( axios.spread(( ...wordDataLists) => {
      console.log(wordDataLists);
      return wordDataLists;
    }))
    .catch( error => { console.error( error ); });
};

export {getWordsAtEndpoint, lookupWords};
