//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker";

// Create a react component
const App = function () {
    return ( 
        <div className = "ui container comments" >
        <CommentDetail 
        author = "Sam"
        timeAgo = "Today at 4:45PM"
        commentText = "Sometimes I just really want to eat birds. Not dead ones, but live ones."
        avatar = {Faker.image.avatar()}
        /> 
        <CommentDetail
        author = "Alex"
        timeAgo = "Today at 2:00AM"
        commentText = "I know that feel."
        avatar = {Faker.image.avatar()}
        /> 
        <CommentDetail
        author = "Jane"
        timeAgo = "Today at 5:15PM"
        commentText = "Sweet lord. What?"
        avatar = {Faker.image.avatar()}
        /> 
        </div>
    );
};


//Take the react component and show it on the screen
ReactDOM.render( < App /> , document.querySelector('#root'))