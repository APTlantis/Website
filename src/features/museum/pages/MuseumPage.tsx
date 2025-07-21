import { useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { distros } from '../../distributions';
import { ChevronRight } from '../../../shared/icons';

const MuseumPage = () => {
  const [searchParams] = useSearchParams();
  const distroId = searchParams.get('distro');
  const navigate = useNavigate();

  // Filter museum distros
  const museumDistros = distros.filter(distro => distro.isMuseum);

  useEffect(() => {
    // If a specific distro is requested, navigate to its detail page
    if (distroId) {
      const distro = distros.find(d => d.id === distroId);
      if (distro && distro.isMuseum) {
        navigate(`/distro/${distroId}`);
      }
    }
  }, [distroId, navigate]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-gray-600 dark:text-gray-400 md:ml-2">Museum</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <div className="relative">
          <img
            src="/placeholder.svg"
            width={160}
            height={160}
            alt="Museum logo"
            className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
          />
          <div
            className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-gray-800"
            title="Museum Collection"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Museum</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Explore historical operating systems
          </p>
        </div>
      </div>

      {/* Museum Dashboard */}
      <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
          Museum Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Welcome to the APTlantis Museum! Explore our collection of historical operating systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {museumDistros.map(distro => (
            <Link
              key={distro.id}
              to={`/distro/${distro.id}`}
              className="bg-white dark:bg-[#0a0a0a] p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-3">
                <img
                  src={distro.logoSrc || '/placeholder.svg'}
                  width={48}
                  height={48}
                  alt={`${distro.title} logo`}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                  {distro.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{distro.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* About the Museum */}
      <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
          About the Museum
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The APTlantis Museum is dedicated to preserving and showcasing historical operating
          systems that have made significant contributions to computing history. These systems may
          no longer be actively maintained, but they represent important milestones in the evolution
          of operating systems.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Each museum entry includes historical context, videos, articles, and downloadable ISO
          files for educational and archival purposes.
        </p>
      </div>
    </div>
  );
};

export default MuseumPage;
