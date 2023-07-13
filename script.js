var likeIcons = document.querySelectorAll('.bi.bi-heart');

likeIcons.forEach(function (likeIcon) {
    var postId = likeIcon.id;
    var liked = localStorage.getItem(postId);

    if (liked === 'true') {
        likeIcon.classList.add('bi-heart-fill');
        likeIcon.classList.remove('bi-heart');
    }

    likeIcon.addEventListener('click', function () {
        this.classList.toggle('bi-heart');
        this.classList.toggle('bi-heart-fill');

        if (this.classList.contains('bi-heart-fill')) {
            localStorage.setItem(postId, 'true');
        } else {
            localStorage.setItem(postId, 'false');
        }
    });
});