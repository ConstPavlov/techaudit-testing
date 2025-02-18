import React from 'react';
import {
  IPropsClassCounter,
  IStateClassCounter,
} from './class.counter.interface';

export class ClassCounter extends React.Component<
  IPropsClassCounter,
  IStateClassCounter
> {
  constructor(props: IPropsClassCounter) {
    super(props);
    this.state = {
      count: props.count,
      name: props.initialName || 'Anonimus',
      clicks: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    console.log('Setting up observers');
  }
  componentDidUpdate() {
    console.log(`Count has changed to: ${this.state.count}`);
    console.log(`Clicks have been updated: ${this.state.clicks}`);
  }
  componentWillUnmount(): void {
    console.log('Clear observers');
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>ClassCounter</h1>
        <div>Name: {this.state.name}</div>
        <div>Count: {this.state.count}</div>
        <div>Clicks: {this.state.clicks}</div>
        <button onClick={this.handleClick}>Increment Clicks</button>
      </div>
    );
  }
}
