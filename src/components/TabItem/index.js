// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displaytext} = tabDetails

  const isActiveClassName = isActive ? 'tab-btn' : 'active-btn'

  const onClickChange = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="listContainer">
      <button
        className={isActiveClassName}
        type="button"
        onClick={onClickChange}
      >
        {displaytext}
      </button>
    </li>
  )
}
export default TabItem
