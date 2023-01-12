/* Array of kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
colony: A boolean to include Colony and Platinum (optional)
shelters: A boolean to include Shelters (optional)
extras: An array of extra component names (optional)
landscapes: An array of landscape names (optional)
obelisk: The obelisk target, should already be listed in the cards list (optional)
bane: Which card is the bane, should already be listed in the cards list (optional)
mouse: Which card is the Way of the Mouse target, should not be listed in the cards list (optional)
druid: An array of boons, 3 max (optional)
traits: An array containing a comma separated list with pairs of cards, a trait first then the card it applies to next, both should already be in the cards and landscapes lists (optional)
notes: Any extra notes (optional)
expansions: Concatenated string of expansions required, matching checkbox names in order, no spaces
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
        name: "Plain Sailing",
        cards: ["Sea Chart", "Smugglers", "Warehouse", "Sailor", "Tide Pools", "Bazaar", "Outpost", "Pirate", "Sea Witch", "Wharf"],
        expansions: "seaside"
    },
    {
        id: 25,
        name: "The Doldrums",
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
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 31,
        name: "Before and After",
        cards: ["Bishop", "Quarry", "Tiara", "Charlatan", "City", "Magnate", "Mint", "War Chest", "Bank", "Peddler"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 32,
        name: "Future Imperfect",
        cards: ["Anvil", "Watchtower", "Bishop", "Clerk", "Monument", "Crystal Ball", "Mint", "Rabble", "Hoard", "Bank"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 33,
        name: "For Sale",
        cards: ["Anvil", "Investment", "Quarry", "Worker's Village", "Collection", "Rabble", "War Chest", "Grand Market", "Forge", "King's Court"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 34,
        name: "Defective Goods",
        cards: ["Watchtower", "Monument", "Worker's Village", "Charlatan", "Crystal Ball", "Magnate", "Vault", "Expand", "King's Court", "Peddler"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 35,
        name: "Interest Rates",
        cards: ["Bishop", "Clerk", "Investment", "Tiara", "City", "Crystal Ball", "Magnate", "Vault", "War Chest", "Hoard"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 36,
        name: "Low Standards",
        cards: ["Clerk", "Tiara", "Collection", "Crystal Ball", "Mint", "Rabble", "Vault", "War Chest", "Grand Market", "Peddler"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 37,
        name: "At Great Expense",
        cards: ["Anvil", "Monument", "Worker's Village", "Magnate", "Mint", "Vault", "Hoard", "Bank", "Forge", "King's Court"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 38,
        name: "The Taste of Success",
        cards: ["Bishop", "Investment", "Quarry", "City", "Collection", "Mint", "Rabble", "War Chest", "Grand Market", "Bank"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 39,
        name: "Don't Blink",
        cards: ["Anvil", "Watchtower", "Quarry", "Charlatan", "City", "Collection", "Expand", "Forge", "King's Court", "Peddler"],
		colony: true,
        expansions: "prosperity"
    },
    {
        id: 40,
        name: "Meet the Neighbours",
        cards: ["Guard Dog", "Oasis", "Scheme", "Nomads", "Spice Merchant", "Haggler", "Highway", "Stables", "Wheelwright", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 41,
        name: "Medium Large",
        cards: ["Jack of all Trades", "Trader", "Trail", "Weaver", "Cartographer", "Cauldron", "Inn", "Margrave", "Witch's Hut", "Farmland"],
        expansions: "hinterlands"
    },
    {
        id: 42,
        name: "The Lowlands",
        cards: ["Crossroads", "Develop", "Guard Dog", "Scheme", "Tunnel", "Spice Merchant", "Berserker", "Souk", "Wheelwright", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 43,
        name: "Serenity",
        cards: ["Fool's Gold", "Oasis", "Scheme", "Nomads", "Trader", "Trail", "Berserker", "Cartographer", "Stables", "Farmland"],
        expansions: "hinterlands"
    },
    {
        id: 44,
        name: "Going the Distance",
        cards: ["Crossroads", "Scheme", "Tunnel", "Jack of all Trades", "Cartographer", "Highway", "Inn", "Souk", "Stables", "Witch's Hut"],
        expansions: "hinterlands"
    },
    {
        id: 45,
        name: "Cruel or Kind?",
        cards: ["Fool's Gold", "Develop", "Scheme", "Nomads", "Cauldron", "Haggler", "Highway", "Margrave", "Souk", "Border Village"],
        expansions: "hinterlands"
    },
    {
        id: 46,
        name: "Alternative Markets",
        cards: ["Crossroads", "Develop", "Guard Dog", "Spice Merchant", "Weaver", "Cauldron", "Inn", "Stables", "Wheelwright", "Farmland"],
        expansions: "hinterlands"
    },
    {
        id: 47,
        name: "Jacking Up Prices",
        cards: ["Crossroads", "Oasis", "Jack of all Trades", "Nomads", "Spice Merchant", "Trader", "Haggler", "Inn", "Souk", "Wheelwright"],
        expansions: "hinterlands"
    },
    {
        id: 48,
        name: "All That Glistens",
        cards: ["Fool's Gold", "Develop", "Oasis", "Jack of all Trades", "Weaver", "Cauldron", "Highway", "Inn", "Stables", "Witch's Hut"],
        expansions: "hinterlands"
    },
    {
        id: 49,
        name: "Passive Aggressive",
        cards: ["Fool's Gold", "Guard Dog", "Tunnel", "Trader", "Berserker", "Cartographer", "Haggler", "Margrave", "Stables", "Border Village"],
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
        cards: ["Royal Blacksmith", "Encampment / Plunder", "Patrician / Emporium", "Farmers' Market", "Sacrifice", "Temple", "Charm", "Crown", "Forum", "Legionary"],
        landscapes: ["Wedding", "Obelisk"],
        obelisk: "Royal Blacksmith",
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
        cards: ["Engineer", "Overlord", "Encampment / Plunder", "Catapult / Rocks", "Farmers' Market", "Sacrifice", "Villa", "Archive", "Forum", "Legionary"],
        landscapes: ["Basilica", "Baths"],
        expansions: "empires"
    },
    {
        id: 87,
        name: "Balance",
        cards: ["Patrician / Emporium", "Catapult / Rocks", "Chariot Race", "Enchantress", "Farmers' Market", "Sacrifice", "Villa", "Capital", "Groundskeeper", "Wild Hunt"],
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
        cards: ["Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Castles", "Farmers' Market", "Sacrifice", "Temple", "Archive", "Crown", "Wild Hunt"],
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
        druid: ["The Field's Gift", "The River's Gift", "The Sky's Gift"],
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
		druid: ["The Forest's Gift", "The Swamp's Gift", "The Wind's Gift"],
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
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Hideout", "Silk Merchant", "Old Witch", "Scepter", "Sculptor", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Canal", "Pageant"],
        expansions: "renaissance"
    },
    {
        id: 102,
        name: "Deja Vu",
        cards: ["Border Guard", "Acting Troupe", "Experiment", "Improve", "Inventor", "Mountain Village", "Research", "Silk Merchant", "Scholar", "Villain"],
        extras: ["Horn", "Lantern"],
        landscapes: ["City Gate", "Silos"],
        expansions: "renaissance"
    },
    {
        id: 103,
        name: "Starch Art",
        cards: ["Border Guard", "Ducat", "Lackeys", "Hideout", "Patron", "Priest", "Recruiter", "Scholar", "Spices", "Swashbuckler"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Fleet", "Star Chart"],
        expansions: "renaissance"
    },
    {
        id: 104,
        name: "Offering",
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Improve", "Inventor", "Patron", "Scepter", "Seer", "Swashbuckler", "Villain"],
        extras: ["Treasure Chest"],
        landscapes: ["Cathedral", "Crop Rotation"],
        expansions: "renaissance"
    },
    {
        id: 105,
        name: "The Villager People",
        cards: ["Border Guard", "Lackeys", "Improve", "Flag Bearer", "Silk Merchant", "Old Witch", "Recruiter", "Scepter", "Sculptor", "Treasurer"],
        extras: ["Horn", "Lantern", "Flag", "Key"],
        landscapes: ["Piazza", "Road Network"],
        expansions: "renaissance"
    },
    {
        id: 106,
        name: "Unlocked Knowledge",
        cards: ["Lackeys", "Experiment", "Flag Bearer", "Hideout", "Mountain Village", "Research", "Scholar", "Seer", "Spices", "Treasurer"],
        extras: ["Flag", "Key"],
        landscapes: ["Barracks", "Sewers"],
        expansions: "renaissance"
    },
    {
        id: 107,
        name: "Hoarder",
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Experiment", "Mountain Village", "Priest", "Recruiter", "Scepter", "Scholar", "Villain"],
        landscapes: ["Citadel", "Guildhall"],
        expansions: "renaissance"
    },
    {
        id: 108,
        name: "Funny Money",
        cards: ["Border Guard", "Ducat", "Flag Bearer", "Hideout", "Patron", "Priest", "Research", "Old Witch", "Swashbuckler", "Treasurer"],
        extras: ["Horn", "Lantern", "Flag", "Treasure Chest", "Key"],
        landscapes: ["Capitalism", "Exploration"],
        expansions: "renaissance"
    },
    {
        id: 109,
        name: "Gainsville",
        cards: ["Experiment", "Flag Bearer", "Hideout", "Patron", "Research", "Silk Merchant", "Old Witch", "Sculptor", "Spices", "Swashbuckler"],
        extras: ["Flag", "Treasure Chest"],
        landscapes: ["Academy", "Innovation"],
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
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 151,
        name: "Runaway Inflation",
        cards: ["Chapel", "Vassal", "Workshop", "Poacher", "Festival", "Watchtower", "Monument", "City", "Collection", "Expand"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 152,
        name: "Reduce, Reuse, Recycle",
        cards: ["Moat", "Village", "Moneylender", "Mine", "Witch", "Anvil", "Tiara", "Charlatan", "Hoard", "Bank"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 153,
        name: "Con Artist",
        cards: ["Merchant", "Gardens", "Library", "Market", "Artisan", "Quarry", "Crystal Ball", "Vault", "King's Court", "Peddler"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 154,
        name: "Rewind",
        cards: ["Merchant", "Village", "Workshop", "Council Room", "Festival", "Clerk", "Magnate", "War Chest", "Hoard", "Forge"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 155,
        name: "Back to Basics",
        cards: ["Cellar", "Harbinger", "Militia", "Remodel", "Smithy", "Tiara", "Worker's Vilage", "City", "Mint", "Rabble"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 156,
        name: "Market Squared",
        cards: ["Vassal", "Moneylender", "Poacher", "Market", "Sentry", "Investment", "Quarry", "Charlatan", "Grand Market", "Expand"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 157,
        name: "Stop and Swap",
        cards: ["Cellar", "Harbinger", "Bureaucrat", "Laboratory", "Mine", "Bishop", "Investment", "Worker's Village", "Collection", "Crystal Ball"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 158,
        name: "Security Flaw",
        cards: ["Cellar", "Village", "Bandit", "Festival", "Witch", "Anvil", "Watchtower", "Monument", "King's Court", "Peddler"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 159,
        name: "Seeing Double",
        cards: ["Moat", "Militia", "Remodel", "Throne Room", "Sentry", "Tiara", "Rabble", "Hoard", "Bank", "Peddler"],
		colony: true,
        expansions: "baseprosperity"
    },
    {
        id: 160,
        name: "Chop and Change",
        cards: ["Gardens", "Remodel", "Bandit", "Market", "Sentry", "Crossroads", "Fool's Gold", "Stables", "Witch's Hut", "Farmland"],
        expansions: "basehinterlands"
    },
    {
        id: 161,
        name: "Underground Network",
        cards: ["Cellar", "Merchant", "Poacher", "Smithy", "Mine", "Develop", "Nomads", "Trail", "Weaver", "Cauldron"],
        expansions: "basehinterlands"
    },
    {
        id: 162,
        name: "The Long Long Road",
        cards: ["Moat", "Village", "Bureaucrat", "Witch", "Artisan", "Crossroads", "Oasis", "Spice Merchant", "Cartographer", "Highway"],
        expansions: "basehinterlands"
    },
    {
        id: 163,
        name: "Tough Love",
        cards: ["Vassal", "Village", "Moneylender", "Council Room", "Festival", "Scheme", "Cauldron", "Haggler", "Souk", "Farmland"],
        expansions: "basehinterlands"
    },
    {
        id: 164,
        name: "Bulging Veins",
        cards: ["Chapel", "Harbinger", "Throne Room", "Laboratory", "Library", "Guard Dog", "Tunnel", "Nomads", "Berserker", "Inn"],
        expansions: "basehinterlands"
    },
    {
        id: 165,
        name: "Paths to Victory",
        cards: ["Merchant", "Workshop", "Remodel", "Throne Room", "Sentry", "Trader", "Trail", "Margrave", "Witch's Hut", "Border Village"],
        expansions: "basehinterlands"
    },
    {
        id: 166,
        name: "The Great Outdoors",
        cards: ["Cellar", "Harbinger", "Gardens", "Bandit", "Market", "Develop", "Trader", "Weaver", "Stables", "Border Village"],
        expansions: "basehinterlands"
    },
    {
        id: 167,
        name: "Rollercoaster",
        cards: ["Vassal", "Militia", "Festival", "Laboratory", "Artisan", "Oasis", "Scheme", "Jack of all Trades", "Spice Merchant", "Wheelwright"],
        expansions: "basehinterlands"
    },
    {
        id: 168,
        name: "Slim Pickings",
        cards: ["Chapel", "Moat", "Smithy", "Throne Room", "Bandit", "Fool's Gold", "Scheme", "Nomads", "Berserker", "Inn"],
        expansions: "basehinterlands"
    },
    {
        id: 169,
        name: "Your Deck Souks",
        cards: ["Village", "Bureaucrat", "Poacher", "Market", "Witch", "Crossroads", "Guard Dog", "Tunnel", "Souk", "Farmland"],
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
        cards: ["Chapel", "Bureaucrat", "Gardens", "Council Room", "Mine", "Encampment / Plunder", "Castles", "Farmers' Market", "Crown", "Groundskeeper"],
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
        cards: ["Merchant", "Workshop", "Festival", "Library", "Sentry", "Chariot Race", "Enchantress", "Farmers' Market", "Gladiator / Fortune", "Villa"],
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
        cards: ["Lurker", "Wishing Well", "Conspirator", "Mill", "Harem", "Patrician / Emporium", "Castles", "Farmers' Market", "Temple", "Archive"],
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
        obelisk: "Crown",
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
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 211,
        name: "Jester Imposter",
        cards: ["Lurker", "Steward", "Swindler", "Conspirator", "Mill", "Anvil", "Watchtower", "Bishop", "Worker's Village", "King's Court"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 212,
        name: "Stuck in the Mud",
        cards: ["Masquerade", "Diplomat", "Replace", "Torturer", "Harem", "Clerk", "Charlatan", "Mint", "War Chest", "Hoard"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 213,
        name: "Changing Priorities",
        cards: ["Pawn", "Bridge", "Ironworks", "Mining Village", "Minion", "Watchtower", "Quarry", "City", "Forge", "Peddler"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 214,
        name: "Fundraising Party",
        cards: ["Courtyard", "Masquerade", "Mill", "Secret Passage", "Minion", "Investment", "Tiara", "Collection", "Crystal Ball", "Grand Market"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 215,
        name: "Rise Through the Ranks",
        cards: ["Wishing Well", "Conspirator", "Diplomat", "Courtier", "Upgrade", "Bishop", "War Chest", "Grand Market", "King's Court", "Peddler"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 216,
        name: "It Adds Up",
        cards: ["Courtyard", "Baron", "Mining Village", "Trading Post", "Harem", "Anvil", "Magnate", "Vault", "Hoard", "Expand"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 217,
        name: "Luddites",
        cards: ["Swindler", "Ironworks", "Mill", "Duke", "Patrol", "Clerk", "Monument", "Charlatan", "War Chest", "Hoard"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 218,
        name: "Master Exploder",
        cards: ["Pawn", "Steward", "Bridge", "Mill", "Minion", "Watchtower", "Investment", "Worker's Village", "King's Court", "Peddler"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 219,
        name: "Cost of Living",
        cards: ["Lurker", "Courtier", "Replace", "Torturer", "Nobles", "Clerk", "Quarry", "City", "Grand Market", "Forge"],
		colony: true,
        expansions: "intrigueprosperity"
    },
    {
        id: 220,
        name: "Bubbles",
        cards: ["Haven", "Lighthouse", "Sea Chart", "Blockade", "Salvager", "Investment", "City", "Rabble", "Hoard", "Peddler"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 221,
        name: "Copper Strategist",
        cards: ["Haven", "Fishing Village", "Island", "Corsair", "Outpost", "Monument", "Worker's Village", "Magnate", "Grand Market", "Bank"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 222,
        name: "Final Thoughts",
        cards: ["Native Village", "Cutpurse", "Pirate", "Sea Witch", "Tactician", "Anvil", "Watchtower", "Quarry", "Crystal Ball", "Forge"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 223,
        name: "Hard Carry",
        cards: ["Smugglers", "Cutpurse", "Merchant Ship", "Treasury", "Wharf", "Clerk", "Charlatan", "Collection", "Mint", "Treasury"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 224,
        name: "Push Your Luck",
        cards: ["Monkey", "Blockade", "Caravan", "Sailor", "Merchant Ship", "Tiara", "Worker's Village", "Vault", "Hoard", "Expand"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 225,
        name: "Crowded Harbour",
        cards: ["Lighthouse", "Fishing Village", "Warehouse", "Blockade", "Tide Pools", "Watchtower", "Worker's Village", "Charlatan", "Crystal Ball", "Grand Market"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 226,
        name: "Tidal Wave",
        cards: ["Lighthouse", "Treasure Map", "Bazaar", "Corsair", "Wharf", "Bishop", "Clerk", "Rabble", "War Chest", "King's Court"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 227,
        name: "Plunder the Seas",
        cards: ["Caravan", "Island", "Bazaar", "Pirate", "Sea Witch", "Investment", "Quarry", "Tiara", "Collection", "Magnate"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 228,
        name: "Excess Capacity",
        cards: ["Haven", "Lookout", "Warehouse", "Tide Pools", "Tactician", "Monument", "City", "Vault", "King's Court", "Peddler"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 229,
        name: "Monkey Business",
        cards: ["Native Village", "Astrolabe", "Monkey", "Sea Chart", "Salvager", "Anvil", "Charlatan", "Mint", "Bank", "Expand"],
		colony: true,
        expansions: "seasideprosperity"
    },
    {
        id: 230,
        name: "Mega-Money",
        cards: ["Tiara", "Worker's Village", "War Chest", "Bank", "Forge", "Royal Blacksmith", "Enchantress", "Archive", "Crown", "Forum"],
		colony: true,
		landscapes: ["Conquest", "Fountain"],
        expansions: "prosperityempires"
    },
    {
        id: 231,
        name: "Going Through Phases",
        cards: ["Watchtower", "Charlatan", "Collection", "Rabble", "Peddler", "Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Catapult / Rocks", "Sacrifice"],
		colony: true,
		landscapes: ["Arena", "Banquet"],
        expansions: "prosperityempires"
    },
    {
        id: 232,
        name: "How Charming",
        cards: ["Clerk", "Grand Market", "Hoard", "Expand", "King's Court", "Castles", "Temple", "Villa", "Charm", "Wild Hunt"],
		colony: true,
		landscapes: ["Orchard", "Triumphal Arch"],
        expansions: "prosperityempires"
    },
    {
        id: 233,
        name: "Tale of Two Cities",
        cards: ["Bishop", "Clerk", "City", "Crystal Ball", "Vault", "City Quarter", "Encampment / Plunder", "Farmers' Market", "Forum", "Legionary"],
		colony: true,
		landscapes: ["Dominate", "Wall"],
        expansions: "prosperityempires"
    },
    {
        id: 234,
        name: "Competing Concerns",
        cards: ["Anvil", "Investment", "Worker's Village", "Magnate", "Hoard", "Chariot Race", "Enchantress", "Capital", "Groundskeeper", "Legionary"],
		colony: true,
		landscapes: ["Battlefield", "Tax"],
        expansions: "prosperityempires"
    },
    {
        id: 235,
        name: "Looming Threats",
        cards: ["Monument", "Quarry", "Grand Market", "Expand", "Peddler", "Engineer", "Encampment / Plunder", "Gladiator / Fortune", "Temple", "Crown"],
		colony: true,
		landscapes: ["Mountain Pass", "Salt the Earth"],
        expansions: "prosperityempires"
    },
    {
        id: 236,
        name: "Unorthodox",
        cards: ["Anvil", "Bishop", "Charlatan", "Crystal Ball", "Mint", "Royal Blacksmith", "Settlers / Bustling Village", "Castles", "Sacrifice", "Villa"],
		colony: true,
		landscapes: ["Colonnade", "Windfall"],
        expansions: "prosperityempires"
    },
    {
        id: 237,
        name: "Siege Weapons",
        cards: ["Watchtower", "Worker's Village", "City", "Collection", "War Chest", "Engineer", "Patrician / Emporium", "Catapult / Rocks", "Farmers' Market", "Archive"],
		colony: true,
		landscapes: ["Museum", "Tower"],
        expansions: "prosperityempires"
    },
    {
        id: 238,
        name: "Regulations",
        cards: ["Investment", "Quarry", "Charlatan", "King's Court", "Peddler", "Overlord", "Enchantress", "Groundskeeper", "Legionary", "Wild Hunt"],
		colony: true,
		landscapes: ["Wolf Den", "Annex"],
        expansions: "prosperityempires"
    },
    {
        id: 239,
        name: "Victory Parade",
        cards: ["Watchtower", "Tiara", "Magnate", "Hoard", "Forge", "City Quarter", "Settlers / Bustling Village", "Chariot Race", "Charm", "Forum"],
		colony: true,
		landscapes: ["Tomb", "Triumph"],
        expansions: "prosperityempires"
    },
	{
        id: 240,
        name: "Spinning Your Wheels",
        cards: ["Pawn", "Shanty Town", "Mill", "Secret Passage", "Upgrade", "Guard Dog", "Tunnel", "Weaver", "Highway", "Wheelwright"],
        expansions: "intriguehinterlands"
    },
    {
        id: 241,
        name: "False Advertising",
        cards: ["Courtyard", "Swindler", "Ironworks", "Mining Village", "Secret Passage", "Crossroads", "Tunnel", "Jack of all Trades", "Silk Merchant", "Stables"],
        expansions: "intriguehinterlands"
    },
    {
        id: 242,
        name: "Negotiators",
        cards: ["Lurker", "Conspirator", "Torturer", "Trading Post", "Nobles", "Scheme", "Cauldron", "Haggler", "Inn", "Margrave"],
        expansions: "intriguehinterlands"
    },
    {
        id: 243,
        name: "Dance Party",
        cards: ["Masquerade", "Bridge", "Duke", "Minion", "Replace", "Oasis", "Trail", "Berserker", "Highway", "Farmland"],
        expansions: "intriguehinterlands"
    },
    {
        id: 244,
        name: "Future Perfect",
        cards: ["Wishing Well", "Baron", "Conspirator", "Mill", "Harem", "Crossroads", "Develop", "Weaver", "Cartographer", "Witch's Hut"],
        expansions: "intriguehinterlands"
    },
    {
        id: 245,
        name: "Opportunity Knocks",
        cards: ["Masquerade", "Diplomat", "Minion", "Replace", "Upgrade", "Fool's Gold", "Oasis", "Tunnel", "Nomads", "Wheelwright"],
        expansions: "intriguehinterlands"
    },
    {
        id: 246,
        name: "Souk It Up",
        cards: ["Lurker", "Pawn", "Swindler", "Mining Village", "Torturer", "Guard Dog", "Jack of all Trades", "Souk", "Stables", "Border Village"],
        expansions: "intriguehinterlands"
    },
    {
        id: 247,
        name: "Walk the Walk",
        cards: ["Ironworks", "Duke", "Patrol", "Trading Post", "Nobles", "Develop", "Scheme", "Spice Merchant", "Trail", "Cauldron"],
        expansions: "intriguehinterlands"
    },
    {
        id: 248,
        name: "Black Markets",
        cards: ["Shanty Town", "Swindler", "Conspirator", "Diplomat", "Secret Passage", "Trader", "Berserker", "Inn", "Souk", "Witch's Hut"],
        expansions: "intriguehinterlands"
    },
    {
        id: 249,
        name: "The High Court",
        cards: ["Courtyard", "Steward", "Wishing Well", "Baron", "Courtier", "Fool's Gold", "Oasis", "Haggler", "Margrave", "Border Village"],
		expansions: "intriguehinterlands"
    },
    {
        id: 250,
        name: "Set Sail",
        cards: ["Native Village", "Sea Chart", "Warehouse", "Island", "Wharf", "Trader", "Weaver", "Inn", "Margrave", "Farmland"],
        expansions: "seasidehinterlands"
    },
    {
        id: 251,
        name: "Bendy Bananas",
        cards: ["Lighthouse", "Monkey", "Smugglers", "Caravan", "Treasury", "Spice Merchant", "Cauldron", "Haggler", "Witch's Hut", "Border Village"],
        expansions: "seasidehinterlands"
    },
    {
        id: 252,
        name: "Cease Side",
        cards: ["Fishing Village", "Lookout", "Blockade", "Bazaar", "Outpost", "Develop", "Guard Dog", "Tunnel", "Nomads", "Highway"],
        expansions: "seasidehinterlands"
    },
    {
        id: 253,
        name: "Bumpy Ride",
        cards: ["Haven", "Tide Pools", "Merchant Ship", "Pirate", "Sea Witch", "Scheme", "Jack of All Trades", "Cauldron", "Inn", "Stables"],
        expansions: "seasidehinterlands"
    },
    {
        id: 254,
        name: "Error in Translation",
        cards: ["Astrolabe", "Sailor", "Salvager", "Treasure Map", "Tactician", "Trail", "Berserker", "Cartographer", "Highway", "Wheelwright"],
        expansions: "seasidehinterlands"
    },
    {
        id: 255,
        name: "Tailwind",
        cards: ["Native Village", "Smugglers", "Corsair", "Sea Witch", "Wharf", "Oasis", "Scheme", "Cartographer", "Souk", "Border Village"],
        expansions: "seasidehinterlands"
    },
    {
        id: 256,
        name: "Counterfeit Goods",
        cards: ["Lighthouse", "Fishing Village", "Warehouse", "Island", "Pirate", "Crossroads", "Fool's Gold", "Tunnel", "Weaver", "Margrave"],
        expansions: "seasidehinterlands"
    },
    {
        id: 257,
        name: "Preparation",
        cards: ["Lookout", "Sea Chart", "Blockade", "Tide Pools", "Outpost", "Crossroads", "Nomads", "Trail", "Haggler", "Farmland"],
        expansions: "seasidehinterlands"
    },
    {
        id: 258,
        name: "Tourist Trap",
        cards: ["Astrolabe", "Cutpurse", "Island", "Treasure Map", "Treasury", "Fool's Gold", "Guard Dog", "Inn", "Stables", "Wheelwright"],
        expansions: "seasidehinterlands"
    },
    {
        id: 259,
        name: "Deep Dive",
        cards: ["Native Village", "Monkey", "Bazaar", "Pirate", "Tactician", "Develop", "Tunnel", "Nomads", "Spice Merchant", "Cartographer"],
	expansions: "seasidehinterlands"
    },
	{
        id: 260,
        name: "Price Range",
        cards: ["Watchtower", "City", "Grand Market", "Hoard", "Forge", "Develop", "Oasis", "Nomads", "Margrave", "Farmland"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 261,
        name: "Tricky Treasure",
        cards: ["Tiara", "Crystal Ball", "Magnate", "Vault", "War Chest", "Scheme", "Cauldron", "Inn", "Souk", "Stables"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 262,
        name: "Fool's Curse",
        cards: ["Anvil", "Bishop", "Clerk", "Worker's Village", "Charlatan", "Fool's Gold", "Guard Dog", "Trail", "Haggler", "Stables"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 263,
        name: "Interest Rate",
        cards: ["Investment", "Collection", "Rabble", "King's Court", "Peddler", "Jack of All Trades", "Berserker", "Cartographer", "Haggler", "Border Village"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 264,
        name: "Precious Materials",
        cards: ["Quarry", "Tiara", "Mint", "Bank", "Expand", "Crossroads", "Scheme", "Tunnel", "Trail", "Witch's Hut"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 265,
        name: "Inns and Outs",
        cards: ["Monument", "Charlatan", "Mint", "Grand Market", "Expand", "Guard Dog", "Weaver", "Cartographer", "Highway", "Inn"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 266,
        name: "Grand Exchange",
        cards: ["Clerk", "Monument", "Magnate", "King's Court", "Peddler", "Nomads", "Spice Merchant", "Cauldron", "Wheelwright", "Farmland"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 267,
        name: "Paying With Cash",
        cards: ["Tiara", "Crystal Ball", "Grand Market", "Hoard", "Bank", "Crossroads", "Scheme", "Trader", "Witch's Hut", "Farmland"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 268,
        name: "Pushed Around",
        cards: ["Investment", "Worker's Village", "Collection", "Vault", "War Chest", "Fool's Gold", "Jack of All Trades", "Trail", "Berserker", "Stables"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
    {
        id: 269,
        name: "Fast vs Slow",
        cards: ["Bishop", "Quarry", "City", "Forge", "Peddler", "Tunnel", "Spice Merchant", "Weaver", "Margrave", "Souk"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
	{
        id: 270,
        name: "Keep On Carrying On",
        cards: ["Crossroads", "Fool's Gold", "Stables", "Wheelwright", "Farmland", "Settlers / Bustling Village", "Enchantress", "Archive", "Capital", "Legionary"],
		landscapes: ["Keep", "Windfall"],
        expansions: "hinterlandsempires"
    },
	{
        id: 271,
        name: "Appease the Gods",
        cards: ["Nomads", "Spice Merchant", "Trader", "Trail", "Berserker", "Engineer", "Castles", "Gladiator / Fortune", "Sacrifice", "Wild Hunt"],
		landscapes: ["Orchard", "Ritual"],
        expansions: "hinterlandsempires"
    },
	{
        id: 272,
        name: "Hunting Dogs",
        cards: ["Guard Dog", "Tunnel", "Cauldron", "Inn", "Margrave", "Encampment / Plunder", "Patrician / Emporium", "Farmers' Market", "Charm", "Forum"],
		landscapes: ["Labyrinth", "Triumph"],
        expansions: "hinterlandsempires"
    },
	{
        id: 273,
        name: "Hidden Buys",
        cards: ["Scheme", "Weaver", "Haggler", "Highway", "Border Village", "Royal Blacksmith", "Chariot Race", "Temple", "Crown", "Forum"],
		landscapes: ["Mountain Pass", "Museum"],
        expansions: "hinterlandsempires"
    },
	{
        id: 274,
        name: "Two Little Two Late",
        cards: ["Oasis", "Jack of All Trades", "Weaver", "Souk", "Witch's Hut", "City Quarter", "Patrician / Emporium", "Catapult / Rocks", "Villa", "Groundskeeper"],
		landscapes: ["Salt the Earth", "Wolf Den"],
        expansions: "hinterlandsempires"
    },
	{
        id: 275,
        name: "Imperialism",
        cards: ["Guard Dog", "Tunnel", "Cartographer", "Inn", "Border Village", "Overlord", "Settlers / Bustling Village", "Farmers' Market", "Legionary", "Wild Hunt"],
		landscapes: ["Dominate", "Fountain"],
        expansions: "hinterlandsempires"
    },
	{
        id: 276,
        name: "Blazing Saddles",
        cards: ["Fool's Gold", "Oasis", "Nomads", "Trail", "Stables", "Engineer", "Royal Blacksmith", "Chariot Race", "Enchantress", "Temple"],
		landscapes: ["Baths", "Battlefield"],
        expansions: "hinterlandsempires"
    },
	{
        id: 277,
        name: "Transience",
        cards: ["Crossroads", "Develop", "Nomads", "Trader", "Margrave", "Encampment / Plunder", "Castles", "Villa", "Capital", "Crown"],
		landscapes: ["Advance", "Donate"],
        expansions: "hinterlandsempires"
    },
	{
        id: 278,
        name: "Sacrifice the Middleman",
        cards: ["Develop", "Cauldron", "Souk", "Wheelwright", "Farmland", "Patrician / Emporium", "Sacrifice", "Archive", "Charm", "Groundskeeper"],
		landscapes: ["Arena", "Annex"],
        expansions: "hinterlandsempires"
    },
	{
        id: 279,
        name: "Spare Change",
        cards: ["Spice Merchant", "Weaver", "Cartographer", "Highway", "Witch's Hut", "City Quarter", "Overlord", "Settlers / Bustling Village", "Catapult / Rocks", "Gladiator / Fortune"],
		landscapes: ["Banquet", "Colonnade"],
        expansions: "hinterlandsempires"
    },
	{
        id: 280,
        name: "Garden Centre",
        cards: ["Merchant", "Gardens", "Militia", "Smithy", "Market", "Border Guard", "Mountain Village", "Sculptor", "Seer", "Treasurer"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Guildhall", "Road Network"],
        expansions: "baserenaissance"
    },
	{
        id: 281,
        name: "A Learning Opportunity",
        cards: ["Vassal", "Workshop", "Poacher", "Throne Room", "Festival", "Experiment", "Flag Bearer", "Patron", "Silk Merchant", "Scholar"],
        extras: ["Flag"],
        landscapes: ["Cathedral", "City Gate"],
        expansions: "baserenaissance"
    },
	{
        id: 282,
        name: "Searching for Love",
        cards: ["Chapel", "Village", "Bureaucrat", "Council Room", "Mine", "Ducat", "Lackeys", "Cargo Ship", "Patron", "Villain"],
        landscapes: ["Exploration", "Fleet"],
        expansions: "baserenaissance"
    },
	{
        id: 283,
        name: "Lost and Found",
        cards: ["Cellar", "Harbinger", "Laboratory", "Witch", "Artisan", "Improve", "Mountain Village", "Priest", "Spices", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Piazza", "Sinister Plot"],
        expansions: "baserenaissance"
    },
	{
        id: 284,
        name: "Smash and Grab",
        cards: ["Moat", "Moneylender", "Remodel", "Bandit", "Market", "Acting Troupe", "Flag Bearer", "Old Witch", "Recruiter", "Spices"],
        extras: ["Flag"],
        landscapes: ["Citadel", "Innovation"],
        expansions: "baserenaissance"
    },
	{
        id: 285,
        name: "The Bourgeoisie",
        cards: ["Militia", "Poacher", "Bandit", "Library", "Sentry", "Border Guard", "Cargo Ship", "Hideout", "Patron", "Silk Merchant"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Capitalism", "Pageant"],
        expansions: "baserenaissance"
    },
	{
        id: 286,
        name: "Quick on the Draw",
        cards: ["Cellar", "Remodel", "Smithy", "Council Room", "Witch", "Lackeys", "Acting Troupe", "Flag Bearer", "Inventor", "Sculptor"],
        extras: ["Flag"],
        landscapes: ["Academy", "Sewers"],
        expansions: "baserenaissance"
    },
	{
        id: 287,
        name: "Henchmen",
        cards: ["Moat", "Merchant", "Workshop", "Moneylender", "Market", "Improve", "Recruiter", "Scepter", "Scholar", "Villain"],
        landscapes: ["Canal", "Silos"],
        expansions: "baserenaissance"
    },
	{
        id: 288,
        name: "Gaze into the Abyss",
        cards: ["Harbinger", "Gardens", "Bandit", "Laboratory", "Mine", "Ducat", "Research", "Silk Merchant", "Spices", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Barracks", "Star Chart"],
        expansions: "baserenaissance"
    },
	{
        id: 289,
        name: "Fair Play",
        cards: ["Vassal", "Militia", "Poacher", "Throne Room", "Artisan", "Mountain Village", "Priest", "Old Witch", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Crop Rotation", "Fair"],
        expansions: "baserenaissance"
    },
	{
        id: 290,
        name: "Organised",
        cards: ["Pawn", "Shanty Town", "Conspirator", "Mill", "Secret Passage", "Cargo Ship", "Priest", "Old Witch", "Scepter", "Sculptor"],
        landscapes: ["Citadel", "Piazza"],
        expansions: "intriguerenaissance"
    },
	{
        id: 291,
        name: "Step Up",
        cards: ["Courtyard", "Masquerade", "Ironworks", "Replace", "Harem", "Ducat", "Experiment", "Flag Bearer", "Mountain Village", "Swashbuckler"],
        extras: ["Flag", "Treasure Chest"],
        landscapes: ["Pageant", "Road Network"],
        expansions: "intriguerenaissance"
    },
	{
        id: 292,
        name: "Encore",
        cards: ["Lurker", "Wishing Well", "Bridge", "Duke", "Patrol", "Border Guard", "Acting Troupe", "Scepter", "Treasurer", "Villain"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Crop Rotation", "Fleet"],
        expansions: "intriguerenaissance"
    },
	{
        id: 293,
        name: "Recruitment Fair",
        cards: ["Shanty Town", "Swindler", "Courtier", "Upgrade", "Nobles", "Lurker", "Flag Bearer", "Inventor", "Recruiter", "Scholar"],
        extras: ["Flag"],
        landscapes: ["Fair", "Star Chart"],
        expansions: "intriguerenaissance"
    },
	{
        id: 294,
        name: "The Resistance",
        cards: ["Conspirator", "Ironworks", "Mining Village", "Courtier", "Torturer", "Improve", "Hideout", "Research", "Silk Merchant", "Spices"],
        landscapes: ["City Gate", "Sinister Plot"],
        expansions: "intriguerenaissance"
    },
	{
        id: 295,
        name: "Golden Age",
        cards: ["Lurker", "Pawn", "Baron", "Diplomat", "Minion", "Patron", "Scholar", "Sculptor", "Seer", "Spices"],
        landscapes: ["Cathedral", "Innovation"],
        expansions: "intriguerenaissance"
    },
	{
        id: 296,
        name: "Modern Art",
        cards: ["Swindler", "Baron", "Mill", "Duke", "Trading Post", "Border Guard", "Cargo Ship", "Experiment", "Scepter", "Swashbuckler"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Barracks", "Silos"],
        expansions: "intriguerenaissance"
    },
	{
        id: 297,
        name: "Coldplay",
        cards: ["Pawn", "Steward", "Courtier", "Minion", "Harem", "Ducat", "Cargo Ship", "Improve", "Patron", "Priest"],
        landscapes: ["Canal", "Capitalism"],
        expansions: "intriguerenaissance"
    },
	{
        id: 298,
        name: "Backstabbers",
        cards: ["Steward", "Bridge", "Conspirator", "Secret Passage", "Nobles", "Experiment", "Hideout", "Old Witch", "Seer", "Villain"],
        landscapes: ["Exploration", "Sewers"],
        expansions: "intriguerenaissance"
    },
	{
        id: 299,
        name: "Token Representation",
        cards: ["Wishing Well", "Diplomat", "Replace", "Torturer", "Trading Post", "Border Guard", "Ducat", "Research", "Sculptor", "Treasurer"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Academy", "Guildhall"],
        expansions: "intriguerenaissance"
    },
	{
        id: 300,
        name: "Navigating by the Stars",
        cards: ["Haven", "Astrolabe", "Warehouse", "Tide Pools", "Bazaar", "Lackeys", "Experiment", "Improve", "Inventor", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Crop Rotation", "Star Chart"],
        expansions: "seasiderenaissance"
    },
	{
        id: 301,
        name: "Preparations",
        cards: ["Lighthouse", "Blockade", "Salvager", "Treasure Map", "Sea Witch", "Border Guard", "Flag Bearer", "Hideout", "Mountain Village", "Scepter"],
        extras: ["Horn", "Lantern", "Flag"],
        landscapes: ["Fleet", "Sinister Plot"],
        expansions: "seasiderenaissance"
    },
	{
        id: 302,
        name: "Sea-ing Double",
        cards: ["Caravan", "Island", "Corsair", "Outpost", "Treasury", "Ducat", "Experiment", "Research", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Barracks", "Citadel"],
        expansions: "seasiderenaissance"
    },
	{
        id: 303,
        name: "Impressment",
        cards: ["Fishing Village", "Cutpurse", "Sailor", "Pirate", "Tactician", "Lackeys", "Cargo Ship", "Inventor", "Recruiter", "Villain"],
        landscapes: ["Fair", "Guildhall"],
        expansions: "seasiderenaissance"
    },
	{
        id: 304,
        name: "Hiding in the Reefs",
        cards: ["Haven", "Native Village", "Monkey", "Smugglers", "Merchant Ship", "Acting Troupe", "Silk Merchant", "Old Witch", "Sculptor", "Spices"],
        landscapes: ["Cathedral", "City Gate"],
        expansions: "seasiderenaissance"
    },
	{
        id: 305,
        name: "Sea for Yourself",
        cards: ["Astrolabe", "Lookout", "Sea Chart", "Pirate", "Sea Witch", "Patron", "Silk Merchant", "Scepter", "Sculptor", "Villain"],
        landscapes: ["Innovation", "Sewers"],
        expansions: "seasiderenaissance"
    },
	{
        id: 306,
        name: "Performance Art",
        cards: ["Fishing Village", "Monkey", "Blockade", "Treasury", "Wharf", "Acting Troupe", "Cargo Ship", "Flag Bearer", "Priest", "Treasurer"],
        extras: ["Flag", "Key"],
        landscapes: ["Canal", "Silos"],
        expansions: "seasiderenaissance"
    },
	{
        id: 307,
        name: "Learning to Swim",
        cards: ["Lighthouse", "Smugglers", "Warehouse", "Salvager", "Tactician", "Lackeys", "Improve", "Patron", "Old Witch", "Scholar"],
        landscapes: ["Academy", "Pageant"],
        expansions: "seasiderenaissance"
    },
	{
        id: 308,
        name: "Merchant Port",
        cards: ["Sea Chart", "Cutpurse", "Island", "Salvager", "Merchant Ship", "Ducat", "Experiment", "Research", "Seer", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Capitalism", "Piazza"],
        expansions: "seasiderenaissance"
    },
	{
        id: 309,
        name: "Ebb and Flow",
        cards: ["Caravan", "Tide Pools", "Treasure Map", "Corsair", "Outpost", "Border Guard", "Mountain Village", "Recruiter", "Scholar", "Sculptor"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Exploration", "Road Network"],
        expansions: "seasiderenaissance"
    },
	{
        id: 310,
        name: "This expansion combination is still in development",
        cards: [],
        colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 311,
        name: "",
        cards: [],
	    colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 312,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 313,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 314,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 315,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 316,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 317,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 318,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 319,
        name: "",
        cards: [],
		colony: true,
        extras: [],
        landscapes: [],
        expansions: "prosperityrenaissance"
    },
	{
        id: 320,
        name: "This expansion combination is still in development",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 321,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 322,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 323,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 324,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 325,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 326,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 327,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 328,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 329,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 330,
        name: "This expansion combination is still in development",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 331,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 332,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 333,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 334,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 335,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 336,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 337,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 338,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    },
	{
        id: 339,
        name: "",
        cards: [],
        extras: [],
        landscapes: [],
        expansions: "empiresrenaissance"
    }
];
