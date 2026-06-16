// Supabase Client - Shared across all pages
const SUPABASE_URL = 'https://ejxzbxlvqougraxuatsq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_CDHrNuD2u0O5uf3QWYLJ5g_CaYIz4WS';

// Initialize Supabase (only once)
if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
const supabase = window.supabaseClient;

// Function to load sermons from cloud
async function loadSermonsFromCloud() {
    const { data, error } = await supabase
        .from('sermons')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error loading sermons:', error);
        return [];
    }
    return data;
}

// Function to load events from cloud
async function loadEventsFromCloud() {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error loading events:', error);
        return [];
    }
    return data;
}

// Function to load testimonies from cloud
async function loadTestimoniesFromCloud() {
    const { data, error } = await supabase
        .from('testimonies')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error loading testimonies:', error);
        return [];
    }
    return data;
}

// Function to save prayer request to cloud
async function savePrayerRequestToCloud(name, email, message) {
    const { data, error } = await supabase
        .from('prayer_requests')
        .insert([{ name, email, message }]);
    if (error) {
        console.error('Error saving prayer:', error);
        return false;
    }
    return true;
}
