// pages/privacy.tsx
import React from "react";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="mt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="my-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="text-gray-600 space-y-1">
              <p>
                <strong>Effective Date:</strong> 20-5-2025
              </p>
              <p>
                <strong>Last Updated:</strong> 20-5-2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div className=" md:p-8 p-4">
            {/* Data Protection Notice */}
            <div className="  mb-8">
              <div className="flex">
                <div className="">
                  <h3 className=" font-medium ">Your Privacy Matters</h3>
                  <div className="mt-2 text-sm ">
                    <p>
                      We are committed to protecting your personal information
                      and being transparent about what data we collect and how
                      we use it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className=" leading-relaxed mb-4">
                  At [Your Website Name] (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;), we respect your privacy and are committed to
                  protecting your personal data. This Privacy Policy explains
                  how we collect, use, and safeguard your information when you
                  visit our website.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>
                <div className=" p-6 mb-4">
                  <p className="font-semibold text-gray-900 mb-3">
                    We may collect the following types of information:
                  </p>
                  <ul className=" space-y-2">
                    <li>
                      • <strong>Personal Information:</strong> Name, email
                      address, and other contact details when you voluntarily
                      provide them
                    </li>
                    <li>
                      • <strong>Usage Data:</strong> Information about how you
                      use our website, including IP address, browser type, and
                      pages visited
                    </li>
                    <li>
                      • <strong>Cookies and Tracking Technologies:</strong> Data
                      collected through cookies and similar technologies
                    </li>
                    <li>
                      • <strong>Health Information:</strong> General health
                      information you choose to share with us (never without
                      your explicit consent)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>

                <div className="grid md:grid-cols-1 gap-6 mb-4">
                  <div className="md:px-4 px-0 ">
                    <h3 className="font-semibold  mb-3"> Purposes of Use</h3>
                    <ul className="  space-y-1">
                      <li>• Provide and maintain our website services</li>
                      <li>• Respond to your inquiries and requests</li>
                      <li>
                        • Send educational content and updates (with consent)
                      </li>
                      <li>• Improve our website and user experience</li>
                      <li>• Analyze website usage patterns</li>
                    </ul>
                  </div>

                  <div className="md:px-4 px-0 ">
                    <h3 className="font-semibold  mb-3"> Legal Basis</h3>
                    <ul className=" space-y-1">
                      <li>• Your consent for specific purposes</li>
                      <li>• Legitimate interests in website operation</li>
                      <li>• Compliance with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className=" leading-relaxed">
                  We do not sell your personal information. We may share your
                  data with:
                </p>
                <ul className=" mt-2 space-y-2">
                  <li>
                    • <strong>Service Providers:</strong> Trusted third parties
                    who assist in website operation
                  </li>
                  <li>
                    • <strong>Legal Requirements:</strong> When required by law
                    or to protect our rights
                  </li>
                  <li>
                    • <strong>Business Transfers:</strong> In connection with a
                    merger or acquisition
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  5. Data Security
                </h2>
                <p className=" leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  6. Your Rights
                </h2>
                <div className=" p-4">
                  <p className=" leading-relaxed">
                    Depending on your location, you may have the right to:
                  </p>
                  <ul className=" mt-2 space-y-2">
                    <li>• Access and receive a copy of your personal data</li>
                    <li>• Correct inaccurate or incomplete information</li>
                    <li>• Request deletion of your personal data</li>
                    <li>
                      • Object to or restrict certain processing activities
                    </li>
                    <li>• Withdraw consent at any time (where applicable)</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className=" leading-relaxed">
                  Our website uses cookies and similar technologies to enhance
                  user experience, analyze website performance, and for
                  advertising purposes. You can control cookies through your
                  browser settings.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  8. Children&apos;s Privacy
                </h2>
                <p className=" leading-relaxed">
                  Our website is not intended for children under 16. We do not
                  knowingly collect personal information from children. If you
                  believe we have inadvertently collected such information,
                  please contact us immediately.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  9. Changes to This Policy
                </h2>
                <p className=" leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the &quot;Last Updated&quot; date.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  10. Contact Information
                </h2>
                <div className=" p-4">
                  <p className=" font-medium mb-2">
                    If you have questions about this Privacy Policy or your
                    data, please contact us:
                  </p>
                  <ul className=" space-y-1">
                    <li>
                      <strong>Email:</strong> privacy@yourdomain.com
                    </li>
                    <li>
                      <strong>Address:</strong> Your Business Address
                    </li>
                    <li>
                      <strong>Phone:</strong> Your Phone Number
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
