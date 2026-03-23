import { useQuery } from "@tanstack/react-query";
import { Users, Mail, Globe, Building, Briefcase, MessageSquare, Calendar, Download } from "lucide-react";
import { getContactSubmissions } from "@/lib/supabase";

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  website: string | null;
  service: string | null;
  message: string | null;
  created_at: string | null;
}

function formatDate(dateStr: string | Date | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportCSV(submissions: ContactSubmission[]) {
  const headers = ["ID", "Name", "Email", "Company", "Website", "Service", "Message", "Submitted At"];
  const rows = submissions.map((s) => [
    s.id,
    s.name,
    s.email,
    s.company ?? "",
    s.website ?? "",
    s.service ?? "",
    (s.message ?? "").replace(/\n/g, " "),
    formatDate(s.created_at),
  ]);
  const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `maigrowth-leads-${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminSubmissions() {
  const { data: submissions = [], isLoading, error } = useQuery<ContactSubmission[]>({
    queryKey: ["contact_submissions"],
    queryFn: () => getContactSubmissions(),
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7F6F4" }}>
      <div
        style={{
          backgroundColor: "#12153D",
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div className="flex items-center gap-3">
          <Users size={22} style={{ color: "#FF6B35" }} />
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "white",
            }}
          >
            Lead Submissions
          </span>
          {!isLoading && (
            <span
              className="inline-flex items-center justify-center rounded-full text-[12px] font-bold px-2.5 py-0.5"
              style={{ backgroundColor: "#FF6B35", color: "white", fontFamily: "DM Sans, sans-serif" }}
              data-testid="text-submission-count"
            >
              {submissions.length}
            </span>
          )}
        </div>
        {submissions.length > 0 && (
          <button
            onClick={() => exportCSV(submissions)}
            className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              fontFamily: "DM Sans, sans-serif",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            data-testid="button-export-csv"
          >
            <Download size={15} />
            Export CSV
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {isLoading && (
          <div className="flex items-center justify-center py-24">
            <div
              className="rounded-full animate-spin"
              style={{
                width: 36,
                height: 36,
                border: "3px solid #E2E0DC",
                borderTopColor: "#FF6B35",
              }}
            />
          </div>
        )}

        {error && (
          <div
            className="rounded-xl p-6 text-center"
            style={{ backgroundColor: "#FFF0EB", border: "1px solid #FF6B35" }}
          >
            <p style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}>
              Failed to load submissions. Make sure the server is running.
            </p>
          </div>
        )}

        {!isLoading && !error && submissions.length === 0 && (
          <div className="text-center py-24">
            <MessageSquare size={48} style={{ color: "#E2E0DC", margin: "0 auto 16px" }} />
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#0F0F0F",
                marginBottom: 8,
              }}
            >
              No submissions yet
            </p>
            <p style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              Leads from the contact form will appear here.
            </p>
          </div>
        )}

        {!isLoading && submissions.length > 0 && (
          <div className="space-y-4">
            {[...submissions].reverse().map((s) => (
              <div
                key={s.id}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "white", border: "1px solid #E2E0DC" }}
                data-testid={`card-submission-${s.id}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#0F0F0F",
                        marginBottom: 4,
                      }}
                      data-testid={`text-name-${s.id}`}
                    >
                      {s.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={`mailto:${s.email}`}
                        className="flex items-center gap-1.5 text-[13px] hover:underline"
                        style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
                        data-testid={`link-email-${s.id}`}
                      >
                        <Mail size={13} />
                        {s.email}
                      </a>
                      {s.company && (
                        <span className="flex items-center gap-1.5 text-[13px]" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
                          <Building size={13} />
                          {s.company}
                        </span>
                      )}
                      {s.website && (
                        <a
                          href={s.website.startsWith("http") ? s.website : `https://${s.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[13px] hover:underline"
                          style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
                        >
                          <Globe size={13} />
                          {s.website}
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {s.service && (
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "#FFF0EB",
                          color: "#FF6B35",
                          fontFamily: "DM Sans, sans-serif",
                        }}
                        data-testid={`tag-service-${s.id}`}
                      >
                        <Briefcase size={10} className="inline mr-1" />
                        {s.service}
                      </span>
                    )}
                    <span
                      className="flex items-center gap-1.5 text-[12px]"
                      style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
                    >
                      <Calendar size={12} />
                      {formatDate(s.submittedAt)}
                    </span>
                  </div>
                </div>

                {s.message && (
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "#F7F6F4" }}
                  >
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
                      data-testid={`text-message-${s.id}`}
                    >
                      {s.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
