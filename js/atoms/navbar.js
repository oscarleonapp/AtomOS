const navbarToggle = () => {
    document.querySelector('.navbar-toggle').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
};

export default navbarToggle;