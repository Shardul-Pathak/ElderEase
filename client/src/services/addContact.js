export default async function addContact(event) {
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const relationship = formData.get('relationship');
    const phone = formData.get('phone');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/emergency/add`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, relationship, phone }),
    });
    const res = await response.json();
    return res.contacts;
}