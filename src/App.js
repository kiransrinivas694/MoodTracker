import {useState} from 'react'
import Button from './components/Button'
import TipsData from './components/TipsData'
import './App.css'

const moodTypes = ['Happiness', 'Sadness', 'Anxiety', 'Anger', 'Frustration']

const tipsData = [
  {
    type: 'Happiness',
    data: [
      {
        heading: 'Spend time with loved ones',
        text:
          'Spending time with family and friends can provide a sense of connection and joy. They can engage in activities such as having a meal together, going for a walk, or simply spending quality time together.',
      },
      {
        heading: 'Pursue hobbies or interests',
        text:
          'Engaging in activities that they enjoy can provide a sense of purpose and fulfillment. Elderly people can pursue hobbies such as gardening, painting, playing music, or reading.',
      },
      {
        heading: 'Practice gratitude',
        text:
          'Taking time to reflect on the things that they are grateful for can help elderly people appreciate the positive aspects of their lives. They can keep a gratitude journal, make a list of things they are thankful for, or simply take a moment to appreciate the present moment.',
      },
      {
        heading: 'Exercise',
        text:
          'Engaging in physical activity can help boost mood and overall well-being. Elderly people can participate in activities such as walking, yoga, or tai chi.',
      },
      {
        heading: 'Learn new things',
        text:
          'Engaging in learning can provide a sense of accomplishment and growth. Elderly people can learn new skills, take up a new hobby, or enroll in a class or workshop.',
      },
    ],
  },
  {
    type: 'Sadness',
    data: [
      {
        heading: 'Talk to someone',
        text:
          'Sometimes talking to a friend, family member, or therapist can help alleviate feelings of sadness. Its important to have a support system in place that can provide comfort and understanding.',
      },
      {
        heading: 'Practice self-care',
        text:
          'Taking care of oneself can help boost mood and provide a sense of comfort. This can include activities such as taking a warm bath, getting a massage, or engaging in relaxation techniques like deep breathing or meditation.',
      },
      {
        heading: 'Get moving',
        text:
          ' Exercise can help boost mood and provide a sense of well-being. Even a short walk can help improve mood and alleviate feelings of sadness.',
      },
      {
        heading: 'Engage in activities that bring joy',
        text:
          'Doing activities that bring pleasure and enjoyment can help counteract feelings of sadness. This can include hobbies, watching a favorite movie or TV show, or listening to music.',
      },
      {
        heading: 'Seek professional help',
        text:
          'If feelings of sadness persist or become overwhelming, it may be helpful to seek professional help. A mental health professional can provide guidance and support in managing difficult emotions.',
      },
    ],
  },
  {
    type: 'Anxiety',
    data: [
      {
        heading: 'Practice relaxation techniques',
        text:
          'Relaxation techniques like deep breathing, meditation, or progressive muscle relaxation can help reduce feelings of anxiety and promote a sense of calm.',
      },
      {
        heading: 'Get moving',
        text:
          ' Exercise can help boost mood and provide a sense of well-being. Even a short walk can help improve mood and alleviate feelings of sadness.',
      },
      {
        heading: 'Limit caffeine and alcohol',
        text:
          'Caffeine and alcohol can worsen anxiety symptoms, so its best to limit or avoid these substances.',
      },
      {
        heading: 'Practice self-care',
        text:
          'Taking care of oneself can help promote a sense of well-being and reduce feelings of anxiety. This can include activities such as taking a warm bath, getting a massage, or engaging in activities that bring pleasure and enjoyment.',
      },
      {
        heading: 'Seek professional help',
        text:
          'If feelings of anxiety persist or become overwhelming, it may be helpful to seek professional help. A mental health professional can provide guidance and support in managing anxiety and improving emotional well-being.',
      },
    ],
  },
  {
    type: 'Anger',
    data: [
      {
        heading: 'Take a break',
        text:
          'If possible, its helpful to take a break from the situation that is causing the anger. This can provide some time and space to calm down and think more clearly.',
      },
      {
        heading: 'Practice relaxation techniques',
        text:
          'Relaxation techniques like deep breathing, meditation, or progressive muscle relaxation can help reduce feelings of anxiety and promote a sense of calm.',
      },
      {
        heading: 'Practice assertiveness',
        text:
          'Assertiveness can help express feelings in a clear and respectful way. This can involve communicating feelings and needs in a calm and direct manner.',
      },
      {
        heading: 'Engage in activities that bring joy',
        text:
          'Doing activities that bring pleasure and enjoyment can help counteract feelings of anger. This can include hobbies, watching a favorite movie or TV show, or listening to music.',
      },
      {
        heading: 'Seek professional help',
        text:
          'If feelings of anger persist or become overwhelming, it may be helpful to seek professional help. A mental health professional can provide guidance and support in managing difficult emotions.',
      },
    ],
  },
  {
    type: 'Frustration',
    data: [
      {
        heading: 'Take a break',
        text:
          'If possible, take a break from the task or situation that is causing frustration. This can provide some time and space to calm down and think more clearly.',
      },
      {
        heading: 'Identify and challenge negative thoughts',
        text:
          'Negative thoughts can contribute to feelings of frustration. It can be helpful to identify negative thoughts and challenge them with more positive and realistic thoughts.',
      },
      {
        heading: 'Practice relaxation techniques',
        text:
          'Relaxation techniques like deep breathing, meditation, or progressive muscle relaxation can help reduce feelings of frustration and promote a sense of calm.',
      },
      {
        heading: 'Break the task down',
        text:
          'If the source of frustration is a complex task, try breaking it down into smaller, more manageable parts. This can make it feel less overwhelming and more achievable.',
      },
      {
        heading: 'Seek support',
        text:
          'Talking to a friend, family member, or mental health professional can provide support and help manage feelings of frustration',
      },
    ],
  },
]

const App = () => {
  const [activeMood, setActiveMood] = useState('')

  const onMoodButtonClick = mood => {
    setActiveMood(mood)
  }

  const buttonsList = (
    <ul className="buttons-list">
      {moodTypes.map(mood => {
        const isActive = activeMood === mood
        return (
          <Button
            name={mood}
            key={mood}
            isMoodActive={isActive}
            onMoodButtonClick={onMoodButtonClick}
          />
        )
      })}
    </ul>
  )

  const showSelectedMoodTips = tipsData.filter(each => each.type === activeMood)

  let dataToShow
  if (showSelectedMoodTips.length !== 0) {
    const {data} = showSelectedMoodTips[0]
    dataToShow = data
  }

  const showTips =
    activeMood === '' ? (
      <div>
        <h1>Select Your Current Mood</h1>
        <hr />
      </div>
    ) : (
      <TipsData data={dataToShow} />
    )

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="main-heading">MOOD TRACKER</h1>
        <p className="main-paragraph">
          provides recommendations based on the users mood
        </p>
        {buttonsList}
        {showTips}
      </div>
    </div>
  )
}

export default App
