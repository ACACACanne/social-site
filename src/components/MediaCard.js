'use client';
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MediaCard({ post, index, onLike }) {
  const [liked, setLiked] = useState(post.liked || false);
  const [likes, setLikes] = useState(post.likes || 0);

  useEffect(() => {
    setLiked(post.liked || false);
    setLikes(post.likes || 0);
  }, [post]);

  const handleLike = () => {
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : likes - 1;
    setLiked(newLiked);
    setLikes(newLikes);
    onLike(index, newLiked, newLikes); // update parent/localStorage
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto", bgcolor: "rgba(255,255,255,0.1)", color: "#fff" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#90caf9" }}>
            {post.userName?.charAt(0).toUpperCase() || "U"}
          </Avatar>
        }
        title={post.userName || "User"}
        subheader="Just now"
        sx={{ color: "#fff" }}
      />

      <CardContent>
        <Typography variant="body1" sx={{ color: "#e3f2fd" }}>
          {post.content}
        </Typography>
        {post.image && (
          <Typography variant="caption" sx={{ display: "block", color: "#bbdefb", mt: 1 }}>
            Image: {post.image}
          </Typography>
        )}
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="like"
          onClick={handleLike}
          sx={{ color: liked ? "red" : "white" }}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body2" sx={{ color: "#fff", ml: 1 }}>
          {likes}
        </Typography>
      </CardActions>
    </Card>
  );
}
