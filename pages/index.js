import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";

export default function Home() {
  const [isDark, setDark] = useState("true");

  return (
    <div className={isDark ? "dark" : "light"}>
      <Header isDark={isDark} setDark={setDark} />
      <h1>coucou</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse
        perspiciatis incidunt ad enim. Fugiat ipsam beatae cumque voluptatum aut
        adipisci consectetur et dolore laboriosam, dignissimos earum omnis saepe
        nihil numquam magnam, nobis odio, magni assumenda neque? Impedit ab
        dolorum adipisci ea et. Inventore repellat consequuntur quibusdam.
        Officia, quam inventore ad voluptatem distinctio architecto aspernatur!
        Molestiae deleniti labore explicabo tempore dolores hic veniam illo
        alias facilis sunt veritatis voluptates numquam, dolore vero ipsum autem
        praesentium ratione enim cumque sint unde accusantium. Quos iste
        exercitationem commodi repellendus, unde illum velit officiis, soluta
        iusto nobis esse voluptatibus. Eligendi sit sequi enim id ea cum non
        minima nemo expedita reprehenderit, maiores pariatur quas cupiditate
        ducimus maxime delectus odio. Dolore, eaque sed rerum perspiciatis
        soluta accusantium reprehenderit voluptas tenetur non consequatur neque
        est dolorem impedit, cumque sit hic amet tempora incidunt provident aut
        vel inventore exercitationem sunt quis. Dolores iure temporibus
        molestias vitae magnam.
      </p>
    </div>
  );
}
