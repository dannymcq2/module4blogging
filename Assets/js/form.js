document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (!username || !title || !content) {
            errorMessage.textContent = 'Please complete all fields';
            return;
        }

        const blogPost = { username, title, content };
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        form.reset();
        errorMessage.textContent = '';

        window.location.href = 'blog.html';
    });
});
const contentTextarea = document.getElementById('content');
contentTextarea.addEventListener('input', () => {
    contentTextarea.scrollTop = contentTextarea.scrollHeight;
});AC