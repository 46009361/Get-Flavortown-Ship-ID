// content.js

async function ship(doc) {
  const b64 = doc?.querySelector("#suggestion_token").value.split("--")[0];
  
  if (!b64) {
    return;
  }

  const card = doc.querySelectorAll(".votes-new__project-card-stat")[1];
  const clone = card.cloneNode(true);
  const response = await fetch(chrome.runtime.getURL("images/ship.svg"));
  const shipImg = await response.text();
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(shipImg, "image/svg+xml");
  const svg = svgDoc.documentElement;
  clone.querySelector("svg").replaceWith(svg);
  const span = clone.querySelector("span");
  const shipEventId = JSON.parse(atob(b64)).ship_event_id;
  console.log(shipEventId);
  span.textContent = chrome.i18n.getMessage("ship", [shipEventId]);
  card.parentElement.appendChild(clone);
  return;
}

ship(document);