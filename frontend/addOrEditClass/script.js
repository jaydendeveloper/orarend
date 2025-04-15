const form = document.getElementById("addClassForm");
const daySelect = form["day"];

function getCurrentTimetable(day) {
  fetch(`http://localhost:5000/orarend/${day}`)
    .then((response) => {
      if (!response.ok) {
        console.error("Could not fetch data:", response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      form["ORA_1"].value = data.ORA_1 || "";
      form["ORA_2"].value = data.ORA_2 || "";
      form["ORA_3"].value = data.ORA_3 || "";
      form["ORA_4"].value = data.ORA_4 || "";
      form["ORA_5"].value = data.ORA_5 || "";
      form["ORA_6"].value = data.ORA_6 || "";
      form["ORA_7"].value = data.ORA_7 || "";
      form["ORA_8"].value = data.ORA_8 || "";
      form["ORA_9"].value = data.ORA_9 || "";
      form["ORA_10"].value = data.ORA_10 || "";
      form["ORA_11"].value = data.ORA_11 || "";
      form["ORA_12"].value = data.ORA_12 || "";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

getCurrentTimetable(daySelect.value);

daySelect.addEventListener("change", async (event) => {
  event.preventDefault();
  const day = event.target.value;

  getCurrentTimetable(day);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const day = form["day"].value;
  const ORA_1 = form["ORA_1"].value || null;
  const ORA_2 = form["ORA_2"].value || null;
  const ORA_3 = form["ORA_3"].value || null;
  const ORA_4 = form["ORA_4"].value || null;
  const ORA_5 = form["ORA_5"].value || null;
  const ORA_6 = form["ORA_6"].value || null;
  const ORA_7 = form["ORA_7"].value || null;
  const ORA_8 = form["ORA_8"].value || null;
  const ORA_9 = form["ORA_9"].value || null;
  const ORA_10 = form["ORA_10"].value || null;
  const ORA_11 = form["ORA_11"].value || null;
  const ORA_12 = form["ORA_12"].value || null;

  try {
    const response = await fetch(`http://localhost:5000/orarend/${day}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ORA_1,
        ORA_2,
        ORA_3,
        ORA_4,
        ORA_5,
        ORA_6,
        ORA_7,
        ORA_8,
        ORA_9,
        ORA_10,
        ORA_11,
        ORA_12,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response}`);
    }

    const data = await response.json();
    console.log("Response data:", data);
  } catch (err) {
    console.error("Error occurred:", err);
  }
});
