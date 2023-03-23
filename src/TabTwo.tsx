import { ListView, TextListItem, IconListItem } from "KaiUI";

export default function TabTwo() {
  return (
    <ListView>
      <TextListItem primary="Item one" />
      <TextListItem primary="Item two" secondary="Secondary text of item two" />
      <TextListItem tertiary="An item just with a tertiary text" />
      <IconListItem primary="An icon" iconSrc="https://avatars.githubusercontent.com/u/15038218?s=80&u=ca0adbf8b162b295282caff0741a1402d7874ecc&v=4" />
    </ListView>
  );
}
