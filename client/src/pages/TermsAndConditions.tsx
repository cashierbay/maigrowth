import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <main>
      <div style={{ paddingTop: "clamp(60px, 10vw, 100px)", paddingBottom: "clamp(40px, 8vw, 80px)", backgroundColor: "#F7F6F4" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-syne font-extrabold text-4xl mb-4" style={{ color: "#0F0F0F" }}>
              Terms of Service
            </h1>
            <p className="text-sm mb-12" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              Last updated: March 23, 2026
            </p>

            <div className="space-y-8" style={{ fontFamily: "DM Sans, sans-serif", lineHeight: 1.8, color: "#3D3D3D" }}>
              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using MaiGrowth's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of MaiGrowth.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>2. Services Description</h2>
                <p>
                  MaiGrowth provides professional link building services including guest post placements, link insertion services, AI and LLM optimization for search visibility, and campaign packages combining multiple link types. The specific details of services rendered will be outlined in your order confirmation or service agreement.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>3. Client Obligations</h2>
                <p>
                  As a client, you agree to provide accurate and complete information about your website and business, ensure your website complies with all applicable laws and regulations, not use our services for any illegal, harmful, or unethical purposes, and pay all fees as agreed upon. You are solely responsible for the content on your website and any consequences arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>4. Prohibited Uses</h2>
                <p>
                  You may not use our services for websites that contain illegal content or activities, adult or explicit content, gambling or casino content unless properly licensed, hate speech, discrimination, or harassment, or malware, viruses, or any harmful code. MaiGrowth reserves the right to refuse or terminate services for any website that violates these prohibitions without refund.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>5. Service Delivery</h2>
                <p>
                  Links are typically delivered within 3 to 4 weeks from order confirmation. Timelines may vary based on package complexity and site availability. For premium packages, you may review and approve placement sites before publication. Upon completion, we provide detailed reports including live URLs, anchor texts, Domain Rating (DR) metrics, and traffic data.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>6. Link Guarantee</h2>
                <p>
                  All links are guaranteed for 12 months from the date of placement. If a link is removed during this period, we will replace it at no additional cost with a link of equal or greater value, or provide a pro-rated refund at your discretion. This guarantee covers link removal only and does not cover changes in DR or traffic metrics over time.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>7. No Ranking Guarantees</h2>
                <p>
                  While we employ best practices and high-quality placements, we cannot guarantee specific search engine ranking results. The client acknowledges that SEO outcomes depend on numerous external factors including but not limited to search engine algorithm changes, website authority, content quality, and competitive landscape. MaiGrowth is responsible only for the quality and delivery of link placements as agreed.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>8. Payment Terms</h2>
                <p>
                  Payment is required upfront before work begins unless otherwise agreed in writing. Any payment disputes must be raised within 30 days of service delivery. For detailed refund terms, please refer to our Refund Policy. We reserve the right to suspend services for any outstanding or disputed payments.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>9. Intellectual Property</h2>
                <p>
                  All reports, strategies, and deliverables provided by MaiGrowth to the client are for the client's use only and may not be resold or redistributed without prior written consent. MaiGrowth retains all rights to its proprietary methodologies, tools, and processes.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>10. Termination</h2>
                <p>
                  Either party may terminate the service agreement with written notice. MaiGrowth reserves the right to terminate services immediately if a client violates these Terms of Service. In the event of termination, refunds will be handled in accordance with our Refund Policy.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>11. Limitation of Liability</h2>
                <p>
                  MaiGrowth shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of revenue, rankings, or business opportunities. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>12. Dispute Resolution</h2>
                <p>
                  In the event of a dispute, both parties agree to first attempt resolution through good faith negotiation. If a resolution cannot be reached, the dispute shall be submitted to mediation before any legal proceedings are initiated.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>13. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with applicable laws. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where MaiGrowth operates.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>14. Severability</h2>
                <p>
                  If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>15. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>16. Contact</h2>
                <p>
                  For questions about these Terms of Service, contact us at:
                </p>
                <p className="mt-2">Email: <span style={{ fontWeight: 600 }}>contact@maigrowth.com</span></p>
                <p>Website: <span style={{ fontWeight: 600 }}>https://maigrowth.com</span></p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
