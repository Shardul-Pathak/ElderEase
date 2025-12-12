import { useEffect } from "react";
import { handleSignup, handleLogin } from "../services/handleAuth"

const GoogleLoginButton = (props) => {
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_CLIENT_ID,
            callback: handleCredentialResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("google-signin-button"),
            { theme: "outline", size: "large" }
        );

        google.accounts.id.prompt();
        window.googleInitialized = true; 
    }, []);

    const handleCredentialResponse = async (response) => {
        if(props.role) {
            await handleSignup(response.credential, props.role, props.setIsLoggedIn);
        }
        else {
            await handleLogin(response.credential, props.setIsLoggedIn);
        }
    };

    return <div id="google-signin-button"></div>;
};

export default GoogleLoginButton;
