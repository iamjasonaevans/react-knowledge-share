class Example4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'This is some example text'
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({ text: e.currentTarget.value })
  }

  render () {
    return (
      <div>
        <h3>Example 4</h3>
        <div>{this.state.text}</div>
        <br/>
        <input type="text" onChange={this.onChange}/>
        <br/>
        <p>This is another component</p>
      </div>
    )
  }
}

