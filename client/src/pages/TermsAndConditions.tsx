import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
              Terms and Conditions
            </h1>
            <p className="text-sm mb-12" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              Last updated: March 23, 2026
            </p>

            <div className="space-y-8" style={{ fontFamily: "DM Sans, sans-serif", lineHeight: 1.8, color: "#3D3D3D" }}>
              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the MaiGrowth website and services, you accept and agree to be bound by these terms and conditions. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>2. Use License</h2>
                <p className="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on MaiGrowth for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer, disassemble, or decompile any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                  <li>Transmit the materials to anyone or any other location</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>3. Disclaimer</h2>
                <p>
                  The materials on MaiGrowth are provided on an 'as is' basis. MaiGrowth makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>4. Limitations</h2>
                <p>
                  In no event shall MaiGrowth or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MaiGrowth, even if MaiGrowth or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on MaiGrowth could include technical, typographical, or photographic errors. MaiGrowth does not warrant that any of the materials on MaiGrowth are accurate, complete, or current. MaiGrowth may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>6. Links</h2>
                <p>
                  MaiGrowth has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MaiGrowth of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>7. Modifications</h2>
                <p>
                  MaiGrowth may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which MaiGrowth operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>9. Campaign Results Disclaimer</h2>
                <p>
                  MaiGrowth provides link building and content placement services but cannot guarantee specific ranking positions or traffic outcomes. Results depend on many factors including content quality, competition, and search algorithm updates.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4" style={{ color: "#0F0F0F" }}>10. Contact Information</h2>
                <p>
                  If you have any questions about these terms and conditions, please contact us at legal@maigrowth.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
