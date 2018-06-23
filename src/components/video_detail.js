import React from 'react';

const VideoDetail = (props) => {

  // also use {video} in place of props above which means props.video
  const video = props.video;
  const videoID = video.snippet.videoId;
  const videoUrl = `https://www.youtube.com/ember/${videoId}`;

  return (

      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={videoUrl}></iframe>
        </div>
        <div className='details'>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>

    );
};

export default VideoDetail;
