const card = document.querySelector(".card");


const createCard = async  () => {
    response = await fetch("https://api.github.com/users/janajolovic")
    data = await response.json()
    let html = `
        <img src="${data.avatar_url}" alt="">
        <h2>${data.name}</h2>
        <a href="${data.html_url}" target="_blank" class="username">${data.login}</a>
        <p>${data.bio}</p>
        <div class="info">
            <div class="follow">
                <a href="followers.html"><i class="fas fa-user-friends"></i>${data.followers} followers</a>
                <a href="following.html"><i class="fas fa-user-friends"></i>${data.following}  following</a>
            </div>
            <a href="repo.html" class="repos">${data.public_repos} repositories</a>
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
}


createCard()