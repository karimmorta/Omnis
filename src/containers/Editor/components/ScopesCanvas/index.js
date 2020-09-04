import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const ScopesCanvas = ({scopes}) => (
  <View style={styles.container}  pointerEvents='box-none'>
    {
      scopes.map(({ pixels, name }) => {
        // pixels is an array of objects {x, y, pixelNumber}

        const sortedPixels = pixels.sort((a, b) => a.pixelNumber - b.pixelNumber)
        const inversed = sortedPixels[0].x > sortedPixels[pixels.length - 1].x
        // let pixelA, pixelB
        // if (inversed) {
          // pixelA = sortedPixels[pixels.length - 1].pixelNumber
          // pixelB = sortedPixels[0].pixelNumber
        // } else {
        // }
        const pixelA = sortedPixels[0].pixelNumber
        const pixelB = sortedPixels[pixels.length - 1].pixelNumber
        const quotientA = Math.floor(pixelA / 8)
        const remainderA = (pixelA / 8) - quotientA
        const xAInteger = pixelA - quotientA * 8
        const xAInPixels = (xAInteger - 1) * 60
        const yAInPixels = quotientA * 60

        const quotientB = Math.floor(pixelB / 8)
        var remainderB = (pixelB / 8) - quotientB
        remainderB = remainderB == 0 ? 1 : remainderB
        const xBInteger = pixelB - quotientB * 8
        const yBInteger = Math.ceil(pixelB / 8)
        var xBInPixels = remainderB * 480 - xAInPixels
        const yBInPixels = yBInteger * 60 - yAInPixels


        // var actualShape = {
        //   a: {
        //     x: inversed ? (xBInteger - 1) * 60 : xAInPixels,
        //     y: inversed ? (xBInPixels < 0 ? yBInPixels : yBInPixels + 60) : yAInPixels
        //   },
        //   b: {
        //     x: (1 - (remainderB == 1 ? 0 : remainderB)) * 480 + 60,
        //     y: yBInPixels + yAInPixels + 60
        //   }
        // }
        //
        // var shownShape = {
        //   a: {
        //     x: inversed ? (xBInteger - 1) * 60 : xAInPixels,
        //     y: inversed ? (xAInPixels < 0 ? yAInPixels - 60 : yAInPixels) : yAInPixels
        //   },
        //   b: {
        //     x: inversed ? (xAInteger + 1 - xBInteger) * 60  : xBInPixels,
        //     y: inversed ? (xAInPixels < 0 ? yBInPixels + 60 : yBInPixels) : yBInPixels
        //   }
        // }

        return (
          <View
            style={{
              zIndex: 999,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: inversed ? (xBInteger - 1) * 60 : xAInPixels,
              right: inversed ? (xAInPixels < 0 ? 0 : xAInPixels) : 0,
              top: inversed ? (xAInPixels < 0 ? yAInPixels - 60 : yAInPixels) : yAInPixels,
              width: inversed ? (xAInteger + 1 - xBInteger) * 60  : xBInPixels,
              // right: (1 - remainderB) * 480,
              height: inversed ? (xAInPixels < 0 ? yBInPixels + 60 : yBInPixels) : yBInPixels,
              backgroundColor: "rgba(0, 128, 0, 0.5)"
            }}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>{name}</Text>
          </View>
          )
        }
      )
    }
  </View>
)

export default ScopesCanvas
