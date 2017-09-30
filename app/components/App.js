import React from 'react'

class MaximumScorePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendMaximumScore = props.getMaximumScore;
  }
  handleChange(e) {
    this.setState({
      score: e.target.value
    })
  }
  handleSubmit() {
    this.sendMaximumScore(this.state.score)
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


//rename to Modality of the game class name or equivalent
export class App extends React.Component {
  constructor() {
    super();
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
        {this.state.maximumScore ? <div>Input players</div> :
        <MaximumScorePanel
          getMaximumScore = {this.getMaximumScore}
        /> }
      </div>
    )
  }
}
