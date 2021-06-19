import React, { useState, useEffect } from "react";
import "./App.css";
/*CSS*/

/*Components*/
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Comments from "./Components/Comments";
import Form from "./Components/Form";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EditCommentForm from "./Components/EditCommentForm";

function App() {
  const [count, setCount] = useState(2);
  const [liked, setLiked] = useState(false);
  const [weather, setWeather] = useState(undefined);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentComment, setCurrentComment] = useState({});
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "RickRoss96",
      comment: "The weather is great!",
      avatarimg:
        "https://media-manager.noticiasaominuto.com/1920/naom_5a9a52c15b760.jpg",
    },
    {
      id: 2,
      username: "TheGreatDonaldTrump",
      comment: "The Weather is shinning, like my hair!",
      avatarimg:
        "https://bordalo.observador.pt/v2/f:webp/rs:fill:750/q:85/c:2000:1123:nowe:0:0/plain/https://s3.observador.pt/wp-content/uploads/2021/03/18154311/30476296.jpg",
    },
  ]);

  const cityName = "Faro, pt";
  const apiKey = "b82a90a20a766e74488ea5e0c041ddd0";

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const counterIncrease = () => {
    setCount(count + 1);
    setLiked(true);
  };

  const counterDecrease = () => {
    setCount(count - 1);
    setLiked(false);
  };

  const CommentTextfieldChange = (e) => {
    setInput(e.target.value);
  };

  //Delete user + comment
  const handleDeleteClick = (id) => {
    const removeItem = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(removeItem);
  };

  //Create Comment
  const CommentOnSubmitForm = (e) => {
    e.preventDefault();

    if (input !== "") {
      setUsers([
        ...users,
        {
          id: Math.random() * 1000,
          username: "Flyaway",
          comment: input.trim(),
        },
      ]);
    }

    setInput("");
  };

  //Edit Comment
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateComment(currentComment.id, currentComment);
  };

  const handleUpdateComment = (id, updatedComment) => {
    const updatedItem = users.map((user) => {
      return user.id === id ? updatedComment : user;
    });
    setIsEditing(false);
    setUsers(updatedItem);
  };

  const handleEditInputChange = (e) => {
    setCurrentComment({ ...currentComment, comment: e.target.value });
  };

  const handleCommentClick = (user) => {
    setIsEditing(true);
    setCurrentComment({ ...user });
  };
  console.log(users);
  return (
    <div className='App'>
      {weather && (
        <Card className='weathercard'>
          <CardHeader
            avatar={
              <Avatar aria-label='weatheravatar'>
                <img
                  src='https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png'
                  alt='Weather'
                />
              </Avatar>
            }
            title='Media Weather'
            subheader={`Displaying weather in ${weather.name}. But it could be on Mars.`}
          />
          <CardContent>
            <div className='weather-content'>
              <div className='weather-text'>
                <p>{weather.main.temp}</p>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
            <div
              className={"comments-section"}
              style={users.length >= 5 ? { overflow: "scroll" } : {}}
            >
              {users.map((user) => (
                <Comments
                  key={user.id}
                  user={user}
                  users={users}
                  setUsers={setUsers}
                  handleDeleteClick={handleDeleteClick}
                  handleCommentClick={handleCommentClick}
                />
              ))}
            </div>
          </CardContent>
          <CardActions className='cardactions'>
            <div className='likebutton'>
              {liked === false ? (
                <FavoriteBorderIcon
                  className='favorite-icon-color'
                  onClick={counterIncrease}
                />
              ) : (
                <FavoriteIcon
                  className='favorite-icon-color'
                  onClick={counterDecrease}
                />
              )}
              {count}
            </div>
            {isEditing ? (
              <EditCommentForm
                handleEditFormSubmit={handleEditFormSubmit}
                handleEditInputChange={handleEditInputChange}
                currentComment={currentComment}
                setIsEditing={setIsEditing}
              />
            ) : (
              <Form
                setUsers={setUsers}
                users={users}
                input={input}
                setInput={setInput}
                CommentTextfieldChange={CommentTextfieldChange}
                CommentOnSubmitForm={CommentOnSubmitForm}
              />
            )}
          </CardActions>
        </Card>
      )}
    </div>
  );
}

export default App;
