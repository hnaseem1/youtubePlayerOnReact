import React from 'react';

const VideoListItem = (props) => {

  const video = props.video
  const videoUrl = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title

  return (
    <div>
      <li className = ''>
        <div className = 'video-list media'>
          <div className = 'media-left'>
            <img className = 'media-object' src = {videoUrl} />
          </div>

          <div className = 'media-body'>
            <div className = 'media-heading'> {videoTitle} </div>
          </div>
          
        </div>
      </li>
    </div>
  );
}

// makes it available for other components
export default VideoListItem;
