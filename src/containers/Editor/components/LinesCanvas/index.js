import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import Svg, { Line, Circle } from 'react-native-svg';

const LinesCanvas = ({ lines, currentMode, createNewLine, newLine, circle }) => (
  <Svg
    pointerEvents={currentMode == 'lines' ? 'box-only' : 'box-none'}
    onPressOut={(e) => currentMode == 'lines' ? createNewLine(e) : console.log('')}
    style={{position: 'absolute'}}
    height="480" width="480"
  >
    {
      !newLine && <Circle cx={circle?.x} cy={circle?.y} r="10" fill="#ED553B" />
    }
    {
      lines.map(({xA, xB, yA, yB, label}) => {
        return (
          <>
            <Text style={{
              position: 'absolute',
              left: xA,
              top: yA,
              fontSize: 20,
              fontWeight: 'bold'
            }}>{label}</Text>

            <Line
              style={{zIndex: 999}}
              x1={xA}
              y1={yA}
              x2={xB}
              y2={yB}
              stroke={"#ED553B"}
              strokeWidth="4"
            />
          </>

        )
      }
    )
  }
  </Svg>
)

export default LinesCanvas
