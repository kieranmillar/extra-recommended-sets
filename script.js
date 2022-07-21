var tabExtras = document.getElementById("tab_extras");
var tabOfficial = document.getElementById("tab_official");
var tabFaq = document.getElementById("tab_faq");
var tabAbout = document.getElementById("tab_about");
var tabChangelog = document.getElementById("tab_changelog");
var locKingdoms = document.getElementById("loc_kingdoms");
var locFaq = document.getElementById("loc_faq");
var locAbout = document.getElementById("loc_about");
var locChangelog = document.getElementById("loc_changelog");

var kingdomsTitleElement = document.getElementById("kingdoms_title");
var disabledNoteElement = document.getElementById("disabledNote");
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
    document.getElementById("menagerie"),
    document.getElementById("allies")
];
var errorsElement = document.getElementById("errors");
var kingdomContainerElement = document.getElementById("kingdomContainer");

var playedKingdoms = [];
var officialPlayedKingdoms = [];
var isExtras = true;

function goToLocation(loc) {
	locKingdoms.classList.remove("active");
	locFaq.classList.remove("active");
	locAbout.classList.remove("active");
	locChangelog.classList.remove("active");
	tabExtras.classList.remove("active");
	tabOfficial.classList.remove("active");
	tabFaq.classList.remove("active");
	tabAbout.classList.remove("active");
	tabChangelog.classList.remove("active");
	switch (loc) {
		case "extras":
			isExtras = true;
			locKingdoms.classList.add("active");
			tabExtras.classList.add("active");
			disabledNoteElement.hidden = false;
			checkboxElements[3].disabled = true;
			checkboxElements[6].disabled = true;
			checkboxElements[7].disabled = true;
			checkboxElements[8].disabled = true;
			checkboxElements[10].disabled = true;
			checkboxElements[11].disabled = true;
			checkboxElements[12].disabled = true;
			checkboxElements[13].disabled = true;
			kingdomsTitleElement.textContent = "Extra Recommended Sets";
			clearSets();
			break;
		case "official":
			isExtras = false;
			locKingdoms.classList.add("active");
			tabOfficial.classList.add("active");
			disabledNoteElement.hidden = true;
			checkboxElements[3].disabled = false;
			checkboxElements[6].disabled = false;
			checkboxElements[7].disabled = false;
			checkboxElements[8].disabled = false;
			checkboxElements[10].disabled = false;
			checkboxElements[11].disabled = false;
			checkboxElements[12].disabled = false;
			checkboxElements[13].disabled = false;
			kingdomsTitleElement.textContent = "Official Recommended Sets";
			clearSets();
			break;
		case "faq":
			locFaq.classList.add("active");
			tabFaq.classList.add("active");
			break;
		case "about":
			locAbout.classList.add("active");
			tabAbout.classList.add("active");
			break;
		case "changelog":
			locChangelog.classList.add("active");
			tabChangelog.classList.add("active");
			break;
	}
}

function clearSets() {
	errorsElement.textContent = "";
    kingdomContainerElement.textContent = "";
	for (var i = 0; i < checkboxElements.length; i++) {
		checkboxElements[i].checked = false;
	}
}

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
	
	let k;
	if (isExtras) {
		k = kingdoms;
	} else {
		k = officialKingdoms;
	}
		

    const result = k.filter(kingdom => kingdom.expansions == searchString);
    if (result.length == 0) {
        errorsElement.textContent = "No sets found. They might not be implemented yet.";
        return;
    }
	
	if (isExtras) {
		loadPlayedKingdoms();
	} else {
		loadOfficialPlayedKingdoms();
	}

    result.forEach(kingdom => {
        let container = createKingdomContainer(kingdom);
        kingdomContainerElement.appendChild(container);
    });
}

