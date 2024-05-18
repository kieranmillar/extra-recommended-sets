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
	document.getElementById("allies"),
	document.getElementById("plunder")
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
			checkboxElements[13].disabled = true;
			checkboxElements[14].disabled = true;
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
			checkboxElements[13].disabled = false;
			checkboxElements[14].disabled = false;
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
			expansionCount++;
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

	kingdomContainerElement.scrollIntoView({
		block: 'start',
		inline: 'nearest',
		behavior: 'smooth',
	})
}

function createKingdomContainer(kingdom) {
	let container = document.createElement("div");
	container.id = "kingdom" + kingdom.id;
	container.classList.add("kingdom");

	let playedCheckbox = document.createElement("input");
	playedCheckbox.type = "checkbox";
	if (isExtras) {
		playedCheckbox.onclick = function () { togglePlayedKingdom(kingdom.id); };
		if (playedKingdoms.includes(kingdom.id)) {
			container.classList.add("played");
			playedCheckbox.checked = true;
		}
	} else {
		playedCheckbox.onclick = function () { toggleOfficialPlayedKingdom(kingdom.id); };
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
	for (let i = 0; i < kingdom.cards.length; i++) {
		let card = kingdom.cards[i];
		if (card == "Harem") {
			cardsString += "Harem / Farm, ";
		}
		else {
			cardsString += card + ", ";
		}
		if ((kingdom.hasOwnProperty("bane") && kingdom.bane == card) ||
			(kingdom.hasOwnProperty("obelisk") && kingdom.obelisk == card) ||
			(kingdom.hasOwnProperty("traits") && kingdom.traits.includes(card))) {
			continue;
		}
		if (card == "Harem") {
			clipboardString += clipboardSanitise("Farm", kingdom);
		}
		else {
			clipboardString += clipboardSanitise(card, kingdom);
		}

		if (kingdom.hasOwnProperty("bane")) {
			if (card == "Young Witch") {
				clipboardString += " (" + clipboardSanitise(kingdom.bane, kingdom) + ")";
			}
		}
		clipboardString += ", ";
	};
	cardsString = cardsString.slice(0, -2);
	clipboardString = clipboardString.slice(0, -2);

	if (kingdom.hasOwnProperty("landscapes")) {
		cardsString += "<em>";
		kingdom.landscapes.forEach(card => {
			cardsString += ", " + card;
			clipboardString += ", " + card;
			if (kingdom.hasOwnProperty("obelisk")) {
				if (card == "Obelisk") {
					clipboardString += " (" + clipboardSanitise(kingdom.obelisk, kingdom) + ")";
				}
			}
			if (kingdom.hasOwnProperty("mouse")) {
				if (card == "Way of the Mouse") {
					clipboardString += " (" + clipboardSanitise(kingdom.mouse, kingdom) + ")";
				}
			}
			if (kingdom.hasOwnProperty("traits")) {
				if (kingdom.traits.includes(card)) {
					let thisTraitPosition = kingdom.traits.indexOf(card);
					clipboardString += " (" + clipboardSanitise(kingdom.traits[thisTraitPosition + 1], kingdom) + ")";
				}
			}
		});
		cardsString += "</em>";
	}
	cardsList.innerHTML = cardsString;
	container.appendChild(cardsList);

	if (kingdom.hasOwnProperty("colony")) {
		clipboardString += ", Colonies";
	} else {
		clipboardString += ", No Colonies";
	}
	if (kingdom.hasOwnProperty("shelters")) {
		clipboardString += ", Shelters";
	} else {
		clipboardString += ", No Shelters";
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

	if (kingdom.hasOwnProperty("notes") ||
		kingdom.hasOwnProperty("obelisk") ||
		kingdom.hasOwnProperty("bane") ||
		kingdom.hasOwnProperty("druid") ||
		kingdom.hasOwnProperty("mouse") ||
		kingdom.hasOwnProperty("traits")) {
		let notesText = document.createElement("p");
		let notesString = "<strong>Notes: </strong>";
		if (kingdom.hasOwnProperty("notes")) {
			notesString += kingdom.notes + " ";
		}
		if (kingdom.hasOwnProperty("obelisk")) {
			notesString += kingdom.obelisk + " is the Obelisk target. ";
		}
		if (kingdom.hasOwnProperty("bane")) {
			notesString += kingdom.bane + " is the Bane. ";
		}
		if (kingdom.hasOwnProperty("druid")) {
			notesString += "Druid boons are ";
			kingdom.druid.forEach(boon => {
				notesString += boon + ", ";
			});
			notesString = notesString.slice(0, -2);
			notesString += ". ";
		}
		if (kingdom.hasOwnProperty("mouse")) {
			notesString += "Way of the Mouse uses " + kingdom.mouse + ". ";
		}
		if (kingdom.hasOwnProperty("traits")) {
			for (let i = 0; i < kingdom.traits.length; i += 2) {
				notesString += kingdom.traits[i + 1] + " is " + kingdom.traits[i] + ". ";
			}
		}
		notesText.innerHTML = notesString;
		container.appendChild(notesText);
	}

    let copyContainer = document.createElement("div")
	copyContainer.classList.add("copy__container")

	let clipboardButton = document.createElement("button");
	clipboardButton.innerHTML = "Copy to clipboard";
	copyContainer.appendChild(clipboardButton);

	let copyNotice = document.createElement("p")
	copyNotice.innerHTML = "Copied"
	copyNotice.classList.add("copy__notice")
	copyContainer.appendChild(copyNotice)

	clipboardButton.addEventListener("click", function () {
		navigator.clipboard.writeText(clipboardString);
		copyNotice.classList.add('active')

		setTimeout(() => {
			copyNotice.classList.remove('active')
		}, 2000)
	});

	container.appendChild(copyContainer)

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
	if (localStorage.getItem("playedKingdoms") != null) {
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
	if (localStorage.getItem("officialPlayedKingdoms") != null) {
		officialPlayedKingdoms = JSON.parse(localStorage.getItem("officialPlayedKingdoms"));
	}
}

function wipeLocalData() {
	if (confirm("Are you absolutely sure you want to permanently erase your played kingdom tracking?")) {
		localStorage.clear();
		location.reload();
	}
}

function clipboardSanitise(card, kingdom) {
	let result = '';
	let slashPosition = card.indexOf(" / ");
	if (slashPosition == -1) {
		result = card;
	} else {
		result = card.substring(0, slashPosition);
	}
	if (kingdom.hasOwnProperty("druid")) {
		if (card == "Druid") {
			kingdom.druid.forEach(boon => {
				let apostrophePosition = boon.indexOf("'");
				console.log(apostrophePosition);
				result += " (" + boon.substring(4, apostrophePosition) + ")";
			});
		}
	}
	return result;
}

document.addEventListener('DOMContentLoaded', function () { goToLocation("extras"); }, false);
