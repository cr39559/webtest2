const smallPhone = window.matchMedia('(max-width: 400px)')

function showSidebar() {
    let sidebar = document.querySelector('.sidebar')

    if (smallPhone.matches) {
        sidebar.style.width = '100%'
    } else {

        sidebar.style.width = '15.625rem'
    }
}

function hideSidebar() {
    let sidebar = document.querySelector('.sidebar')

    sidebar.style.width = '0'
}