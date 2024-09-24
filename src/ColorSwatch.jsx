import './ColorSwatch.css'

const ColorSwatch = ({ color, setSelectedColor }) => {
  return (
    <svg onClick={() => setSelectedColor(color)} className={'swatch ' + color} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" />
    </svg>
  )
}

export default ColorSwatch