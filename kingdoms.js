/* Array of kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
extras: An array of extra component names (optional)
landscapes: An array of landscape names (optional)
notes: Any extra notes (optional)
expansions: Concatenated string of expansions required, matching checkbox names in order, no spaces
-----*/
var reviewed = [
    "base",
    "intrigue",
    "baseintrigue",
    "seaside",
    "baseseaside",
    "intrigueseaside",
    "prosperity",
    "baseprosperity",
    "empires",
    "baseempires",
    "intrigueempires",
    "seasideempires"
];

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
        cards: ["Cellar", "Harbinger", "Merchant", "Vassal", "Workshop", "Moneylender", "Bandit", "Market", "Mine", "Sentry"],
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
        name: "Beatdown",
        cards: ["Cellar", "Gardens", "Militia", "Moneylender", "Poacher", "Bandit", "Council Room", "Festival", "Market", "Witch"],
        expansions: "base"
    },
    {
        id: 7,
        name: "Making Do",
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
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Wishing Well", "Bridge", "Ironworks", "Mining Village", "Courtier", "Replace", "Torturer"],
        expansions: "intrigue"
    },
    {
        id: 11,
        name: "Change Alliegance",
        cards: ["Lurker", "Pawn", "Swindler", "Conspirator", "Mining Village", "Secret Passage", "Patrol", "Trading Post", "Upgrade", "Harem"],
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
        cards: ["Courtyard", "Swindler", "Baron", "Mill", "Mining Village", "Duke", "Minion", "Patrol", "Trading Post", "Nobles"],
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
        cards: ["Lurker", "Steward", "Wishing Well", "Baron", "Ironworks", "Mill", "Duke", "Minion", "Patrol", "Torturer"],
        expansions: "intrigue"
    },
    {
        id: 20,
        name: "Rule the Waves",
        cards: ["Native Village", "Astrolabe", "Blockade", "Caravan", "Sailor", "Treasure Map", "Bazaar", "Corsair", "Merchant Ship", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 21,
        name: "Coastal Bombardment",
        cards: ["Lighthouse", "Fishing Village", "Lookout", "Monkey", "Smugglers", "Island", "Salvager", "Bazaar", "Outpost", "Sea Witch"],
        expansions: "seaside"
    },
    {
        id: 22,
        name: "Beach Buddies",
        cards: ["Lighthouse", "Native Village", "Warehouse", "Blockade", "Cutpurse", "Island", "Tide Pools", "Merchant Ship", "Tactician", "Treasury"],
        expansions: "seaside"
    },
    {
        id: 23,
        name: "Open Seas",
        cards: ["Haven", "Astrolabe", "Fishing Village", "Monkey", "Sea Chart", "Warehouse", "Caravan", "Sailor", "Corsair", "Pirate"],
        expansions: "seaside"
    },
    {
        id: 24,
        name: "Flotsam",
        cards: ["Sea Chart", "Smugglers", "Warehouse", "Sailor", "Tide Pools", "Bazaar", "Outpost", "Pirate", "Sea Witch", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 25,
        name: "Jetsam",
        cards: ["Haven", "Fishing Village", "Lookout", "Blockade", "Cutpurse", "Island", "Treasure Map", "Corsair", "Merchant Ship", "Treasury"],
        expansions: "seaside"
    },
    {
        id: 26,
        name: "Wave Machine",
        cards: ["Haven", "Lighthouse", "Astrolabe", "Lookout", "Caravan", "Cutpurse", "Tide Pools", "Treasure Map", "Corsair", "Tactician"],
        expansions: "seaside"
    },
    {
        id: 27,
        name: "The Shipping Forecast",
        cards: ["Haven", "Native Village", "Lookout", "Sea Chart", "Smugglers", "Blockade", "Cutpurse", "Tide Pools", "Treasury", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 28,
        name: "Maritime Law",
        cards: ["Fishing Village", "Monkey", "Sea Chart", "Smugglers", "Blockade", "Island", "Salvager", "Bazaar", "Outpost", "Pirate"],
        expansions: "seaside"
    },
    {
        id: 29,
        name: "Cursed Sea",
        cards: ["Native Village", "Smugglers", "Warehouse", "Caravan", "Bazaar", "Merchant Ship", "Sea Witch", "Tactician", "Treasury", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 30,
        name: "Soft Cap",
        cards: ["Watchtower", "Clerk", "Investment", "Monument", "Tiara", "Worker's Village", "Vault", "Grand Market", "Hoard", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 31,
        name: "Before and After",
        cards: ["Bishop", "Quarry", "Tiara", "Charlatan", "City", "Magnate", "Mint", "War Chest", "Bank", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 32,
        name: "Future Imperfect",
        cards: ["Anvil", "Watchtower", "Bishop", "Clerk", "Monument", "Crystal Ball", "Mint", "Rabble", "Hoard", "Bank"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 33,
        name: "For Sale",
        cards: ["Anvil", "Investment", "Quarry", "Worker's Village", "Collection", "Rabble", "War Chest", "Grand Market", "Forge", "King's Court"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 34,
        name: "Defective Goods",
        cards: ["Watchtower", "Monument", "Worker's Village", "Charlatan", "Crystal Ball", "Magnate", "Vault", "Expand", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 35,
        name: "Interest Rates",
        cards: ["Bishop", "Clerk", "Investment", "Tiara", "City", "Crystal Ball", "Magnate", "Vault", "War Chest", "Hoard"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 36,
        name: "Low Standards",
        cards: ["Clerk", "Tiara", "Collection", "Crystal Ball", "Mint", "Rabble", "Vault", "War Chest", "Grand Market", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 37,
        name: "At Great Expense",
        cards: ["Anvil", "Monument", "Worker's Village", "Magnate", "Mint", "Vault", "Hoard", "Bank", "Forge", "King's Court"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 38,
        name: "The Taste of Success",
        cards: ["Bishop", "Investment", "Quarry", "City", "Collection", "Mint", "Rabble", "War Chest", "Grand Market", "Bank"],
        extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
    {
        id: 39,
        name: "Don't Blink",
        cards: ["Anvil", "Watchtower", "Quarry", "Charlatan", "City", "Collection", "Expand", "Forge", "King's Court", "Peddler"],
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
        notes: "Doctor is the Bane.",
        expansions: "cornguilds"
    },
    {
        id: 62,
        name: "Variety Hour",
        cards: ["Candlestick Maker", "Hamlet", "Menagerie", "Horse Traders", "Plaza", "Tournament", "Young Witch", "Baker", "Hunting Party", "Jester", "Fairgrounds"],
        extras: ["Prizes"],
        notes: "Candlestick Maker is the Bane.",
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
        notes: "Menagerie is the Bane.",
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
        notes: "Fortune Teller is the Bane.",
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
        cards: ["Caravan Guard", "Guide", "Duplicate", "Magpie", "Port", "Giant", "Haunted Woods", "Royal Carriage", "Treasure Trove", "Wine Merchant"],
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
        cards: ["Royal Blacksmith", "Encampment / Plunder", "Patrician / Emporium", "Farmer's Market", "Sacrifice", "Temple", "Charm", "Crown", "Forum", "Legionary"],
        landscapes: ["Wedding", "Obelisk"],
        notes: "Obelisk target is Royal Blacksmith.",
        expansions: "empires"
    },
    {
        id: 81,
        name: "Patience",
        cards: ["Engineer", "City Quarter", "Settlers / Bustling Village", "Catapult / Rocks", "Chariot Race", "Enchantress", "Archive", "Charm", "Forum", "Wild Hunt"],
        landscapes: ["Banquet", "Mountain Pass"],
        expansions: "empires"
    },
    {
        id: 82,
        name: "By Royal Decree",
        cards: ["Overlord", "Castles", "Enchantress", "Gladiator / Fortune", "Sacrifice", "Villa", "Crown", "Groundskeeper", "Legionary", "Wild Hunt"],
        landscapes: ["Windfall", "Colonnade"],
        expansions: "empires"
    },
    {
        id: 83,
        name: "Look But Don't Touch",
        cards: ["Engineer", "City Quarter", "Royal Blacksmith", "Settlers / Bustling Village", "Enchantress", "Gladiator / Fortune", "Villa", "Archive", "Charm", "Groundskeeper"],
        landscapes: ["Triumph", "Fountain"],
        expansions: "empires"
    },
    {
        id: 84,
        name: "Elitist",
        cards: ["Encampment / Plunder", "Patrician / Emporium", "Castles", "Chariot Race", "Enchantress", "Sacrifice", "Capital", "Forum", "Legionary", "Wild Hunt"],
        landscapes: ["Dominate", "Labyrinth"],
        expansions: "empires"
    },
    {
        id: 85,
        name: "Money Laundering",
        cards: ["City Quarter", "Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Gladiator / Fortune", "Temple", "Villa", "Capital", "Crown", "Groundskeeper"],
        landscapes: ["Advance", "Bandit Fort"],
        expansions: "empires"
    },
    {
        id: 86,
        name: "Participation Trophy",
        cards: ["Engineer", "Overlord", "Encampment / Plunder", "Catapult / Rocks", "Farmer's Market", "Sacrifice", "Villa", "Archive", "Forum", "Legionary"],
        landscapes: ["Basilica", "Baths"],
        expansions: "empires"
    },
    {
        id: 87,
        name: "Balance",
        cards: ["Patrician / Emporium", "Catapult / Rocks", "Chariot Race", "Enchantress", "Farmer's Market", "Sacrifice", "Villa", "Capital", "Groundskeeper", "Wild Hunt"],
        landscapes: ["Conquest", "Orchard"],
        expansions: "empires"
    },
    {
        id: 88,
        name: "Dominion: Turbo Edition",
        cards: ["Engineer", "Royal Blacksmith", "Settlers / Bustling Village", "Castles", "Enchantress", "Gladiator / Fortune", "Villa", "Charm", "Crown", "Legionary"],
        landscapes: ["Donate", "Arena"],
        expansions: "empires"
    },
    {
        id: 89,
        name: "Bring a Ladder",
        cards: ["Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Castles", "Farmer's Market", "Sacrifice", "Temple", "Archive", "Crown", "Wild Hunt"],
        landscapes: ["Museum", "Wall"],
        expansions: "empires"
    },
    {
        id: 90,
        name: "Feeling Lucky",
        cards: ["Faithful Hound", "Monastery", "Tracker", "Fool", "Night Watchman", "Blessed Village", "Conclave", "Cobbler", "Idol", "Pooka"],
        extras: ["Pouch", "Lucky Coin", "Cursed Gold", "Boons", "Will-O'-Wisp"],
        expansions: "nocturne"
    },
    {
        id: 91,
        name: "After Hours",
        cards: ["Guardian", "Ghost Town", "Leprechaun", "Blessed Village", "Devil's Workshop", "Exorcist", "Den of Sin", "Sacred Grove", "Tormentor", "Werewolf"],
        extras: ["Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost", "Wish"],
        expansions: "nocturne"
    },
    {
        id: 92,
        name: "Life's Ups and Downs",
        cards: ["Druid", "Pixie", "Changeling", "Bard", "Conclave", "Cursed Village", "Idol", "Sacred Grove", "Tragic Hero", "Raider"],
        extras: ["Goat", "Boons", "Hexes", "Will-O'-Wisp"],
        notes: "Druid boons are The Field's Gift (+Action), The River's Gift (+Card at cleanup) and The Sky's Gift (discard for Gold).",
        expansions: "nocturne"
    },
    {
        id: 93,
        name: "Come Out to Play",
        cards: ["Tracker", "Ghost Town", "Changeling", "Bard", "Devil's Workshop", "Shepherd", "Skulk", "Crypt", "Vampire", "Werewolf"],
        extras: ["Pasture", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Bat"],
        expansions: "nocturne"
    },
    {
        id: 94,
        name: "In Memoriam",
        cards: ["Faithful Hound", "Monastery", "Blessed Village", "Cemetary", "Necromancer", "Cobbler", "Den of Sin", "Tragic Hero", "Vampire", "Raider"],
        extras: ["Haunted Mirror", "Boons", "Will-O'-Wisp", "Ghost", "Bat", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: "nocturne"
    },
    {
        id: 95,
        name: "Lazy Town",
        cards: ["Guardian", "Monastery", "Night Watchman", "Secret Cave", "Skulk", "Crypt", "Den of Sin", "Pooka", "Tormentor", "Werewolf"],
        extras: ["Magic Lamp", "Cursed Gold", "Hexes", "Wish", "Imp"],
        expansions: "nocturne"
    },
    {
        id: 96,
        name: "Subdued",
        cards: ["Pixie", "Tracker", "Leprechaun", "Blessed Village", "Necromancer", "Shepherd", "Skulk", "Den of Sin", "Idol", "Vampire"],
        extras: ["Goat", "Pasture", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Wish", "Bat", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: "nocturne"
    },
    {
        id: 97,
        name: "Looks Can Be Deceiving",
        cards: ["Faithful Hound", "Changeling", "Fool", "Ghost Town", "Bard", "Exorcist", "Crypt", "Pooka", "Sacred Grove", "Tormentor"],
        extras: ["Lucky Coin", "Cursed Gold", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost"],
        expansions: "nocturne"
    },
    {
        id: 98,
        name: "Factory Method",
        cards: ["Druid", "Guardian", "Tracker", "Night Watchman", "Cemetary", "Conclave", "Shepherd", "Skulk", "Cobbler", "Werewolf"],
        extras: ["Haunted Mirror", "Pasture", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
        notes: "Druid boons are The Forest's Gift (+Buy), The Swamp's Gift (Will-O'-Wisp) and The Wind's Gift (draw and discard).",
        expansions: "nocturne"
    },
    {
        id: 99,
        name: "High Spirits",
        cards: ["Changeling", "Leprechaun", "Secret Cave", "Cemetary", "Devil's Workshop", "Exorcist", "Necromancer", "Cursed Village", "Idol", "Sacred Grove"],
        extras: ["Haunted Mirror", "Magic Lamp", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost", "Wish", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: "nocturne"
    },
    {
        id: 100,
        name: "A New Age",
        cards: ["Lackeys", "Cargo Ship", "Experiment", "Improve", "Flag Bearer", "Mountain Village", "Priest", "Sculptor", "Spices", "Villain"],
        extras: ["Flag"],
        landscapes: ["Fair", "Sinister Plot"],
        expansions: "renaissance"
    },
    {
        id: 101,
        name: "Every Little Helps",
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Hideout", "Old Witch", "Scepter", "Sculptor", "Seer", "Spices", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Pageant", "Canal"],
        expansions: "renaissance"
    },
    {
        id: 102,
        name: "Deja Vu",
        cards: ["Border Guard", "Experiment", "Improve", "Inventor", "Mountain Village", "Patron", "Silk Merchant", "Scholar", "Swashbuckler", "Villain"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["City Gate", "Silos"],
        expansions: "renaissance"
    },
    {
        id: 103,
        name: "The Village People",
        cards: ["Border Guard", "Lackeys", "Improve", "Flag Bearer", "Silk Merchant", "Old Witch", "Recruiter", "Scepter", "Sculptor", "Treasurer"],
        extras: ["Horn", "Lantern", "Flag", "Key"],
        landscapes: ["Piazza", "Road Network"],
        expansions: "renaissance"
    },
    {
        id: 104,
        name: "Don't Blink",
        cards: ["Lackeys", "Experiment", "Inventor", "Patron", "Research", "Silk Merchant", "Scholar", "Seer", "Swashbuckler", "Villain"],
        extras: ["Treasure Chest"],
        landscapes: ["Academy", "Fleet"],
        expansions: "renaissance"
    },
    {
        id: 105,
        name: "Peek-A-Boo",
        cards: ["Border Guard", "Ducat", "Acting Troupe", "Cargo Ship", "Improve", "Patron", "Recruiter", "Old Witch", "Seer", "Swashbuckler"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Cathedral", "Citadel"],
        expansions: "renaissance"
    },
    {
        id: 106,
        name: "Draw is Draw",
        cards: ["Border Guard", "Acting Troupe", "Cargo Ship", "Flag Bearer", "Inventor", "Mountain Village", "Research", "Scepter", "Spices", "Villain"],
        extras: ["Horn", "Lantern", "Flag"],
        landscapes: ["Sewers", "Crop Rotation"],
        expansions: "renaissance"
    },
    {
        id: 107,
        name: "Midas Touch",
        cards: ["Ducat", "Acting Troupe", "Improve", "Flag Bearer", "Hideout", "Patron", "Priest", "Scholar", "Sculptor", "Treasurer"],
        extras: ["Flag", "Key"],
        landscapes: ["Capitalism", "Guildhall"],
        expansions: "renaissance"
    },
    {
        id: 108,
        name: "Seeing Stars",
        cards: ["Border Guard", "Experiment", "Inventor", "Research", "Silk Merchant", "Old Witch", "Scepter", "Seer", "Spices", "Treasurer"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Star Chart", "Barracks"],
        expansions: "renaissance"
    },
    {
        id: 109,
        name: "Top Up",
        cards: ["Lackeys", "Ducat", "Improve", "Hideout", "Patron", "Recruiter", "Scholar", "Sculptor", "Swashbuckler", "Villain"],
        extras: ["Treasure Chest"],
        landscapes: ["Exploration", "Innovation"],
        expansions: "renaissance"
    },
    {
        id: 110,
        name: "Pony Time",
        cards: ["Supplies", "Scrap", "Sheepdog", "Snowy Village", "Hostelry", "Barge", "Displace", "Fisherman", "Paddock", "Wayfarer"],
        extras: ["Horse"],
        landscapes: ["Bargain", "Way of the Goat"],
        expansions: "menagerie"
    },
    {
        id: 111,
        name: "Give A Hoot",
        cards: ["Camel Train", "Goatherd", "Bounty Hunter", "Cardinal", "Groom", "Village Green", "Coven", "Hunting Lodge", "Kiln", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["March", "Way of the Owl"],
        expansions: "menagerie"
    },
    {
        id: 112,
        name: "Karma",
        cards: ["Sleigh", "Supplies", "Sheepdog", "Stockpile", "Cavalry", "Coven", "Falconer", "Gatekeeper", "Paddock", "Sanctuary"],
        extras: ["Horse"],
        landscapes: ["Toil", "Way of the Chameleon"],
        expansions: "menagerie"
    },
    {
        id: 113,
        name: "Unleash the Power Within",
        cards: ["Black Cat", "Camel Train", "Sheepdog", "Bounty Hunter", "Cardinal", "Displace", "Falconer", "Kiln", "Mastermind", "Animal Fair"],
        landscapes: ["Delay", "Way of the Pig"],
        expansions: "menagerie"
    },
    {
        id: 114,
        name: "Herd Immunity",
        cards: ["Black Cat", "Goatherd", "Groom", "Hostelry", "Village Green", "Fisherman", "Kiln", "Livery", "Paddock", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Alliance", "Way of the Seal"],
        expansions: "menagerie"
    },
    {
        id: 115,
        name: "Card Printer",
        cards: ["Black Cat", "Sleigh", "Scrap", "Snowy Village", "Village Green", "Barge", "Falconer", "Mastermind", "Sanctuary", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Commerce", "Way of the Rat"],
        expansions: "menagerie"
    },
    {
        id: 116,
        name: "Olly Olly Oxen Free",
        cards: ["Sleigh", "Supplies", "Camel Train", "Cardinal", "Cavalry", "Coven", "Barge", "Fisherman", "Livery", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Enhance", "Way of the Ox"],
        expansions: "menagerie"
    },
    {
        id: 117,
        name: "Monkey Seize Monkey Does",
        cards: ["Supplies", "Goatherd", "Stockpile", "Groom", "Hostelry", "Displace", "Gatekeeper", "Hunting Lodge", "Mastermind", "Wayfarer"],
        extras: ["Horse"],
        landscapes: ["Seize the Day", "Way of the Monkey"],
        expansions: "menagerie"
    },
    {
        id: 118,
        name: "Switch On",
        cards: ["Sleigh", "Camel Train", "Scrap", "Sheepdog", "Coven", "Displace", "Hunting Lodge", "Paddock", "Destrier", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Banish", "Way of the Worm"],
        expansions: "menagerie"
    },
    {
        id: 119,
        name: "Snowed In",
        cards: ["Black Cat", "Snowy Village", "Stockpile", "Bounty Hunter", "Fisherman", "Kiln", "Livery", "Paddock", "Sanctuary", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Stampede", "Way of the Horse"],
        expansions: "menagerie"
    },
    {
        id: 120,
        name: "Hobby Shop",
        cards: ["Village", "Workshop", "Militia", "Throne Room", "Mine", "Courtyard", "Mill", "Patrol", "Replace", "Trading Post"],
        expansions: "baseintrigue"
    },
    {
        id: 121,
        name: "Gee Whiz",
        cards: ["Cellar", "Vassal", "Village", "Moneylender", "Artisan", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Minion"],
        expansions: "baseintrigue"
    },
    {
        id: 122,
        name: "Roguelike",
        cards: ["Chapel", "Poacher", "Remodel", "Library", "Market", "Lurker", "Shanty Town", "Swindler", "Courtier", "Nobles"],
        expansions: "baseintrigue"
    },
    {
        id: 123,
        name: "Carnival",
        cards: ["Merchant", "Workshop", "Council Room", "Festival", "Sentry", "Masquerade", "Shanty Town", "Conspirator", "Diplomat", "Courtier"],
        expansions: "baseintrigue"
    },
    {
        id: 124,
        name: "Oh Green World",
        cards: ["Harbinger", "Bureaucrat", "Gardens", "Witch", "Artisan", "Steward", "Mill", "Duke", "Patrol", "Nobles"],
        expansions: "baseintrigue"
    },
    {
        id: 125,
        name: "Obselescence",
        cards: ["Moat", "Village", "Poacher", "Bandit", "Laboratory", "Pawn", "Ironworks", "Torturer", "Upgrade", "Harem"],
        expansions: "baseintrigue"
    },
    {
        id: 126,
        name: "Four Play",
        cards: ["Chapel", "Bureaucrat", "Militia", "Smithy", "Throne Room", "Baron", "Conspirator", "Mining Village", "Secret Passage", "Upgrade"],
        expansions: "baseintrigue"
    },
    {
        id: 127,
        name: "Double-Crossing",
        cards: ["Moat", "Vassal", "Throne Room", "Market", "Sentry", "Pawn", "Swindler", "Bridge", "Diplomat", "Secret Passage"],
        expansions: "baseintrigue"
    },
    {
        id: 128,
        name: "Keep the Change",
        cards: ["Moat", "Militia", "Council Room", "Festival", "Witch", "Lurker", "Steward", "Mining Village", "Upgrade", "Harem"],
        expansions: "baseintrigue"
    },
    {
        id: 129,
        name: "Solo",
        cards: ["Vassal", "Gardens", "Remodel", "Laboratory", "Market", "Masquerade", "Wishing Well", "Bridge", "Mill", "Courtier"],
        expansions: "baseintrigue"
    },
    {
        id: 130,
        name: "Sunken Treasure",
        cards: ["Village", "Bureaucrat", "Moneylender", "Smithy", "Bandit", "Native Village", "Astrolabe", "Treasure Map", "Corsair", "Pirate"],
        expansions: "baseseaside"
    },
    {
        id: 131,
        name: "Speed Boats",
        cards: ["Militia", "Remodel", "Throne Room", "Festival", "Mine", "Haven", "Lighthouse", "Fishing Village", "Warehouse", "Wharf"],
        expansions: "baseseaside"
    },
    {
        id: 132,
        name: "Wade Through the Wreckage",
        cards: ["Cellar", "Moat", "Gardens", "Market", "Artisan", "Caravan", "Tide Pools", "Bazaar", "Outpost", "Sea Witch"],
        expansions: "baseseaside"
    },
    {
        id: 133,
        name: "Row Blocks",
        cards: ["Harbinger", "Merchant", "Village", "Festival", "Sentry", "Lookout", "Monkey", "Sea Chart", "Blockade", "Cutpurse"],
        expansions: "baseseaside"
    },
    {
        id: 134,
        name: "Nothing to Declare",
        cards: ["Chapel", "Poacher", "Council Room", "Laboratory", "Witch", "Fishing Village", "Smugglers", "Island", "Salvager", "Treasury"],
        expansions: "baseseaside"
    },
    {
        id: 135,
        name: "Setting Sail",
        cards: ["Cellar", "Harbinger", "Vassal", "Workshop", "Festival", "Native Village", "Sailor", "Bazaar", "Merchant Ship", "Tactician"],
        expansions: "baseseaside"
    },
    {
        id: 136,
        name: "Diversion",
        cards: ["Village", "Remodel", "Bandit", "Library", "Sentry", "Haven", "Native Village", "Astrolabe", "Blockade", "Corsair"],
        expansions: "baseseaside"
    },
    {
        id: 137,
        name: "Boats in Moats",
        cards: ["Moat", "Workshop", "Market", "Witch", "Artisan", "Monkey", "Smugglers", "Island", "Bazaar", "Wharf"],
        expansions: "baseseaside"
    },
    {
        id: 138,
        name: "Knowledge is Quay",
        cards: ["Chapel", "Bureaucrat", "Remodel", "Library", "Mine", "Lighthouse", "Astrolabe", "Fishing Village", "Tide Pools", "Sea Witch"],
        expansions: "baseseaside"
    },
    {
        id: 139,
        name: "Forward Planning",
        cards: ["Village", "Gardens", "Militia", "Throne Room", "Laboratory", "Sailor", "Salvager", "Outpost", "Pirate", "Tactician"],
        expansions: "baseseaside"
    },
    {
        id: 140,
        name: "Morning Cuppa",
        cards: ["Cellar", "University", "Harbinger", "Merchant", "Militia", "Smithy", "Golem", "Laboratory", "Market", "Sentry"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 141,
        name: "Grape Expectations",
        cards: ["Transmute", "Vineyard", "Cellar", "Scrying Pool", "Workshop", "Poacher", "Throne Room", "Bandit", "Festival", "Market"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 142,
        name: "Advance Party",
        cards: ["Cellar", "Apothecary", "Vassal", "Village", "Gardens", "Poacher", "Apprentice", "Council Room", "Laboratory", "Witch"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 143,
        name: "Handle With Care",
        cards: ["Chapel", "Herbalist", "Merchant", "Alchemist", "Bureaucrat", "Remodel", "Golem", "Laboratory", "Witch", "Artisan"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 144,
        name: "Now Or Later",
        cards: ["Vineyard", "Moat", "Village", "Workshop", "Familiar", "Militia", "Remodel", "Council Room", "Mine", "Sentry"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 145,
        name: "Forgetfulness",
        cards: ["Apothecary", "Merchant", "Village", "Moneylender", "Apprentice", "Bandit", "Market", "Sentry", "Witch", "Possession"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 146,
        name: "The Great Outdoors",
        cards: ["University", "Harbinger", "Vassal", "Gardens", "Poacher", "Throne Room", "Apprentice", "Festival", "Library", "Mine"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 147,
        name: "Too Efficient",
        cards: ["Cellar", "Chapel", "Moat", "Apothecary", "Scrying Pool", "Merchant", "Remodel", "Golem", "Bandit", "Witch"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 148,
        name: "Total Recall",
        cards: ["Transmute", "Herbalist", "Harbinger", "Familiar", "Philosopher's Stone", "Bureaucrat", "Gardens", "Militia", "Festival", "Mine"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 149,
        name: "Rube Goldberg Machine",
        cards: ["Chapel", "Vassal", "Workshop", "Alchemist", "Militia", "Smithy", "Throne Room", "Golem", "Market", "Sentry"],
        extras: ["Potion"],
        expansions: "basealchemy"
    },
    {
        id: 150,
        name: "I Didn't Want It Anyway",
        cards: ["Militia", "Throne Room", "Bandit", "Laboratory", "Sentry", "Bishop", "Worker's Village", "Magnate", "War Chest", "Grand Market"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 151,
        name: "Runaway Inflation",
        cards: ["Chapel", "Vassal", "Workshop", "Poacher", "Festival", "Watchtower", "Monument", "City", "Collection", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 152,
        name: "Reduce, Reuse, Recycle",
        cards: ["Moat", "Village", "Moneylender", "Mine", "Witch", "Anvil", "Tiara", "Charlatan", "Hoard", "Bank"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 153,
        name: "Con Artist",
        cards: ["Merchant", "Gardens", "Library", "Market", "Artisan", "Quarry", "Crystal Ball", "Vault", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 154,
        name: "Rewind",
        cards: ["Merchant", "Village", "Workshop", "Council Room", "Festival", "Clerk", "Magnate", "War Chest", "Hoard", "Forge"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 155,
        name: "Back to Basics",
        cards: ["Cellar", "Harbinger", "Militia", "Remodel", "Smithy", "Tiara", "Worker's Vilage", "City", "Mint", "Rabble"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 156,
        name: "Market Squared",
        cards: ["Vassal", "Moneylender", "Poacher", "Market", "Sentry", "Investment", "Quarry", "Charlatan", "Grand Market", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 157,
        name: "Stop and Swap",
        cards: ["Cellar", "Harbinger", "Bureaucrat", "Laboratory", "Mine", "Bishop", "Investment", "Worker's Village", "Collection", "Crystal Ball"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 158,
        name: "Security Flaw",
        cards: ["Cellar", "Village", "Bandit", "Festival", "Witch", "Anvil", "Watchtower", "Monument", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 159,
        name: "Seeing Double",
        cards: ["Moat", "Militia", "Remodel", "Throne Room", "Sentry", "Tiara", "Rabble", "Hoard", "Bank", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 160,
        name: "D.I.Y.",
        cards: ["Moat", "Merchant", "Village", "Noble Brigand", "Remodel", "Smithy", "Haggler", "Highway", "Inn", "Stables"],
        expansions: "basehinterlands"
    },
    {
        id: 161,
        name: "Green Hill Zone",
        cards: ["Cellar", "Oracle", "Bureaucrat", "Gardens", "Moneylender", "Silk Road", "Bandit", "Ill-Gotten Gains", "Margrave", "Border Village"],
        expansions: "basehinterlands"
    },
    {
        id: 162,
        name: "Silver Surfer",
        cards: ["Chapel", "Crossroads", "Oasis", "Scheme", "Jack of All Trades", "Remodel", "Throne Room", "Embassy", "Festival", "Market"],
        expansions: "basehinterlands"
    },
    {
        id: 163,
        name: "Flip Flop",
        cards: ["Cellar", "Develop", "Harbinger", "Tunnel", "Village", "Poacher", "Silk Road", "Spice Merchant", "Council Room", "Farmland"],
        expansions: "basehinterlands"
    },
    {
        id: 164,
        name: "Loved and Treasured",
        cards: ["Scheme", "Moneylender", "Nomad Camp", "Trader", "Cache", "Ill-Gotten Gains", "Inn", "Laboratory", "Mine", "Sentry"],
        expansions: "basehinterlands"
    },
    {
        id: 165,
        name: "Expenses Paid Trip",
        cards: ["Duchess", "Develop", "Militia", "Throne Room", "Embassy", "Festval", "Market", "Stables", "Artisan", "Border Village"],
        expansions: "basehinterlands"
    },
    {
        id: 166,
        name: "Neighbouring Factions",
        cards: ["Fool's Gold", "Moat", "Oasis", "Village", "Workshop", "Spice Merchant", "Laboratory", "Mandarin", "Margrave", "Witch"],
        expansions: "basehinterlands"
    },
    {
        id: 167,
        name: "Far-Reaching Consequences",
        cards: ["Crossroads", "Vassal", "Moneylender", "Nomad Camp", "Smithy", "Bandit", "Cartographer", "Haggler", "Inn", "Artisan"],
        expansions: "basehinterlands"
    },
    {
        id: 168,
        name: "My Liege",
        cards: ["Crossroads", "Scheme", "Tunnel", "Vassal", "Gardens", "Spice Merchant", "Council Room", "Laboratory", "Artisan", "Border Village"],
        expansions: "basehinterlands"
    },
    {
        id: 169,
        name: "You Take The High Road",
        cards: ["Cellar", "Moneylender", "Noble Brigand", "Nomad Camp", "Remodel", "Trader", "Cartographer", "Festival", "Highway", "Library"],
        expansions: "basehinterlands"
    },
    {
        id: 170,
        name: "Building an Empire",
        cards: ["Harbinger", "Bureaucrat", "Poacher", "Remodel", "Market", "Royal Blacksmith", "Settlers / Bustling Village", "Enchantress", "Villa", "Groundskeeper"],
        landscapes: ["Ritual", "Tomb"],
        expansions: "baseempires"
    },
    {
        id: 171,
        name: "Welcome Your New Overlords",
        cards: ["Vassal", "Village", "Moneylender", "Library", "Artisan", "Overlord", "Patrician / Emporium", "Capital", "Forum", "Legionary"],
        landscapes: ["Tax", "Triumphal Arch"],
        expansions: "baseempires"
    },
    {
        id: 172,
        name: "Wacky Races",
        cards: ["Moat", "Militia", "Smithy", "Throne Room", "Witch", "Engineer", "Settlers / Bustling Village", "Chariot Race", "Sacrifice", "Archive"],
        landscapes: ["Museum", "Tower"],
        expansions: "baseempires"
    },
    {
        id: 173,
        name: "Yellow and Green",
        cards: ["Chapel", "Bureaucrat", "Gardens", "Council Room", "Mine", "Encampment / Plunder", "Castles", "Farmer's Market", "Crown", "Groundskeeper"],
        landscapes: ["Battlefield", "Salt the Earth"],
        expansions: "baseempires"
    },
    {
        id: 174,
        name: "Grand Feast",
        cards: ["Cellar", "Harbinger", "Festival", "Market", "Mine", "Castles", "Archive", "Forum", "Legionary", "Wild Hunt"],
        landscapes: ["Banquet", "Palace"],
        expansions: "baseempires"
    },
    {
        id: 175,
        name: "Preparations",
        cards: ["Merchant", "Workshop", "Festival", "Library", "Sentry", "Chariot Race", "Enchantress", "Farmer's Market", "Gladiator / Fortune", "Villa"],
        landscapes: ["Conquest", "Defiled Shrine"],
        expansions: "baseempires"
    },
    {
        id: 176,
        name: "Most Treasured Engine",
        cards: ["Chapel", "Remodel", "Bandit", "Laboratory", "Witch", "City Quarter", "Encampment / Plunder", "Gladiator / Fortune", "Charm", "Crown"],
        landscapes: ["Delve", "Keep"],
        expansions: "baseempires"
    },
    {
        id: 177,
        name: "Pile Trial",
        cards: ["Vassal", "Village", "Militia", "Council Room", "Artisan", "Engineer", "Patrician / Emporium", "Temple", "Capital", "Crown"],
        landscapes: ["Annex", "Wolf Den"],
        expansions: "baseempires"
    },
    {
        id: 178,
        name: "Limited Arsenal",
        cards: ["Moat", "Gardens", "Poacher", "Laboratory", "Witch", "Overlord", "Catapult / Rocks", "Charm", "Groundskeeper","Legionary"],
        landscapes: ["Aqueduct", "Colonnade"],
        expansions: "baseempires"
    },
    {
        id: 179,
        name: "Another Way",
        cards: ["Village", "Workshop", "Moneylender", "Festival", "Market", "Encampment / Plunder", "Patrician / Emporium", "Enchantress", "Sacrifice", "Wild Hunt"],
        landscapes: ["Bandit Fort", "Wall"],
        expansions: "baseempires"
    },
    {
        id: 180,
        name: "Cursed Quarter",
        cards: ["Courtyard", "Pawn", "Shanty Town", "Conspirator", "Torturer", "Engineer", "City Quarter", "Settlers / Bustling Village", "Castles", "Sacrifice"],
        landscapes: ["Baths", "Defiled Shrine"],
        expansions: "intrigueempires"
    },
    {
        id: 181,
        name: "Big Daddies",
        cards: ["Swindler", "Ironworks", "Mining Village", "Courtier", "Upgrade", "Overlord", "Royal Blacksmith", "Villa", "Forum", "Legionary"],
        landscapes: ["Aqueduct", "Dominate"],
        expansions: "intrigueempires"
    },
    {
        id: 182,
        name: "Long Distance Negotiations",
        cards: ["Bridge", "Diplomat", "Minion", "Trading Post", "Nobles", "Settlers / Bustling Village", "Chariot Race", "Enchantress", "Crown", "Forum"],
        landscapes: ["Basilica", "Wolf Den"],
        expansions: "intrigueempires"
    },
    {
        id: 183,
        name: "Book Burning",
        cards: ["Lurker", "Wishing Well", "Conspirator", "Mill", "Harem", "Patrician / Emporium", "Castles", "Farmer's Market", "Temple", "Archive"],
        landscapes: ["Arena", "Tomb"],
        expansions: "intrigueempires"
    },
    {
        id: 184,
        name: "Bombardment",
        cards: ["Masquerade", "Shanty Town", "Secret Passage", "Patrol", "Nobles", "Engineer", "Catapult / Rocks", "Enchantress", "Gladiator / Fortune", "Charm"],
        landscapes: ["Conquest", "Tower"],
        expansions: "intrigueempires"
    },
    {
        id: 185,
        name: "Small Packages",
        cards: ["Swindler", "Wishing Well", "Duke", "Replace", "Harem", "Patrician / Emporium", "Villa", "Capital", "Forum", "Wild Hunt"],
        landscapes: ["Delve", "Fountain"],
        expansions: "intrigueempires"
    },
    {
        id: 186,
        name: "Landlords",
        cards: ["Steward", "Baron", "Mining Village", "Courtier", "Nobles", "Enchantress", "Villa", "Crown", "Groundskeeper", "Wild Hunt"],
        landscapes: ["Obelisk", "Triumph"],
        notes: "Obelisk target is Crown.",
        expansions: "intrigueempires"
    },
    {
        id: 187,
        name: "Upper Management",
        cards: ["Pawn", "Masquerade", "Bridge", "Ironworks", "Nobles", "Encampment / Plunder", "Chariot Race", "Temple", "Archive", "Groundskeeper"],
        landscapes: ["Museum", "Wedding"],
        expansions: "intrigueempires"
    },
    {
        id: 188,
        name: "Corruption",
        cards: ["Courtyard", "Ironworks", "Mining Village", "Minion", "Trading Post", "City Quarter", "Overlord", "Castles", "Chariot Race", "Wild Hunt"],
        landscapes: ["Tax", "Triumphal Arch"],
        expansions: "intrigueempires"
    },
    {
        id: 189,
        name: "Matchmakers",
        cards: ["Shanty Town", "Baron", "Conspirator", "Secret Passage", "Duke", "Royal Blacksmith", "Encampment / Plunder", "Enchantress", "Gladiator / Fortune", "Archive"],
        landscapes: ["Labyrinth", "Orchard"],
        expansions: "intrigueempires"
    },
    {
        id: 190,
        name: "Remote Territory",
        cards: ["Baron", "Secret Passage", "Courtier", "Trading Post", "Harem", "Native Village", "Monkey", "Smugglers", "Corsair", "Treasury"],
        expansions: "intrigueseaside"
    },
    {
        id: 191,
        name: "Investigation",
        cards: ["Courtyard", "Swindler", "Conspirator", "Torturer", "Nobles", "Lighthouse", "Astrolabe", "Lookout", "Warehouse", "Bazaar"],
        expansions: "intrigueseaside"
    },
    {
        id: 192,
        name: "The Navigator",
        cards: ["Bridge", "Ironworks", "Mining Village", "Duke", "Patrol", "Fishing Village", "Sea Chart", "Island", "Sailor", "Pirate"],
        expansions: "intrigueseaside"
    },
    {
        id: 193,
        name: "Keeping Above Water",
        cards: ["Pawn", "Masquerade", "Shanty Town", "Mill", "Minion", "Lighthouse", "Blockade", "Salvager", "Tide Pools", "Sea Witch"],
        expansions: "intrigueseaside"
    },
    {
        id: 194,
        name: "Undercover",
        cards: ["Lurker", "Steward", "Baron", "Conspirator", "Replace", "Haven", "Bazaar", "Merchant Ship", "Outpost", "Tactician"],
        expansions: "intrigueseaside"
    },
    {
        id: 195,
        name: "Officer's Mess",
        cards: ["Pawn", "Swindler", "Wishing Well", "Diplomat", "Duke", "Blockade", "Island", "Sailor", "Treasure Map", "Treasury"],
        expansions: "intrigueseaside"
    },
    {
        id: 196,
        name: "Sea Monsters",
        cards: ["Mining Village", "Secret Passage", "Replace", "Torturer", "Nobles", "Smugglers", "Warehouse", "Caravan", "Corsair", "Wharf"],
        expansions: "intrigueseaside"
    },
    {
        id: 197,
        name: "Submarine",
        cards: ["Wishing Well", "Diplomat", "Ironworks", "Upgrade", "Harem", "Astrolabe", "Tide Pools", "Merchant Ship", "Outpost", "Pirate"],
        expansions: "intrigueseaside"
    },
    {
        id: 198,
        name: "Banished",
        cards: ["Wishing Well", "Mill", "Courtier", "Duke", "Patrol", "Haven", "Native Village", "Blockade", "Island", "Sea Witch"],
        expansions: "intrigueseaside"
    },
    {
        id: 199,
        name: "Sea Shanty",
        cards: ["Shanty Town", "Bridge", "Minion", "Trading Post", "Nobles", "Haven", "Monkey", "Cutpurse", "Treasure Map", "Wharf"],
        expansions: "intrigueseaside"
    },
    {
        id: 200,
        name: "Capital Gains",
        cards: ["Lookout", "Monkey", "Sea Chart", "Smugglers", "Treasure Map", "Engineer", "Encampment / Plunder", "Villa", "Capital", "Wild Hunt"],
        landscapes: ["Palace", "Triumph"],
        expansions: "seasideempires"
    },
    {
        id: 201,
        name: "From Humble Beginnings",
        cards: ["Native Village", "Astrolabe", "Blockade", "Island", "Wharf", "City Quarter", "Patrician / Emporium", "Catapult / Rocks", "Enchantress", "Groundskeeper"],
        landscapes: ["Advance", "Battlefield"],
        expansions: "seasideempires"
    },
    {
        id: 202,
        name: "Royal Heist",
        cards: ["Haven", "Cutpurse", "Bazaar", "Pirate", "Sea Witch", "Royal Blacksmith", "Farmers' Market", "Sacrifice", "Charm", "Crown"],
        landscapes: ["Aqueduct", "Tower"],
        expansions: "seasideempires"
    },
    {
        id: 203,
        name: "Take the Risk",
        cards: ["Fishing Village", "Lookout", "Warehouse", "Tide Pools", "Corsair", "Settlers / Bustling Village", "Chariot Race", "Gladiator / Fortune", "Archive", "Legionary"],
        landscapes: ["Dominate", "Museum"],
        expansions: "seasideempires"
    },
    {
        id: 204,
        name: "Admirals",
        cards: ["Sea Chart", "Island", "Salvager", "Bazaar", "Wharf", "Engineer", "Overlord", "Castles", "Gladiator / Fortune", "Forum"],
        landscapes: ["Colonnade", "Wedding"],
        expansions: "seasideempires"
    },
    {
        id: 205,
        name: "Changing Tides",
        cards: ["Lighthouse", "Astrolabe", "Smugglers", "Sailor", "Tactician", "Patrician / Emporium", "Temple", "Villa", "Capital", "Legionary"],
        landscapes: ["Arena", "Windfall"],
        expansions: "seasideempires"
    },
    {
        id: 206,
        name: "Anti-Competitive Practice",
        cards: ["Haven", "Native Village", "Sea Chart", "Cutpurse", "Outpost", "Patrician / Emporium", "Chariot Race", "Enchantress", "Archive", "Crown"],
        landscapes: ["Bandit Fort", "Wolf Den"],
        expansions: "seasideempires"
    },
    {
        id: 207,
        name: "Sea of Copper",
        cards: ["Astrolabe", "Warehouse", "Tide Pools", "Merchant Ship", "Treasury", "Enchantress", "Sacrifice", "Charm", "Forum", "Legionary"],
        landscapes: ["Annex", "Fountain"],
        expansions: "seasideempires"
    },
    {
        id: 208,
        name: "Score and Draw",
        cards: ["Lighthouse", "Fishing Village", "Monkey", "Pirate", "Sea Witch", "Royal Blacksmith", "Encampment / Plunder", "Catapult / Rocks", "Farmers' Market", "Groundskeeper"],
        landscapes: ["Conquest", "Delve"],
        expansions: "seasideempires"
    },
    {
        id: 209,
        name: "Buddy System",
        cards: ["Cutpurse", "Salvager", "Treasure Map", "Corsair", "Treasury", "City Quarter", "Overlord", "Charm", "Forum", "Groundskeeper"],
        landscapes: ["Defiled Shrine", "Donate"],
        expansions: "seasideempires"
    },
    {
        id: 210,
        name: "The Aristocrats",
        cards: ["Shanty Town", "Secret Passage", "Patrol", "Trading Post", "Nobles", "Monument", "Quarry", "Tiara", "Bank", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 211,
        name: "Jester Imposter",
        cards: ["Lurker", "Steward", "Swindler", "Conspirator", "Mill", "Anvil", "Watchtower", "Bishop", "Worker's Village", "King's Court"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 212,
        name: "Stuck in the Mud",
        cards: ["Masquerade", "Diplomat", "Replace", "Torturer", "Harem", "Clerk", "Charlatan", "Mint", "War Chest", "Hoard"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 213,
        name: "Changing Priorities",
        cards: ["Pawn", "Bridge", "Ironworks", "Mining Village", "Minion", "Watchtower", "Quarry", "City", "Forge", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 214,
        name: "Fundraising Party",
        cards: ["Courtyard", "Masquerade", "Mill", "Secret Passage", "Minion", "Investment", "Tiara", "Collection", "Crystal Ball", "Grand Market"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 215,
        name: "Rise Through the Ranks",
        cards: ["Wishing Well", "Conspirator", "Diplomat", "Courtier", "Upgrade", "Bishop", "War Chest", "Grand Market", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 216,
        name: "It Adds Up",
        cards: ["Courtyard", "Baron", "Mining Village", "Trading Post", "Harem", "Anvil", "Magnate", "Vault", "Hoard", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 217,
        name: "Luddites",
        cards: ["Swindler", "Ironworks", "Mill", "Duke", "Patrol", "Clerk", "Monument", "Charlatan", "War Chest", "Hoard"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 218,
        name: "Master Exploder",
        cards: ["Pawn", "Steward", "Bridge", "Mill", "Minion", "Watchtower", "Investment", "Worker's Village", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
    {
        id: 219,
        name: "",
        cards: [],
        extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    }
];
