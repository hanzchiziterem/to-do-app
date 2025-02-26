// import PropTypes from 'prop-types'
const AddTodoButton = ({color, text, onClick}) => {

  return (
    <input type="submit" style={{backgroundColor: color}} onClick={onClick} className="btn" value={text} />
  )
}

// AddTodoButton.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
//     onClick: PropTypes.func.isRequired
// }

export default AddTodoButton