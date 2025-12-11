fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    renderData(data);
  });

function renderData(data) {
  const container = document.createElement("div");
  container.classList.add("posts-container");

  data.forEach((user, index) => {
    let div = document.createElement("div");
    div.classList.add("post");

    // Ranglarni navbati bilan berish
    const colors = [
      "rgba(255, 99, 132, 0.85)",
      "rgba(54, 162, 235, 0.85)",
      "rgba(255, 206, 86, 0.85)",
      "rgba(75, 192, 192, 0.85)",
      "rgba(153, 102, 255, 0.85)",
      "rgba(255, 159, 64, 0.85)",
    ];
    div.style.background = colors[index % colors.length];

    div.innerHTML = `
      <h2>${user.id}: ${user.title}</h2>
      <p>${user.body}</p>
    `;
    container.appendChild(div);
  });

  document.body.appendChild(container);
}
