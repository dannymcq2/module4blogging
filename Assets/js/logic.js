document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementById('toggle-mode');
    const sunEmoji = document.getElementById('sun-emoji');
    const moonEmoji = document.getElementById('moon-emoji');
    const postsList = document.getElementById('blog-posts');

    function updateEmojis() {
        if (document.body.classList.contains('dark-mode')) {
            sunEmoji.style.display = 'none';
            moonEmoji.style.display = 'inline';
        } else {
            sunEmoji.style.display = 'inline';
            moonEmoji.style.display = 'none';
        }
    }

    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateEmojis(); 
    });

    updateEmojis();

    function displayPosts() {
        console.log('Fetching blog posts from local storage...');
        postsList.innerHTML = '';
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        console.log('Retrieved blog posts:', posts);

        if (posts.length === 0) {
            console.log('No blog posts found.');
            const noPostsMessage = document.createElement('p');
            noPostsMessage.textContent = 'No posts available.';
            postsList.appendChild(noPostsMessage);
        } else {
            console.log('Displaying blog posts...');
            posts.forEach(post => {
                const article = document.createElement('article');
                article.classList.add('post-container'); 

                const usernameHeading = document.createElement('h2');
                usernameHeading.textContent = post.username;
                article.appendChild(usernameHeading);

                const titleHeading = document.createElement('h3');
                titleHeading.textContent = post.title;
                article.appendChild(titleHeading);

                const contentParagraph = document.createElement('p');
                contentParagraph.textContent = post.content;
                article.appendChild(contentParagraph);

                if (post.comments.length > 0) {
                    const commentsList = document.createElement('ul');
                    post.comments.forEach(comment => {
                        const commentItem = document.createElement('li');
                        commentItem.textContent = `${comment.username}: ${comment.content}`;
                        commentsList.appendChild(commentItem);
                    });
                    article.appendChild(commentsList);
                }

                postsList.appendChild(article);
            });
        }
    }

    displayPosts();
});
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');

});
