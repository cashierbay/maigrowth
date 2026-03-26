import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

let supabase: any = null;

function getSupabase() {
  if (!supabase) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing Supabase environment variables. See SUPABASE_SETUP.md");
    }
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
}

export async function submitContact(data: {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service?: string;
  message: string;
}) {
  const sb = getSupabase();
  const { error } = await sb.from("contact_submissions").insert([data]);
  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error.message || "Failed to submit contact form");
  }
}

export async function getContactSubmissions() {
  try {
    const sb = getSupabase();
    const { data, error } = await sb
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase query error:", error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error("Failed to fetch submissions:", err);
    return [];
  }
}

export async function submitTestimonial(data: {
  name: string;
  role: string;
  quote: string;
  stars: number;
}) {
  const sb = getSupabase();
  const { error } = await sb.from("testimonials").insert([data]);
  if (error) {
    console.error("Supabase testimonial insert error:", error);
    throw new Error(error.message || "Failed to submit testimonial");
  }
}

export async function getTestimonials() {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
