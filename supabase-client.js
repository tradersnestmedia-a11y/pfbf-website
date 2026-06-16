// Supabase Client - Clean Version
const SUPABASE_URL = 'https://ejxzbxlvqougraxuatsq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_CDHrNuD2u0O5uf3QWYLJ5g_CaYIz4WS';

// Create Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Load sermons
async function loadSermonsFromCloud() {
    const { data, error } = await supabase
        .from('sermons')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error:', error);
        return [];
    }
    return data || [];
}

// Load events
async function loadEventsFromCloud() {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error:', error);
        return [];
    }
    return data || [];
}

// Load testimonies
async function loadTestimoniesFromCloud() {
    const { data, error } = await supabase
        .from('testimonies')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error:', error);
        return [];
    }
    return data || [];
}

// Save prayer request
async function savePrayerRequestToCloud(name, email, message) {
    const { data, error } = await supabase
        .from('prayer_requests')
        .insert([{ name, email, message }]);
    if (error) {
        console.error('Error:', error);
        return false;
    }
    return true;
}
