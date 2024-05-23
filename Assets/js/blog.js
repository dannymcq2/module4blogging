document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('blog-posts');

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
                insertBlogPost(post);
            });
        }
    }

    function insertBlogPost(post) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post-container');
        
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = post.title;
        postContainer.appendChild(titleHeading);

        const titleLine = document.createElement('hr');
        postContainer.appendChild(titleLine);
        
        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = post.content;
        contentParagraph.classList.add('bold-and-shifted');
        postContainer.appendChild(contentParagraph);
        
        const postedByParagraph = document.createElement('p');
        postedByParagraph.textContent = `Posted by: ${post.username}`; 
        postContainer.appendChild(postedByParagraph);
        postsList.appendChild(postContainer);
    }

    displayPosts();
});
backButton.addEventListener('click', () => {
    window.history.back();
});