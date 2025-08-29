// pages/terms.tsx
import React from "react";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const TermsOfService: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="mt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="my-12 text-center">
            <h1 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">
              Terms of Service
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
          <div className=" pt-0 md:p-8 p-4">
            {/* Medical Disclaimer Alert */}
            <div className="0 p-4 mb-8">
              <div className="flex">
                <div className="">
                  <h3 className="font-medium ">Important Medical Disclaimer</h3>
                  <div className="mt-2 ">
                    <p>
                      This website provides educational information only and is
                      not intended as medical advice, diagnosis, or treatment.
                      Always consult with qualified healthcare professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using [Your Website Name] (&quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;), you (&quot;user&quot; or
                  &quot;you&quot;) agree to be bound by these Terms of Service
                  (&quot;Terms&quot;). If you do not agree to these Terms,
                  please do not use our website.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  2. Medical Disclaimer
                </h2>
                <div className=" rounded-lg p-6 mb-4">
                  <p className="font-semibold  mb-3">
                    IMPORTANT: The information provided on this website is for
                    educational and informational purposes only and is not
                    intended as medical advice, diagnosis, or treatment.
                  </p>
                  <ul className=" space-y-2">
                    <li>
                      • Always seek the advice of your physician or other
                      qualified health provider with any questions you may have
                      regarding a medical condition
                    </li>
                    <li>
                      • Never disregard professional medical advice or delay
                      seeking it because of information you have read on this
                      website
                    </li>
                    <li>
                      • If you think you may have a medical emergency, call your
                      doctor or emergency services immediately
                    </li>
                    <li>
                      • This website does not provide medical advice, diagnosis,
                      or treatment recommendations
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  3. Use of the Website
                </h2>

                <div className="grid md:grid-cols-1 gap-6 mb-4">
                  <div className=" p-4">
                    <h3 className="font-semibold  mb-3"> Permitted Uses</h3>
                    <ul className=" text-sm space-y-1">
                      <li>
                        • Access health information for educational purposes
                      </li>
                      <li>• Read articles and resources we provide</li>
                      <li>• Contact us through provided channels</li>
                    </ul>
                  </div>

                  <div className=" rounded-lg p-4">
                    <h3 className="font-semibold  mb-3"> Prohibited Uses</h3>
                    <ul className=" text-sm space-y-1">
                      <li>• Use the website for any unlawful purpose</li>
                      <li>• Attempt unauthorized access to our systems</li>
                      <li>• Post harmful or inappropriate content</li>
                      <li>• Provide medical advice to others</li>
                      <li>• Commercially exploit our content</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Remaining sections with consistent styling */}
              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  4. User-Generated Content
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you submit content to our website (comments, reviews,
                  etc.), you grant us a non-exclusive right to use, modify, and
                  display such content, represent that you own or have rights to
                  the content, and agree not to submit content that violates
                  others&lsquo; rights or applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text, images, logos,
                  and design, is owned by us or our licensors and is protected
                  by copyright and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  6. Limitation of Liability
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">
                    To the fullest extent permitted by law, we provide this
                    website &quot;as is&quot; without warranties of any kind,
                    are not liable for any damages arising from your use of the
                    website, and our total liability shall not exceed the amount
                    you paid to access our services (if any).
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  7. Contact Information
                </h2>
                <div className=" p-4">
                  <p className=" font-medium mb-2">
                    If you have questions about these Terms, please contact us:
                  </p>
                  <ul className=" space-y-1">
                    <li>
                      <strong>Email:</strong> your-email@domain.com
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

export default TermsOfService;
