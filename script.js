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

function getSets() {
    errorsElement.innerHTML = "";
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
    console.log(searchString);
    if (expansionCount == 0) {
        errorsElement.innerHTML = "No expansions selected!";
        return;
    }
    if (expansionCount > 2) {
        errorsElement.innerHTML = "Only combinations of 1 or 2 expansions are allowed.";
        return;
    }
    if (expansionCount == 1 && checkboxElements[3].checked) {
        errorsElement.innerHTML = "Alchemy has no kingdoms on its own due to its limited card pool. Please add another expansion.";
        return;
    }
    const result = kingdoms.filter(kingdom => kingdom.expansions == searchString);
}
