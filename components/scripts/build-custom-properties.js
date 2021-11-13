//import { choices, decisions } from '../util/tokens';
const { choices, decisions } = require('../util/tokens');
const fs = require('fs');

//console.log('>>>scipt')

function transformTokens(parentKey, object){
  
  const objectkeys = Object.keys(object)

  return objectkeys.reduce((tokensTransformed, objectkey) => {
    const value = object[objectkey]

    if(typeof value === 'object'){
      const customProperty = parentKey ? `${parentKey}-${objectkey}` : `${objectkey}`
      return `
        ${tokensTransformed}
        ${transformTokens(`${customProperty}`, value)}
      `
    }

    //const customProperty = parentKey ? `--${parentKey}-${objectkey}` : `${parentKey}-${objectkey}`
    //${customProperty}: ${value};

    return `
      ${tokensTransformed}
      --${parentKey}-${objectkey}: ${value};
    `

  }, '')

  
}

function buildCustomProperties(){
  const caso = 'Recursivo'
  let customProperties_Final = ''
  
  if(caso == 'NoRecursivo'){
    const choicesKeys = Object.keys(choices)
    let choicesStr = ''
    if(typeof choices['colors'] == 'object'){
      const colorkeys = Object.keys(choices['colors'])
      choicesStr = colorkeys.reduce((prev, curr) => {
        if(typeof choices['colors'][curr] == 'object'){
          const brandkeys = Object.keys(choices['colors'][curr])
          const colorsStr = brandkeys.reduce((prevBrandkeys, currBrandkeys) =>{
            const value = choices['colors'][curr][currBrandkeys]
            return `
              ${prevBrandkeys}
              --colors-${curr}-${currBrandkeys}: ${value};
            `;
          },'')
          //return brandkeys;
          return `
            ${prev}
            ${colorsStr}
          `
        } else {
          return `
            ${prev}
            --colors-${curr}: ${choices['colors'][curr]};
          `
        }
      },'')
    }
    //const customProperties = choicesKeys
    const customProperties = choicesStr
    customProperties_Final = customProperties
    // const data = `
    //   :root {
    //     ${customProperties}
    //   }
    // `


  }
  if(caso == 'Recursivo'){
    const choicesStr = transformTokens(null, choices)
    const decisionsStr = transformTokens(null, decisions)
    const customProperties = `${choicesStr}${decisionsStr}`
    customProperties_Final = customProperties
  }


  const data = `
    :root {
      ${customProperties_Final}
    }
    `

  fs.writeFile('./util/tokens.css', data, 'utf8', function(error){
    if(error){
      return console.error(error);
    }
  });
}

buildCustomProperties();


