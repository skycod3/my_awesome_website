import Documents from "../assets/images/documents-folder.svg";
import Find from "../assets/images/find.svg";
import RecycleBin from "../assets/images/recycle-bin.svg";

const desktopIcons = [
  {
    icon: Documents.src,
    title: "Portfólio",
    description: "Meu Portfólio",
    windowTarget: "#window-portfolio",
    tabTarget: "#tab-portfolio",
  },
  {
    icon: Find.src,
    title: "Currículo",
    description: "Meu Currículo",
    windowTarget: "#window-curriculo",
    tabTarget: "#tab-curriculo",
  },
  {
    icon: RecycleBin.src,
    title: "Lixeira",
    description: "Esvaziar lixeira?",
    windowTarget: "",
    tabTarget: "",
  },
];

const tabs = [
  {
    id: "tab-portfolio",
    title: "Portfólio",
    icon: Documents.src,
  },
  {
    id: "tab-curriculo",
    title: "Currículo",
    icon: Find.src,
  },
];

const windows = [
  {
    id: "window-portfolio",
    icon: Documents.src,
    title: "Portfólio",
    buttons: {
      close: true,
      minimize: true,
      maximize: false,
      help: true,
    },
    content: `
      <div class="flow | text-black">
        <h2>Meu Portfólio</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          adipisci dignissimos deserunt alias ex? Iure perspiciatis, obcaecati
          autem soluta tempore quam ea, a animi blanditiis vero vitae eius,
          excepturi consequuntur nobis iusto saepe dolorum consequatur eos?
          Repellat expedita magnam possimus, maiores animi aspernatur eos
          facilis! Eligendi fuga voluptas optio autem veritatis quisquam
          neque! Architecto eius doloribus ut voluptatibus illo soluta numquam
          commodi, suscipit excepturi quas hic quaerat dolore quod aspernatur
          aut molestiae qui et, quos accusantium ducimus impedit nam?
          Laudantium, ducimus necessitatibus nobis culpa vitae natus
          laboriosam ex doloremque velit excepturi alias. Ipsam vel nam autem
          asperiores labore enim culpa.
        </p>
      </div>
    `,
  },
  {
    id: "window-curriculo",
    icon: Find.src,
    title: "Currículo",
    buttons: {
      close: true,
      minimize: true,
      maximize: false,
      help: true,
    },
    content: `
      <div class="flow | text-black">
        <h2>Meu Currículo</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          adipisci dignissimos deserunt alias ex? Iure perspiciatis, obcaecati
          autem soluta tempore quam ea, a animi blanditiis vero vitae eius,
          excepturi consequuntur nobis iusto saepe dolorum consequatur eos?
          Repellat expedita magnam possimus, maiores animi aspernatur eos
          facilis! Eligendi fuga voluptas optio autem veritatis quisquam
          neque! Architecto eius doloribus ut voluptatibus illo soluta numquam
          commodi, suscipit excepturi quas hic quaerat dolore quod aspernatur
          aut molestiae qui et, quos accusantium ducimus impedit nam?
          Laudantium, ducimus necessitatibus nobis culpa vitae natus
          laboriosam ex doloremque velit excepturi alias. Ipsam vel nam autem
          asperiores labore enim culpa.
        </p>
      </div>
    `,
  },
];

export { desktopIcons, tabs, windows };
