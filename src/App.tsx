import { Component } from "inferno";
import { TabView, TextListItem, SoftKey, DropDownMenu, toast } from "KaiUI";

export default class App extends Component {
  private tabs: Array<string>;

  constructor(props) {
    super(props);
    this.tabs = ["Tab 1", "Tab 2"];
  }

  render() {
    return (
      <p>
        Hello World! This has to be filled!
      </p>
    );
  }
};
