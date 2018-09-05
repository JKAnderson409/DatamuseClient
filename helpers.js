import axios from "axios";

const datamuse = {
  datamuseWords: 'https://api.datamuse.com/words?',
  datamuseSuggest: 'https://api.datamuse.com/sug?s=',

  postfix: '&max=1000&md=df&v=enwiki',
  
  /*--- Datamuse API endpoints ---*/
  // Get words by meaning
  endpoints: {
    meaningLike: 'ml=',
    comprises: 'rel_com=',
    synonym: 'rel_syn=',
    kindOf: 'rel_spc=',
    moreGeneral: 'rel_gen=',
    part: 'rel_par=',
    modifiedBy: 'rel_jja=',
    modifies: 'rel_jjb=',
    triggers: 'rel_trg=',
    antonym: 'rel_ant=',
    follower: 'rel_=bga',
    predecessor: 'rel_=bgb',
  // Get words by sound
    soundsLike: 'sl=',
    aproxRhyme: 'rel_nry=',
    rhyme: 'rel_rhy=',
    homophone: 'rel_hom=',
    consonantMatch: 'rel_cns='
  },

  /*--- User input correction ---*/
  spelledLike: 'sp='
}

const getWordsAtEndpoint = async ( url ) => {
  return await axios.get( url + datamuse.postfix )
    .then( res => {
      return res.data
    })
    .catch( error => { console.error( error ) });
};


const datamuseLookup = async ( associations, userInput ) => {
  const wordGetters = [];
  associations.forEach( association => {
    wordGetters.push( getWordsAtEndpoint(
      datamuse.datamuseWords + datamuse.endpoints[association] + userInput
    ))
  })

  await axios.all( wordGetters )
    .then( axios.spread(( ...wordDataLists) => {
      console.log(wordDataLists)
      return wordDataLists;
    }))
    .catch( error => { console.error( error ) });
}

export default datamuseLookup;
