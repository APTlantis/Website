import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import VideoGrid from '../components/VideoGrid';
import VideoFilters from '../components/VideoFilters';
import videosData from '../data/terry-davis-videos.json';

const TerryDavisVideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Load videos data
  useEffect(() => {
    // Simulate loading from API
    const loadData = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // For now, we're using the imported JSON data
        setVideos(videosData.videos);
        setFilteredVideos(videosData.videos);
      } catch (error) {
        console.error('Error loading videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter videos when filters change
  useEffect(() => {
    let result = [...videos];

    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter(video => 
        selectedTags.some(tag => video.tags.includes(tag))
      );
    }

    // Filter by years
    if (selectedYears.length > 0) {
      result = result.filter(video => 
        selectedYears.includes(video.year)
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        video =>
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query)
      );
    }

    setFilteredVideos(result);
  }, [videos, selectedTags, selectedYears, searchQuery]);

  const handleTagChange = (tags) => {
    setSelectedTags(tags);
  };

  const handleYearChange = (years) => {
    setSelectedYears(years);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Terry Davis Videos | Aptlantis</title>
        <meta name="description" content="Browse Terry A. Davis's coding videos in HolyC and TempleOS." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-2">Terry A. Davis Videos</h1>
        <p className="text-gray-300 mb-8">
          Browse through Terry A. Davis's coding videos showcasing HolyC programming and TempleOS development.
          These short videos (typically 5-10 minutes) demonstrate various programming concepts and techniques.
        </p>

        <VideoFilters
          tags={videosData.tags}
          years={videosData.years}
          selectedTags={selectedTags}
          selectedYears={selectedYears}
          searchQuery={searchQuery}
          onTagChange={handleTagChange}
          onYearChange={handleYearChange}
          onSearchChange={handleSearchChange}
        />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-400">
              {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'} found
            </div>
            <VideoGrid videos={filteredVideos} />
          </>
        )}
      </div>
    </div>
  );
};

export default TerryDavisVideosPage;