const form = document.getElementById("form");

const resultHtml = (data) => {
  let html = `
  <h1>${data.DAY[0].toUpperCase() + data.DAY.slice(1)} napi órarend</h1>
  <ol>
    `;

  data.ORA_1 ? (html += `<li>${data.ORA_1}</li>`) : (html += "<li> - </li>");

  data.ORA_2 ? (html += `<li>${data.ORA_2}</li>`) : (html += "<li> - </li>");

  data.ORA_3 ? (html += `<li>${data.ORA_3}</li>`) : (html += "<li> - </li>");

  data.ORA_4 ? (html += `<li>${data.ORA_4}</li>`) : (html += "<li> - </li>");

  data.ORA_5 ? (html += `<li> ${data.ORA_5}</li>`) : (html += "<li> - </li>");

  data.ORA_6 ? (html += `<li>${data.ORA_6}</li>`) : (html += "<li> - </li>");

  data.ORA_7 ? (html += `<li>${data.ORA_7}</li>`) : (html += "<li> - </li>");

  data.ORA_8 ? (html += `<li>${data.ORA_8}</li>`) : (html += "<li> - </li>");

  data.ORA_9 ? (html += `<li> ${data.ORA_9}</li>`) : (html += "<li> - </li>");

  data.ORA_10 ? (html += `<li>${data.ORA_10}</li>`) : (html += "<li> - </li>");

  data.ORA_11 ? (html += `<li>${data.ORA_11}</li>`) : (html += "<li> - </li>");

  data.ORA_12 ? (html += `<li>${data.ORA_12}</li>`) : (html += "<li> - </li>");

  return html + "</ol>";
};

form.addEventListener("submit", (e) => {
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
});
