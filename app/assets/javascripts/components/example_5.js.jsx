class Example5 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({ name: e.currentTarget.value })
  }

  render () {
    return (
      <div>
        <h3>Example 5</h3>
        <p>Hello {this.state.name}</p>
        <Example5TextBox onChange={this.onChange}/>
      </div>
    )
  }
}

class Example5TextBox extends React.Component {
  render () {
    return (
      <input type="text" onChange={this.props.onChange}/>
    )
  }
}