function createKingdomContainer(kingdom) {
    let container = document.createElement("div");
	container.id = "kingdom" + kingdom.id;
	container.classList.add("kingdom");

	let playedCheckbox = document.createElement("input");
	playedCheckbox.type = "checkbox";
	if (isExtras) {
		playedCheckbox.onclick = function(){togglePlayedKingdom(kingdom.id);};
		if (playedKingdoms.includes(kingdom.id)) {
			container.classList.add("played");
			playedCheckbox.checked = true;
		}
	} else {
		playedCheckbox.onclick = function(){toggleOfficialPlayedKingdom(kingdom.id);};
		if (officialPlayedKingdoms.includes(kingdom.id)) {
			container.classList.add("played");
			playedCheckbox.checked = true;
		}
	}

	container.appendChild(playedCheckbox);

    let nameHeader = document.createElement("label");
	nameHeader.classList.add("kingdomName");
    nameHeader.textContent = kingdom.name;
    container.appendChild(nameHeader);

	let cardsString = "";
	let clipboardString = "";
	let cardsList = document.createElement("p");
    kingdom.cards.forEach(card => {
        cardsString += card + ", ";
		let cardName = card;
		if (kingdom.hasOwnProperty("obelisk")) {
			if (kingdom.obelisk == card) {
				//cardName += "(o)"; not supported just yet
			}
		}
		clipboardString += cardName + ", ";
    });
	cardsString = cardsString.slice(0, -2);
	clipboardString = clipboardString.slice(0, -2);

	if (kingdom.hasOwnProperty("landscapes")) {
		cardsString += "<em>";
		kingdom.landscapes.forEach(card => {
			cardsString += ", " + card;
			clipboardString += ", " + card;
		});
		cardsString += "</em>";
	}
	cardsList.innerHTML = cardsString;
    container.appendChild(cardsList);

	if (kingdom.hasOwnProperty("colony")) {
		clipboardString += ", Platinum, Colony";
	}
	if (kingdom.hasOwnProperty("shelters")) {
		clipboardString += ", Shelters";
	}

    if (kingdom.hasOwnProperty("extras") || kingdom.hasOwnProperty("colony") || kingdom.hasOwnProperty("shelters")) {
		let extrasList = document.createElement("p");
		let extrasString = "";
		if (kingdom.hasOwnProperty("extras")) {
			kingdom.extras.forEach(card => {
				extrasString += card + ", ";
			});
		}
		if (kingdom.hasOwnProperty("colony")) {
			extrasString += "Platinum, Colony, ";
		}
		if (kingdom.hasOwnProperty("shelters")) {
			extrasString += "Shelters, ";
		}
		extrasList.innerHTML = "<strong>Extras: </strong>" + extrasString.slice(0, -2);
        container.appendChild(extrasList);
    }

    if (kingdom.hasOwnProperty("notes") || kingdom.hasOwnProperty("obelisk")) {
        let notesText = document.createElement("p");
		let notesString = "<strong>Notes: </strong>";
		if (kingdom.hasOwnProperty("notes")) {
			notesString += kingdom.notes + " ";
		}
		if (kingdom.hasOwnProperty("obelisk")) {
			notesString += kingdom.obelisk + " is the Obelisk target. ";
		}
        notesText.innerHTML = notesString;
        container.appendChild(notesText);
    }

	let clipboardButton = document.createElement("button");
	clipboardButton.innerHTML = "Copy to clipboard";
	container.appendChild(clipboardButton);
	clipboardButton.addEventListener ("click", function() {
		navigator.clipboard.writeText(clipboardString);
	});

    return container;
}

function togglePlayedKingdom(id) {
	let kingdomContainer = document.getElementById("kingdom" + id);
	if (playedKingdoms.includes(id)) {
		kingdomContainer.classList.remove("played");
		playedKingdoms = playedKingdoms.filter(x => x !== id);
	} else {
		kingdomContainer.classList.add("played");
		playedKingdoms.push(id);
	}
	savePlayedKingdoms();
}

function savePlayedKingdoms() {
	localStorage.setItem("playedKingdoms", JSON.stringify(playedKingdoms));
}

function loadPlayedKingdoms() {
    if (localStorage.getItem("playedKingdoms") != null)	{
        playedKingdoms = JSON.parse(localStorage.getItem("playedKingdoms"));
    }
}

function toggleOfficialPlayedKingdom(id) {
	let kingdomContainer = document.getElementById("kingdom" + id);
	if (officialPlayedKingdoms.includes(id)) {
		kingdomContainer.classList.remove("played");
		officialPlayedKingdoms = officialPlayedKingdoms.filter(x => x !== id);
	} else {
		kingdomContainer.classList.add("played");
		officialPlayedKingdoms.push(id);
	}
	saveOfficialPlayedKingdoms();
}

function saveOfficialPlayedKingdoms() {
	localStorage.setItem("officialPlayedKingdoms", JSON.stringify(officialPlayedKingdoms));
}

function loadOfficialPlayedKingdoms() {
	if (localStorage.getItem("officialPlayedKingdoms") != null)	{
        officialPlayedKingdoms = JSON.parse(localStorage.getItem("officialPlayedKingdoms"));
    }
}

function wipeLocalData() {
	if (confirm("Are you absolutely sure you want to permanently erase your played kingdom tracking?")) {
		localStorage.clear();
		location.reload(); 
	}
}

document.addEventListener('DOMContentLoaded', function(){ goToLocation("extras"); }, false);
