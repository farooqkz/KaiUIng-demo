import { ListView, TextListItem, IconListItem, Button } from "KaiUI";
import farooqkzAvatar from "./farooqkz.png";

export default function TabTwo() {
  return (
    <ListView cursor={0}>
      <TextListItem primary="Item one" />
      <TextListItem primary="Item two" secondary="Secondary text of item two" />
      <TextListItem tertiary="An item just with a tertiary text" />
      <IconListItem
        primary="primary text of IconListItem"
        secondary="secondary text of ILI"
        iconSrc={farooqkzAvatar}
      />
      <Button text="Hi I am a button!" />
    </ListView>
  );
}
