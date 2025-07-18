import {createClient} from '@supabase/supabase-js';

let projectUrl = import.meta.env.VITE_PROJECT_URL;
let apiKey = import.meta.env.VITE_API_KEY;

let supabase = createClient(projectUrl, apiKey);

export default supabase;