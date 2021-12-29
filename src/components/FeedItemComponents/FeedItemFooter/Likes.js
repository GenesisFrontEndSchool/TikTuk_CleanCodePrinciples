import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Likes (
    {
        likes
    }
) {
    const [liked, setLiked] = useState({
        isLiked: false,
        color: "gray"
    });

    const boxStyle = {
        pl: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 0.5
    }

    const setLikeColor = () => !liked.isLiked ? "red" : "gray";
    const onClickHandler = () => setLiked({
        isLiked: !liked.isLiked, 
        color: setLikeColor()
    });

    return(
        <Box sx={boxStyle}>
            <Button onClick={onClickHandler()}>
                <FavoriteOutlinedIcon sx={{color: liked.color}}/>
            </Button>
            <Typography>{liked.isLiked ? likes + 1 : likes}</Typography>
        </ Box>
    )
}
