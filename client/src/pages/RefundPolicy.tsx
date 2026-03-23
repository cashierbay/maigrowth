import { motion } from "framer-motion";

export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            <p className="text-sm mb-12" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              Last updated: March 23, 2026
            </p>

            <div className="space-y-8" style={{ fontFamily: "DM Sans, sans-serif", lineHeight: 1.8, color: "#3D3D3D" }}>
              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>1. Campaign Start Date Refunds</h2>
                <p>
                  Customers may request a full refund within 14 days of campaign payment if the campaign has not yet commenced. Once campaign work has begun (content research, outreach, or placement), refunds are not available, as resources have been allocated and work is underway.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>2. Link Guarantee Refunds</h2>
                <p>
                  All MaiGrowth packages include a 12-month link guarantee. If a placed link becomes inactive due to site deletion or removal, we will replace it with an equivalent placement at no additional cost within 30 days of verification.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>3. Non-Delivery Refunds</h2>
                <p>
                  If MaiGrowth fails to deliver the promised number of placements within the agreed timeline due to our error or negligence, customers are entitled to a pro-rata refund based on the percentage of undelivered work. Delays caused by client feedback or revisions are not eligible for refund.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>4. Monthly Campaign Refunds</h2>
                <p>
                  For monthly or ongoing campaigns, customers may cancel at any time with 7 days' written notice. No refunds will be issued for partial months or prepaid months. Future months' fees will be waived upon cancellation.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>5. Custom Campaign Refunds</h2>
                <p>
                  Custom or bespoke campaigns are non-refundable once work has commenced. A 50% deposit is required to secure custom work and is non-refundable after 7 days. The remaining balance becomes non-refundable once campaign research and planning have started.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>6. Service Quality Issues</h2>
                <p>
                  If a customer believes MaiGrowth has failed to meet the service quality standards outlined in their campaign agreement, they may submit a detailed complaint within 30 days of campaign completion. We will review and may offer a partial refund, credit toward future work, or re-work of underperforming placements.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>7. Payment Processing Errors</h2>
                <p>
                  If a customer is charged twice for the same campaign due to a system error, a full refund of the duplicate charge will be processed within 5 business days.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>8. No Refunds for Results</h2>
                <p>
                  MaiGrowth provides link building services but does not guarantee specific ranking positions, traffic increases, or lead generation outcomes. Refunds are not issued based on unmet SEO or traffic results, as these depend on numerous external factors including competition, content quality, and search algorithm updates.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>9. Refund Processing</h2>
                <p>
                  Approved refunds will be processed to the original payment method within 10 business days. Depending on your financial institution, it may take an additional 3-5 business days for the credit to appear on your account.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>10. How to Request a Refund</h2>
                <p className="mb-3">To request a refund, please contact our team:</p>
                <p>Email: refunds@maigrowth.com</p>
                <p className="mt-3">Include your invoice number, campaign details, and reason for the refund request. Our team will review and respond within 5 business days.</p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>11. Disputes</h2>
                <p>
                  If you dispute a refund decision, you may appeal to our management team within 14 days. We will conduct a full review and provide a final determination.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
