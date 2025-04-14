const form = document.getElementById('form');


const resultHtml = (data)=> {
    let html = `<ul>
    <li>${data.DAY} napi órarend</li>
    `

    if (data.ORA_1) html += `<li>1. óra: ${data.ORA_1}</li>`;
    if (data.ORA_2) html += `<li>1. óra: ${data.ORA_2}</li>`;
    if (data.ORA_3) html += `<li>1. óra: ${data.ORA_3}</li>`;
    if (data.ORA_4) html += `<li>1. óra: ${data.ORA_4}</li>`;
    if (data.ORA_5) html += `<li>1. óra: ${data.ORA_5}</li>`;
    if (data.ORA_6) html += `<li>1. óra: ${data.ORA_6}</li>`;
    if (data.ORA_7) html += `<li>1. óra: ${data.ORA_7}</li>`;
    if (data.ORA_8) html += `<li>1. óra: ${data.ORA_8}</li>`;
    if (data.ORA_9) html += `<li>1. óra: ${data.ORA_9}</li>`;
    if (data.ORA_10) html += `<li>1. óra: ${data.ORA_10}</li>`;
    if (data.ORA_11) html += `<li>1. óra: ${data.ORA_11}</li>`;
    if (data.ORA_12) html += `<li>1. óra: ${data.ORA_12}</li>`;
    return html + "</ul>"
}

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
            resultDiv.innerHTML = resultHtml(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
})