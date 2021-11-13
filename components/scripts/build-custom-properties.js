//import { choices, decisions } from '../util/tokens';
const { choices, decisions } = require('../util/tokens');
const fs = require('fs');

//console.log('>>>scipt')

const customProperties = `${JSON.stringify(choices)} ${JSON.stringify(decisions)}`;

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
