import './index.css'

const TipsData = props => {
  const {data} = props
  const content = (
    <ul className="tips-list">
      {data.map(each => (
        <li className="each-tip-list">
          <hr />
          <h1 className="tip-heading">{each.heading} :</h1>
          <p className="tip-text">{each.text}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      <hr />
      <h1 className="tips-main-heading">
        Follow These Tips To Gain More Control Over Your Mood
      </h1>
      {content}
    </div>
  )
}

export default TipsData
