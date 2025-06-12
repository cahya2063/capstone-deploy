// supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://flhgnivsvuixjyprsygt.supabase.co'; // Ganti dengan URL proyek kamu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaGduaXZzdnVpeGp5cHJzeWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NDMzNjUsImV4cCI6MjA2NTExOTM2NX0.PNmZKr1V8F9INdfkaUV0a02fCrpLaScQzSHRvXhwQ14'; // API Key Supabase kamu

export const supabase = createClient(supabaseUrl, supabaseKey);
