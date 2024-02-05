
//hide all the images in the thumbnails
javascript:(function() {
    document.querySelectorAll('.punch-filmstrip-thumbnail image').forEach(img => {
        img.style.display = img.style.display === 'none' ? '' : 'none';
    });
})();
