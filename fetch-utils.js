const SUPABASE_URL = 'https://xaclphmmjwgsgadrqeda.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhY2xwaG1tandnc2dhZHJxZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NDQ5NTksImV4cCI6MTk2MDAyMDk1OX0.m_J0UOK8xqmqxKkPmb4gtIUq8kEpRGTLmfWok0ZWGO4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

// export async function getGames() {
//     const resp = await client.from('Game-Ratings').select('*');
//     console.log('hello');
//     return checkError(resp);
// }
