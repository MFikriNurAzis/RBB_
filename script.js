function showPage(pageId, event) {
    const contents = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.nav-link');

    contents.forEach(content => {
        content.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
