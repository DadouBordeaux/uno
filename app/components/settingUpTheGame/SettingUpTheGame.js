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
  //Player must be initate with name, and score value
  // let player = {name: '', score: 0}

  render() {
    return (
      <div>Input players</div>
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
        {this.state.maximumScore ? <AddNewPlayer /> :
        <MaximumScorePanel
          getMaximumScore = {this.getMaximumScore}
        /> }
      </div>
    )
  }
}
