/**
 * Fetches a list of images from a public API and displays them in a table.
 * The function retrieves up to 20 images, then creates table rows with image details
 * and appends them to the element with ID 'todoTableBody'.
 */
async function loadImages() {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
            const imagens = await resposta.json();

            const container = document.getElementById('todoTableBody');

            imagens.forEach(imagem => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${imagem.id}</td>
                    <td>${imagem.title}</td>
                    <td><img src="${imagem.thumbnailUrl}" alt="${imagem.title}" style="max-width: 100px; max-height: 100px; object-fit: cover;"></td>
                `;
                container.appendChild(row);
            });
        }
        
        loadImages();
    