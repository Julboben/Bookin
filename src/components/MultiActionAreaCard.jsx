import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <Link className="card-title" to={props.link}>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt={props.alt}
          />
          <CardContent style={{backgroundColor:"var(--muted-color)"}}>
            <Typography style={{height:"100px", display:"flex", justifyContent:"center", alignItems:"center"}} gutterBottom component="div">
              <h3>{props.title}</h3>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      {/*       <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
