import { useState } from 'react'
import './App.css'
import ColorList from './ColorList'
import { colors } from './data/colors'
import SelectedColorDisplay from './SelectedColorDisplay'

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      <SelectedColorDisplay selectedColor={selectedColor} />
      <ColorList colorList={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </>
  )
}

export default App
