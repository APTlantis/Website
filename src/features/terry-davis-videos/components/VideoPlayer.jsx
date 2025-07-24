import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);
  const [processedUrl, setProcessedUrl] = useState(url);
  
  // Process URL when it changes
  useEffect(() => {
    setIsPlaying(false);
    setIsReady(false);
    setError(null);
    
    // Process the URL to handle local file paths
    if (url && !url.startsWith('http') && !url.startsWith('blob:') && !url.startsWith('file://')) {
      // Convert relative path to absolute path
      const baseUrl = window.location.origin;
      const absoluteUrl = `${baseUrl}/${url.replace(/\\/g, '/')}`;
      console.log('Converting relative path to absolute:', absoluteUrl);
      setProcessedUrl(absoluteUrl);
    } else {
      setProcessedUrl(url);
    }
  }, [url]);

  const handleReady = () => {
    setIsReady(true);
    setError(null);
  };

  const handleError = (e) => {
    console.error('Video player error:', e);
    
    // Provide more specific error messages based on the URL
    if (url && url.toLowerCase().endsWith('.mkv')) {
      setError('This video is in MKV format, which may not be supported by your browser. Try downloading the video to watch it locally with a media player that supports MKV.');
    } else if (url && url.toLowerCase().endsWith('.wmv')) {
      setError('This video is in WMV format, which has limited browser support outside of Microsoft Edge. Try downloading the video to watch it locally with a media player that supports WMV, or use Microsoft Edge browser.');
    } else if (url && !url.startsWith('http') && !url.startsWith('blob:') && !url.startsWith('file://')) {
      setError('Failed to load local video file. The file may not exist or access may be restricted by your browser.');
    } else {
      setError('Failed to load video. The format may not be supported by your browser or the video may not be available.');
    }
    
    setIsReady(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video-player-container">
      {error ? (
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <a 
            href={processedUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            download={title || "video"}
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Download Video
          </a>
        </div>
      ) : (
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg overflow-hidden">
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          )}
          
          <ReactPlayer
            url={processedUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={isPlaying}
            onReady={handleReady}
            onError={handleError}
            onPlay={handlePlay}
            onPause={handlePause}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  title: title || 'Video Player'
                },
                forceVideo: true
              }
            }}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;