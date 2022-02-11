const SUPABASE_URL = 'https://xaclphmmjwgsgadrqeda.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhY2xwaG1tandnc2dhZHJxZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NDQ5NTksImV4cCI6MTk2MDAyMDk1OX0.m_J0UOK8xqmqxKkPmb4gtIUq8kEpRGTLmfWok0ZWGO4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getGames() {
    const resp = await client.from('game_ratings').select('*');
    // console.log('hello',resp)
    return checkError(resp);
}
// console.log(await getGames())

export async function getFocusGame(id) {
    const resp = await client
        .from('game_ratings')
        .select('*')
        .eq('id', id)
        .single();
    // console.log('id', resp);
    return checkError(resp);
}
// console.log(await getFocusGame(2));

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
