/* Array of kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
extras: An array of extra component names (optional)
landscapes: An array of landscape names (optional)
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
        notes: "Do not include Colony or Platinum.",
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
        landscapes: ["Conquest", "Mountain Pass"],
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
        cards: ["Engineer", "City Quarter", "Royal Blacksmith", "Settlers / Bustling Village", "Chariot Race", "Enchantress", "Gladiator / Fortune", "Villa", "Archive", "Groundskeeper"],
        landscapes: ["Triumph", "Fountain"],
        expansions: "empires"
    },
    {
        id: 84,
        name: "Elitist",
        cards: ["Encampment / Plunder", "Patrician / Emporium", "Castles", "Chariot Race", "Enchantress", "Farmer's Market", "Sacrifice", "Capital", "Forum", "Wild Hunt"],
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
        cards: ["City Quarter", "Patrician / Emporium", "Catapult / Rocks", "Chariot Race", "Enchantress", "Farmer's Market", "Sacrifice", "Capital", "Groundskeeper", "Wild Hunt"],
        landscapes: ["Banquet", "Orchard"],
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
        cards: ["Courtyard", "Village", "Workshop", "Militia", "Mill", "Throne Room", "Mine", "Patrol", "Replace", "Trading Post"],
        expansions: "baseintrigue"
    },
    {
        id: 121,
        name: "Gee Whiz",
        cards: ["Cellar", "Vassal", "Village", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Moneylender", "Minion", "Artisan"],
        expansions: "baseintrigue"
    },
    {
        id: 122,
        name: "Roguelike",
        cards: ["Chapel", "Lurker", "Shanty Town", "Swindler", "Poacher", "Remodel", "Courtier", "Library", "Market", "Nobles"],
        expansions: "baseintrigue"
    },
    {
        id: 123,
        name: "Carnival",
        cards: ["Masquerade", "Merchant", "Shanty Town", "Workshop", "Conspirator", "Diplomat", "Council Room", "Courtier", "Festival", "Sentry"],
        expansions: "baseintrigue"
    },
    {
        id: 124,
        name: "Oh Green World",
        cards: ["Harbinger", "Steward", "Bureaucrat", "Gardens", "Mill", "Duke", "Patrol", "Witch", "Artisan", "Nobles"],
        expansions: "baseintrigue"
    },
    {
        id: 125,
        name: "Obselescence",
        cards: ["Moat", "Pawn", "Village", "Ironworks", "Poacher", "Bandit", "Laboratory", "Torturer", "Upgrade", "Harem"],
        expansions: "baseintrigue"
    },
    {
        id: 126,
        name: "Four Play",
        cards: ["Chapel", "Baron", "Bureaucrat", "Conspirator", "Militia", "Mining Village", "Secret Passage", "Smithy", "Throne Room", "Upgrade"],
        expansions: "baseintrigue"
    },
    {
        id: 127,
        name: "Double-Crossing",
        cards: ["Moat", "Pawn", "Swindler", "Vassal", "Bridge", "Diplomat", "Secret Passage", "Throne Room", "Market", "Sentry"],
        expansions: "baseintrigue"
    },
    {
        id: 128,
        name: "Keep the Change",
        cards: ["Courtyard", "Lurker", "Moat", "Militia", "Mining Village", "Moneylender", "Council Room", "Festival", "Witch", "Harem"],
        expansions: "baseintrigue"
    },
    {
        id: 129,
        name: "Solo",
        cards: ["Masquerade", "Vassal", "Wishing Well", "Bridge", "Gardens", "Mill", "Remodel", "Courtier", "Laboratory", "Market"],
        expansions: "baseintrigue"
    },
    {
        id: 130,
        name: "Pressure Points",
        cards: ["Cellar", "Fishing Village", "Workshop", "Caravan", "Gardens", "Island", "Salvager", "Bazaar", "Library", "Mine"],
        expansions: "baseseaside"
    },
    {
        id: 131,
        name: "Double Planning",
        cards: ["Moat", "Pearl Diver", "Fishing Village", "Vassal", "Navigator", "Poacher", "Remodel", "Market", "Merchant Ship", "Tactician"],
        expansions: "baseseaside"
    },
    {
        id: 132,
        name: "The Real Merchant Ships",
        cards: ["Chapel", "Haven", "Merchant", "Smithy", "Smugglers", "Gardens", "Treasure Map", "Festival", "Outpost", "Wharf"],
        expansions: "baseseaside"
    },
    {
        id: 133,
        name: "Slipstream",
        cards: ["Embargo", "Lighthouse", "Native Village", "Warehouse", "Caravan", "Militia", "Salvager", "Bandit", "Council Room", "Sentry"],
        expansions: "baseseaside"
    },
    {
        id: 134,
        name: "Turbulent Seas",
        cards: ["Haven", "Lookout", "Vassal", "Village", "Workshop", "Cutpurse", "Bazaar", "Ghost Ship", "Market", "Witch"],
        expansions: "baseseaside"
    },
    {
        id: 135,
        name: "Boats in Moats",
        cards: ["Moat", "Native Village", "Ambassador", "Poacher", "Remodel", "Explorer", "Festival", "Ghost Ship", "Treasury", "Artisan"],
        expansions: "baseseaside"
    },
    {
        id: 136,
        name: "Ripples",
        cards: ["Cellar", "Embargo", "Haven", "Harbinger", "Bureaucrat", "Caravan", "Pirate Ship", "Explorer", "Laboratory", "Mine"],
        expansions: "baseseaside"
    },
    {
        id: 137,
        name: "Beach Combing",
        cards: ["Merchant", "Warehouse", "Island", "Moneylender", "Remodel", "Sea Hag", "Bazaar", "Market", "Tactician", "Wharf"],
        expansions: "baseseaside"
    },
    {
        id: 138,
        name: "Captain's Log",
        cards: ["Lighthouse", "Ambassador", "Fishing Village", "Salvager", "Throne Room", "Treasure Map", "Library", "Market", "Outpost", "Artisan"],
        expansions: "baseseaside"
    },
    {
        id: 139,
        name: "Swimming Uphill",
        cards: ["Native Village", "Pearl Diver", "Lookout", "Workshop", "Militia", "Smithy", "Throne Room", "Bandit", "Treasury", "Witch"],
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
        name: "All That Glistens",
        cards: ["Watchtower", "Bishop", "Moneylender", "Monument", "Smithy", "Bandit", "Festival", "Laboratory", "Grand Market", "Hoard"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 151,
        name: "Big Cash Prizes",
        cards: ["Chapel", "Village", "City", "Laboratory", "Market", "Mint", "Rabble", "Artisan", "Bank", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 152,
        name: "The Watchmen",
        cards: ["Loan", "Watchtower", "Workshop", "Monument", "Remodel", "Quarry", "Festival", "Mine", "Witch", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 153,
        name: "Co-op Mode",
        cards: ["Moat", "Village", "Gardens", "Poacher", "Talisman", "Contraband", "Council Room", "Goons", "King's Court", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 154,
        name: "Burns and Smithers",
        cards: ["Cellar", "Harbinger", "Workshop", "Smithy", "Worker's Village", "City", "Counting House", "Vault", "Witch", "Expand"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 155,
        name: "Black Friday",
        cards: ["Village", "Bureaucrat", "Moneylender", "Poacher", "Quarry", "Talisman", "Laboratory", "Rabble", "Grand Market", "Forge"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 156,
        name: "Breakthrough",
        cards: ["Merchant", "Trade Route", "Monument", "Throne Room", "Festival", "Market", "Mine", "Royal Seal", "Grand Market", "King's Court"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 157,
        name: "Your Deck Will Fail vs No It Won't",
        cards: ["Chapel", "Harbinger", "Gardens", "Moneylender", "Council Room", "Mountebank", "Royal Seal", "Venture", "Hoard", "Bank"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 158,
        name: "Tear It All Down",
        cards: ["Cellar", "Bishop", "Militia", "Remodel", "Throne Room", "Worker's Village", "Mine", "Mint", "Rabble", "Peddler"],
        extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
    {
        id: 159,
        name: "Cashing In",
        cards: ["Loan", "Watchtower", "Contraband", "Laboratory", "Market", "Sentry", "Artisan", "Goons", "Grand Market", "Forge"],
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
];
