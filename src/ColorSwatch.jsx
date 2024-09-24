const ColorSwatch = ({ color, setSelectedColor }) => {
  return (
    <div onClick={() => setSelectedColor(color)}>{color}</div>
  )
}

export default ColorSwatch