import { v4 as uuidv4 } from "uuid";

import { Window } from "./window";
import { Tab } from "./tab";

interface ProcessProps {
  windowTarget: string;
  tabTarget: string;
}

export class Process {
  private pid;
  private windowTarget;
  private tabTarget;

  constructor({ windowTarget, tabTarget }: ProcessProps) {
    this.pid = uuidv4();

    this.windowTarget = windowTarget;
    this.tabTarget = tabTarget;

    this.build();
  }

  private build() {
    const newWindow = new Window({ pid: this.pid, target: this.windowTarget });

    const newTab = new Tab({ pid: this.pid, target: this.tabTarget });

    if (!newWindow || !newTab) return;

    this.init(newWindow, newTab);
  }

  private init(window: Window, tab: Tab) {
    window.init();
    tab.init();
  }

  public static kill(pid: string) {
    if (!pid) return;

    document.querySelector(`.processes > [pid='${pid}']`)?.remove();
    document.querySelector(`.tabs > [data-window-target='${pid}']`)?.remove();
  }
}
