import ColorSwatch from "./ColorSwatch"
import './ColorList.css'

const ColorList = ({ colorList, setSelectedColor }) => {
  return (
    <main>{colorList.map((color) => (<ColorSwatch key={color} color={color} setSelectedColor={setSelectedColor} />))}</main>
  )
}

export default ColorList