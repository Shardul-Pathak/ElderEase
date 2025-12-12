export default async function addLog(mood, medTaken, sleep, water, activity) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/logs/add`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood, medTaken, sleep, water, activity }),
    });

    if (response.ok) {
        window.location.href='/checkin';
    } else {
        const message = 'Log Failed';
        alert(message);
    }
}