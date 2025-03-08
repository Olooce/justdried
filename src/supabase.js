import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

import { createClient } from '@supabase/supabase-js';

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

console.log("🚀 Supabase Initialized:", supabase);
