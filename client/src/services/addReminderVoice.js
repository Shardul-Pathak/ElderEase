export default async function addReminderVoice(intent) {
    const [hours, minutes] = intent.time.split(':').map(Number);
    const now = new Date();
    const time = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes
    ).toISOString();
    const title = intent.item;
    const description = intent.raw;
    const frequency = 'One-Time'
    console.log(title, description, frequency, time)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reminder/add`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time, frequency, title, description }),
    });
    const res = await response.json();
    window.location.href = '/reminders';
}