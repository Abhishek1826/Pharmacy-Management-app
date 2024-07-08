document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const ordersLink = document.getElementById('ordersLink');
    const productsLink = document.getElementById('productsLink');
    const usersLink = document.getElementById('usersLink');

    const loginStatus = localStorage.getItem('loginStatus') === "true";

    const redirectToOrdersPage = () => {
        window.location.href = 'orders.html';
    };

    if (loginStatus) {
        redirectToOrdersPage();
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'abhishek' && password === 'abhishek') {
            alert('Login successful!');
            localStorage.setItem('loginStatus', "true");
            redirectToOrdersPage();
        } else {
            alert('Invalid username or password');
        }
    });

    ordersLink.addEventListener('click', function() {
        if (loginStatus) {
            alert('Navigating to Orders Page');
            redirectToOrdersPage();
        } else {
            alert('Please log in first');
        }
    });

    productsLink.addEventListener('click', function() {
        if (loginStatus) {
            alert('Navigating to Products Page');
            window.location.href = 'products.html';
        } else {
            alert('Please log in first');
        }
    });

    usersLink.addEventListener('click', function() {
        if (loginStatus) {
            alert('Navigating to Users Page');
            window.location.href = 'users.html';
        } else {
            alert('Please log in first');
        }
    });
});
