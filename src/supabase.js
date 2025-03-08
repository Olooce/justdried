import { createClient } from '@supabase/supabase-js';

console.log("Environment Variables:", import.meta.env);


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Your fetch function
const customFetch = async (input, init = {}) => {
    init.headers = {
        ...init.headers,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    return fetch(input, init);
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    fetch: customFetch,
});

console.log("Supabase Initialized:", supabase);
