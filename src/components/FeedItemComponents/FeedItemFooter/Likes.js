import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Likes (
    {
        likes
    }
) {
    const setColor = () => !liked.isLiked ? "red" : "gray";

    const [liked, like] = useState({
        isLiked: false,
        color: "gray"
    });

    return(
        <Box sx={{
            pl: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 0.5
        }}>
            <Button onClick={() => like({isLiked: !liked.isLiked, color: setColor()})}>
                <FavoriteOutlinedIcon sx={{color: liked.color}}/>
            </Button>
            <Typography>{liked.isLiked ? likes + 1 : likes}</Typography>
        </ Box>
    )
}
