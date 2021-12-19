import { Box } from '@mui/system';
import React, {
  useState
} from "react";
import { FeedItem } from "../components/FeedItem/FeedItem";
import commentsList from "../mockData/commentsData.js";


export const GetTrendingFeed = () => {
  const axios = require("axios").default;

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: []
  })

  const options = {
    method: 'GET',
    url: 'https://tiktok33.p.rapidapi.com/trending/feed',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '6d97bd14femsh1b6140923df6ee9p1b8da9jsn2f060af2d2fa'
    }
  };

  const getPostData = () => {
    axios.request(options)
      .then(
        result => {
          setState({
            isLoaded: true,
            items: result.data
          })
        },
        error => {
          setState({
            isLoaded: true,
            error: error.response.status + ' ' + error.response.data.message
          })
        }
      );
  }

  const { error, isLoaded, items } = state;
  return (
    <>
      {
        document.onreadystatechange = function () {
          if (document.readyState === 'interactive') {
            getPostData();
          }
        }
      }
      {isLoaded ? 
      (error ? error : items.map((props, index) => {
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
       ) : "Loading ... "
      }
    </>
  )
}

export default GetTrendingFeed;