export default async function handleLogin(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reminder/update`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });
    window.location.href = '/reminders'
}