const card = document.querySelector(".card");


const createCard = () => {
    fetch("https://api.github.com/users/janajolovic/repos")
        .then(response => response.json())
        .then(data => {
                    let html = `<a href="index.html"class='close-btn'><i class="fas fa-times"></i></a>`;
            data.forEach(repo => {
                html += `
                    <div class="repo">
                        <div class="repo-data">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            <div id="visibility">${repo.visibility}</div>
                        </div>
                        <p>${repo.language}</p>
                `

                html += `<p class="created">created at ${(repo.created_at).slice(0,10)}</p>
                        </div>`
            })
            card.innerHTML = html
        })
}


createCard()