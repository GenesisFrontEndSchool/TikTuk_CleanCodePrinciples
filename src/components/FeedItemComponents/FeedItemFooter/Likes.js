import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Likes ({likes}) {
    const boxStyle = {
        pl: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 0.5
    }

    const [liked, setLike] = useState({
        isLiked: false,
        color: "gray"
    });

    const handleClick = () => {
        setLike({
        isLiked: !liked.isLiked, 
        color: setLikeColor()
        });
    }   

    const setLikeColor = () => !liked.isLiked ? "red" : "gray";
    const showLikes = () => liked.isLiked ? likes + 1 : likes

    return(
        <Box sx={boxStyle}>
            <Button data-testid="like-btn" onClick={handleClick}>
                <FavoriteOutlinedIcon data-testid="like" sx={{color: liked.color}}/>
            </Button>
            <Typography data-testid="like-count">{showLikes()}</Typography>
        </ Box>
    )
}
