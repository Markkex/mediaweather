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
const WeatherCard = ({
  count,
  setCount,
  locationName,
  temperature,
  description,
  users,
  setUsers
  
}) => {
  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div className='weathercard'>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label='weatheravatar' className>
              <img src={imageAvatar} />
            </Avatar>
          }
          title='Media Weather'
          subheader={`Displaying weather in ${locationName}. But it could be on Mars.`}
        />
        <CardContent>
          <div className='weather-content'>
            <div className="weather-text">
              <p>{temperature}</p>
              <p>{description}</p>
            </div>
          </div>
          <Comments users={users} setUser={setUsers}/>
        </CardContent>
        <CardActions>
          <FavoriteIcon className='favorite-icon-color' onClick={counter} />
          {count}
         <Form setUsers={setUsers} users={users}/>
        </CardActions>
      </Card>
    </div>
  );
};

export default WeatherCard;
