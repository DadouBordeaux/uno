import React from 'react'

class MaximumScorePanel extends React.Component {
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
  constructor() {
    super();
    this.state = { players: [

    ], name: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    return (
      <div>
        <div>
          {/*TODO: Define the way to handle player key problem:
            {this.state.players.map((player) => (<div>{player}</div>))}
            here, there's two key, name and score
            - use keyed fragments https://reactjs.org/docs/create-fragment.html
            - add score to each player when sending list to tour component
          */}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrez le nom des joueurs:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <button>Ajouter</button>
        </form>
      </div>
    )
  }
}




export class SettingUpTheGame extends React.Component {
  constructor() {
    super();
    //When maximumscore and players's name complete, use props call back to tell App to lauch tour
    this.state = {maximumScore: false}
    this.getMaximumScore = this.getMaximumScore.bind(this)
  }
  getMaximumScore(score) {
    this.setState({
      maximumScore: score
    })
  }
  render() {
    return (
      <div>
        <AddNewPlayer />
        {/*
          Uncomment when addNewPlayer is ready in the flow :
          {this.state.maximumScore ? <AddNewPlayer /> :
          <MaximumScorePanel
          getMaximumScore = {this.getMaximumScore}
        /> } */}
      </div>
    )
  }
}
