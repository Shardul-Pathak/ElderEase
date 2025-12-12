export default async function getLogs() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/logs/getCT`, {
        method: 'GET',
        credentials: 'include',
    });
    const res = await response.json();
    return res;
}
