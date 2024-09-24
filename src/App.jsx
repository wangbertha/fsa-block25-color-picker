import './App.css'
import ColorList from './ColorList'
import { colors } from './data/colors'
import SelectedColorDisplay from './SelectedColorDisplay'

function App() {

  return (
    <>
      <SelectedColorDisplay selectedColor={"yellow"} />
      <ColorList colorList={colors}/>
    </>
  )
}

export default App
