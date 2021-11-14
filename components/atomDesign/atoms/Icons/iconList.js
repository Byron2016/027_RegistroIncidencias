const iconsPath = '/icons/'

const iconList = {
  'arrow-right':'arrow-right'
  
}

const getIconsList = (type) => `${iconsPath}/${iconList[type]}.svg`

export default getIconsList;