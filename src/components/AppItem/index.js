// Write your code here
import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {imageUrl, appName} = AppDetails

  return (
    <li className="listContainer">
      <img src={imageUrl} alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppItem
