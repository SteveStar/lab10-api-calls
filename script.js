//Here's Task 1
document.getElementById('fetch-button').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        })
        .catch(error => {
            document.getElementById('output').innerText = 'Error: ' + error.message;
        });
});

//Here's Task 2
document.getElementById('xhr-button').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        } else {
            document.getElementById('output').innerText = 'Error: ' + xhr.status;
        }
    };
    xhr.onerror = () => {
        document.getElementById('output').innerText = 'Error: Unable to fetch data.';
    };
    xhr.send();
});

//here's Task 3

document.getElementById('submit-post').addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;
    const postData = { title: postTitle, body: postBody };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<h3>Post Submitted</h3><p>ID: ${data.id}</p><h4>${data.title}</h4><p>${data.body}</p>`;
    })
    .catch(error => {
        document.getElementById('output').innerText = 'Error: ' + error.message;
    });
});

//here's Task 4

document.getElementById('update-post-button').addEventListener('click', () => { 
    const postId = document.getElementById('update-post-id').value; 
    const postTitle = document.getElementById('update-post-title').value; 
    const postBody = document.getElementById('update-post-body').value; 
    const updatedData = { title: postTitle, body: postBody }; 

    if (!postId || !postTitle || !postBody) { 
        document.getElementById('output').innerText = 'Error: Please fill in all fields.'; 
        return; 
    }

    const xhr = new XMLHttpRequest(); 
    xhr.open('PUT', `https://jsonplaceholder.typicode.com/posts/${postId}`); 
    xhr.setRequestHeader('Content-Type', 'application/json'); 
    xhr.onload = () => { 
        if (xhr.status === 200) { 
            const data = JSON.parse(xhr.responseText); 
            const outputDiv = document.getElementById('output'); 
            outputDiv.innerHTML = `<h3>Post Updated</h3><h4>${data.title}</h4><p>${data.body}</p>`; 
        } else { 
            document.getElementById('output').innerText = 'Error: ' + xhr.status; 
        } 
    }; 
    xhr.onerror = () => { 
        document.getElementById('output').innerText = 'Error: Unable to update post.'; 
    }; 
    xhr.send(JSON.stringify(updatedData)); 
});

// here's the POST stuff 
document.getElementById('post-button').addEventListener('click', () => {
    const data = { text: document.getElementById('data-input').value };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = 'POST Response: ' + JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('output').innerText = 'Error: ' + error;
    });
});

// and here's the PUT stuff
document.getElementById('put-button').addEventListener('click', () => {
    const data = { text: document.getElementById('data-input').value };

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = 'PUT Response: ' + JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('output').innerText = 'Error: ' + error;
    });
});