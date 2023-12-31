const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    
    if (!email || !password) {
        alert("Please provide your username and password.");
        return;
    };

    if (email && password) {
        const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "application/json"},
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to log in");
        }
    }
};

document
  .querySelector(".loginForm")
  .addEventListener("submit", loginFormHandler);
