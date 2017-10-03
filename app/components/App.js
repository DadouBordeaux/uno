import React from 'react'
import { SettingUpTheGame } from './game/SettingUpTheGame.js'
import { Tour } from './game/Tour.js'

export class App extends React.Component {
// Manager of the states

  constructor() {
    super();
    //this.state = settings, gameRanking
    this.state = {
      settings: undefined
    }
    this.gameSettingComplete = this.gameSettingComplete.bind(this)
  }
  gameSettingComplete(settings) {
    this.setState({
      settings: settings
    })
  }
  //TODO: function gameIsOver() : setstate with game ranking

  render() {
    //Comments are here for app's construction
    return (
      <div>
        {/* {this.state.settings ? <Tour settings={this.state.settings}/> : <SettingUpTheGame gameSettingComplete={this.gameSettingComplete}/> } */}
        {<Tour />}
      </div>
    )
  }
}
