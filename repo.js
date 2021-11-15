const card = document.querySelector(".card");


const createCard = () => {
    fetch("https://api.github.com/users/janajolovic/repos")
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach(repo => {
                html += `
                    <div class="repo">
                        <a href="index.html" class="close-btn"><i class="fas fa-times"></i></a>
                        <div class="repo-data">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            <div id="visibility">${repo.visibility}</div>
                        </div>
                        `
                        if (repo.description) {
                            html += `<p class="desc">${repo.description}</p>`
                        }
                        
                        html += `<p>${repo.language}</p>
                                <p class="created">updated at ${(repo.updated_at).slice(0,10)}</p>
                            </div>`
            })
            card.innerHTML = html
        })
}


createCard()