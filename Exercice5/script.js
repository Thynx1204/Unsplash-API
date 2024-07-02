const accessKey = 'CiNVR-jPHnOZ8TUwZzwcZPCuu_LVdJKiqGh2Qzvq2Fs'

async function fetchImages(query = '') {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=18`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        console.log(data.results[0].urls)
        displayImages(data.results);
    } catch (error) {
        displayError(error.message);
    }
}

function displayImages(images) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imageGrid.appendChild(imgElement);
    });
}

function displayError(message) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = `<p>${message}</p>`;
}

function searchImages() {
    const query = document.getElementById('search').value;
    fetchImages(query);
}

// Initial load of images
fetchImages('car');
