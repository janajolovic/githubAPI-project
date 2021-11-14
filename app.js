const card = document.querySelector(".card");


const createCard = () => {
    fetch("https://api.github.com/users/janajolovic")
        .then(response => response.json())
        .then(data => {
            let html = `
                <img src="${data.avatar_url}" alt="">
                <h2>${data.name}</h2>
                <a href="${data.html_url}" target="_blank" class="username">${data.login}</a>
                <p>${data.bio}</p>
                <div class="info">
                    <div class="follow">
                        <button class="f followers"><i class="fas fa-user-friends"></i>${data.followers} followers</button>
                        <button class="f following"><i class="fas fa-user-friends"></i>${data.following}  following</button>
                    </div>
                    <button class="repos">${data.public_repos} repositories</button>
            `
            if (data.company) {
                html += `<p><i class="far fa-building"></i>${data.company}</p>`
            } 
            if (data.location) {
                html += `<p><i class="fas fa-map-marker-alt"></i>${data.location}</p>`
            }
            if (data.email) {
                html += `<p><i class="far fa-envelope"></i>${data.email}</p>`
            }

            html += `<p class="created">created at ${(data.created_at).slice(0,10)}</p>
                    </div>`
                    
            card.innerHTML = html;
        })
}


createCard()