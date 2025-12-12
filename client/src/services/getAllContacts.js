export default async function getContacts() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/emergency/all`, {
        method: 'GET',
        credentials: 'include',
    });
    const res = await response.json();
    return res.contacts;
}