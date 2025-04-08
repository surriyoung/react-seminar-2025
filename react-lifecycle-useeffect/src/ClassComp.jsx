import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("ClassComp ::: 1. Mounted");
  }

  componentDidUpdate() {
    console.log("ClassComp ::: 2. Updated");
  }

  componentWillUnmount() {
    console.log("ClassComp ::: 3. Unmounted");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("ClassComp ::: -- Rendering --");
    return (
      <div>
        <h2>Class Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increase</button>
      </div>
    );
  }
}

export default ClassComp;
