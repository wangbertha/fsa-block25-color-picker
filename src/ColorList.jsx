import ColorSwatch from "./ColorSwatch"

const ColorList = ({ colorList }) => {
  return (
    <div>{colorList.map((color) => (<ColorSwatch key={color} color={color} />))}</div>
  )
}

export default ColorList