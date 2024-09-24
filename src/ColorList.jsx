import ColorSwatch from "./ColorSwatch"
import './ColorList.css'

const ColorList = ({ colorList, selectedColor, setSelectedColor }) => {
  return (
    <main>{colorList.map((color) => (<ColorSwatch key={color} color={color} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />))}</main>
  )
}

export default ColorList