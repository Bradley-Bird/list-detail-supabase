const SUPABASE_URL = 'https://xaclphmmjwgsgadrqeda.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhY2xwaG1tandnc2dhZHJxZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NDQ5NTksImV4cCI6MTk2MDAyMDk1OX0.m_J0UOK8xqmqxKkPmb4gtIUq8kEpRGTLmfWok0ZWGO4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async function getUser() {
//     return client.auth.session() && client.auth.session().user;
// }


// export async function checkAuth() {
//     const user = await getUser();

//     if (!user) location.replace('../'); 
// }

// export async function redirectIfLoggedIn() {
//     if (await getUser()) {
//         location.replace('./other-page');
//     }
// }

// export async function signupUser(email, password){
//     const response = await client.auth.signUp({ email, password });
    
//     return response.user;
// }

// export async function signInUser(email, password){
//     const response = await client.auth.signIn({ email, password });

//     return response.user;
// }

// export async function logout() {
//     await client.auth.signOut();

//     return window.location.href = '../';
// }

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
