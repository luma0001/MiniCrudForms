"use strict";

window.addEventListener("load", start);

function start() {
  console.log("runnin down a dream!");
  insertForm();

  document
    .querySelector("#nyBestilling")
    .addEventListener("submit", submitForm);
}

function submitForm() {
  console.log("submitted");
  const elements = document.querySelector("#nyBestilling").elements;
  const bestilling = {
    frisørSalon: elements.frisørSalon.value,
    service: elements.sevice.value,
    dato: elements.dato.value,
    tidspunkt: elements.tidspunkt.value,
    fornavn: elements.fornavn.value,
    efternavn: elements.efternavn.value,
    kundeTelefonnummer: elements.kundeTelefonnummer.value,
    kundeMail: elements.kundeMail.value,
    sms: elements.sms.checked,
  };

  console.log(bestilling);
}

function insertForm() {
  const formsHTML = /*html*/ `<form id="nyBestilling">
          <div id="ordreInfo">
            <legend>Vælg Frisør</legend>
            <label for="frisørSalon">Frisør</label>
            <select id="frisørSalon" name="frisørSalon" required>
              <option value="1">Frisør 1</option>
              <option value="2">Frisør 2</option>
              <option value="3">Frisør 3</option>
              <option value="4">Frisør4</option>
            </select>
            <lable for="service">Service</lable>
            <select type="select" id="service" name="service" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <lable for="dato">Dato</lable>
            <input type="date" id="dato" name="dato" required />
            <lable for="tidspunkt">Tidspunkt</lable>
            <input type="time" id="tidspunkt" name="tidspunkt" required />
          </div>
          <div id="kundeInfo">
            <legend>Kunde Info</legend>
            <lable for="kundeFornavn">Fornavn</lable>
            <input type="text" id="fornavn" name="fornavn" required />
            <lable for="">Efternavn</lable>
            <input type="text" id="efternavn" name="efternavn" required />
            <label for="kundeTelefonnummer">Telefon</label>
            <input
              type="text"
              id="kundeTelefonnummer"
              name="telefonnummer"
              required
            />
            <lable for="kundeMail">Mail</lable>
            <input type="text" id="kundeMail" name="mail" required />
            <lable for="sms">Påmindelse via SMS (24 timer før)</lable>
            <input type="checkbox" id="sms" name="sms" />
            <button id="btn-submit" type="submit">
              Submit
            </button>
          </div>
          <button>Edit</button>
        </form>`;

  document
    .querySelector("#insertHtml")
    .insertAdjacentHTML("beforeend", formsHTML);
}
