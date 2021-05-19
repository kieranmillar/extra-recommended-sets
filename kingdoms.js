/* Array of kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
extras: An array of extra component names (optional)
notes: Any extra notes (optional)
expansions: Concatenated string of expansions required, matching checkbox names in order, no spaces
onlineString: Overrides the string to paste into the online client (optional)
-----*/
var kingdoms = [
    {
        id: 0,
        name: "Simplicity",
        cards: ["Harbinger", "Merchant", "Village", "Gardens", "Moneylender", "Smithy", "Council Room", "Festival", "Laboratory", "Market"],
        expansions: "base"
    },
    {
        id: 1,
        name: "Ups and Downs",
        cards: ["Cellar", "Chapel", "Vassal", "Bureaucrat", "Poacher", "Remodel", "Bandit", "Festival", "Library", "Artisan"],
        expansions: "base"
    },
    {
        id: 2,
        name: "Put In The Effort",
        cards: ["Moat", "Merchant", "Workshop", "Poacher", "Smithy", "Throne Room", "Laboratory", "Sentry", "Witch", "Artisan"],
        expansions: "base"
    },
    {
        id: 3,
        name: "Playing It Safe",
        cards: ["Harbinger", "Merchant", "Vassal", "Workshop", "Moneylender", "Bandit", "Council Room", "Market", "Sentry", "Witch"],
        expansions: "base"
    },
    {
        id: 4,
        name: "Slow And Steady",
        cards: ["Cellar", "Moat", "Village", "Gardens", "Militia", "Throne Room", "Laboratory", "Market", "Mine", "Artisan"],
        expansions: "base"
    },
    {
        id: 5,
        name: "Work It Out",
        cards: ["Chapel", "Vassal", "Village", "Workshop", "Poacher", "Smithy", "Throne Room", "Festival", "Laboratory", "Market"],
        expansions: "base"
    },
    {
        id: 6,
        name: "This Is Why We Can't Have Nice Things",
        cards: ["Cellar", "Gardens", "Militia", "Moneylender", "Poacher", "Bandit", "Council Room", "Festival", "Market", "Witch"],
        expansions: "base"
    },
    {
        id: 7,
        name: "Making Do With What You Have",
        cards: ["Cellar", "Moat", "Merchant", "Village", "Workshop", "Militia", "Remodel", "Throne Room", "Bandit", "Festival"],
        expansions: "base"
    },
    {
        id: 8,
        name: "Progression System",
        cards: ["Cellar", "Chapel", "Harbinger", "Village", "Workshop", "Bureaucrat", "Remodel", "Laboratory", "Mine", "Sentry"],
        expansions: "base"
    },
    {
        id: 9,
        name: "Maintain Focus",
        cards: ["Chapel", "Village", "Workshop", "Gardens", "Militia", "Remodel", "Library", "Market", "Witch", "Artisan"],
        expansions: "base"
    },
    {
        id: 10,
        name: "Kickback",
        cards: ["Lurker", "Masquerade", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Mining Village", "Courtier", "Patrol", "Replace"],
        expansions: "intrigue"
    },
    {
        id: 11,
        name: "My Hands Are Tied",
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Steward", "Swindler", "Mining Village", "Minion", "Torturer", "Harem", "Nobles"],
        expansions: "intrigue"
    },
    {
        id: 12,
        name: "Territorial Army",
        cards: ["Lurker", "Pawn", "Shanty Town", "Bridge", "Conspirator", "Courtier", "Minion", "Replace", "Upgrade", "Nobles"],
        expansions: "intrigue"
    },
    {
        id: 13,
        name: "Cheat Code",
        cards: ["Pawn", "Shanty Town", "Wishing Well", "Ironworks", "Secret Passage", "Courtier", "Duke", "Trading Post", "Upgrade", "Harem"],
        expansions: "intrigue"
    },
    {
        id: 14,
        name: "The Upper Crust",
        cards: ["Courtyard", "Swindler", "Baron", "Mill", "Mining Village", "Duke", "Replace", "Patrol", "Trading Post", "Nobles"],
        expansions: "intrigue"
    },
    {
        id: 15,
        name: "In The Shadows",
        cards: ["Lurker", "Steward", "Baron", "Bridge", "Conspirator", "Duke", "Mill", "Replace", "Torturer", "Nobles"],
        expansions: "intrigue"
    },
    {
        id: 16,
        name: "Insurance Policy",
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Swindler", "Baron", "Diplomat", "Ironworks", "Mill", "Mining Village", "Harem"],
        expansions: "intrigue"
    },
    {
        id: 17,
        name: "Keep Your Head Down",
        cards: ["Steward", "Baron", "Diplomat", "Ironworks", "Mill", "Secret Passage", "Minion", "Torturer", "Upgrade", "Harem"],
        expansions: "intrigue"
    },
    {
        id: 18,
        name: "I Have A Bridge To Sell You",
        cards: ["Pawn", "Shanty Town", "Swindler", "Bridge", "Conspirator", "Diplomat", "Secret Passage", "Courtier", "Trading Post", "Upgrade"],
        expansions: "intrigue"
    },
    {
        id: 19,
        name: "Pick Your Poison",
        cards: ["Steward", "Wishing Well", "Baron", "Ironworks", "Mill", "Duke", "Patrol", "Torturer", "Trading Post", "Harem"],
        expansions: "intrigue"
    },
    {
        id: 20,
        name: "Running A Tight Ship",
        cards: ["Lighthouse", "Native Village", "Pearl Diver", "Lookout", "Caravan", "Salvager", "Treasure Map", "Bazaar", "Ghost Ship", "Outpost"],
        expansions: "seaside"
    },
    {
        id: 21,
        name: "Coastal Bombardment",
        cards: ["Embargo", "Haven", "Fishing Village", "Warehouse", "Cutpurse", "Island", "Pirate Ship", "Merchant Ship", "Tactician", "Treasury"],
        expansions: "seaside"
    },
    {
        id: 22,
        name: "Castaways",
        cards: ["Haven", "Fishing Village", "Smugglers", "Warehouse", "Caravan", "Island", "Navigator", "Explorer", "Merchant Ship", "Treasury"],
        expansions: "seaside"
    },
    {
        id: 23,
        name: "Forward Planning",
        cards: ["Lighthouse", "Native Village", "Pearl Diver", "Smugglers", "Cutpurse", "Navigator", "Bazaar", "Explorer", "Outpost", "Tactician"],
        expansions: "seaside"
    },
    {
        id: 24,
        name: "Flotsam",
        cards: ["Haven", "Pearl Diver", "Fishing Village", "Lookout", "Smugglers", "Island", "Navigator", "Sea Hag", "Ghost Ship", "Merchant Ship"],
        expansions: "seaside"
    },
    {
        id: 25,
        name: "Jetsam",
        cards: ["Embargo", "Native Village", "Ambassador", "Fishing Village", "Lookout", "Sea Hag", "Treasure Map", "Bazaar", "Merchant Ship", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 26,
        name: "Wave Machine",
        cards: ["Haven", "Lighthouse", "Native Village", "Smugglers", "Warehouse", "Pirate Ship", "Salvager", "Explorer", "Treasury", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 27,
        name: "The Incoming Storm",
        cards: ["Embargo", "Pearl Diver", "Ambassador", "Caravan", "Island", "Navigator", "Pirate Ship", "Bazaar", "Outpost", "Treasury"],
        expansions: "seaside"
    },
    {
        id: 28,
        name: "The Race Around The World",
        cards: ["Pearl Diver", "Lookout", "Warehouse", "Caravan", "Navigator", "Treasure Map", "Explorer", "Ghost Ship", "Tactician", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 29,
        name: "Securing Our Waters",
        cards: ["Lighthouse", "Native Village", "Ambassador", "Island", "Salvager", "Sea Hag", "Treasure Map", "Explorer", "Ghost Ship", "Treasury"],
        expansions: "seaside"
    },
    {
        id: 30,
        name: "Investing In Today",
        cards: ["Trade Route", "Watchtower", "Monument", "Worker's Village", "City", "Contraband", "Counting House", "Vault", "Bank", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 31,
        name: "Added Value",
        cards: ["Loan", "Monument", "Worker's Village", "Contraband", "Mint", "Rabble", "Venture", "Grand Market", "Hoard", "Forge"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 32,
        name: "The Long Crusade",
        cards: ["Watchtower", "Bishop", "Quarry", "Talisman", "City", "Mint", "Venture", "Bank", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 33,
        name: "Triple Jump",
        cards: ["Trade Route", "Monument", "Quarry", "Counting House", "Royal Seal", "Vault", "Goons", "Hoard", "Expand", "King's Court"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
];
