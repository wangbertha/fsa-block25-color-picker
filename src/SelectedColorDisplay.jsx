import './SelectedColorDisplay.css'

const SelectedColorDisplay = ({ selectedColor }) => {
  if (!selectedColor) {
    return (
      <p className='selected-color-display'>Currently selected: <span className='initial-message'>Please select a color</span></p>
    )
  }

  return (
    <p className='selected-color-display'>Currently selected: {selectedColor}</p>
  )
}

export default SelectedColorDisplay