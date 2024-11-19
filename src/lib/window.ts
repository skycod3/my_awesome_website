import gsap from "gsap";

import Draggable from "gsap/Draggable";

import { Process } from "./process";
import { Animation } from "./animation";

type Buttons = {
  close?: HTMLElement | null;
};

interface WindowProps {
  pid: string;
  target: string;
}

export class Window {
  public element;

  private pid;
  private target;
  private buttons: Buttons;

  constructor({ pid, target }: WindowProps) {
    this.pid = pid;
    this.target = target;
    // prettier-ignore
    this.element = document.querySelector(this.target)?.cloneNode(true) as HTMLElement;
    this.buttons = {};

    if (!this.element) return;

    this.build();
  }

  private build() {
    gsap.registerPlugin(Draggable);

    this.buttons.close = this.element.querySelector("[data-type='close']");
  }

  public init() {
    const windowTotal = document.querySelectorAll(".window").length;

    this.element.setAttribute("data-init", "true");
    this.element.setAttribute("pid", this.pid);
    this.element.style.zIndex = String(1000 + windowTotal);

    Draggable.create(this.element, {
      type: "x,y",
      bounds: document.querySelector("main"),
      inertia: true,
      zIndexBoost: false,
    });

    this.buttons.close?.addEventListener("click", () => this.close());

    document.querySelector(".processes")?.append(this.element);

    gsap.set(this.element, { opacity: 0, scale: 0.9 });

    Animation.animate({ element: this.element, animation: "fadeIn" }).play();
  }

  private close() {
    Animation.animate({ element: this.element, animation: "fadeOut" })
      .play()
      .call(() => Process.kill(this.pid), [], 0.2);
  }
}
