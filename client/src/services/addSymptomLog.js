export default async function addLog(symptom) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/logs/addSymptom`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptom }),
    });

    if (response.ok) {
        window.location.href='/checkin';
    } else {
        const message = 'Log Failed';
        alert(message);
    }
}