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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const WeatherCard = ({count, setCount, locationName, temperature, description, icon}) => {
 
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
          subheader={`Displaying weather in ${locationName}. But it could be on Mars.`}
        />
        
        <CardContent>
          <p>{temperature}</p>
          <p>{description}</p>
          <p>{icon}</p>
          <hr />
          Comments Component
        </CardContent>
        <CardActions >
            
          <FavoriteIcon className="favorite-icon-color" onClick={counter} />
          {count}
          <form>
            <TextField placeholder="Enter a Comment"></TextField>
            <Button variant="contained" color="primary">Confirm</Button>
          </form>
        </CardActions>
      </Card>
    </div>
  );
};

export default WeatherCard;
