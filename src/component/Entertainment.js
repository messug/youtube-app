import React from 'react';

const Entertainment = () => {
  return (
    <div>
      {/* Your other React components can go here */}
      <iframe
        title="WixEmbed"
        src="https://tundeyakubu001.wixsite.com/garden-loft"
        width="100%"
        height="2000px"  // Adjust the height as needed
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default Entertainment;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YouTube = ({ apiKey, videoId }) => {
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideoData = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.googleapis.com/youtube/v3/videos`,
//           {
//             params: {
//               part: 'snippet',
//               id: videoId,
//               key: apiKey,
//             },
//           }
//         );

//         setVideo(response.data.items[0]);
//       } catch (error) {
//         console.error('Error fetching YouTube video:', error);
//       }
//     };

//     if (videoId) {
//       fetchVideoData();
//     }
//   }, [videoId, apiKey]);

//   if (!video) {
//     return null;
//   }

//   const { snippet } = video;
//   const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  // return (
  //   <div>
  //     <iframe
  //       title={snippet.title}
  //       width="3000"
  //       height="1000"
  //       src={https://tundeyakubu001.wixsite.com/garden-loft}
  //       frameBorder="0"
  //       allowFullScreen
  //     ></iframe>
      // <h2>{snippet.title}</h2>
      // <p>{snippet.description}</p>
//     </div>
//   );
// };

// export default YouTube;
// WixEmbedComponent.js


