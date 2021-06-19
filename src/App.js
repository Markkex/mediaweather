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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function App() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false)
  const [weather, setWeather] = useState(undefined);
  const [input, setInput] = useState("");

  const [users, setUsers] = useState([
    { id: 1, username: "RickRoss96", comment: "The weather is great!" },
    {
      id: 2,
      username: "TheGreatDonaldTrump",
      comment: "The Weather is shinning, like my hair!",
      
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
    setLiked(true)
  };
  const counterDecrease = () => {
    setCount(count - 1);
    setLiked(false)
  };
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
            {users.map((user) => (
              <Comments
                key={user.id}
                user={user}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </CardContent>
          <CardActions className='cardactions'>
            <div className='likebutton'>
              {liked == false ? (
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

            <Form
              setUsers={setUsers}
              users={users}
              input={input}
              setInput={setInput}
            />
          </CardActions>
        </Card>
      )}
    </div>
  );
}

export default App;
