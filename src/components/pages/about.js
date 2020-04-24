import React from 'react';
import profilePicture from "../../../static/assets/images/bio/meandskip.jpg";

export default function() {
  return (
      <div className="content-page-wrapper">
          <div 
          className="left-column" 
          style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          />

          <div className="right-column">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, et qui! Est, modi adipisci suscipit minus ab tempore repellat nesciunt sed aut, quae, in aperiam quos. Esse, praesentium. Veniam, doloremque.
Animi fugiat ut numquam autem laboriosam placeat cumque, magnam aut, iure ipsam ab cupiditate laudantium sunt saepe nihil! Error eligendi veniam autem atque! In odio molestiae repellat harum recusandae laborum?
Quaerat quae ea corrupti nesciunt sunt asperiores itaque dolorem illo saepe modi quia numquam repellendus, magnam unde tempora neque? Nobis, laudantium nostrum. Asperiores tempore facilis minus repudiandae eligendi quibusdam possimus!
Error hic odio debitis animi velit eaque. Obcaecati natus eos inventore fuga similique esse tenetur quaerat qui autem beatae distinctio, vitae cum reiciendis itaque illo asperiores, laborum cupiditate odit enim?

          </div>
      </div>
  )
}