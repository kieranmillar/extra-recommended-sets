var checkboxElements = [
    document.getElementById("base"),
    document.getElementById("intrigue"),
    document.getElementById("seaside"),
    document.getElementById("alchemy"),
    document.getElementById("prosperity"),
    document.getElementById("hinterlands"),
    document.getElementById("darkages"),
    document.getElementById("cornguilds"),
    document.getElementById("adventures"),
    document.getElementById("empires"),
    document.getElementById("nocturne"),
    document.getElementById("renaissance"),
    document.getElementById("menagerie")
];
var errorsElement = document.getElementById("errors");
var kingdomContainerElement = document.getElementById("kingdomContainer");

function getSets() {
    errorsElement.textContent = "";
    kingdomContainerElement.textContent = "";
    var checkboxValues = [];
    var expansionCount = 0;
    var searchString = "";
    for (var i = 0; i < checkboxElements.length; i++) {
        checkboxValues[i] = checkboxElements[i].checked;
        if (checkboxElements[i].checked) {
            searchString += checkboxElements[i].value;
            expansionCount ++;
        }
    }
    if (expansionCount == 0) {
        errorsElement.textContent = "No expansions selected!";
        return;
    }
    if (expansionCount > 2) {
        errorsElement.textContent = "Only combinations of 1 or 2 expansions are allowed.";
        return;
    }
    if (expansionCount == 1 && checkboxElements[3].checked) {
        errorsElement.textContent = "Alchemy has no kingdoms on its own due to its limited card pool. Please add another expansion.";
        return;
    }

    const result = kingdoms.filter(kingdom => kingdom.expansions == searchString);
    if (result.length == 0) {
        errorsElement.textContent = "No kingdoms were found for some weird reason.";
        return;
    }

    result.forEach(kingdom => {
        let container = createKingdomContainer (kingdom);
        kingdomContainerElement.appendChild(container);
    });
}

function createKingdomContainer (kingdom) {
    let container = document.createElement("div");

    let nameHeader = document.createElement("h2");
    nameHeader.textContent = kingdom.name;
    container.appendChild(nameHeader);

    let cardsTable = document.createElement("div");
    let cardsTableHeader = document.createElement("h3");
    cardsTableHeader.textContent = "Cards";
    cardsTable.appendChild(cardsTableHeader);
    kingdom.cards.forEach(card => {
        let cardContainer = createCardContainer(card);
        cardsTable.appendChild(cardContainer);
    });
    container.appendChild(cardsTable);

    if (kingdom.hasOwnProperty("extras")) {
        let extrasTable = document.createElement("div");
        let extrasTableHeader = document.createElement("h3");
        extrasTableHeader.textContent = "Extra Cards";
        extrasTable.appendChild(extrasTableHeader);
        kingdom.extras.forEach(card => {
            let cardContainer = createCardContainer(card);
            extrasTable.appendChild(cardContainer);
        });
        container.appendChild(extrasTable);
    }

    if (kingdom.hasOwnProperty("landscapes")) {
        let landscapesTable = document.createElement("div");
        let landscapesTableHeader = document.createElement("h3");
        landscapesTableHeader.textContent = "Landscapes";
        landscapesTable.appendChild(landscapesTableHeader);
        kingdom.landscapes.forEach(card => {
            let cardContainer = createCardContainer(card);
            landscapesTable.appendChild(cardContainer);
        });
        container.appendChild(landscapesTable);
    }

    if (kingdom.hasOwnProperty("notes")) {
        let notesSection = document.createElement("div");
        let notesHeader = document.createElement("h3");
        notesHeader.textContent = "Notes";
        notesSection.appendChild(notesHeader);
        let notesText = document.createElement("div");
        notesText.textContent = kingdom.notes;
        notesSection.appendChild(notesText);
        container.appendChild(notesSection);
    }

    return container;
}

function createCardContainer (cardName) {
    let container = document.createElement("div");
    container.textContent = cardName;
    return container;
}
