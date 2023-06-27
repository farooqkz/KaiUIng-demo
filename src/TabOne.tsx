import { Component } from "inferno";
import { TextInput, Avatar, TextListItem, IconListItem, ListView, Separator } from "KaiUI";
import farooqkzAvatar from "url:./farooqkz.png";
import slauxAvatar from "url:./slaux.png";
import bhackersAvatar from "url:./bhackers.png";

interface ITabOneState {
  cursor: number;
}

export default class TabOne extends Component {
  public state: ITabOneState;

  constructor(props: any) {
    super(props);
    this.state = {
      cursor: 0,
    };
  }
  render() {
    return (
      <ListView cursor={this.state.cursor} onChangeCb={(cursor: number) => this.setState({ cursor: cursor })}>
        <TextListItem tertiary="For these IconListItems, secondary texts are names and primary texts are some descriptions" />
        <TextListItem tertiary="Their 'icons' are Avatar components which show presence/online status of people next to their avatar picture" />
        <Separator text="People" />
        <IconListItem
          icon={
            <Avatar
              src={farooqkzAvatar}
              online="offline"
            />
          }
          secondary="Farooq Karimi Zadeh"
          primary="This is fake. He is online playing Minetest for sure!"
        />
        <IconListItem
          icon={
            <Avatar
              src={slauxAvatar}
              online="online"
            />
          }
          secondary="Simon Laux"
          primary="This is fake. He has disconnected the connection and is watching ANIME!"
        />
        <IconListItem
          icon={
            <Avatar
              src={bhackersAvatar}
              online="unavailable"
            />
          }
          secondary="BananaHackers"
          primary="Both Simon and Farooq are members of the BananaHackers community and also members of their council"
        />
        <TextInput label="You WISH" placeholder="Enter whatever you wish" />
      </ListView>
    );
  }
}
