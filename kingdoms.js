/* Array of kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
landscapes: An array of landscape names (optional)
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
    {
        id: 34,
        name: "Diet Plan",
        cards: ["Watchtower", "Monument", "City", "Contraband", "Rabble", "Hoard", "Bank", "Expand", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 35,
        name: "Watch This",
        cards: ["Loan", "Watchtower", "Talisman", "Worker's Village", "Mint", "Mountebank", "Vault", "Goons", "Grand Market", "Forge"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 36,
        name: "The Gift Of Forgiveness",
        cards: ["Trade Route", "Bishop", "Worker's Village", "City", "Counting House", "Rabble", "Royal Seal", "Grand Market", "Hoard", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 37,
        name: "On Sale",
        cards: ["Loan", "Quarry", "Worker's Village", "Contraband", "Mint", "Royal Seal", "Vault", "Grand Market", "Expand", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 38,
        name: "Swimming With Sharks",
        cards: ["Loan", "Monument", "Quarry", "City", "Mountebank", "Venture", "Goons", "Hoard", "Expand", "Forge"],
        notes: "Do not include Colony or Platinum",
        expansions: "prosperity"
    },
    {
        id: 39,
        name: "Get The Point",
        cards: ["Bishop", "Talisman", "Worker's Village", "Counting House", "Rabble", "Goons", "Bank", "Expand", "Forge", "King's Court"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 40,
        name: "Cyclone",
        cards: ["Duchess", "Oasis", "Scheme", "Jack of All Trades", "Nomad Camp", "Cartographer", "Embassy", "Inn", "Stables", "Farmland"],
        expansions: "hinterlands"
    },
    {
        id: 41,
        name: "Road To Nowhere",
        cards: ["Crossroads", "Fool's Gold", "Oracle", "Noble Brigand", "Trader", "Cartographer", "Embassy", "Haggler", "Highway", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 42,
        name: "Landlords",
        cards: ["Scheme", "Tunnel", "Noble Brigand", "Silk Road", "Spice Merchant", "Cache", "Ill-Gotten Gains", "Inn", "Margrave", "Stables"],
        expansions: "hinterlands"
    },
    {
        id: 43,
        name: "Ladder Game",
        cards: ["Fool's Gold", "Develop", "Oasis", "Noble Brigand", "Nomad Camp", "Spice Merchant", "Embassy", "Highway", "Stables", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 44,
        name: "Critical Junction",
        cards: ["Crossroads", "Fool's Gold", "Scheme", "Silk Road", "Spice Merchant", "Haggler", "Highway", "Mandarin", "Margrave", "Farmland"],
        expansions: "hinterlands"
    },
    {
        id: 45,
        name: "Medium of Exchange",
        cards: ["Crossroads", "Duchess", "Oasis", "Oracle", "Trader", "Haggler", "Ill-Gotten Gains", "Inn", "Margrave", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 46,
        name: "Happy Medium",
        cards: ["Oasis", "Oracle", "Tunnel", "Jack of All Trades", "Nomad Camp", "Spice Merchant", "Cartographer", "Ill-Gotten Gains", "Stables", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 47,
        name: "Inhibitions",
        cards: ["Crossroads", "Develop", "Oasis", "Jack of All Trades", "Nomad Camp", "Embassy", "Haggler", "Highway", "Inn", "Farmland"],
        expansions: "hinterlands"
    },
    {
        id: 48,
        name: "Getting Out of Hand",
        cards: ["Fool's Gold", "Oracle", "Tunnel", "Noble Brigand", "Silk Road", "Spice Merchant", "Trader", "Cartographer", "Margrave", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 49,
        name: "Gish Gallop",
        cards: ["Crossroads", "Duchess", "Oasis", "Scheme", "Nomad Camp", "Silk Road", "Trader", "Cache", "Mandarin", "Stables"],
        expansions: "hinterlands"
    },
    {
        id: 50,
        name: "Rags to Riches",
        cards: ["Squire", "Market Square", "Sage", "Storeroom", "Armory", "Wandering Minstrel", "Band of Misfits", "Catacombs", "Junk Dealer", "Pillage"],
        extras: ["Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 51,
        name: "Party Time",
        cards: ["Vagrant", "Hermit", "Sage", "Death Cart", "Procession", "Rats", "Counterfeit", "Graverobber", "Mystic", "Hunting Grounds"],
        extras: ["Madman", "Ruins", "Shelters"],
        expansions: "darkages"
    },
    {
        id: 52,
        name: "Marching Band",
        cards: ["Poor House", "Squire", "Vagrant", "Hermit", "Urchin", "Ironmonger", "Marauder", "Band of Misfits", "Count", "Hunting Grounds"],
        extras: ["Madman", "Mercenary", "Ruins", "Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 53,
        name: "Warzone",
        cards: ["Beggar", "Forager", "Feodum", "Fortress", "Bandit Camp", "Catacombs", "Cultist", "Knights", "Pillage", "Altar"],
        extras: ["Ruins", "Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 54,
        name: "Drinking the Punch",
        cards: ["Poor House", "Squire", "Storeroom", "Urchin", "Procession", "Wandering Minstrel", "Cultist", "Junk Dealer", "Rogue", "Altar"],
        extras: ["Mercenary", "Ruins", "Shelters"],
        expansions: "darkages"
    },
    {
        id: 55,
        name: "Lurching Forward",
        cards: ["Poor House", "Vagrant", "Forager", "Urchin", "Armory", "Fortress", "Bandit Camp", "Count", "Counterfeit", "Mystic"],
        extras: ["Mercenary", "Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 56,
        name: "Rise to the Challenge",
        cards: ["Beggar", "Market Square", "Sage", "Ironmonger", "Wandering Minstrel", "Bandit Camp", "Count", "Knights", "Rebuild", "Hunting Grounds"],
        extras: ["Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 57,
        name: "Crazytown",
        cards: ["Forager", "Hermit", "Storeroom", "Armory", "Feodum", "Fortress", "Marauder", "Graverobber", "Pillage", "Altar"],
        extras: ["Madman", "Ruins", "Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 58,
        name: "High Five",
        cards: ["Squire", "Storeroom", "Death Cart", "Fortress", "Procession", "Bandit Camp", "Catacombs", "Graverobber", "Junk Dealer", "Mystic"],
        extras: ["Ruins", "Shelters", "Spoils"],
        expansions: "darkages"
    },
    {
        id: 59,
        name: "Pest Control",
        cards: ["Poor House", "Squire", "Sage", "Feodum", "Rats", "Wandering Minstrel", "Band of Misfits", "Graverobber", "Knights", "Hunting Grounds"],
        extras: ["Shelters"],
        expansions: "darkages"
    },
    {
        id: 60,
        name: "Basic Standards",
        cards: ["Candlestick Maker", "Masterpiece", "Farming Village", "Horse Traders", "Plaza", "Remake", "Taxman", "Baker", "Jester", "Journeyman"],
        expansions: "cornguilds"
    },
    {
        id: 61,
        name: "Second Opinion",
        cards: ["Hamlet", "Doctor", "Advisor", "Farming Village", "Young Witch", "Butcher", "Horn of Plenty", "Hunting Party", "Merchant Guild", "Soothsayer", "Fairgrounds"],
        notes: "Doctor is the Bane",
        expansions: "cornguilds"
    },
    {
        id: 62,
        name: "Variety Hour",
        cards: ["Candlestick Maker", "Hamlet", "Menagerie", "Horse Traders", "Plaza", "Tournament", "Young Witch", "Baker", "Hunting Party", "Jester", "Fairgrounds"],
        extras: ["Prizes"],
        notes: "Candlestick Maker is the Bane",
        expansions: "cornguilds"
    },
    {
        id: 63,
        name: "Chaos Control",
        cards: ["Hamlet", "Stonemason", "Fortune Teller", "Menagerie", "Advisor", "Herald", "Horse Traders", "Baker", "Jester", "Merchant Guild"],
        expansions: "cornguilds"
    },
    {
        id: 64,
        name: "Fine Dining",
        cards: ["Candlestick Maker", "Stonemason", "Menagerie", "Advisor", "Farming Village", "Remake", "Taxman", "Young Witch", "Horn of Plenty", "Journeyman", "Fairgrounds"],
        notes: "Menagerie is the Bane",
        expansions: "cornguilds"
    },
    {
        id: 65,
        name: "Surgery",
        cards: ["Hamlet", "Doctor", "Masterpiece", "Plaza", "Taxman", "Baker", "Butcher", "Harvest", "Hunting Party", "Journeyman"],
        expansions: "cornguilds"
    },
    {
        id: 66,
        name: "Trust Issues",
        cards: ["Stonemason", "Masterpiece", "Advisor", "Farming Village", "Horse Traders", "Remake", "Tournament", "Butcher", "Horn of Plenty", "Merchant Guild"],
        extras: ["Prizes"],
        expansions: "cornguilds"
    },
    {
        id: 67,
        name: "Bandaid",
        cards: ["Hamlet", "Stonemason", "Doctor", "Menagerie", "Herald", "Plaza", "Baker", "Journeyman", "Merchant Guild", "Soothsayer"],
        expansions: "cornguilds"
    },
    {
        id: 68,
        name: "Hodgepodge",
        cards: ["Candlestick Maker", "Doctor", "Fortune Teller", "Farming Village", "Horse Traders", "Taxman", "Tournament", "Young Witch", "Harvest", "Jester", "Fairgrounds"],
        extras: ["Prizes"],
        notes: "Fortune Teller is the Bane",
        expansions: "cornguilds"
    },
    {
        id: 69,
        name: "Bath Time",
        cards: ["Candlestick Maker", "Fortune Teller", "Masterpiece", "Menagerie", "Remake", "Plaza", "Baker", "Hunting Party", "Jester", "Merchant Guild"],
        expansions: "cornguilds"
    },
    {
        id: 70,
        name: "Going the Distance",
        cards: ["Raze", "Amulet", "Guide", "Duplicate", "Messenger", "Distant Lands", "Giant", "Lost City", "Relic", "Hireling"],
        landscapes: ["Borrow", "Expedition"],
        expansions: "adventures"
    },
    {
        id: 71,
        name: "Learning New Tricks",
        cards: ["Peasant", "Caravan Guard", "Gear", "Dungeon", "Port", "Transmogrify", "Artificer", "Royal Carriage", "Swamp Hag", "Wine Merchant"],
        extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Scouting Party", "Pilgrimage"],
        expansions: "adventures"
    },
    {
        id: 72,
        name: "Pay to Win",
        cards: ["Coin of the Realm", "Ratcatcher", "Guide", "Magpie", "Messenger", "Ranger", "Bridge Troll", "Storyteller", "Treasure Trove", "Hireling"],
        landscapes: ["Trade", "Training"],
        expansions: "adventures"
    },
    {
        id: 73,
        name: "Return on Investment",
        cards: ["Page", "Caravan Guard", "Dungeon", "Miser", "Ranger", "Artificer", "Distant Lands", "Haunted Woods", "Lost City", "Wine Merchant"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Alms", "Inheritance"],
        expansions: "adventures"
    },
    {
        id: 74,
        name: "Through the Undergrowth",
        cards: ["Caravan Guard", "Guide", "Duplicate", "Magpie", "Port", "Giant", "Haunted Woods" "Royal Carriage", "Treasure Trove", "Wine Merchant"],
        landscapes: ["Mission", "Seaway"],
        expansions: "adventures"
    },
    {
        id: 75,
        name: "Workarounds",
        cards: ["Coin of the Realm", "Ratcatcher", "Gear", "Duplicate", "Messenger", "Port", "Transmogrify", "Artificer", "Royal Cariage", "Swamp Hag"],
        landscapes: ["Quest", "Save"],
        expansions: "adventures"
    },
    {
        id: 76,
        name: "Galaxy Brain",
        cards: ["Peasant", "Raze", "Amulet", "Magpie", "Miser", "Giant", "Haunted Woods", "Relic", "Storyteller", "Hireling"],
        extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Ferry", "Pathfinding"],
        expansions: "adventures"
    },
    {
        id: 77,
        name: "Long Term Goals",
        cards: ["Coin of the Realm", "Caravan Guard", "Dungeon", "Ranger", "Transmogrify", "Artificer", "Bridge Troll", "Relic", "Royal Carriage", "Swamp Hag"],
        landscapes: ["Plan", "Lost Arts"],
        expansions: "adventures"
    },
    {
        id: 78,
        name: "Escalation",
        cards: ["Page", "Ratcatcher", "Amulet", "Gear", "Magpie", "Distant Lands", "Haunted Woods", "Storyteller", "Treasure Trove", "Hireling"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Travelling Fair", "Bonfire"],
        expansions: "adventures"
    },
    {
        id: 79,
        name: "Bargain Bin",
        cards: ["Coin of the Realm", "Raze", "Amulet", "Caravan Guard", "Dungeon", "Duplicate", "Gear", "Guide", "Messenger", "Giant"],
        landscapes: ["Ball", "Raid"],
        expansions: "adventures"
    },
    {
        id: 80,
        name: "Anything Goes",
        cards: ["Patrician / Emporium", "Settlers / Bustling Village", "Farmer's Market", "Sacrifice", "Temple", "Archive", "Charm", "Crown", "Forum", "Legionary"],
        landscapes: ["Wedding", "Obelisk"],
        expansions: "empires"
    },
];
