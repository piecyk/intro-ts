import React from 'react';

class LiveLogger extends React.Component<{}, {messages: string[]}> {
  prevConsole: any;
  constructor(props: {}) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.prevConsole = window.console.log;
    window.console.log = (...args: string[]) => {
      this.prevConsole(...args);
      this.setState({messages: args});
    };
  }
  componentWillUnmount() {
    window.console.log = this.prevConsole;
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div style={{color: '#000', textAlign: 'left', padding: 10}}>
        <h2>Live from console.log</h2>
        <div>> {this.state.messages.join(' ')}</div>
      </div>
    );
  }
}

export default LiveLogger;
