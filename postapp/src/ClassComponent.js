import { Component } from 'react';

class ClassComponent extends Component {
  componentDidMount() {
    console.log('mounted');
    let id = setInterval(() => {
      console.log(Math.random());
    }, 2000);
    this.setState({ intId: id });
  }
  componentDidUpdate() {
    console.log('updated');
  }
  componentWillUnmount() {
    console.log('removed');
    clearInterval(this.state.intId);
  }

  state = {
    y: 0,
    x: 0,
    intId: null,
  };
  render() {
    return (
      <div
        onClick={() => {
          this.setState({ x: this.state.x + 1 });
        }}
      >
        Class: {this.state.x} {this.props.a}
      </div>
    );
  }
}

export default ClassComponent;
