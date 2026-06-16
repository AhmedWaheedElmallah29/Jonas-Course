import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://maqbzrdbzmehmuyzryfa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hcWJ6cmRiem1laG11eXpyeWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMDk1NzcsImV4cCI6MjA5NjU4NTU3N30.yNMDh6A9gm0zJmmXRfNzYZZyX5UOG2jQzvrcCHo5b0E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
