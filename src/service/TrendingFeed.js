import { Box } from '@mui/system';
import React, {
  useEffect,
  useState
} from "react";
import { FeedItem } from "../components/FeedItem/FeedItem";
import commentsList from "../mockData/commentsData.js";
import axios from 'axios';

const OPTIONS = {
  method: 'GET',
  url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': '6d97bd14femsh1b6140923df6ee9p1b8da9jsn2f060af2d2fa'
  }
};

export const TrendingFeed = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const getPostData = () => {
    axios.request(OPTIONS)
      .then(
        result => {
          setIsLoaded(true)
          setItems(result.data)
        },
        error => {
          setIsLoaded(true)
          setError(error.response.status + ' ' + error.response.data.message)
        }
      );
  }

  useEffect(() => getPostData(), [])

  return (
    <>
      { error && error }
      { !isLoaded && "Loading ..." }
      { isLoaded &&     
        items.map((props, index) => {
          return (
            <Box sx={{
              maxWidth: '800px',
              margin: '24px auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <FeedItem
                key={index}
                avatarUrl={props.authorMeta.avatar}
                userName={props.authorMeta.name}
                videoUrl={props.videoUrl}
                description={props.text}
                likes={props.authorMeta.heart}
                comments={commentsList}
              />
            </Box>
          )
        }) 
      }
    </>
  )
}

export default TrendingFeed;