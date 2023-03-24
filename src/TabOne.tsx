import { Component } from "inferno";
import { Avatar, TextListItem, IconListItem, ListView, Separator } from "KaiUI";

interface ITabOneState {
  cursor: number;
}

export default class TabOne extends Component {
  constructor(props: null) {
    super(props);
    this.state = {
      cursor: 0,
    };
  }
  render() {
    return (
      <ListView onChangeCb={(cursor) => this.setState({ cursor: cursor })}>
        <TextListItem tertiary="For these IconListItems, secondary texts are names and primary texts are some descriptions" />
        <TextListItem tertiary="Their 'icons' are Avatar components which show presence/online status of people next to their avatar picture" />
        <Separator text="People" />
        <IconListItem
          icon={
            <Avatar
              src="https://avatars.githubusercontent.com/u/15038218?v=4"
              online="offline"
            />
          }
          secondary="Farooq Karimi Zadeh"
          primary="This is fake. He is online playing Minetest for sure!"
        />
        <IconListItem
          icon={
            <Avatar
              src="https://avatars.githubusercontent.com/u/18725968?v=4"
              online="online"
            />
          }
          secondary="Simon Laux"
          primary="This is fake. He has disconnected the connection and is watching ANIME!"
        />
        <IconListItem
          icon={
            <Avatar
              src="https://avatars.githubusercontent.com/u/64679557?s=64&v=4"
              online="unavailable"
            />
          }
          secondary="BananaHackers"
          primary="Both Simon and Farooq are members of the BananaHackers community and also members of their council"
        />
        <TextInput placeholder="Enter whatever you wish" />
      </ListView>
    );
  }
}
