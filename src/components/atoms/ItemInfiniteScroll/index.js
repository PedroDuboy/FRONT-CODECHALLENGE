import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ItemInfiniteScroll = ({ element, showLinks = false }) => {
  return (
    <div className="item-infinite-scroll-container">
      <div className="item-infinite-scroll-header">
        <div className="item-infinite-scroll-info">
          {Object.keys(element).map(function (key, i) {
            return (
              <p key={i}>
                <strong>{key}</strong>
                <br></br>
                <span>{element[key]}</span>
              </p>
            );
          })}
          {showLinks && (
            <div className="containerbtn-lecciones">
              <Link to="">
                <div className="item-title-"><a alt="" href="users">Amigos</a></div>
              </Link>
              <Link to="" >
                <div className="item-title"><a alt="" href="users">Lecciones</a></div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemInfiniteScroll;
