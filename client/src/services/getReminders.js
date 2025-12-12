export default async function getReminder() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reminder/get`, {
        method: 'GET',
        credentials: 'include',
    });
    const res = await response.json();
    return res.reminders;
}