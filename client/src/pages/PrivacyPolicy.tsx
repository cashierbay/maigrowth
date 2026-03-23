import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main>
      <div style={{ paddingTop: "100px", paddingBottom: "80px", backgroundColor: "#F7F6F4" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-syne font-extrabold text-4xl mb-4" style={{ color: "#0F0F0F" }}>
              Privacy Policy
            </h1>
            <p className="text-sm mb-12" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              Last updated: March 23, 2026
            </p>

            <div className="space-y-8" style={{ fontFamily: "DM Sans, sans-serif", lineHeight: 1.8, color: "#3D3D3D" }}>
              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>1. Introduction</h2>
                <p>
                  MaiGrowth ("we," "us," "our," or "Company") operates the maigrowth.com website and related services. We are committed to protecting your privacy and ensuring you have a positive experience on our site.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>2. Information We Collect</h2>
                <p className="mb-3">We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone, company)</li>
                  <li>Website and business information</li>
                  <li>Campaign preferences and goals</li>
                  <li>Payment information (processed securely via third-party providers)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Communicate about your account and campaigns</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>4. Information Sharing</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is entirely secure.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>6. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>7. Cookies</h2>
                <p>
                  Our website uses cookies to enhance your experience. You can control cookie settings through your browser. For more details, see our cookie policy.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>8. Third-Party Links</h2>
                <p>
                  Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party websites. Please review their privacy policies before providing personal information.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>9. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of significant changes by posting the updated policy on our website with an updated "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>10. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or our privacy practices, please contact us at privacy@maigrowth.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
