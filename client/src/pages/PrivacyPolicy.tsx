import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="MaiGrowth's privacy policy. Learn how we protect your data and privacy."
      />
    <main>
      <div style={{ paddingTop: "clamp(60px, 10vw, 100px)", paddingBottom: "clamp(40px, 8vw, 80px)", backgroundColor: "#F7F6F4" }}>
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
                  MaiGrowth ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at maigrowth.com or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>2. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us when you fill out our contact form, subscribe to our newsletter, use our services, or communicate with us via email. This may include your name, email address, company name, website URL, and any other information you choose to provide. We may also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>3. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, respond to your inquiries and provide customer support, send you marketing communications with your consent, analyze usage patterns and improve our website, and comply with applicable legal obligations. We will never use your information in ways that are inconsistent with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>4. Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with service providers who assist in our operations such as hosting, analytics, and email services; when required by law or to protect our legal rights; or with your explicit consent. Any third-party service providers we work with are obligated to keep your information confidential and secure.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>5. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>6. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to analyze website traffic and improve user experience. Cookies are small data files stored on your device. You can control or disable cookies through your browser settings, though doing so may affect certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>7. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>8. Data Security</h2>
                <p>
                  We implement reasonable and appropriate technical and organizational security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>9. Children's Privacy</h2>
                <p>
                  Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>10. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your information, opt-out of marketing communications, and data portability. If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR). California residents may have additional rights under the California Consumer Privacy Act (CCPA). To exercise any of these rights, please contact us using the details below.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>11. Changes to This Policy</h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes by posting the new policy on this page with an updated revision date. We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>12. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2">Email: <span style={{ fontWeight: 600 }}>contact@maigrowth.com</span></p>
                <p>Website: <span style={{ fontWeight: 600 }}>https://maigrowth.com</span></p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
    </>
  );
}
