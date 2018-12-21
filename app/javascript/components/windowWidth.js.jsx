import React, { createContext, Component } from 'react';

const { Provider, Consumer } = createContext();

export const WindowWidthConsumer = Consumer;

class WindowWidthWatcher extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.listener = () => {
      this.setState({ width: window.innerWidth });
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.listener);
  }

  render() {
    return <Provider value={this.state.width}>{this.props.children}</Provider>
  }
}

export default WindowWidthWatcher;
