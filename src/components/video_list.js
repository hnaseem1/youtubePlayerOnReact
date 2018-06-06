import React, { Component } from 'react';
import VideoListItem from './video_list_item'


// const VideoList = () => {
//     return (
//         <div>
//             <VideoListItem />
//         </div>
//     );
// };

class VideoList extends Component {
    render() {
        return (
            <div>
                <VideoListItem />
            </div>
        );
    }
}


export default VideoList;   