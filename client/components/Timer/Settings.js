import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingsContext from './SettingsContext'

export default function Settings() {
  const settingsInfo = useContext(SettingsContext)
  return (
    <div>
      <label className="timer-label">Timer: {settingsInfo.timer}:00</label>
      <ReactSlider
        className="timer-slider"
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.timer}
        onChange={newValue => settingsInfo.setTimer(newValue)}
        min={1}
        max={10}
      />
    </div>
  )
}
