const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">1. Information We Collect</h2>
          <p className="text-gray-300">
            When you use Aptlantis, we collect certain information to help us improve our services
            and ensure proper functioning. This information includes:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
            <li>IP addresses (anonymized for analytics)</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited on our site</li>
            <li>Time and date of visits</li>
            <li>Files downloaded from our mirrors</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-300">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
            <li>To monitor and analyze website traffic and usage patterns</li>
            <li>To optimize mirror performance and bandwidth allocation</li>
            <li>To detect and prevent abuse or unauthorized access</li>
            <li>To improve our services based on user behavior</li>
            <li>To generate anonymous statistics about mirror usage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">
            3. Cookies and Similar Technologies
          </h2>
          <p className="text-gray-300">
            Aptlantis uses cookies and similar technologies to enhance your experience on our
            website. These technologies help us remember your preferences, understand how you use
            our site, and improve our services.
          </p>
          <p className="text-gray-300 mt-2">
            You can configure your browser to refuse cookies or alert you when cookies are being
            sent. However, some parts of our website may not function properly if you disable
            cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">
            4. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-300">
            We do not sell, trade, or otherwise transfer your information to third parties. However,
            we may share anonymized, aggregated data with our partners or the public for statistical
            purposes.
          </p>
          <p className="text-gray-300 mt-2">
            We may disclose your information if required by law or if we believe in good faith that
            such action is necessary to comply with legal processes or protect our rights, safety,
            or property.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">5. Data Security</h2>
          <p className="text-gray-300">
            We implement appropriate security measures to protect your information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">6. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">7. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at
            <a
              href="mailto:privacy@aptlantis.example.com"
              className="text-cyan-400 hover:underline ml-1"
            >
              privacy@aptlantis.example.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">Last updated: May 7, 2025</div>
    </div>
  );
};

export default PrivacyPage;
