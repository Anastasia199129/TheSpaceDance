
const VideoPage = () => {
  return (
    <div>
      <h1>Видео с YouTube</h1>
      <div>
        <h1>Title</h1>
        <iframe
          width="560"
          height="315"
          // src="https://youtu.be/xTxtLPhO2F8?si=zqRZ3EUuR00zgVX4"
          src="https://www.youtube.com/embed/xTxtLPhO2F8"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;