const ICONS_ASSETS_PATH = '/icons/'

const iconMap = {
  arrowRight:'arrow-right',
  home: 'home-outline', // FIXME: add this icon property
}

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = (size) => null // TODO
