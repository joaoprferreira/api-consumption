async function getContent() {
  try {
    const response = await fetch("http://localhost:3333/");

    const data = await response.json();

    show(data);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getContent();

function show(users) {
  let output = "";

  for (user of users) {
    output += `<li>O Nome desse usúario é "<span>${user.name}</span>"</li>`;
  }

  document.querySelector(".main").innerHTML = output;
}
