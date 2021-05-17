/* Array of kingdoms
-----
idNumber: The idNumber matching its position in the array.
name: The kingdom name
cards: An array of card names
extras: An array of extra component names (optional)
notes: Any extra notes (optional)
expansions: Concatenated string of expansions required, matching checkbox names in order, no spaces
onlineString: Overrides the string to paste into the online client (optional)
-----*/
var kingdoms = [
    {
        idNumber: 0,
        name: "Simplicity",
        cards: ["Harbinger", "Merchant", "Village", "Gardens", "Moneylender", "Smithy", "Council Room", "Festival", "Laboratory", "Market"],
        expansions: "base"
    },
    {
        idNumber: 1,
        name: "Ups and Downs",
        cards: ["Cellar", "Chapel", "Vassal", "Bureaucrat", "Poacher", "Remodel", "Bandit", "Festival", "Library", "Artisan"],
        expansions: "base"
    },
    {
        idNumber: 2,
        name: "Put In The Effort",
        cards: ["Moat", "Merchant", "Workshop", "Poacher", "Smithy", "Throne Room", "Laboratory", "Sentry", "Witch", "Artisan"],
        expansions: "base"
    },
    {
        idNumber: 3,
        name: "Playing It Safe",
        cards: ["Harbinger", "Merchant", "Vassal", "Workshop", "Moneylender", "Bandit", "Council Room", "Market", "Sentry", "Witch"],
        expansions: "base"
    },
    {
        idNumber: 4,
        name: "Slow And Steady",
        cards: ["Cellar", "Moat", "Village", "Gardens", "Militia", "Throne Room", "Laboratory", "Market", "Mine", "Artisan"],
        expansions: "base"
    },
    {
        idNumber: 5,
        name: "Work It Out",
        cards: ["Chapel", "Vassal", "Village", "Workshop", "Poacher", "Smithy", "Throne Room", "Festival", "Laboratory", "Market"],
        expansions: "base"
    },
    {
        idNumber: 6,
        name: "This Is Why We Can't Have Nice Things",
        cards: ["Cellar", "Gardens", "Militia", "Moneylender", "Poacher", "Bandit", "Council Room", "Festival", "Market", "Witch"],
        expansions: "base"
    },
    {
        idNumber: 7,
        name: "Making Do With What You Have",
        cards: ["Cellar", "Moat", "Merchant", "Village", "Workshop", "Militia", "Remodel", "Throne Room", "Bandit", "Festival"],
        expansions: "base"
    },
    {
        idNumber: 8,
        name: "Progression System",
        cards: ["Cellar", "Chapel", "Harbinger", "Village", "Workshop", "Bureaucrat", "Remodel", "Laboratory", "Mine", "Sentry"],
        expansions: "base"
    },
    {
        idNumber: 9,
        name: "Maintain Focus",
        cards: ["Chapel", "Village", "Workshop", "Gardens", "Militia", "Remodel", "Library", "Market", "Witch", "Artisan"],
        expansions: "base"
    },
    {
        idNumber: 10,
        name: "Kickback",
        cards: ["Lurker", "Masquerade", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Mining Village", "Courtier", "Patrol", "Replace"],
        expansions: "intrigue"
    },
    {
        idNumber: 11,
        name: "My Hands Are Tied",
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Steward", "Swindler", "Mining Village", "Minion", "Torturer", "Harem", "Nobles"],
        expansions: "intrigue"
    },
    {
        idNumber: 12,
        name: "Territorial Army",
        cards: ["Lurker", "Pawn", "Shanty Town", "Bridge", "Conspirator", "Courtier", "Minion", "Replace", "Upgrade", "Nobles"],
        expansions: "intrigue"
    },
    {
        idNumber: 13,
        name: "Cheat Code",
        cards: ["Pawn", "Shanty Town", "Wishing Well", "Ironworks", "Secret Passage", "Courtier", "Duke", "Trading Post", "Upgrade", "Harem"],
        expansions: "intrigue"
    },
    {
        idNumber: 14,
        name: "The Upper Crust",
        cards: ["Courtyard", "Swindler", "Baron", "Mill", "Mining Village", "Duke", "Replace", "Patrol", "Trading Post", "Nobles"],
        expansions: "intrigue"
    },
    {
        idNumber: 15,
        name: "In The Shadows",
        cards: ["Lurker", "Steward", "Baron", "Bridge", "Conspirator", "Duke", "Mill", "Replace", "Torturer", "Nobles"],
        expansions: "intrigue"
    },
    {
        idNumber: 16,
        name: "Insurance Policy",
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Swindler", "Baron", "Diplomat", "Ironworks", "Mill", "Mining Village", "Harem"],
        expansions: "intrigue"
    },
    {
        idNumber: 17,
        name: "Keep Your Head Down",
        cards: ["Steward", "Baron", "Diplomat", "Ironworks", "Mill", "Secret Passage", "Minion", "Torturer", "Upgrade", "Harem"],
        expansions: "intrigue"
    },
    {
        idNumber: 18,
        name: "I Have A Bridge To Sell You",
        cards: ["Pawn", "Shanty Town", "Swindler", "Bridge", "Conspirator", "Diplomat", "Secret Passage", "Courtier", "Trading Post", "Upgrade"],
        expansions: "intrigue"
    },
    {
        idNumber: 19,
        name: "Pick Your Poison",
        cards: ["Steward", "Wishing Well", "Baron", "Ironworks", "Mill", "Duke", "Patrol", "Torturer", "Trading Post", "Harem"],
        expansions: "intrigue"
    }
];
