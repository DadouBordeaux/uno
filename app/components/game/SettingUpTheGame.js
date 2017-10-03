import React from 'react'

class AddMaximumScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maximumScore: 0 }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendMaximumScore = props.getMaximumScore;
  }
  handleChange(e) {
    this.setState({
      maximumScore: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.sendMaximumScore(this.state.maximumScore)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrez le score maximum a atteindre:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
        </form>
      </div>
    )
  }
}

class AddNewPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendAllPlayers = props.getAllPlayers
    this.playersEditionIsFinished = this.playersEditionIsFinished.bind(this)
  }
  handleChange(e) {
    this.setState({ name: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    const newPlayer = {
      name: this.state.name,
      score: 0
    }
    this.setState((prevState) => ({
      players: prevState.players.concat(newPlayer),
      name: ''
    })
    )
  }
  playersEditionIsFinished() {
    this.sendAllPlayers(this.state.players)
  }

  render() {
    return (
      <div>
        <div>
          {this.state.players.map((player, i) => <div key={i}>{player.name}</div>)}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrez le nom des joueurs:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <button>Ajouter</button>
        </form>
        <button onClick={this.playersEditionIsFinished}>Démarrer la partie</button>
      </div>
    )
  }
}

export class SettingUpTheGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maximumScore: undefined,
      players: undefined
    }
    this.getMaximumScore = this.getMaximumScore.bind(this)
    this.getAllPlayers = this.getAllPlayers.bind(this)
    this.gameSettingIsComplete = props.gameSettingComplete;
  }
  componentDidUpdate() {
    if((this.state.maximumScore) && (this.state.players)) {
      this.gameSettingIsComplete(this.state)
      //Reinit the component to it's birth state, TODO: Check if relevant to save maximumScore and players here
      this.setState({
        maximumScore: undefined,
        players: undefined
      })
    }
  }
  getMaximumScore(score) {
    this.setState({
      maximumScore: score
    })
  }
  getAllPlayers(players) {
    this.setState({
      players: players
    })
  }

  render() {
    return (
      <div>
        {this.state.maximumScore ? <AddNewPlayer getAllPlayers={this.getAllPlayers}/> :
        <AddMaximumScore
          getMaximumScore = {this.getMaximumScore}
        /> }
      </div>
    )
  }
}
