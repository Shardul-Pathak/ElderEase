export async function handleSignup (credential, role, setIsLoggedIn) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/google-auth-signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential, role }),
    });
    if (response.ok) {
        setIsLoggedIn(true);
        window.location.href='/home'; 
    }
    else {
        const message = 'SignIn Failed';
        alert(message);
    }
}

export async function handleLogin (credential, setIsLoggedIn) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/google-auth-login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential }),
    });

    if (response.ok) {
        setIsLoggedIn(true);
        window.location.href='/home';
    } else {
        const message = 'Login failed';
        alert(message);
        window.location.href='/signup';
    }
}