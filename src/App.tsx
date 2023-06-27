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
  
  handleKeyDown = (evt: KeyboardEvent) => {
    if (this.state.menu && evt.key === "Backspace") {
      evt.preventDefault();
      this.setState({ menu: false });
    }
    if (evt.key === "Backspace") {
      window.close();
      // if you don't explicitly close the app, KaiOS will keep
      // it in background and it will be up to OOM to kill it or not
    }
  };

  constructor(props: any) {
    super(props);
    this.tabs = ["Tab 1", "Tab 2"];
    this.state = {
      currentTab: 0,
      menu: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
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
