import React, { useMemo, useEffect, useState } from 'react';
import {
  Text, View,TouchableOpacity, TextInput, Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ScopesCanvas from './components/ScopesCanvas'
import LinesCanvas from './components/LinesCanvas'
import LinesPanel from './components/LinesPanel'
import ScopesPanel from './components/ScopesPanel'
import PixelsPanel from './components/PixelsPanel'

import AppHeader from '@components/AppHeader';
import Square from '@components/Square';
import Pixel from '@components/Pixel';
import Switch from '@components/Switch';
import Colors from '@shared/Colors';

import Styles from '@shared/Styles';
import styles from './styles';

const lastLineIndex = 56

const Editor = ({ navigation, route }) => {

  const [squares, setSquares] = useState([])
  const [toggledPixels, togglePixel] = useState([])
  const [lines, setLines] = useState([])
  const [scopes, setScopes] = useState([])
  const [circle, setCircle] = useState({})
  const [newLine, setNewLine] = useState(true)
  const [newScope, setNewScope] = useState(false)
  const [newLineXY, setNewLineXY] = useState()
  const [endLineXY, setEndLineXY] = useState()
  const [currentMode, setCurrentMode] = useState('preview')
  const [currentScope, addToCurrentScope] = useState([])

  useEffect(() => {
    const _squares = []
    for(let i = 0; i < 64; i++) {
      _squares.push(i)
    }
    setSquares(_squares)
  }, [])
  const id = useMemo(() => route.params.id, [route])

  function setCurrentModeHandler(mode) {
    setCurrentMode(mode)
  }

  function _togglePixel(pixelNumber) {
    if (!toggledPixels.includes(pixelNumber)) {
      togglePixel(oldArray => [...oldArray, pixelNumber]);
    } else {
      togglePixel(oldArray => oldArray.filter(storedPixel => storedPixel != pixelNumber));
    }
  }

  function _addToCurrentScope(pixelNumber, e) {
    const x = e.nativeEvent.pageX
    const y = e.nativeEvent.pageY

    const pixelData = {
      x,
      y,
      pixelNumber
    }
    if (!currentScope.map(scope => scope.pixelNumber).includes(pixelNumber)) {
      setNewScope(true)
      addToCurrentScope(oldArray => [...oldArray, pixelData]);
    } else {
      addToCurrentScope(oldArray => oldArray.filter(storedPixel => storedPixel.pixelNumber != pixelData.pixelNumber));
    }
  }

  function createScope() {
    const newScope = {
      id: scopes.length + 1,
      name: 'Nouveau scope',
      pixels: currentScope
    }
    setScopes(oldScopes => [...oldScopes, newScope]);
    addToCurrentScope([])
    setNewScope(false)

  }

  function createNewLine(e) {
    if (lines.length > 7) {
      return null
    }
    if (newLine) {
      const { x: startLineX, y: startLineY } = createNewLineStart(e)

      setCircle({x: startLineX, y: startLineY})

    } else {
      const { x: endLineX, y: endLineY } = createNewLineEnd(e)
      setLines(oldLines => [...oldLines, {
        id: lines.length + 1,
        label: lines.length + 1,
        xA: newLineXY.x,
        yA: newLineXY.y,
        xB: endLineX,
        yB: endLineY
      }])
      setNewLine(true)
    }
  }

  function createNewLineStart(e) {
    setNewLine(false)
    const startLineCoordinates = {
      x: e.nativeEvent.locationX,
      y: e.nativeEvent.locationY
    }
    setNewLineXY(startLineCoordinates)
    return startLineCoordinates
  }


  function createNewLineEnd(e) {
    const endLineCoordinates = {
      x: e.nativeEvent.locationX,
      y: e.nativeEvent.locationY
    }
    setEndLineXY(endLineCoordinates)
    return endLineCoordinates
  }

  function removeLine(line) {
    setLines(oldLines => oldLines.filter(storedLine => storedLine != line));
  }
  function removeScope(scope) {
    setScopes(oldScopes => oldScopes.filter(storedScope => storedScope != scope));
  }

  function changeLineLabel(newLabel, line) {
    setLines(lines.map(oldLine =>
      oldLine.id === line.id
      ? {...oldLine, label: newLabel}
      : oldLine
    ))
  }


  function changeScopeLabel(newLabel, scope) {
    setScopes(scopes.map(oldScope =>
      oldScope.id === scope.id
      ? {...oldScope, name: newLabel}
      : oldScope
    ))
  }

  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
      <View style={[Styles.titleWrap, { marginTop: hp('4%')}]}>
        <Text style={[Styles.titleText, Styles.fontBold]}>EDITOR</Text>
        <Text style={Styles.titleText}>{id}</Text>

      </View>
     <View style={styles.content}>
       <View style={styles.leftWrap}>
         <PixelsPanel
            toggledPixels={toggledPixels}
            currentMode={currentMode}
            setCurrentMode={setCurrentMode}
         />
       </View>
       <View style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.squareWrap}>
          {
            squares.map((s, index) =>
            <Pixel
              toggled={toggledPixels.includes(index + 1)}
              inScope={currentScope.map(scope => scope.pixelNumber).includes(index + 1)}
              key={index}
              index={index}
              currentMode={currentMode}
              togglePixel={() => _togglePixel(index + 1)}
              toggleScope={(e) => _addToCurrentScope(index + 1, e)}
              style={{
              borderRightWidth: (index + 1) % 8 ? 0 : 1,
              borderBottomWidth: index >= lastLineIndex ? 1 : 0
            }} />)
          }
          <ScopesCanvas scopes={scopes}/>
          <LinesCanvas
            lines={lines}
            currentMode={currentMode}
            createNewLine={createNewLine}
            newLine={newLine}
            circle={circle}
          />
        </View>
       </View>

       <View style={styles.rightWrap}>
          <LinesPanel
            lines={lines}
            currentMode={currentMode}
            changeLineLabel={changeLineLabel}
            removeLine={removeLine}
            setCurrentMode={setCurrentMode}
          />
          <ScopesPanel
            scopes={scopes}
            currentMode={currentMode}
            setCurrentMode={setCurrentMode}
            newScope={newScope}
            createScope={createScope}
            currentScope={currentScope}
            changeScopeLabel={changeScopeLabel}
            removeScope={removeScope}
          />
       </View>
     </View>
   </View>
  );
};

export default Editor;
