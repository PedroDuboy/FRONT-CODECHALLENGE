import React from "react";
import InfiniteScrollComponent from "react-infinite-scroll-component";
import ItemInfiniteScroll from "components/atoms/ItemInfiniteScroll";
import "./styles.scss";
import { Lecciones } from "./InfiniteScroll.stories.js";

const InfiniteScroll = () => {
  const fakeItems = Lecciones();
  return (
    <div>
      <InfiniteScrollComponent
        dataLength={fakeItems.length}
        hasMore={true}  
        loader={<h4>Cargando...</h4>}
        endMessage={<h4>No hay más preguntas</h4>}
        scrollableTarget="right-layout-content"
      >
        {fakeItems.map((i, index) => (
          <div key={index}>
            <ItemInfiniteScroll element={i} showLinks={true} />
          </div>
        ))}
      </InfiniteScrollComponent>
    </div>
  );
};

export default InfiniteScroll;
