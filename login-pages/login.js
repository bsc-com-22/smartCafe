let selectedRole = "student";

function switchRole(role) {
    selectedRole = role;
    document.querySelector('.form-heading').textContent = `Login to your Account (${capitalize(role)})`;

    const buttons = document.querySelectorAll(".role-switch button");
    buttons.forEach(btn => btn.classList.remove("active"));

    const activeBtn = document.querySelector(`.role-switch button[onclick*="${role}"]`);
    if (activeBtn)
        activeBtn.classList.add("active");
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (selectedRole === "student") {
        window.location.href = "../main-pages/index.html";
    } else if (selectedRole === "staff") {
        window.location.href = "staff.html";
    } else if (selectedRole === "admin") {
        window.location.href = "admin.html";
    }
}
