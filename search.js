const resortcardtemplate = document.querySelector("[resort-template]");
const resortcardcontainer = document.querySelector("[resort-cards-container]");

fetch("http://localhost:8083/resorts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((resorts) => {
      const card = resortcardtemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = resorts.name;
      body.textContent = resorts.location;
      resortcardcontainer.append(card);
    });
  });
