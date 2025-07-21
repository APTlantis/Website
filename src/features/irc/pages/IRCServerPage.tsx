import React from 'react';

const IRCServerPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">IRC Server</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">About Our IRC Server</h2>
          <p className="text-gray-300">
            Welcome to the Aptlantis IRC server! We provide a community chat platform for Linux
            enthusiasts, developers, and users to connect, share knowledge, and collaborate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Connection Details</h2>
          <div className="bg-gray-800 p-4 rounded-md">
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Server:</span> irc.aptlantis.net
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Port:</span> 6667 (standard), 6697 (SSL)
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Channels:</span> #aptlantis, #linux-help, #distro-talk
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Web Client</h2>
          <p className="text-gray-300 mb-4">
            You can connect to our IRC server directly through your browser using the web client
            below:
          </p>
          <div className="border border-cyan-500/30 rounded-md overflow-hidden">
            <div className="bg-gray-800 p-3 border-b border-cyan-500/30">
              <h3 className="text-lg font-medium text-white">IRC Web Client</h3>
            </div>
            <div className="bg-gray-900 p-4 h-96">
              <iframe
                src="https://kiwiirc.com/nextclient/irc.aptlantis.net:6697/#aptlantis"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="IRC Web Client"
              />
            </div>
          </div>
          <p className="text-gray-300 mt-2">
            If the embedded client doesn&apos;t work, you can also use:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-2">
            <li>
              <a
                href="https://kiwiirc.com/nextclient/irc.aptlantis.net:6697/#aptlantis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                KiwiIRC
              </a>{' '}
              - A browser-based IRC client
            </li>
            <li>
              <a
                href="https://webchat.oftc.net/?channels=aptlantis&uio=d4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                OFTC WebChat
              </a>{' '}
              - Another browser-based option
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">IRC Clients</h2>
          <p className="text-gray-300 mb-3">
            For the best experience, we recommend using a dedicated IRC client. Here are some
            popular options:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>
              <span className="text-cyan-400">HexChat</span> - A popular cross-platform IRC client
            </li>
            <li>
              <span className="text-cyan-400">Irssi</span> - A terminal-based IRC client
            </li>
            <li>
              <span className="text-cyan-400">WeeChat</span> - Another powerful terminal-based
              client
            </li>
            <li>
              <span className="text-cyan-400">mIRC</span> - A classic Windows IRC client
            </li>
            <li>
              <span className="text-cyan-400">Textual</span> - A macOS IRC client
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Server Rules</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Be respectful to other users</li>
            <li>No spamming or flooding channels</li>
            <li>No offensive or inappropriate content</li>
            <li>Stay on topic in specialized channels</li>
            <li>Follow channel-specific rules</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Support</h2>
          <p className="text-gray-300">
            If you need help with connecting to our IRC server or have any questions, please join
            the #help channel or contact our administrators at{' '}
            <a href="mailto:irc-admin@aptlantis.net" className="text-cyan-400 hover:underline">
              irc-admin@aptlantis.net
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default IRCServerPage;
