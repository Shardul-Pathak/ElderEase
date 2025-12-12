export async function getUsername() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/profile/username`, {
        method: 'GET',
        credentials: 'include',
    });
    const res = await response.json();
    return res.name;
}

export async function getAssociateUsername(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/profile/usernameCT`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });
    const res = await response.json();
    if(!res.name) {
        return "-"
    }
    return res.name;
}