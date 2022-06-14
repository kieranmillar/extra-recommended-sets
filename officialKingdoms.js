/* Array of official kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
extras: An array of extra component names (optional)
landscapes: An array of landscape names (optional)
notes: Any extra notes (optional)
expansions: Concatenated string of expansions required, matching checkbox names in order, no spaces
-----*/

var officialKingdoms = [
    {
        id: 0,
        name: "First Game",
        cards: ["Cellar", "Moat", "Merchant", "Village", "Workshop", "Militia", "Remodel", "Smithy", "Market", "Mine"],
        expansions: "base"
    },
	{
        id: 1,
        name: "Size Distortion",
        cards: ["Chapel", "Workshop", "Bureaucrat", "Gardens", "Throne Room", "Bandit", "Festival", "Sentry", "Witch", "Artisan"],
        expansions: "base"
    },
	{
        id: 2,
        name: "Deck Top",
        cards: ["Harbinger", "Vassal", "Village", "Bureaucrat", "Moneylender", "Council Room", "Festival", "Laboratory", "Sentry", "Artisan"],
        expansions: "base"
    },
	{
        id: 3,
        name: "Sleight of Hand",
        cards: ["Cellar", "Harbinger", "Gardens", "Militia", "Poacher", "Smithy", "Throne Room", "Council Room", "Festival", "Library"],
        expansions: "base"
    },
	{
        id: 4,
        name: "Improvements",
        cards: ["Cellar", "Moat", "Merchant", "Moneylender", "Poacher", "Remodel", "Market", "Mine", "Witch", "Artisan"],
        expansions: "base"
    },
	{
        id: 5,
        name: "Silver & Gold",
        cards: ["Chapel", "Harbinger", "Merchant", "Vassal", "Bureaucrat", "Moneylender", "Throne Room", "Bandit", "Laboratory", "Mine"],
        expansions: "base"
    },
	{
        id: 6,
        name: "Underlings",
        cards: ["Cellar", "Vassal", "Festival", "Library", "Sentry", "Pawn", "Diplomat", "Courtier", "Minion", "Nobles"],
        expansions: "baseintrigue"
    },
	{
        id: 7,
        name: "Grand Scheme",
        cards: ["Workshop", "Militia", "Council Room", "Market", "Artisan", "Shanty Town", "Bridge", "Mill", "Mining Village", "Patrol"],
        expansions: "baseintrigue"
    },
	{
        id: 8,
        name: "Deconstruction",
        cards: ["Village", "Remodel", "Throne Room", "Bandit", "Mine", "Lurker", "Swindler", "Diplomat", "Replace", "Harem"],
        expansions: "baseintrigue"
    },
	{
        id: 9,
        name: "Reach for Tomorrow",
        cards: ["Cellar", "Vassal", "Village", "Council Room", "Artisan", "Lookout", "Monkey", "Cutpurse", "Treasure Map", "Sea Witch"],
        expansions: "baseseaside"
    },
	{
        id: 10,
        name: "Repetition",
        cards: ["Harbinger", "Workshop", "Militia", "Remodel", "Festival", "Sea Chart", "Caravan", "Outpost", "Pirate", "Treasury"],
        expansions: "baseseaside"
    },
	{
        id: 11,
        name: "Forbidden Arts",
        cards: ["Cellar", "Gardens", "Throne Room", "Bandit", "Council Room", "Laboratory", "University", "Familiar", "Apprentice", "Possession"],
		extras: ["Potion"],
        expansions: "basealchemy"
    },
	{
        id: 12,
        name: "Potion Mixers",
        cards: ["Cellar", "Militia", "Poacher", "Smithy", "Festival", "Transmute", "Herbalist", "Apothecary", "Alchemist", "Golem"],
		extras: ["Potion"],
        expansions: "basealchemy"
    },
	{
        id: 13,
        name: "Chemistry Lesson",
        cards: ["Moat", "Vassal", "Bureaucrat", "Remodel", "Market", "Witch", "University", "Alchemist", "Philosopher's Stone", "Golem"],
		extras: ["Potion"],
        expansions: "basealchemy"
    }
]
