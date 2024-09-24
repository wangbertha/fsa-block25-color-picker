import './SelectedColorDisplay.css'

const SelectedColorDisplay = ({ selectedColor }) => {
  return (
    <p className='selected-color-display'>Currently selected: {selectedColor}</p>
  )
}

export default SelectedColorDisplay