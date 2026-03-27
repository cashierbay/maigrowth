// Lazy-loaded Supabase to avoid loading SDK on initial page load
let supabasePromise: Promise<any> | null = null;

async function getSupabaseLazy() {
  if (!supabasePromise) {
    supabasePromise = import("@supabase/supabase-js").then(({ createClient }) => {
      const url = import.meta.env.VITE_SUPABASE_URL || "";
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
      if (!url || !key) {
        throw new Error("Missing Supabase environment variables");
      }
      return createClient(url, key);
    });
  }
  return supabasePromise;
}

export async function getContactSubmissionsLazy() {
  try {
    const sb = await getSupabaseLazy();
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
