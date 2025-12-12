export default async function addReminder(event) {
    const formData = new FormData(event.target);
    const time = formData.get('time');
    const frequency = formData.get('frequency');
    const title = formData.get('title');
    const description = formData.get('description');
    console.log(time, frequency, title, description);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reminder/add`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time, frequency, title, description }),
    });
    const res = await response.json();
    return res.reminders;
}