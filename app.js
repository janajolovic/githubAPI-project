

// fetch("https://api.github.com/users/janajolovic")
//     .then(res => res.json())
//     .then(data => console.log(data))



const getData = async () => {
    const response = await fetch("https://api.github.com/users/janajolovic")
    const data = await response.json();
    console.log(data)
}

getData()