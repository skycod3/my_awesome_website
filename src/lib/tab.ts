interface TabProps {
  pid: string;
  target: string;
}

export class Tab {
  public element;

  private pid;
  private target;

  constructor({ pid, target }: TabProps) {
    this.target = target;
    this.pid = pid;
    // prettier-ignore
    this.element = document.querySelector(this.target)?.cloneNode(true) as HTMLElement;

    if (!this.element) return;
  }

  public init() {
    this.element.setAttribute("data-init", "true");
    this.element.setAttribute("data-window-target", this.pid);
    this.element.classList.add("active");

    document.querySelector(".tabs")?.append(this.element);
  }
}
