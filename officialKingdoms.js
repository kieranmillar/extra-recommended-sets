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
    },
	{
        id: 14,
        name: "Biggest Money",
        cards: ["Harbinger", "Moneylender", "Laboratory", "Mine", "Artisan", "Mint", "Royal Seal", "Venture", "Grand Market", "Bank"],
		extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
	{
        id: 15,
        name: "The King's Army",
        cards: ["Moat", "Merchant", "Village", "Bureaucrat", "Council Room", "Rabble", "Vault", "Goons", "Expand", "King's Court"],
		extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
	{
        id: 16,
        name: "The Good Life",
        cards: ["Cellar", "Village", "Bureaucrat", "Gardens", "Artisan", "Monument", "Contraband", "Counting House", "Mountebank", "Hoard"],
		extras: ["Colony", "Platinum"],
        expansions: "baseprosperity"
    },
	{
        id: 17,
        name: "Highway Robbery",
        cards: ["Cellar", "Workshop", "Moneylender", "Throne Room", "Library", "Oasis", "Noble Brigand", "Highway", "Inn", "Margrave"],
        expansions: "basehinterlands"
    },
	{
        id: 18,
        name: "Adventures Abroad",
        cards: ["Vassal", "Remodel", "Festival", "Laboratory", "Sentry", "Crossroads", "Fool's Gold", "Oracle", "Silk Merchant", "Farmland"],
        expansions: "basehinterlands"
    },
	{
        id: 19,
        name: "High and Low",
        cards: ["Cellar", "Workshop", "Moneylender", "Throne Room", "Witch", "Poor House", "Hermit", "Wandering Minstrel", "Mystic", "Hunting Grounds"],
		extras: ["Madman", "Shelters"],
        expansions: "basedarkages"
    },
	{
        id: 20,
        name: "Chivalry and Revelry",
        cards: ["Gardens", "Remodel", "Festival", "Laboratory", "Library", "Squire", "Rats", "Scavenger", "Knights", "Altar"],
		extras: ["Shelters"],
        expansions: "basedarkages"
    },
	{
        id: 21,
        name: "Bounty of the Hunt",
        cards: ["Cellar", "Militia", "Moneylender", "Smithy", "Festival", "Menagerie", "Tournament", "Harvest", "Horn of Plenty", "Hunting Party"],
		extras: ["Prizes"],
        expansions: "basecornguilds"
    },
	{
        id: 22,
        name: "Bad Omens",
        cards: ["Merchant", "Bureaucrat", "Poacher", "Throne Room", "Laboratory", "Hamlet", "Fortune Teller", "Remake", "Horn of Plenty", "Jester"],
        expansions: "basecornguilds"
    },
	{
        id: 23,
        name: "The Jester's Workshop",
        cards: ["Merchant", "Workshop", "Remodel", "Laboratory", "Market", "Artisan", "Farming Village", "Horse Traders", "Young Witch", "Jester", "Fairgrounds"],
		notes: "Merchant is the Bane",
        expansions: "basecornguilds"
    },
	{
        id: 24,
        name: "Arts and Crafts",
        cards: ["Cellar", "Workshop", "Moneylender", "Laboratory", "Festival", "Stonemason", "Advisor", "Baker", "Journeyman", "Merchant Guild"],
        expansions: "basecornguilds"
    },
	{
        id: 25,
        name: "Clean Living",
        cards: ["Village", "Militia", "Moneylender", "Gardens", "Bandit", "Candlestick Maker", "Doctor", "Butcher", "Baker", "Soothsayer"],
        expansions: "basecornguilds"
    },
	{
        id: 26,
        name: "Gilding the Lily",
        cards: ["Merchant", "Remodel", "Library", "Market", "Sentry", "Candlestick Maker", "Masterpiece", "Plaza", "Taxman", "Herald"],
        expansions: "basecornguilds"
    },
	{
        id: 27,
        name: "Level Up",
        cards: ["Merchant", "Workshop", "Militia", "Throne Room", "Market", "Dungeon", "Gear", "Guide", "Miser", "Lost City"],
		landscapes: ["Training"],
        expansions: "baseadventures"
    },
	{
        id: 28,
        name: "Son of Size Distortion",
        cards: ["Bureaucrat", "Gardens", "Moneylender", "Bandit", "Witch", "Amulet", "Duplicate", "Messenger", "Giant", "Treasure Trove"],
		landscapes: ["Bonfire", "Raid"],
        expansions: "baseadventures"
    },
	{
        id: 29,
        name: "Everything in Moderation",
        cards: ["Cellar", "Village", "Workshop", "Remodel", "Library", "Overlord", "Enchantress", "Temple", "Forum", "Legionary"],
		landscapes: ["Orchard", "Windfall"],
        expansions: "baseempires"
    },
	{
        id: 30,
        name: "Silver Bullets",
        cards: ["Bureaucrat", "Gardens", "Moneylender", "Laboratory", "Market", "Patrician / Emporium", "Catapult / Rocks", "Farmer's Market", "Charm", "Groundskeeper"],
		landscapes: ["Aqueduct", "Conquest"],
        expansions: "baseempires"
    },
	{
        id: 31,
        name: "Night Shift",
        cards: ["Gardens", "Poacher", "Smithy", "Bandit", "Mine", "Druid", "Ghost Town", "Night Watchman", "Exorcist", "Idol"],
		extras: ["Boons", "Will-O'-Wisp", "Imp", "Ghost"],
		notes: "Druid boons are The Earth's Gift, The Flame's Gift and The Forest's Gift.",
        expansions: "basenocturne"
    },
	{
        id: 32,
        name: "Idle Hands",
        cards: ["Cellar", "Harbinger", "Merchant", "Moneylender", "Market", "Bard", "Conclave", "Devil's Workshop", "Cursed Village", "Tragic Hero"],
		extras: ["Boons", "Hexes", "Will-O'-Wisp", "Imp"],
        expansions: "basenocturne"
    },
	{
        id: 33,
        name: "Idle Hands",
        cards: ["Merchant", "Vassal", "Smithy", "Market", "Mine", "Acting Troupe", "Cargo Ship", "Recruiter", "Seer", "Treasurer"],
		extras: ["Key"],
		landscapes: ["Road Network"],
        expansions: "baserenaissance"
    },
	{
        id: 34,
        name: "Capture the Flag",
        cards: ["Cellar", "Harbinger", "Workshop", "Remodel", "Festival", "Lackeys", "Flag Bearer", "Scholar", "Swashbuckler", "Villain"],
		extras: ["Flag", "Treasure Chest"],
		landscapes: ["Barracks", "Pageant"],
        expansions: "baserenaissance"
    },
	{
        id: 35,
        name: "Pony Express",
        cards: ["Cellar", "Village", "Market", "Mine", "Artisan", "Supplies", "Stockpile", "Barge", "Paddock", "Destrier"],
		extras: ["Horse"],
		landscapes: ["Stampede", "Way of the Seal"],
        expansions: "basemenagerie"
    },
	{
        id: 36,
        name: "Garden of Cats",
        cards: ["Moat", "Harbinger", "Merchant", "Gardens", "Bandit", "Black Cat", "Scrap", "Snowy Village", "Displace", "Sanctuary"],
		extras: ["Horse"],
		landscapes: ["Toil", "Way of the Mole"],
        expansions: "basemenagerie"
    },
	{
        id: 36,
        name: "Allies for Beginners",
        cards: ["Harbinger", "Vassal", "Gardens", "Remodel", "Market", "Sycophant", "Odysseys", "Broker", "Capital City", "Galleria"],
		landscapes: ["Crafter's Guild"],
        expansions: "baseallies"
    },
	{
        id: 37,
        name: "Warring Shopkeepers",
        cards: ["Moat", "Merchant", "Moneylender", "Bandit", "Laboratory", "Clashes", "Royal Galley", "Town", "Emissary", "Guildmaster"],
		landscapes: ["League of Shopkeepers"],
        expansions: "baseallies"
    },
	{
        id: 38,
        name: "Victory Dance",
        cards: ["Masquerade", "Baron", "Ironworks", "Mill", "Courtier", "Duke", "Patrol", "Replace", "Harem", "Nobles"],
        expansions: "intrigue"
    },
	{
        id: 39,
        name: "The Plot Thickens",
        cards: ["Lurker", "Pawn", "Steward", "Swindler", "Conspirator", "Ironworks", "Mining Village", "Secret Passage", "Torturer", "Trading Post"],
        expansions: "intrigue"
    },
	{
        id: 40,
        name: "Best Wishes",
        cards: ["Courtyard", "Shanty Town", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Secret Passage", "Duke", "Torturer", "Upgrade"],
        expansions: "intrigue"
    },
	{
        id: 41,
        name: "A Star to Steer By",
        cards: ["Swindler", "Wishing Well", "Diplomat", "Secret Passage", "Courtier", "Lookout", "Monkey", "Tide Pools", "Treasure Map", "Bazaar"],
        expansions: "intrigueseaside"
    },
	{
        id: 42,
        name: "Shore Patrol",
        cards: ["Pawn", "Shanty Town", "Patrol", "Replace", "Trading Post", "Lighthouse", "Sea Chart", "Cutpurse", "Island", "Wharf"],
        expansions: "intrigueseaside"
    },
	{
        id: 43,
        name: "Servants",
        cards: ["Pawn", "Steward", "Conspirator", "Mill", "Minion", "Transmute", "Vineyard", "Scrying Pool", "Golem", "Possession"],
		extras: ["Potion"],
        expansions: "intriguealchemy"
    },
	{
        id: 44,
        name: "Secret Research",
        cards: ["Masquerade", "Shanty Town", "Bridge", "Minion", "Torturer", "Nobles", "Herbalist", "University", "Familiar", "Philosopher's Stone"],
		extras: ["Potion"],
        expansions: "intriguealchemy"
    },
	{
        id: 45,
        name: "Pools, Tools and Fools",
        cards: ["Lurker", "Wishing Well", "Baron", "Ironworks", "Trading Post", "Nobles", "Apothecary", "Scrying Pool", "Golem", "Apprentice"],
		extras: ["Potion"],
        expansions: "intriguealchemy"
    },
	{
        id: 46,
        name: "Paths to Victory",
        cards: ["Pawn", "Shanty Town", "Baron", "Upgrade", "Harem", "Bishop", "Monument", "Counting House", "Goons", "Peddler"],
		extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
	{
        id: 47,
        name: "All Along the Watchtower",
        cards: ["Pawn", "Bridge", "Mill", "Mining Village", "Torturer", "Trade Route", "Watchtower", "Talisman", "Vault", "Hoard"],
		extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
	{
        id: 48,
        name: "Lucky Seven",
        cards: ["Lurker", "Swindler", "Wishing Well", "Bridge", "Patrol", "Vault", "Bank", "Expand", "Forge", "King's Court"],
		extras: ["Colony", "Platinum"],
        expansions: "intrigueprosperity"
    },
	{
        id: 49,
        name: "Money for Nothing",
        cards: ["Pawn", "Shanty Town", "Patrol", "Replace", "Torturer", "Tunnel", "Jack of all Trades", "Silk Road", "Cache", "Cartographer"],
        expansions: "intriguehinterlands"
    },
	{
        id: 50,
        name: "The Duke's Ball",
        cards: ["Masquerade", "Conspirator", "Duke", "Upgrade", "Harem", "Duchess", "Scheme", "Noble Brigand", "Haggler", "Inn"],
        expansions: "intriguehinterlands"
    },
	{
        id: 51,
        name: "Prophecy",
        cards: ["Wishing Well", "Baron", "Conspirator", "Secret Passage", "Nobles", "Vagrant", "Armory", "Ironmonger", "Mystic", "Rebuild"],
		extras: ["Shelters"],
        expansions: "intriguedarkages"
    },
	{
        id: 52,
        name: "Invasion",
        cards: ["Swindler", "Diplomat", "Torturer", "Upgrade", "Harem", "Beggar", "Squire", "Urchin", "Marauder", "Rogue"],
		extras: ["Mercenary", "Ruins", "Shelters", "Spoils"],
        expansions: "intriguedarkages"
    },
	{
        id: 53,
        name: "Last Laughs",
        cards: ["Pawn", "Steward", "Swindler", "Minion", "Nobles", "Farming Village", "Horse Traders", "Harvest", "Hunting Party", "Jester"],
        expansions: "intriguecornguilds"
    },
	{
        id: 54,
        name: "The Spice of Life",
        cards: ["Courtyard", "Wishing Well", "Diplomat", "Mining Village", "Courtier", "Replace", "Remake", "Tournament", "Young Witch", "Horn of Plenty", "Fairgrounds"],
		extras: ["Prizes"],
		notes: "Wishing Well is the Bane",
        expansions: "intriguecornguilds"
    },
	{
        id: 55,
        name: "Small Victories",
        cards: ["Pawn", "Conspirator", "Secret Passage", "Duke", "Harem", "Hamlet", "Fortune Teller", "Remake", "Tournament", "Hunting Party"],
		extras: ["Prizes"],
        expansions: "intriguecornguilds"
    },
	{
        id: 56,
        name: "Name That Card",
        cards: ["Courtyard", "Wishing Well", "Replace", "Harem", "Nobles", "Doctor", "Masterpiece", "Advisor", "Plaza", "Baker"],
        expansions: "intriguecornguilds"
    },
	{
		id: 57,
        name: "Tricks of the Trade",
        cards: ["Masquerade", "Conspirator", "Mill", "Secret Passage", "Nobles", "Stonemason", "Herald", "Butcher", "Journeyman", "Soothsayer"],
        expansions: "intriguecornguilds"
	},
	{
		id: 58,
        name: "Decision, Decisions",
        cards: ["Pawn", "Bridge", "Mining Village", "Duke", "Upgrade", "Candlestick Maker", "Masterpiece", "Taxman", "Butcher", "Merchant Guild"],
        expansions: "intriguecornguilds"
	},
	{
        id: 59,
        name: "Royalty Factory",
        cards: ["Swindler", "Conspirator", "Courtier", "Harem", "Nobles", "Page", "Raze", "Duplicate", "Bridge Troll", "Royal Carriage"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Pilgrimage"],
        expansions: "intrigueadventures"
    },
	{
        id: 60,
        name: "Masters of Finance",
        cards: ["Pawn", "Shanty Town", "Steward", "Bridge", "Upgrade", "Gear", "Transmogrify", "Artificer", "Distant Lands", "Wine Merchant"],
		landscapes: ["Ball", "Borrow"],
        expansions: "intrigueadventures"
    },
	{
        id: 61,
        name: "Delicious Torture",
        cards: ["Baron", "Bridge", "Ironworks", "Torturer", "Harem", "Settlers / Bustling Village", "Castles", "Enchantress", "Sacrifice", "Crown"],
		landscapes: ["Arena", "Banquet"],
        expansions: "intrigueempires"
    },
	{
        id: 62,
        name: "Buddy System",
        cards: ["Pawn", "Masquerade", "Mining Village", "Trading Post", "Nobles", "Engineer", "Catapult / Rocks", "Archive", "Capital", "Forum"],
		landscapes: ["Salt the Earth", "Wolf Den"],
        expansions: "intrigueempires"
    },
	{
        id: 63,
        name: "Shadowy Figures",
        cards: ["Bridge", "Conspirator", "Mill", "Secret Passage", "Nobles", "Faithful Hound", "Conclave", "Shepherd", "Cobbler", "Tragic Hero"],
		extras: ["Pasture"],
        expansions: "intriguenocturne"
    },
	{
        id: 64,
        name: "Impending Doom",
        cards: ["Lurker", "Swindler", "Mining Village", "Courtier", "Upgrade", "Monstery", "Leprechaun", "Necromancer", "Tormentor", "Werewolf"],
		extras: ["Hexes", "Wish", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: "intriguenocturne"
    },
	{
        id: 65,
        name: "Memento Mori",
        cards: ["Lurker", "Swindler", "Ironworks", "Patrol", "Upgrade", "Experiment", "Flag Bearer", "Patron", "Silk Merchant", "Recruiter"],
		extras: ["Flag"],
		landscapes: ["Citadel"],
        expansions: "intriguerenaissance"
    },
	{
        id: 66,
        name: "Clockwork Court",
        cards: ["Steward", "Mining Village", "Courtier", "Replace", "Nobles", "Acting Troupe", "Inventor", "Research", "Scepter", "Scholar"],
		landscapes: ["Fleet", "Sinister Plot"],
        expansions: "intriguerenaissance"
    },
	{
        id: 67,
        name: "Dog & Pony Show",
        cards: ["Pawn", "Mill", "Torturer", "Upgrade", "Nobles", "Camel Train", "Goatherd", "Sheepdog", "Cavalry", "Paddock"],
		extras: ["Horse"],
		landscapes: ["Commerce", "Way of the Horse"],
        expansions: "intriguemenagerie"
    },
	{
        id: 68,
        name: "Explosions",
        cards: ["Courtyard", "Lurker", "Wishing Well", "Diplomat", "Replace", "Scrap", "Bounty Hunter", "Coven", "Hunting Lodge", "Animal Fair"],
		extras: ["Horse"],
		landscapes: ["Populate", "Way of the Squirrel"],
        expansions: "intriguemenagerie"
    },
	{
        id: 69,
        name: "Dark Dealings",
        cards: ["Lurker", "Steward", "Secret Passage", "Courtier", "Nobles", "Townsfolk", "Broker", "Courier", "Contract", "Hunter"],
		landscapes: ["Circle of Witches"],
        expansions: "intrigueallies"
    },
	{
        id: 70,
        name: "Pawns and Underlings",
        cards: ["Pawn", "Baron", "Conspirator", "Patrol", "Replace", "Merchant Camp", "Underling", "Wizards", "Innkeeper", "Swap"],
		landscapes: ["Plateau Shepherds"],
        expansions: "intrigueallies"
    },
	{
        id: 71,
        name: "High Seas",
        cards: ["Haven", "Lookout", "Warehouse", "Blockade", "Caravan", "Island", "Bazaar", "Corsair", "Pirate", "Wharf"],
        expansions: "seaside"
    },
	{
        id: 72,
        name: "Buried Treasure",
        cards: ["Lighthouse", "Astrolabe", "Fishing Village", "Monkey", "Sea Chart", "Cutpurse", "Sailor", "Treasure Map", "Outpost", "Tactician"],
        expansions: "seaside"
    },
	{
        id: 73,
        name: "Gummed Up",
        cards: ["Haven", "Sea Chart", "Warehouse", "Sailor", "Sea Witch", "Vineyard", "Herbalist", "Familiar", "Philosopher's Stone", "Apprentice"],
		extras: ["Potion"],
        expansions: "seasidealchemy"
    },
	{
        id: 74,
        name: "Exploding Kingdom",
        cards: ["Fishing Village", "Lookout", "Outpost", "Tactician", "Wharf", "Bishop", "Quarry", "City", "Grand Market", "King's Court"],
		extras: ["Colony", "Platinum"],
        expansions: "seasideprosperity"
    },
	{
        id: 75,
        name: "Pirate Bay",
        cards: ["Native Village", "Astrolabe", "Monkey", "Corsair", "Treasury", "Investment", "Charlatan", "Magnate", "Mint", "Hoard"],
		extras: ["Colony", "Platinum"],
        expansions: "seasideprosperity"
    },
	{
        id: 76,
        name: "Travelers",
        cards: ["Lookout", "Warehouse", "Cutpurse", "Island", "Merchant Ship", "Crossroads", "Cartographer", "Souk", "Stables", "Farmland"],
        expansions: "seasidehinterlands"
    },
	{
        id: 77,
        name: "Runners",
        cards: ["Smugglers", "Blockade", "Caravan", "Sailor", "Bazaar", "Guard Dog", "Nomads", "Berserker", "Cauldron", "Wheelwright"],
        expansions: "seasidehinterlands"
    },
	{
        id: 78,
        name: "Watery Graves",
        cards: ["Native Village", "Salvager", "Treasure Map", "Corsair", "Treasury", "Hermit", "Rats", "Scavenger", "Count", "Graverobber"],
		extras: ["Madman", "Shelters"],
        expansions: "seasidedarkages"
    },
	{
        id: 79,
        name: "Peasants",
        cards: ["Haven", "Lighthouse", "Fishing Village", "Warehouse", "Island", "Poor House", "Vagrant", "Forager", "Armory", "Band of Misfits"],
		extras: ["Shelters"],
        expansions: "seasidedarkages"
    },
	{
        id: 80,
        name: "Collector",
        cards: ["Fishing Village", "Smugglers", "Blockade", "Tide Pools", "Merchant Ship", "Fortune Teller", "Farming Village", "Harvest", "Hunting Party", "Fairgrounds"],
        expansions: "seasidecornguilds"
    },
	{
        id: 81,
        name: "Island Builder",
        cards: ["Native Village", "Sea Chart", "Island", "Salvager", "Treasury", "Stonemason", "Advisor", "Plaza", "Baker", "Merchant Guild"],
        expansions: "seasidecornguilds"
    },
	{
        id: 82,
        name: "Prince of Orange",
        cards: ["Astrolabe", "Fishing Village", "Caravan", "Sailor", "Merchant Ship", "Page", "Amulet", "Dungeon", "Haunted Woods", "Swamp Hag"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Mission"],
        expansions: "seasideadventures"
    },
	{
        id: 83,
        name: "Gifts and Mathoms",
        cards: ["Haven", "Smugglers", "Blockade", "Sailor", "Salvager", "Caravan Guard", "Messenger", "Bridge Troll", "Lost City", "Hireling"],
		landscapes: ["Expedition", "Quest"],
        expansions: "seasideadventures"
    },
	{
        id: 84,
        name: "Boxed In",
        cards: ["Smugglers", "Warehouse", "Salvager", "Tactician", "Wharf", "Encampment / Plunder", "Castles", "Chariot Race", "Enchantress", "Gladiator / Fortune"],
		landscapes: ["Tax", "Wall"],
        expansions: "seasideempires"
    },
	{
        id: 85,
        name: "King of the Sea",
        cards: ["Haven", "Native Village", "Corsair", "Pirate", "Sea Witch", "Overlord", "Farmer's Market", "Temple", "Archive", "Wild Hunt"],
		landscapes: ["Delve", "Fountain"],
        expansions: "seasideempires"
    },
	{
        id: 86,
        name: "The New Black",
        cards: ["Caravan", "Sailor", "Corsair", "Merchant Ship", "Tactician", "Ghost Town", "Secret Cave", "Cobbler", "Den of Sin", "Raider"],
		extras: ["Magic Lamp", "Wish"],
        expansions: "seasidenocturne"
    },
	{
        id: 87,
        name: "Forbidden Isle",
        cards: ["Monkey", "Salvager", "Tide Pools", "Bazaar", "Pirate", "Tracker", "Blessed Village", "Cemetary", "Idol", "Tragic Hero"],
		extras: ["Haunted Mirror", "Pouch", "Boons", "Will-O'-Wisp", "Ghost"],
        expansions: "seasidenocturne"
    },
	{
        id: 88,
        name: "Free Shipping",
        cards: ["Smugglers", "Blockade", "Island", "Outpost", "Wharf", "Lackeys", "Acting Troupe", "Cargo Ship", "Research", "Spices"],
		landscapes: ["Innovation"],
        expansions: "seasiderenaissance"
    },
	{
        id: 89,
        name: "Digging For Treasure",
        cards: ["Native Village", "Astrolabe", "Caravan", "Salvager", "Treasure Map", "Border Guard", "Flag Bearer", "Inventor", "Sculptor", "Swashbuckler"],
		extras: ["Flag", "Horn", "Lantern", "Treasure Chest"],
		landscapes: ["Crop Rotation", "Silos"],
        expansions: "seasiderenaissance"
    },
	{
        id: 90,
        name: "Innsmouth",
        cards: ["Lighthouse", "Fishing Village", "Caravan", "Tide Pools", "Pirate", "Sheepdog", "Groom", "Coven", "Barge", "Animal Fair"],
		extras: ["Horse"],
		landscapes: ["Invest", "Way of the Goat"],
        expansions: "seasidemenagerie"
    },
	{
        id: 91,
        name: "Ruritania",
        cards: ["Astrolabe", "Warehouse", "Tide Pools", "Outpost", "Tactician", "Sleigh", "Bounty Hunter", "Cavalry", "Village Green", "Falconer"],
		extras: ["Horse"],
		landscapes: ["Alliance", "Way of the Monkey"],
        expansions: "seasidemenagerie"
    },
	{
        id: 92,
        name: "Forward Thinking",
        cards: ["Native Village", "Warehouse", "Cutpurse", "Sea Witch", "Tactician", "Odysseys", "Sentinel", "Royal Galley", "Guildmaster", "Highwayman"],
		landscapes: ["Cave Dwellers"],
        expansions: "seasideallies"
    },
	{
        id: 93,
        name: "Treasure Hunt",
        cards: ["Haven", "Lookout", "Treasure Map", "Outpost", "Treasury", "Forts", "Town", "Emissary", "Swap", "Marquis"],
		landscapes: ["Market Towns"],
        expansions: "seasideallies"
    }
]
