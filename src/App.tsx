import { Component, createPortal } from "inferno";
import { TabView, TextListItem, SoftKey, DropDownMenu, toast } from "KaiUI";

import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import TabFour from "./TabFour";

interface IAppState {
  currentTab: number;
  menu: boolean;
}

export default class App extends Component {
  private readonly tabs: string[] = ["Tab One", "Tab Two", "Tab Three", "Tab Four"];
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
          <TabThree />
          <TabFour />
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
                    let toastElement: HTMLElement | null = document.getElementById("toast");
                    if (!toastElement) return;
                    toast(
                      `You selected ${selected}`,
                      1500,
                      toastElement
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
