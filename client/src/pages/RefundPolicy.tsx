import { motion } from "framer-motion";

export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            <p className="text-sm mb-12" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              Last updated: March 23, 2026
            </p>

            <div className="space-y-8" style={{ fontFamily: "DM Sans, sans-serif", lineHeight: 1.8, color: "#3D3D3D" }}>
              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Our Commitment</h2>
                <p>
                  At MaiGrowth, we stand firmly behind the quality of our work and are committed to delivering measurable value to every client. This Refund Policy outlines the circumstances under which refunds are available and the process for requesting them. We encourage you to read this policy carefully before placing an order.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Full Refund Eligibility</h2>
                <p>
                  You are eligible for a full refund under the following circumstances: if we fail to deliver the agreed links within 60 days of order confirmation; if placed links are not indexed by Google within 90 days of delivery; or if the links delivered are significantly below the agreed-upon quality standards, such as a Domain Rating that is 20 or more points lower than promised. Refund eligibility will be assessed on a case-by-case basis with supporting evidence required.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Partial Refund Eligibility</h2>
                <p>
                  You may be eligible for a partial refund if only some of the agreed links were delivered, in which case a refund will be issued for the undelivered portion. Additionally, if links are removed within the first 3 months of placement, you may choose between a replacement link of equal or greater value or a partial refund for the affected links.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>No Refund Situations</h2>
                <p>
                  Refunds are not available in the following cases: when links were delivered as promised and are live and indexed; when there is no ranking improvement, as we guarantee quality placements and not search engine rankings; when the client changes their mind after links have been published; when the client's website was penalized for reasons unrelated to our link building work; or when more than 30 days have passed since the date of link delivery.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>12-Month Link Guarantee</h2>
                <p>
                  All links come with a 12-month guarantee from the date of placement. If any link is removed during this period, we will replace it with a link of equal or greater value at no additional cost, or provide a pro-rated refund for the removed link at your choice. Please note that this guarantee covers link removal only and does not apply to fluctuations in Domain Rating or traffic metrics over time.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Refund Request Process</h2>
                <p>
                  To request a refund, please send an email to contact@maigrowth.com with "Refund Request" in the subject line. Your email should include your order number, a clear explanation of the reason for your refund request, and any supporting evidence such as screenshots or reports. Our team will review your request and respond within 5 business days with a decision or request for additional information.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Refund Timeline</h2>
                <p>
                  Approved refunds will be processed within 10 business days and returned to the original payment method used at the time of purchase. Please allow an additional 5 to 10 business days for the refund to appear in your account, depending on your bank or payment provider.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Dispute Resolution</h2>
                <p>
                  If you are unsatisfied with our refund decision, you may request to escalate the matter. We are committed to working in good faith to find a fair and reasonable resolution for both parties. Escalated disputes will be reviewed by a senior member of our team within 7 business days.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>Contact Us</h2>
                <p>
                  If you have any questions about this Refund Policy, please reach out to us at:
                </p>
                <p className="mt-2">Email: <span style={{ fontWeight: 600 }}>contact@maigrowth.com</span></p>
                <p>Website: <span style={{ fontWeight: 600 }}>https://maigrowth.com</span></p>
                <p className="mt-2" style={{ fontSize: "0.95em" }}>We typically respond within 24 business hours.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
