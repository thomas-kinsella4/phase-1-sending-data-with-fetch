// Add your code here

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json()) 
    .then((resData) => {
        const body = document.querySelector("body");
        body.append(resData.id);
    })
    .catch((error) => {
        const body = document.querySelector("body");
        body.append(error.message);
    })

}

submitData("thomas", "thomas.com");
