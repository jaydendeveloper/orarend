const form = document.getElementById('form');


form. addEventListener("submit",(e)=>{
    e.preventDefault();

    const day = form["day"].value;

    fetch(`http://localhost:5000/orarend/${day}`)
        .then((response) => {
            if (!response.ok) {
                console.error("Could not fetch data:", response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = JSON.stringify(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
})