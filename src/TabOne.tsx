import { Component } from "inferno";


interface ITabOneState {
  cursor: number;
};

export default class TabOne extends Component {
  constructor(props: null) {
    super(props);
    this.state = {
      cursor: 0,
    };
  }
  render() {
    
  }
}
