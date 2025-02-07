document.getElementById('transitionButton').addEventListener('click', function () {
    document.body.classList.add("fade-out")

    setTimeout(function () {
        window.location.href = './page/about_me.html';
    }, 500);
});

