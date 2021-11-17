import React from 'react'
import Product from '.'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  component: Product,
  title: 'Ejemplo/ViewPort',
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      //viewports: INITIAL_VIEWPORTS,
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
        //👇 Your own default viewport
        defaultViewport: 'tablet',
      },
    },
  },
}

export const Primary = () => (
  <Product
    imageUrl="https://images.fravega.com/s250/c67fb6d07b70f6e98ed8ac71649e9067.jpg"
    imageAlt="Lavarropas 1"
    productName="Lavarropas Carga Frontal"
    productDescription="Su capacidad de lavado es de hasta 8 kilos y su potencia de centrifugado de 1200 RPM (revoluciones por minuto)."
  />
)
Primary.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
}

export const SecondaryViewPort = () => (
  <Product
    imageUrl="https://images.fravega.com/s250/c67fb6d07b70f6e98ed8ac71649e9067.jpg"
    imageAlt="Lavarropas 2"
    productName="Lavarropas Carga Frontal 2"
    productDescription="Su capacidad de lavado es de hasta 8 kilos y su potencia de centrifugado de 1200 RPM (revoluciones por minuto)."
  />
)
SecondaryViewPort.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
