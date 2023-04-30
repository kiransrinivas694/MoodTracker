import './index.css'

const Button = props => {
  const {name, onMoodButtonClick, isMoodActive} = props

  const isActive = isMoodActive === true ? 'active' : 'inactive'

  const onMoodClick = () => {
    onMoodButtonClick(name)
  }

  return (
    <button type="button" onClick={onMoodClick} className={`${isActive}`}>
      {name}
    </button>
  )
}

export default Button
