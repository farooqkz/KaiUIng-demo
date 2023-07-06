import { ListViewNonKeyed, TextListItem } from "KaiUI";

export default function TabThree() {
  let list: TextListItem[] = [];
  list.push(<TextListItem tertiary="This is an example usage of non keyed ListView with 100 items" />);
  for (let i = 1; i <= 100; i++) {
    list.push(<TextListItem primary={i.toString()} />);
  }
  return (
    <ListViewNonKeyed cursor={0}>
      {list}
    </ListViewNonKeyed>
  );
}
