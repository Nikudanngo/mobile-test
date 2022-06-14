import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";

export const FoodCard = () => {
  return (
    <div>
      <Card
        sx={{ maxWidth: "45vw", maxHeight: "45vw" }}
        style={{
          boxShadow: "3px 3px 3px rgba(0,0,0,0.2)",
          borderRadius: "10px",
        }}
        onClick={() => {
          alert("clicked");
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="110"
            image="https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/800027.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              100年カレー
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              ￥1,000
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
