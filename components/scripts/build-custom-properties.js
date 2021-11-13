//import { choices, decisions } from '../util/tokens';
const { choices, decisions } = require('../util/tokens');
const fs = require('fs');

//console.log('>>>scipt')

function transformTokens(parentKey, object){
  
  const objectkeys = Object.keys(object)

  return objectkeys.reduce((tokensTransformed, objectkey) => {
    const value = object[objectkey]

    if(typeof value == 'object'){
      return `
        ${tokensTransformed}
        --${transformTokens(`${parentKey}-${objectkey}`, value)}
      `
    }

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
    const choicesKeys = Object.keys(choices)
    const choicesStr = transformTokens('colors', choices.colors)
    const customProperties = choicesStr
    customProperties_Final = customProperties
    // const data = `
    //   :root {
    //     ${customProperties}
    //   }
    // `
  }
  // const choicesKeys = Object.keys(choices)
  // let choicesStr = ''
  // if(typeof choices['colors'] == 'object'){
  //   const colorkeys = Object.keys(choices['colors'])

  //   choicesStr = colorkeys.reduce((prev, curr) => {
  //     if(typeof choices['colors'][curr] == 'object') {
  //       const brandkeys = Object.keys(choices['colors'][curr])
  //       const colorsStr = brandkeys.reduce((prevBrandkeys, currBrandkeys) => {
  //         const value = choices['colors'][curr][currBrandkeys]
  //         return `
  //         ${prevBrandkeys}
  //         --colors-${curr}-${currBrandkeys}: ${value};
  //         `;
  //       }, '')
  //       //return brandkeys;
  //       return `
  //       ${prev}
  //       ${colorsStr}
  //       `
  //     } else {
  //       return `
  //       ${prev}
  //       --colors-${curr}: ${choices['colors'][curr]};
  //       `
  //     }
  //   }, '')
  // }

  // //const customProperties = choicesKeys
  // const customProperties = choicesStr

  // const data = `
  // :root {
  //   ${customProperties}
  // }
  // `
  // fs.writeFile('./util/tokens.css', data, 'utf8', function(error){
  //   if(error){
  //     return console.error(error);
  //   }
  // });

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


