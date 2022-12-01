import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { borderRadius } from "@mui/system";

export default function MultiActionAreaCard({
  img,
  alt,
  link,
  title,
  backgroundColor,
  textColor,
}) {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <Link className="card-title" to={link}>
          <CardMedia
            sx={{ backgroundColor: { backgroundColor }, objectFit: "none" }}
            component="img"
            height="200"
            image={img}
            alt={alt}
            title={title}
          />
          <div
            style={{
              position: "absolute",
              top: 18,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <h3 style={{ color: textColor }}>{title}</h3>
          </div>
          <CardContent
            sx={{ backgroundColor: "var(--muted-color)", minHeight: "20px" }}
          >
            {/*             <Typography
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              gutterBottom
              component="div"
            >
              <h3>{title}</h3>
            </Typography> */}
          </CardContent>
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "var(--muted-color)",
              borderRadius: "50px",
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
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
