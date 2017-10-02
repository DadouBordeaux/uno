import React from 'react'
import { SettingUpTheGame } from './settingUpTheGame/SettingUpTheGame.js'

export class App extends React.Component {
// Manager of the states
// is seetingupthegame is complete, display tour, then Result
//state: settingupthegame is true, maximumScore reached is true, display result
  render() {
    return (
      <div>
        <SettingUpTheGame />
        <div>Tour</div>
        <div>Result</div>

      </div>
    )
  }
}
