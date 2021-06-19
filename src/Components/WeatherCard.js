/*React */
import React from "react";

/*CSS*/
import "./WeatherCard.css";
import imageAvatar from "../media/11machin-illo-articleLarge-v3.jpg";
/*Components*/
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Comments from "./Comments";
import Form from "./Form";

const WeatherCard = ({ count, setCount, data, users, setUsers }) => {
  const counterIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className='weathercard'>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label='weatheravatar'>
              <img src={imageAvatar} alt='Weather' />
            </Avatar>
          }
          title='Media Weather'
          subheader={`Displaying weather in ${data.name}. But it could be on Mars.`}
        />
        <CardContent>
          <div className='weather-content'>
            <div className='weather-text'>
              <p>{data.main.temp}</p>
              <p>{data.weather[0].description}</p>
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
            <FavoriteIcon
              className='favorite-icon-color'
              onClick={counterIncrease}
            />
            {count}
          </div>

          <Form setUsers={setUsers} users={users} />
        </CardActions>
      </Card>
    </div>
  );
};

export default WeatherCard;
