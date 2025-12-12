export default async function getLogById(id) {
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/logs/getbyid`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });
    const res = await response.json();
    return res.log;
}