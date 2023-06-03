document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.useracc>h1')
    const user = localStorage.getItem('user');
    const username = JSON.parse(user)
    const btnWrapper = document.querySelector('.btn-wrapper')
    if(!localStorage.getItem("isLoggedIn")) {
        btnWrapper.innerHTML = `<button>Login</button>`
        btnWrapper.onclick = () => {
            location.href = 'signin.html'
        }
    }
    else {
        title.textContent = `${username.firstName}`
        btnWrapper.innerHTML = `<button class="logout-btn">Log out</button>`
        const logoutBtn = document.querySelector('.logout-btn')
        logoutBtn.onclick = () => {
            localStorage.removeItem('isLoggedIn')
            location.reload()
            logoutBtn.textContent = "login"
        }
    }
})