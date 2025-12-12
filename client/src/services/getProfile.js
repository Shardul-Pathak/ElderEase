export default async function getProfile() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/profile/get`, {
        method: 'GET',
        credentials: 'include',
    });
    const res = await response.json();
    return res.profile;
}