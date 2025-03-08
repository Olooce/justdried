import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mixrsoxzxhlxzlotjfbm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1peHJzb3h6eGhseHpsb3RqZmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MTQ1MzgsImV4cCI6MjA1Njk5MDUzOH0.BovhxWfUa5yTZZ0ZyfJOaK4UGrj-cszqcHvVi2gTJZg";

// a custom fetch function that adds headers to every request.
const customFetch = async (input, init = {}) => {
  init.headers = {
    ...init.headers,
    // These headers will be added to every request
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // You could also log or modify the request here if needed.
  return fetch(input, init);
};

// Initialize the Supabase client with your custom fetch.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  fetch: customFetch,
});


console.log("🚀 Supabase Initialized:", supabase);
