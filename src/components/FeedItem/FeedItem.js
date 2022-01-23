import { Card, Paper } from "@mui/material"
import FeedItemFooter from "../FeedItemComponents/FeedItemFooter/Footer"
import FeedItemHeading from "../FeedItemComponents/FeedItemHeader/Header"
import FeedItemDescription from "../FeedItemComponents/FeedItemVideoPost/Description"
import FeedItemVideo from "../FeedItemComponents/FeedItemVideoPost/Video"

export const FeedItem = (
    {
        avatarUrl,
        userName,
        videoUrl,
        description,
        hashtags,
        likes,
        comments
    }
) => {

    const cardStyle = {
        padding: '24px 48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
    }

    return (
        <Card
            data-testid="feed-item-card"
            component={Paper}
            sx={cardStyle}
        >
            <FeedItemHeading
                avatarUrl={avatarUrl}
                userName={userName}
            />
            <FeedItemVideo videoUrl={videoUrl} />
            <FeedItemDescription description={description} />
            <FeedItemFooter likes={likes} comments={comments} />
        </Card>
    )
}