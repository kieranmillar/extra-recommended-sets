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
    },
	{
        id: 94,
        name: "Counting Contest",
        cards: ["Apothecary", "Herbalist", "Philosopher's Stone", "Golem", "Quarry", "Counting House", "Rabble", "Goons", "Hoard", "Bank"],
		extras: ["Colony", "Platinum", "Potion"],
        expansions: "alchemyprosperity"
    },
	{
        id: 95,
        name: "Lower Learning",
        cards: ["Vineyard", "University", "Familiar", "Apprentice", "Bishop", "Talisman", "Worker's Village", "Mint", "Vault", "Peddler"],
		extras: ["Colony", "Platinum", "Potion"],
        expansions: "alchemyprosperity"
    },
	{
        id: 96,
        name: "Schemes and Dreams",
        cards: ["Transmute", "Apothecary", "Herbalist", "Philosopher's Stone", "Apprentice", "Duchess", "Fool's Gold", "Scheme", "Jack of all Trades", "Ill-Gotten Gains"],
		extras: ["Potion"],
        expansions: "alchemyhinterlands"
    },
	{
        id: 97,
        name: "Wine Country",
        cards: ["Vineyard", "University", "Familiar", "Golem", "Apprentice", "Crossroads", "Nomad Camp", "Haggler", "Highway", "Farmland"],
		extras: ["Potion"],
        expansions: "alchemyhinterlands"
    },
	{
        id: 98,
        name: "Infestations",
        cards: ["Transmute", "Vineyard", "Scrying Pool", "Apprentice", "Market Square", "Armory", "Feodum", "Rats", "Wandering Minstrel", "Cultist"],
		extras: ["Potion", "Ruins", "Shelters"],
        expansions: "alchemydarkages"
    },
	{
        id: 99,
        name: "Lamentations",
        cards: ["Apothecary", "Herbalist", "University", "Golem", "Beggar", "Forager", "Ironmonger", "Catacombs", "Counterfeit", "Pillage"],
		extras: ["Potion", "Shelters", "Spoils"],
        expansions: "alchemydarkages"
    },
	{
        id: 100,
        name: "Clown College",
        cards: ["University", "Alchemist", "Familiar", "Philosopher's Stone", "Golem", "Menagerie", "Horse Traders", "Remake", "Harvest", "Jester"],
		extras: ["Potion"],
        expansions: "alchemycornguilds"
    },
	{
        id: 101,
        name: "Wine & Dine",
        cards: ["Transmute", "Vineyard", "Apothecary", "Herbalist", "Scrying Pool", "Apprentice", "Hamlet", "Young Witch", "Horn of Plenty", "Hunting Party", "Fairgrounds"],
		extras: ["Potion"],
		notes: "Herbalist is the Bane",
        expansions: "alchemycornguilds"
    },
	{
        id: 102,
        name: "Illuminati",
        cards: ["Scrying Pool", "University", "Philosopher's Stone", "Golem", "Apprentice", "Stonemason", "Masterpiece", "Herald", "Butcher", "Merchant Guild"],
		extras: ["Potion"],
        expansions: "alchemycornguilds"
    },
	{
        id: 103,
        name: "Tonics & Toxins",
        cards: ["Transmute", "Vineyard", "Herbalist", "Alchemist", "Familiar", "Candlestick Maker", "Doctor", "Plaza", "Baker", "Soothsayer"],
		extras: ["Potion"],
        expansions: "alchemycornguilds"
    },
	{
        id: 104,
        name: "Haste Potion",
        cards: ["Transmute", "Vineyard", "Scrying Pool", "University", "Apprentice", "Magpie", "Messenger", "Port", "Royal Carriage", "Treasure Trove"],
		extras: ["Potion"],
		landscapes: ["Plan"],
        expansions: "alchemyadventures"
    },
	{
        id: 105,
        name: "Cursecatchers",
        cards: ["Apothecary", "Herbalist", "Familiar", "Philosopher's Stone", "Golem", "Peasant", "Ratcatcher", "Amulet", "Caravan Guard", "Bridge Troll"],
		extras: ["Potion", "Soldier", "Fugitive", "Disciple", "Teacher"],
		landscapes: ["Save", "Trade"],
        expansions: "alchemyadventures"
    },
	{
        id: 106,
        name: "Collectors",
        cards: ["Transmute", "Apothecary", "Herbalist", "University", "Apprentice", "City Quarter", "Encampment / Plunder", "Enchantress", "Farmer's Market", "Crown"],
		extras: ["Potion"],
		landscapes: ["Collonade", "Museum"],
        expansions: "alchemyempires"
    },
	{
        id: 107,
        name: "Nightmare Fuel",
        cards: ["Transmute", "Vineyard", "Alchemist", "Apprentice", "Tracker", "Bard", "Blessed Village", "Cemetary", "Skulk", "Sacred Grove"],
		extras: ["Potion", "Haunted Mirror", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
        expansions: "alchemynocturne"
    },
	{
        id: 108,
        name: "Peek-a-Boo",
        cards: ["Apothecary", "Scrying Pool", "Alchemist", "Golem", "Lackeys", "Cargo Ship", "Improve", "Patron", "Silk Merchant", "Sculptor"],
		extras: ["Potion"],
		landscapes: ["Cathedral"],
        expansions: "alchemyrenaissance"
    },
	{
        id: 109,
        name: "Class of 20",
        cards: ["Transmute", "Vineyard", "University", "Smowy Village", "Cavalry", "Coven", "Hunting Lodge", "Kiln", "Livery", "Wayfarer"],
		extras: ["Horse", "Potion"],
		landscapes: ["Delay", "Way of the Owl"],
        expansions: "alchemymenagerie"
    },
	{
        id: 110,
        name: "Recursion",
        cards: ["Scrying Pool", "Alchemist", "Golem", "Apprentice", "Importer", "Merchant Camp", "Wizards", "Barbarian", "Galleria", "Modify"],
		extras: ["Potion"],
		landscapes: ["Coastal Haven"],
        expansions: "alchemyallies"
    },
	{
        id: 111,
        name: "Beginners",
        cards: ["Watchtower", "Monument", "Worker's Village", "Counting House", "Rabble", "Royal Seal", "Venture", "Goons", "Bank", "Expand"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
	{
        id: 112,
        name: "Friendly Interactive",
        cards: ["Trade Route", "Bishop", "Worker's Village", "City", "Contraband", "Royal Seal", "Vault", "Hoard", "Forge", "Peddler"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
	{
        id: 113,
        name: "Big Actions",
        cards: ["Loan", "Quarry", "Talisman", "City", "Mint", "Rabble", "Vault", "Grand Market", "Expand", "King's Court"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperity"
    },
	{
        id: 114,
        name: "Instant Gratification",
        cards: ["Watchtower", "Bishop", "Mint", "Hoard", "Expand", "Noble Brigand", "Trader", "Haggler", "Ill-Gotten Gains", "Farmland"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperityhinterlands"
    },
	{
        id: 115,
        name: "Treasure Trove",
        cards: ["Trade Route", "Monument", "Royal Seal", "Venture", "Bank", "Fool's Gold", "Develop", "Cache", "Ill-Gotten Gains", "Mandarin"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperityhinterlands"
    },
	{
        id: 116,
        name: "One Man's Trash",
        cards: ["Monument", "Talisman", "City", "Venture", "Grand Market", "Forager", "Market Square", "Counterfeit", "Graverobber", "Rogue"],
		extras: ["Colony", "Platinum", "Shelters"],
        expansions: "prosperitydarkages"
    },
	{
        id: 117,
        name: "Honor Among Thieves",
        cards: ["Watchtower", "Quarry", "Hoard", "Forge", "Peddler", "Squire", "Procession", "Bandit Camp", "Rebuild", "Rogue"],
		extras: ["Colony", "Platinum", "Shelters", "Spoils"],
        expansions: "prosperitydarkages"
    },
	{
        id: 118,
        name: "Detours",
        cards: ["Trade Route", "Rabble", "Venture", "Hoard", "Peddler", "Farming Village", "Remake", "Tournament", "Horn of Plenty", "Jester"],
		extras: ["Colony", "Platinum", "Prizes"],
        expansions: "prosperitycornguilds"
    },
	{
        id: 119,
        name: "Quarrymen",
        cards: ["Quarry", "City", "Mountebank", "Grand Market", "Expand", "Stonemason", "Taxman", "Baker", "Merchant Guild", "Soothsayer"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperitycornguilds"
    },
	{
        id: 120,
        name: "Metal & Meat",
        cards: ["Watchtower", "Monument", "Venture", "Forge", "King's Court", "Candlestick Maker", "Stonemason", "Plaza", "Taxman", "Butcher"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperitycornguilds"
    },
	{
        id: 121,
        name: "Penny Pinching",
        cards: ["Counting House", "Royal Seal", "Goons", "Bank", "Peddler", "Doctor", "Advisor", "Herald", "Journeyman", "Merchant Guild"],
		extras: ["Colony", "Platinum"],
        expansions: "prosperitycornguilds"
    },
	{
        id: 122,
        name: "Last Will and Monument",
        cards: ["Bishop", "Monument", "Counting House", "Rabble", "Vault", "Coin of the Realm", "Dungeon", "Messenger", "Relic", "Treasure Trove"],
		extras: ["Colony", "Platinum"],
		landscapes: ["Inheritance"],
        expansions: "prosperityadventures"
    },
	{
        id: 123,
        name: "Think Big",
        cards: ["Contraband", "Hoard", "Expand", "King's Court", "Peddler", "Miser", "Distant Lands", "Giant", "Storyteller", "Hireling"],
		extras: ["Colony", "Platinum"],
		landscapes: ["Ball", "Ferry"],
        expansions: "prosperityadventures"
    },
	{
        id: 124,
        name: "Big Time",
        cards: ["Loan", "Royal Seal", "Grand Market", "Bank", "Forge", "Royal Blacksmith", "Patrician / Emporium", "Gladiator / Fortune", "Villa", "Capital"],
		extras: ["Colony", "Platinum"],
		landscapes: ["Dominate", "Obelisk"],
		notes: "Obelisk randomly assigned",
        expansions: "prosperityempires"
    },
	{
        id: 125,
        name: "Gilded Gates",
        cards: ["Bishop", "Monument", "Talisman", "Mint", "Peddler", "City Quarter", "Encampment / Plunder", "Chariot Race", "Groundskeeper", "Wild Hunt"],
		extras: ["Colony", "Platinum"],
		landscapes: ["Basilica", "Palace"],
        expansions: "prosperityempires"
    },
	{
        id: 126,
        name: "Treasures of the Night",
        cards: ["Loan", "Contraband", "Royal Seal", "Venture", "Bank", "Guardian", "Night Watchman", "Crypt", "Vampire", "Raider"],
		extras: ["Colony", "Platinum", "Hexes", "Bat"],
        expansions: "prosperitynocturne"
    },
	{
        id: 127,
        name: "Day at the Races",
        cards: ["Trade Route", "Watchtower", "Bishop", "Talisman", "Peddler", "Druid", "Blessed Village", "Cemetary", "Tormentor", "Tragic Hero"],
		extras: ["Colony", "Platinum", "Haunted Mirror", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
		notes: "Druid boons are The Swamp's Gift, The River's Gift and The Forest's Gift.",
        expansions: "prosperitynocturne"
    },
	{
        id: 128,
        name: "Dreamers of Dreams",
        cards: ["Watchtower", "Monument", "Worker's Village", "Vault", "Expand", "Cargo Ship", "Priest", "Old Witch", "Scepter", "Scholar"],
		extras: ["Colony", "Platinum"],
		landscapes: ["Academy"],
        expansions: "prosperityrenaissance"
    },
	{
        id: 129,
        name: "Movers and Shakers",
        cards: ["Loan", "City", "Rabble", "Grand Market", "Bank", "Hideout", "Patron", "Research", "Treasurer", "Villain"],
		extras: ["Colony", "Platinum", "Key"],
		landscapes: ["Capitalism", "Citadel"],
        expansions: "prosperityrenaissance"
    },
	{
        id: 130,
        name: "Limited Time Offer",
        cards: ["Talisman", "Worker's Village", "Mint", "Peddler", "Grand Market", "Supplies", "Displace", "Fisherman", "Destrier", "Wayfarer"],
		extras: ["Colony", "Platinum", "Horse"],
		landscapes: ["Desperation", "Way of the Frog"],
        expansions: "prosperitymenagerie"
    },
	{
        id: 131,
        name: "Birth of a Nation",
        cards: ["Trade Route", "Monument", "Quarry", "City", "Rabble", "Camel Train", "Stockpile", "Mastermind", "Paddock", "Animal Fair"],
		extras: ["Colony", "Platinum", "Horse"],
		landscapes: ["Reap", "Way of the Otter"],
        expansions: "prosperitymenagerie"
    },
	{
        id: 132,
        name: "Inventing Mania",
        cards: ["Quarry", "Talisman", "Rabble", "Expand", "King's Court", "Bauble", "Augurs", "Importer", "Carpenter", "Capital City"],
		extras: ["Colony", "Platinum"],
		landscapes: ["Family of Inventors"],
        expansions: "prosperityallies"
    },
	{
        id: 133,
        name: "Bank of Toadies",
        cards: ["Trade Route", "City", "Mint", "Vault", "Bank", "Sycophant", "Odysseys", "Broker", "Town", "Marquis"],
		extras: ["Colony", "Platinum"],
		landscapes: ["League of Bankers"],
        expansions: "prosperityallies"
    },
	{
        id: 134,
        name: "Introduction",
        cards: ["Crossroads", "Develop", "Oasis", "Jack of all Trades", "Nomad Camp", "Spice Merchant", "Cache", "Haggler", "Margrave", "Stables"],
        expansions: "hinterlands"
    },
	{
        id: 135,
        name: "Fair Trades",
        cards: ["Duchess", "Develop", "Noble Brigand", "Silk Road", "Trader", "Cartographer", "Ill-Gotten Gains", "Stables", "Border Village", "Farmland"],
        expansions: "hinterlands"
    },
	{
        id: 136,
        name: "Bargains",
        cards: ["Duchess", "Fool's Gold", "Scheme", "Nomad Camp", "Spice Merchant", "Trader", "Cache", "Haggler", "Highway", "Border Village"],
        expansions: "hinterlands"
    },
	{
        id: 137,
        name: "Gambits",
        cards: ["Crossroads", "Oasis", "Oracle", "Tunnel", "Jack of all Trades", "Nomad Camp", "Cartographer", "Embassy", "Inn", "Mandarin"],
        expansions: "hinterlands"
    },
	{
        id: 138,
        name: "Far From Home",
        cards: ["Fool's Gold", "Develop", "Cartographer", "Embassy", "Haggler", "Beggar", "Feodum", "Marauder", "Wandering Minstrel", "Count"],
		extras: ["Ruins", "Shelters", "Spoils"],
        expansions: "hinterlandsdarkages"
    },
	{
        id: 139,
        name: "Expeditions",
        cards: ["Crossroads", "Tunnel", "Spice Merchant", "Highway", "Farmland", "Poor House", "Storeroom", "Ironmonger", "Catacombs", "Altar"],
		extras: ["Shelters"],
        expansions: "hinterlandsdarkages"
    },
	{
        id: 140,
        name: "Blue Harvest",
        cards: ["Fool's Gold", "Tunnel", "Noble Brigand", "Trader", "Mandarin", "Hamlet", "Horse Traders", "Tournament", "Horn of Plenty", "Jester"],
		extras: ["Prizes"],
        expansions: "hinterlandscornguilds"
    },
	{
        id: 141,
        name: "Traveling Circus",
        cards: ["Fool's Gold", "Oasis", "Nomad Camp", "Embassy", "Border Village", "Menagerie", "Farming Village", "Hunting Party", "Jester", "Fairgrounds"],
        expansions: "hinterlandscornguilds"
    },
	{
        id: 142,
        name: "Exchanges",
        cards: ["Develop", "Trader", "Ill-Gotten Gains", "Stables", "Border Village", "Stonemason", "Masterpiece", "Herald", "Butcher", "Soothsayer"],
        expansions: "hinterlandscornguilds"
    },
	{
        id: 143,
        name: "Road to Riches",
        cards: ["Crossroads", "Tunnel", "Spice Merchant", "Highway", "Farmland", "Candlestick Maker", "Advisor", "Baker", "Journeyman", "Merchant Guild"],
        expansions: "hinterlandscornguilds"
    },
	{
        id: 144,
        name: "Traders and Raiders",
        cards: ["Develop", "Spice Merchant", "Trader", "Haggler", "Farmland", "Page", "Port", "Haunted Woods", "Lost City", "Wine Merchant"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Raid"],
        expansions: "hinterlandsadventures"
    },
	{
        id: 145,
        name: "Journeys",
        cards: ["Crossroads", "Silk Road", "Cartographer", "Highway", "Inn", "Guide", "Ranger", "Bridge Troll", "Distant Lands", "Giant"],
		landscapes: ["Expedition", "Inheritance"],
        expansions: "hinterlandsadventures"
    },
	{
        id: 146,
        name: "Simple Plans",
        cards: ["Develop", "Haggler", "Ill-Gotten Gains", "Stables", "Border Village", "Patrician / Emporium", "Catapult / Rocks", "Temple", "Villa", "Forum"],
		landscapes: ["Donate", "Labyrinth"],
        expansions: "hinterlandsempires"
    },
	{
        id: 147,
        name: "Expansion",
        cards: ["Tunnel", "Spice Merchant", "Cache", "Highway", "Farmland", "Engineer", "Encampment / Plunder", "Castles", "Charm", "Legionary"],
		landscapes: ["Battlefield", "Fountain"],
        expansions: "hinterlandsempires"
    },
	{
        id: 148,
        name: "Search Party",
        cards: ["Oasis", "Scheme", "Cartographer", "Highway", "Inn", "Druid", "Faithful Hound", "Conclave", "Cobbler", "Werewolf"],
		extras: ["Boons", "Hexes", "Will-O'-Wisp"],
		notes: "Druid boons are The Mountain's Gift, The Sky's Gift and The Sun's Gift.",
        expansions: "hinterlandsnocturne"
    },
	{
        id: 149,
        name: "Counting Sheep",
        cards: ["Crossroads", "Tunnel", "Noble Brigand", "Haggler", "Farmland", "Leprechaun", "Bard", "Shepherd", "Crypt", "Pooka"],
		extras: ["Cursed Gold", "Pasture", "Boons", "Hexes", "Will-O'-Wisp"],
        expansions: "hinterlandsnocturne"
    },
	{
        id: 150,
        name: "Sweetened Deals",
        cards: ["Develop", "Spice Merchant", "Cartographer", "Haggler", "Farmland", "Lackeys", "Flag Bearer", "Mountain Village", "Silk Merchant", "Spices"],
		extras: ["Flag"],
		landscapes: ["Silos"],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 151,
        name: "A Penny Saved",
        cards: ["Crossroads", "Oasis", "Noble Brigand", "Trader", "Cache", "Ducat", "Patron", "Scepter", "Seer", "Swashbuckler"],
		extras: ["Treasure Chest"],
		landscapes: ["Barracks", "Guildhall"],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 152,
        name: "Big Blue",
        cards: ["Fool's Gold", "Tunnel", "Trader", "Cartographer", "Margrave", "Black Cat", "Sleigh", "Sheepdog", "Village Green", "Falconer"],
		extras: ["Horse"],
		landscapes: ["Banish", "Way of the Turtle"],
        expansions: "hinterlandsmenagerie"
    },
	{
        id: 153,
        name: "Intersection",
        cards: ["Develop", "Nomad Camp", "Haggler", "Stables", "Farmland", "Supplies", "Cardinal", "Hostelry", "Livery", "Mastermind"],
		extras: ["Horse"],
		landscapes: ["Gamble", "Way of the Mouse"],
		notes: "Way of the Mouse uses Crossroads",
        expansions: "hinterlandsmenagerie"
    },
	{
        id: 154,
        name: "Longest Tunnel",
        cards: ["Tunnel", "Jack of all Trades", "Haggler", "Margrave", "Farmland", "Bauble", "Carpenter", "Innkeeper", "Capital City", "Contract"],
		landscapes: ["Fellowship of Scribes"],
        expansions: "hinterlandsallies"
    },
	{
        id: 155,
        name: "Expertise",
        cards: ["Crossroads", "Spice Merchant", "Highway", "Inn", "Border Village", "Townsfolk", "Underling", "Barbarian", "Highwayman", "Specialist"],
		landscapes: ["Order of Masons"],
        expansions: "hinterlandsallies"
    },
]
