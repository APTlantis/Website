const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Aptlantis</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Our Mission</h2>
          <p className="text-gray-300">
            Aptlantis was created to provide fast, reliable, and up-to-date mirrors for Linux
            distributions and open-source software. We believe in the power of open-source software
            and aim to support the community by offering high-quality mirror services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Our Infrastructure</h2>
          <p className="text-gray-300">
            Our mirrors are hosted on high-performance servers with redundant storage and network
            connections. We use advanced caching and synchronization techniques to ensure that our
            mirrors are always up-to-date with the upstream repositories.
          </p>
          <p className="text-gray-300 mt-3">
            We currently host mirrors for over 32 Linux distributions and open-source projects, with
            plans to expand to 55 soon.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Our Team</h2>
          <p className="text-gray-300">
            Aptlantis is maintained by a small team of Linux enthusiasts and system administrators
            who are passionate about open-source software. We work tirelessly to ensure that our
            mirrors are always available and up-to-date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions, suggestions, or concerns, please don&apos;t hesitate to
            contact us. You can reach us via email at{' '}
            <a
              href="mailto:contact@aptlantis.example.com"
              className="text-cyan-400 hover:underline"
            >
              contact@aptlantis.example.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
