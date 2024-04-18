import React from "react";
import style from "./rooms.module.css";

function Room2(props) {
  return (
    <button className={style["second"]} onClick={props.onclick}>
      <div
        className={style["btn-three"]}
        // style={{ backgroundImage: `url(${props.right})` }}></div>
      >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor porro illo reprehenderit eligendi necessitatibus, reiciendis, saepe modi pariatur quibusdam delectus quia nesciunt obcaecati a doloribus ex quisquam, qui perferendis?
        Ipsam similique eius vel laudantium obcaecati nam reprehenderit saepe voluptatum, pariatur id voluptatem distinctio maxime quia, sapiente earum porro amet est doloribus neque, culpa autem dolor! Cum laboriosam dolore accusantium.
        Sint, tempore nobis ducimus debitis deleniti temporibus, dolores excepturi possimus saepe quod enim quam id non harum voluptate quaerat sit distinctio. Voluptatem laboriosam totam, excepturi eos minima quidem laborum? Debitis?
        Consequatur asperiores ipsum quibusdam vero dolor eveniet magnam sapiente a error. Veritatis animi sunt amet qui alias labore, ea excepturi accusamus commodi asperiores voluptas ullam? Iste assumenda voluptatum dicta quam?
        Reprehenderit voluptatum nihil ipsum ab voluptas aliquam, rerum eligendi facilis eius voluptates saepe maxime dignissimos voluptatibus dolor possimus, esse culpa eum error amet atque necessitatibus quam doloribus. Impedit, maxime saepe!
        Cupiditate doloribus quisquam rerum repellat eligendi velit aperiam nulla blanditiis praesentium perferendis, est quasi dolore quia assumenda, corporis in consectetur, inventore tempore sunt. Fugiat veniam voluptatum odit ratione harum rem.
        Doloribus molestias reprehenderit, consequatur nam est inventore ea laborum incidunt cum voluptatum ipsum! Repellat, unde ea at reiciendis, vel est quia soluta autem accusamus, doloribus atque delectus culpa eius hic.
        Porro sunt maxime provident est asperiores eos libero. Iste minus odio distinctio quia quaerat, sapiente aliquam. Sint voluptates earum in? Ratione dignissimos aliquam et repellat, necessitatibus eum ipsum perspiciatis veniam.
        Nulla cum esse in quos nemo nobis tempora, excepturi nihil modi laborum, sunt enim voluptas eveniet soluta quasi harum? Excepturi accusantium fugiat voluptatibus. Ipsa odit illo ducimus reiciendis praesentium minus!
        A in tenetur nobis, veniam ex recusandae rem molestiae odit optio accusamus repellendus dolores nihil quam neque maxime officia quo provident praesentium nisi aspernatur sunt! Illum aut eum minima. Vitae.</p>
      </div>
      <div
        className={style["btn-four"]}
        style={{ backgroundImage: `url(${props.left})` }}></div>
    </button>
  );
}

export default Room2;
