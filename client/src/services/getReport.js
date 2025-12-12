export default async function addContact(data) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/logs/report`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    const res = await response.json();
    return res.report;
}