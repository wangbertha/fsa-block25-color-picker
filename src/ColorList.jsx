import ColorSwatch from "./ColorSwatch"

const ColorList = ({ colorList, setSelectedColor }) => {
  return (
    <div>{colorList.map((color) => (<ColorSwatch key={color} color={color} setSelectedColor={setSelectedColor} />))}</div>
  )
}

export default ColorList