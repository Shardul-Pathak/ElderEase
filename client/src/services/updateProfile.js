export default async function handleLogin(event) {
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
    const bio = formData.get('bio');
    const gender = formData.get('gender');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/profile/update`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, gender, bio }),
    });

    if (response.ok) {
        window.location.href='/settings';
    } else {
        const message = 'Update Failed';
        alert(message);
    }
}