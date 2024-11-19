import gsap from "gsap";

interface AnimationProps {
  element: Element;
  animation: "fadeIn" | "fadeOut" | "zoomIn" | "zoomOut";
}

export class Animation {
  public static animate({ element, animation }: AnimationProps) {
    const timeline = gsap.timeline({ defaults: { duration: 0.2 } }).pause();

    switch (animation) {
      case "fadeIn":
        timeline.to(element, { opacity: 1, scale: 1 });
        break;

      case "fadeOut":
        timeline.to(element, { opacity: 0, scale: 0.9 });
        break;

      case "zoomIn":
        timeline.to(element, {
          scale: 1,
          y: 0,
          transformOrigin: "bottom center",
        });
        break;

      case "zoomOut":
        timeline.to(element, {
          scale: 0,
          y: 50,
          transformOrigin: "bottom center",
        });
        break;
    }

    return timeline;
  }
}
