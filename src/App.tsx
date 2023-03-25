import { Component, createPortal } from "inferno";
import { TabView, TextListItem, SoftKey, DropDownMenu, toast } from "KaiUI";

import TabOne from "./TabOne";
import TabTwo from "./TabTwo";

interface IAppState {
  currentTab: number;
  menu: boolean;
}

export default class App extends Component {
  private tabs: Array<string>;
  public state: IAppState;

  constructor(props: any) {
    super(props);
    this.tabs = ["Tab 1", "Tab 2"];
    this.state = {
      currentTab: 0,
      menu: false,
    };
  }

  render() {
    const { currentTab, menu } = this.state;

    return (
      <>
        <TabView
          tabLabels={this.tabs}
          onChangeIndex={(newTab: number) =>
            this.setState({ currentTab: newTab })
          }
          defaultActiveTab={currentTab}
        >
          <TabOne />
          <TabTwo />
        </TabView>
        <footer>
          <SoftKey leftText="Menu" leftCb={() => this.setState({ menu: true })} />
        </footer>
        {menu
          ? createPortal(
              <DropDownMenu
                labels={["foo", "bar"]}
                title="A menu"
                selectCb={(selected: string) => {
                  this.setState({ menu: false });
                  try {
                    toast(
                      `You selected ${selected}`,
                      1500,
                      document.getElementById("toast")
                    );
                  } catch (e) {
                    console.log(e); }
                }}
              >
                <TextListItem primary="Foo" />
                <TextListItem primary="Bar" />
              </DropDownMenu>,
              document.querySelector("#menu")
            )
          : null}
      </>
    );
  }
}
