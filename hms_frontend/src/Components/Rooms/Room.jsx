import React from "react";
import style from "./rooms.module.css";

function Room(props) {
  return (
    <button className={style["first"]} onClick={props.onclick}>
      <div
        className={style["btn-one"]}
        style={{ backgroundImage: `url(${props.left})` }}></div>
      <div
        className={style["btn-two"]}
        // style={{ backgroundImage: `url(${props.right})` }}></div>
      >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita non vitae totam inventore. Nam ex corrupti consequuntur, quia eum vel atque laboriosam facilis placeat unde rerum iusto adipisci mollitia?
        Saepe quis qui necessitatibus repudiandae omnis soluta impedit explicabo iste asperiores blanditiis, voluptatum quam enim mollitia! Impedit optio, amet explicabo architecto dolore iure officiis sequi vero ab dolorem consequuntur atque?
        Velit quos vero repellat repudiandae non temporibus veniam quas. Aspernatur vel, accusamus deserunt, rem sapiente ullam maiores amet molestiae impedit voluptas necessitatibus voluptatum! Fugiat suscipit eius incidunt ea delectus unde!
        Optio praesentium, soluta alias ad doloremque veniam nobis facilis? Voluptate, voluptas quam? Temporibus voluptas suscipit praesentium aut error! Asperiores odit ipsa ratione rem saepe aperiam, fugit veniam maiores possimus voluptate.
        Repellendus voluptatum, magni quod aut dolorem eaque, eos, sapiente tempora minima similique eius incidunt omnis. Accusamus quas dignissimos maiores dolor impedit? Perspiciatis, eum cupiditate impedit dolores quibusdam dolore placeat nam.
        Provident dicta, incidunt excepturi culpa doloremque quia, nam amet, officiis optio molestiae iure temporibus quibusdam! Inventore rerum recusandae pariatur nesciunt. Fugit placeat non impedit quisquam provident possimus eaque a sunt?
        Quisquam porro minus dolorem nisi beatae suscipit minima sunt dolorum dolore molestiae quod corporis ratione ipsam ab quae ad tempore eligendi aliquid unde vitae explicabo, praesentium voluptatem. Consequuntur, asperiores tempore.
        In beatae non praesentium totam corrupti ipsam nisi voluptates atque illo. Ullam, quibusdam fuga. Voluptates nisi, quidem aliquid natus aperiam ipsa iusto, expedita provident ea fuga consequatur qui aut beatae?
        Quis consequuntur consequatur exercitationem nostrum, ipsum voluptatem eum corporis neque asperiores. Recusandae ducimus earum ex quibusdam eveniet, asperiores placeat itaque vel sapiente doloremque soluta molestiae neque dolores quod facere dolor.
        Ex nemo voluptate repellat vero vel inventore, fugit, assumenda, perspiciatis dolores itaque autem qui placeat voluptatum consequatur. Eaque porro corrupti doloremque reprehenderit consequuntur iure, eum, laudantium sint aliquam fugiat laborum?</p>
      </div>
    </button>
  );
}

export default Room;
