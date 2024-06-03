import React from "react";
import "./Card.css";

function Card({image, heading, body, date}) {
    
  return (
    <div className="card-body">
      <div className="card-img">
        <img
        //   src={props.image ? props.image : "https://th.bing.com/th?id=OIP.GjIwCh89aXCNSbCMbriWkwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}
          src={image ? image : "https://th.bing.com/th?id=OIP.GjIwCh89aXCNSbCMbriWkwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}
          alt="foodImg"
        />
      </div>
      <div className="card-text">
        <div className="card-heading">
          {/* <h2>{props.heading}</h2> */}
          <h2>{heading}</h2>
        </div>
        <div className="cardContent">
         {/* {props.body} */}
         {body}
        </div>
        <div className="card-date">
          {/* <p>{props.date}</p> */}
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
