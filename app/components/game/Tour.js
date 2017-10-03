import React from 'react'

export class Tour extends React.Component {
  constructor(props) {
    super(props);
    //For the moment, works with a defined objet and not the props
    //Initiate settings
    // this.state = {
    //   maximumScore: props.maximumScore
    //   players: props.players,
    // }
    //Hardcoding for testing
    this.state = {
      maximumScore: 300,
      players: [
        {name: "Dadou", score: 0},
        {name: "Toto", score: 0}
        {name: "Bob", score: 0}
      ]
    }
  }

  render() {
    return (
      <div>
        {/* TODO:  */}
        <div>Display a panel with all the player</div>
        <div>User selects the winner of the tour</div>
        <div>For each player an input is displayed to write penalty points (PP)</div>
        <div>When all player have penalty point, Display a panel with all the player and so on</div>
      </div>
    )
  }
}
