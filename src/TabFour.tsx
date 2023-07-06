import { ListViewKeyed, TextListItem } from "KaiUI";

export default function TabFour() {
  let list: TextListItem[] = [];
  list.push(<TextListItem tertiary="This is an example usage of keyed ListView with 100 items. Making items keyed makes it possible to update component faster. But you'll have to provide a key for every single component unless you want to run into runtime problems!" />);
  for (let i = 1; i <= 100; i++) {
    list.push(<TextListItem primary={i.toString()} key={i.toString()} />);
  }
  return (
    <ListViewKeyed cursor={0}>
      {list}
    </ListViewKeyed>
  );
}
