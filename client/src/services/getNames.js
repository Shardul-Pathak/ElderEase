export default async function getNames () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reminder/getnames`, {
        method: 'GET',
        credentials: 'include',
    });
    const res = await response.json();
    return res.names;
}