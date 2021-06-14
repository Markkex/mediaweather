/*React */
import React from "react";

/*CSS*/
import "./WeatherCard.css";
import imageAvatar from "../media/11machin-illo-articleLarge-v3.jpg";
/*Components*/
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from '@material-ui/icons/Favorite';
const WeatherCard = ({count, setCount}) => {
 
    const counter = () => {
        setCount(count + 1)
    }

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
          subheader='Displaying weather in Faro. But it could be on Mars'
        />
        <CardContent>
          <p>API DISPLAY</p>
          <hr />
          Comments Component
        </CardContent>
        <CardActions >
            
          <FavoriteIcon className="favorite-icon-color" onClick={counter} />
          {count}
        
        </CardActions>
      </Card>
    </div>
  );
};

export default WeatherCard;
