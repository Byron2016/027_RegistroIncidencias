//import { choices, decisions } from '../util/tokens';
const { choices, decisions } = require('../util/tokens');
const fs = require('fs');

//console.log('>>>scipt')

function buildCustomProperties(){
  const choicesKeys = Object.keys(choices)

  // choicesKeys.reduce((prev, curr) => {

  // }, '')

  // const customProperties = `${JSON.stringify(choices)} ${JSON.stringify(decisions)}`;

  let choicesStr = ''

  if(typeof choices['colors'] == 'object'){
    const colorkeys = Object.keys(choices['colors'])

    choicesStr = colorkeys.reduce((prev, curr) => {
      if(typeof choices['colors'][curr] == 'object') {
        const brandkeys = Object.keys(choices['colors'][curr])
        // brandkeys.reduce((prev, curr) => {

        // }, '')
        return brandkeys;
      }
     }, '')
  }

  //const customProperties = choicesKeys
  const customProperties = choicesStr

  const data = `
  :root {
    ${customProperties}
  }
  `
  fs.writeFile('./util/tokens.css', data, 'utf8', function(error){
    if(error){
      return console.error(error);
    }
  });
}

buildCustomProperties();


