/* Array of official kingdoms
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
        cards: ["Harbinger", "Moneylender", "Laboratory", "Mine", "Artisan", "Tiara", "Crystal Ball", "Mint", "Grand Market", "Bank"],
		colony: true,
        expansions: "baseprosperity"
    },
	{
        id: 15,
        name: "The King's Army",
        cards: ["Moat", "Merchant", "Village", "Bureaucrat", "Council Room", "Collection", "Rabble", "Vault", "Expand", "King's Court"],
		colony: true,
        expansions: "baseprosperity"
    },
	{
        id: 16,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 17,
        name: "Happy Trails",
        cards: ["Cellar", "Workshop", "Moneylender", "Throne Room", "Library", "Oasis", "Nomads", "Trail", "Berserker", "Highway"],
        expansions: "basehinterlands"
    },
	{
        id: 18,
        name: "Adventures Abroad",
        cards: ["Vassal", "Remodel", "Festival", "Laboratory", "Sentry", "Crossroads", "Fool's Gold", "Guard Dog", "Souk", "Witch's Hut"],
        expansions: "basehinterlands"
    },
	{
        id: 19,
        name: "High and Low",
        cards: ["Cellar", "Workshop", "Moneylender", "Throne Room", "Witch", "Poor House", "Hermit", "Wandering Minstrel", "Mystic", "Hunting Grounds"],
		shelters: true,
		extras: ["Madman"],
        expansions: "basedarkages"
    },
	{
        id: 20,
        name: "Chivalry and Revelry",
        cards: ["Gardens", "Remodel", "Festival", "Laboratory", "Library", "Squire", "Rats", "Scavenger", "Knights", "Altar"],
		shelters: true,
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
		bane: "Merchant",
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
        cards: ["Bureaucrat", "Gardens", "Moneylender", "Laboratory", "Market", "Patrician / Emporium", "Catapult / Rocks", "Farmers' Market", "Charm", "Groundskeeper"],
		landscapes: ["Aqueduct", "Conquest"],
        expansions: "baseempires"
    },
	{
        id: 31,
        name: "Night Shift",
        cards: ["Gardens", "Poacher", "Smithy", "Bandit", "Mine", "Druid", "Ghost Town", "Night Watchman", "Exorcist", "Idol"],
		extras: ["Boons", "Will-O'-Wisp", "Imp", "Ghost"],
		druid: ["The Earth's Gift", "The Flame's Gift", "The Forest's Gift"],
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
        name: "It Takes a Villager",
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
        id: 37,
        name: "Allies for Beginners",
        cards: ["Harbinger", "Vassal", "Gardens", "Remodel", "Market", "Sycophant", "Odysseys", "Broker", "Capital City", "Galleria"],
		landscapes: ["Crafter's Guild"],
        expansions: "baseallies"
    },
	{
        id: 38,
        name: "Warring Shopkeepers",
        cards: ["Moat", "Merchant", "Moneylender", "Bandit", "Laboratory", "Clashes", "Royal Galley", "Town", "Emissary", "Guildmaster"],
		landscapes: ["League of Shopkeepers"],
        expansions: "baseallies"
    },
	{
        id: 39,
        name: "Victory Dance",
        cards: ["Masquerade", "Baron", "Ironworks", "Mill", "Courtier", "Duke", "Patrol", "Replace", "Harem", "Nobles"],
        expansions: "intrigue"
    },
	{
        id: 40,
        name: "The Plot Thickens",
        cards: ["Lurker", "Pawn", "Steward", "Swindler", "Conspirator", "Ironworks", "Mining Village", "Secret Passage", "Torturer", "Trading Post"],
        expansions: "intrigue"
    },
	{
        id: 41,
        name: "Best Wishes",
        cards: ["Courtyard", "Shanty Town", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Secret Passage", "Duke", "Torturer", "Upgrade"],
        expansions: "intrigue"
    },
	{
        id: 42,
        name: "A Star to Steer By",
        cards: ["Swindler", "Wishing Well", "Diplomat", "Secret Passage", "Courtier", "Lookout", "Monkey", "Tide Pools", "Treasure Map", "Bazaar"],
        expansions: "intrigueseaside"
    },
	{
        id: 43,
        name: "Shore Patrol",
        cards: ["Pawn", "Shanty Town", "Patrol", "Replace", "Trading Post", "Lighthouse", "Sea Chart", "Cutpurse", "Island", "Wharf"],
        expansions: "intrigueseaside"
    },
	{
        id: 44,
        name: "Servants",
        cards: ["Pawn", "Steward", "Conspirator", "Mill", "Minion", "Transmute", "Vineyard", "Scrying Pool", "Golem", "Possession"],
		extras: ["Potion"],
        expansions: "intriguealchemy"
    },
	{
        id: 45,
        name: "Secret Research",
        cards: ["Masquerade", "Shanty Town", "Bridge", "Minion", "Torturer", "Nobles", "Herbalist", "University", "Familiar", "Philosopher's Stone"],
		extras: ["Potion"],
        expansions: "intriguealchemy"
    },
	{
        id: 46,
        name: "Pools, Tools and Fools",
        cards: ["Lurker", "Wishing Well", "Baron", "Ironworks", "Trading Post", "Nobles", "Apothecary", "Scrying Pool", "Golem", "Apprentice"],
		extras: ["Potion"],
        expansions: "intriguealchemy"
    },
	{
        id: 47,
        name: "Paths to Victory",
        cards: ["Pawn", "Shanty Town", "Baron", "Upgrade", "Harem", "Bishop", "Monument", "Collection", "Magnate", "Peddler"],
		colony: true,
        expansions: "intrigueprosperity"
    },
	{
        id: 48,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 49,
        name: "Lucky Seven",
        cards: ["Wishing Well", "Baron", "Mining Village", "Patrol", "Upgrade", "Tiara", "Bank", "Expand", "Forge", "King's Court"],
		colony: true,
        expansions: "intrigueprosperity"
    },
	{
        id: 50,
        name: "Money for Nothing",
        cards: ["Pawn", "Shanty Town", "Patrol", "Replace", "Torturer", "Tunnel", "Jack of all Trades", "Weaver", "Cartographer", "Wheelwright"],
        expansions: "intriguehinterlands"
    },
	{
        id: 51,
        name: "The Duke's Ball",
        cards: ["Masquerade", "Conspirator", "Duke", "Upgrade", "Harem", "Guard Dog", "Scheme", "Trail", "Inn", "Wheelwright"],
        expansions: "intriguehinterlands"
    },
	{
        id: 52,
        name: "Prophecy",
        cards: ["Wishing Well", "Baron", "Conspirator", "Secret Passage", "Nobles", "Vagrant", "Armory", "Ironmonger", "Mystic", "Rebuild"],
		shelters: true,
        expansions: "intriguedarkages"
    },
	{
        id: 53,
        name: "Invasion",
        cards: ["Swindler", "Diplomat", "Torturer", "Upgrade", "Harem", "Beggar", "Squire", "Urchin", "Marauder", "Rogue"],
		shelters: true,
		extras: ["Mercenary", "Ruins", "Spoils"],
        expansions: "intriguedarkages"
    },
	{
        id: 54,
        name: "Last Laughs",
        cards: ["Pawn", "Steward", "Swindler", "Minion", "Nobles", "Farming Village", "Horse Traders", "Harvest", "Hunting Party", "Jester"],
        expansions: "intriguecornguilds"
    },
	{
        id: 55,
        name: "The Spice of Life",
        cards: ["Courtyard", "Wishing Well", "Diplomat", "Mining Village", "Courtier", "Replace", "Remake", "Tournament", "Young Witch", "Horn of Plenty", "Fairgrounds"],
		extras: ["Prizes"],
		bane: "Wishing Well",
        expansions: "intriguecornguilds"
    },
	{
        id: 56,
        name: "Small Victories",
        cards: ["Pawn", "Conspirator", "Secret Passage", "Duke", "Harem", "Hamlet", "Fortune Teller", "Remake", "Tournament", "Hunting Party"],
		extras: ["Prizes"],
        expansions: "intriguecornguilds"
    },
	{
        id: 57,
        name: "Name That Card",
        cards: ["Courtyard", "Wishing Well", "Replace", "Harem", "Nobles", "Doctor", "Masterpiece", "Advisor", "Plaza", "Baker"],
        expansions: "intriguecornguilds"
    },
	{
		id: 58,
        name: "Tricks of the Trade",
        cards: ["Masquerade", "Conspirator", "Mill", "Secret Passage", "Nobles", "Stonemason", "Herald", "Butcher", "Journeyman", "Soothsayer"],
        expansions: "intriguecornguilds"
	},
	{
		id: 59,
        name: "Decision, Decisions",
        cards: ["Pawn", "Bridge", "Mining Village", "Duke", "Upgrade", "Candlestick Maker", "Masterpiece", "Taxman", "Butcher", "Merchant Guild"],
        expansions: "intriguecornguilds"
	},
	{
        id: 60,
        name: "Royalty Factory",
        cards: ["Swindler", "Conspirator", "Courtier", "Harem", "Nobles", "Page", "Raze", "Duplicate", "Bridge Troll", "Royal Carriage"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Pilgrimage"],
        expansions: "intrigueadventures"
    },
	{
        id: 61,
        name: "Masters of Finance",
        cards: ["Pawn", "Shanty Town", "Steward", "Bridge", "Upgrade", "Gear", "Transmogrify", "Artificer", "Distant Lands", "Wine Merchant"],
		landscapes: ["Ball", "Borrow"],
        expansions: "intrigueadventures"
    },
	{
        id: 62,
        name: "Delicious Torture",
        cards: ["Baron", "Bridge", "Ironworks", "Torturer", "Harem", "Settlers / Bustling Village", "Castles", "Enchantress", "Sacrifice", "Crown"],
		landscapes: ["Arena", "Banquet"],
        expansions: "intrigueempires"
    },
	{
        id: 63,
        name: "Buddy System",
        cards: ["Pawn", "Masquerade", "Mining Village", "Trading Post", "Nobles", "Engineer", "Catapult / Rocks", "Archive", "Capital", "Forum"],
		landscapes: ["Salt the Earth", "Wolf Den"],
        expansions: "intrigueempires"
    },
	{
        id: 64,
        name: "Shadowy Figures",
        cards: ["Bridge", "Conspirator", "Mill", "Secret Passage", "Nobles", "Faithful Hound", "Conclave", "Shepherd", "Cobbler", "Tragic Hero"],
		extras: ["Pasture"],
        expansions: "intriguenocturne"
    },
	{
        id: 65,
        name: "Impending Doom",
        cards: ["Lurker", "Swindler", "Mining Village", "Courtier", "Upgrade", "Monastery", "Leprechaun", "Necromancer", "Tormentor", "Werewolf"],
		extras: ["Hexes", "Wish", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: "intriguenocturne"
    },
	{
        id: 66,
        name: "Memento Mori",
        cards: ["Lurker", "Swindler", "Ironworks", "Patrol", "Upgrade", "Experiment", "Flag Bearer", "Patron", "Silk Merchant", "Recruiter"],
		extras: ["Flag"],
		landscapes: ["Citadel"],
        expansions: "intriguerenaissance"
    },
	{
        id: 67,
        name: "Clockwork Court",
        cards: ["Steward", "Mining Village", "Courtier", "Replace", "Nobles", "Acting Troupe", "Inventor", "Research", "Scepter", "Scholar"],
		landscapes: ["Fleet", "Sinister Plot"],
        expansions: "intriguerenaissance"
    },
	{
        id: 68,
        name: "Dog & Pony Show",
        cards: ["Pawn", "Mill", "Torturer", "Upgrade", "Nobles", "Camel Train", "Goatherd", "Sheepdog", "Cavalry", "Paddock"],
		extras: ["Horse"],
		landscapes: ["Commerce", "Way of the Horse"],
        expansions: "intriguemenagerie"
    },
	{
        id: 69,
        name: "Explosions",
        cards: ["Courtyard", "Lurker", "Wishing Well", "Diplomat", "Replace", "Scrap", "Bounty Hunter", "Coven", "Hunting Lodge", "Animal Fair"],
		extras: ["Horse"],
		landscapes: ["Populate", "Way of the Squirrel"],
        expansions: "intriguemenagerie"
    },
	{
        id: 70,
        name: "Dark Dealings",
        cards: ["Lurker", "Steward", "Secret Passage", "Courtier", "Nobles", "Townsfolk", "Broker", "Courier", "Contract", "Hunter"],
		landscapes: ["Circle of Witches"],
        expansions: "intrigueallies"
    },
	{
        id: 71,
        name: "Pawns and Underlings",
        cards: ["Pawn", "Baron", "Conspirator", "Patrol", "Replace", "Merchant Camp", "Underling", "Wizards", "Innkeeper", "Swap"],
		landscapes: ["Plateau Shepherds"],
        expansions: "intrigueallies"
    },
	{
        id: 72,
        name: "High Seas",
        cards: ["Haven", "Lookout", "Warehouse", "Blockade", "Caravan", "Island", "Bazaar", "Corsair", "Pirate", "Wharf"],
        expansions: "seaside"
    },
	{
        id: 73,
        name: "Buried Treasure",
        cards: ["Lighthouse", "Astrolabe", "Fishing Village", "Monkey", "Sea Chart", "Cutpurse", "Sailor", "Treasure Map", "Outpost", "Tactician"],
        expansions: "seaside"
    },
	{
        id: 74,
        name: "Gummed Up",
        cards: ["Haven", "Sea Chart", "Warehouse", "Sailor", "Sea Witch", "Vineyard", "Herbalist", "Familiar", "Philosopher's Stone", "Apprentice"],
		extras: ["Potion"],
        expansions: "seasidealchemy"
    },
	{
        id: 75,
        name: "Exploding Kingdom",
        cards: ["Fishing Village", "Lookout", "Outpost", "Tactician", "Wharf", "Bishop", "Quarry", "City", "Grand Market", "King's Court"],
		colony: true,
        expansions: "seasideprosperity"
    },
	{
        id: 76,
        name: "Pirate Bay",
        cards: ["Native Village", "Astrolabe", "Monkey", "Corsair", "Treasury", "Investment", "Charlatan", "Magnate", "Mint", "Hoard"],
		colony: true,
        expansions: "seasideprosperity"
    },
	{
        id: 77,
        name: "Travelers",
        cards: ["Lookout", "Warehouse", "Cutpurse", "Island", "Merchant Ship", "Crossroads", "Cartographer", "Souk", "Stables", "Farmland"],
        expansions: "seasidehinterlands"
    },
	{
        id: 78,
        name: "Runners",
        cards: ["Smugglers", "Blockade", "Caravan", "Sailor", "Bazaar", "Guard Dog", "Nomads", "Berserker", "Cauldron", "Wheelwright"],
        expansions: "seasidehinterlands"
    },
	{
        id: 79,
        name: "Watery Graves",
        cards: ["Native Village", "Salvager", "Treasure Map", "Corsair", "Treasury", "Hermit", "Rats", "Scavenger", "Count", "Graverobber"],
		shelters: true,
		extras: ["Madman"],
        expansions: "seasidedarkages"
    },
	{
        id: 80,
        name: "Peasants",
        cards: ["Haven", "Lighthouse", "Fishing Village", "Warehouse", "Island", "Poor House", "Vagrant", "Forager", "Armory", "Band of Misfits"],
		shelters: true,
        expansions: "seasidedarkages"
    },
	{
        id: 81,
        name: "Collector",
        cards: ["Fishing Village", "Smugglers", "Blockade", "Tide Pools", "Merchant Ship", "Fortune Teller", "Farming Village", "Harvest", "Hunting Party", "Fairgrounds"],
        expansions: "seasidecornguilds"
    },
	{
        id: 82,
        name: "Island Builder",
        cards: ["Native Village", "Sea Chart", "Island", "Salvager", "Treasury", "Stonemason", "Advisor", "Plaza", "Baker", "Merchant Guild"],
        expansions: "seasidecornguilds"
    },
	{
        id: 83,
        name: "Prince of Orange",
        cards: ["Astrolabe", "Fishing Village", "Caravan", "Sailor", "Merchant Ship", "Page", "Amulet", "Dungeon", "Haunted Woods", "Swamp Hag"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Mission"],
        expansions: "seasideadventures"
    },
	{
        id: 84,
        name: "Gifts and Mathoms",
        cards: ["Haven", "Smugglers", "Blockade", "Sailor", "Salvager", "Caravan Guard", "Messenger", "Bridge Troll", "Lost City", "Hireling"],
		landscapes: ["Expedition", "Quest"],
        expansions: "seasideadventures"
    },
	{
        id: 85,
        name: "Boxed In",
        cards: ["Smugglers", "Warehouse", "Salvager", "Tactician", "Wharf", "Encampment / Plunder", "Castles", "Chariot Race", "Enchantress", "Gladiator / Fortune"],
		landscapes: ["Tax", "Wall"],
        expansions: "seasideempires"
    },
	{
        id: 86,
        name: "King of the Sea",
        cards: ["Haven", "Native Village", "Corsair", "Pirate", "Sea Witch", "Overlord", "Farmers' Market", "Temple", "Archive", "Wild Hunt"],
		landscapes: ["Delve", "Fountain"],
        expansions: "seasideempires"
    },
	{
        id: 87,
        name: "The New Black",
        cards: ["Caravan", "Sailor", "Corsair", "Merchant Ship", "Tactician", "Ghost Town", "Secret Cave", "Cobbler", "Den of Sin", "Raider"],
		extras: ["Magic Lamp", "Wish"],
        expansions: "seasidenocturne"
    },
	{
        id: 88,
        name: "Forbidden Isle",
        cards: ["Monkey", "Salvager", "Tide Pools", "Bazaar", "Pirate", "Tracker", "Blessed Village", "Cemetery", "Idol", "Tragic Hero"],
		extras: ["Haunted Mirror", "Pouch", "Boons", "Will-O'-Wisp", "Ghost"],
        expansions: "seasidenocturne"
    },
	{
        id: 89,
        name: "Free Shipping",
        cards: ["Smugglers", "Blockade", "Island", "Outpost", "Wharf", "Lackeys", "Acting Troupe", "Cargo Ship", "Research", "Spices"],
		landscapes: ["Innovation"],
        expansions: "seasiderenaissance"
    },
	{
        id: 90,
        name: "Digging For Treasure",
        cards: ["Native Village", "Astrolabe", "Caravan", "Salvager", "Treasure Map", "Border Guard", "Flag Bearer", "Inventor", "Sculptor", "Swashbuckler"],
		extras: ["Flag", "Horn", "Lantern", "Treasure Chest"],
		landscapes: ["Crop Rotation", "Silos"],
        expansions: "seasiderenaissance"
    },
	{
        id: 91,
        name: "Innsmouth",
        cards: ["Lighthouse", "Fishing Village", "Caravan", "Tide Pools", "Pirate", "Sheepdog", "Groom", "Coven", "Barge", "Animal Fair"],
		extras: ["Horse"],
		landscapes: ["Invest", "Way of the Goat"],
        expansions: "seasidemenagerie"
    },
	{
        id: 92,
        name: "Ruritania",
        cards: ["Astrolabe", "Warehouse", "Tide Pools", "Outpost", "Tactician", "Sleigh", "Bounty Hunter", "Cavalry", "Village Green", "Falconer"],
		extras: ["Horse"],
		landscapes: ["Alliance", "Way of the Monkey"],
        expansions: "seasidemenagerie"
    },
	{
        id: 93,
        name: "Forward Thinking",
        cards: ["Native Village", "Warehouse", "Cutpurse", "Sea Witch", "Tactician", "Odysseys", "Sentinel", "Royal Galley", "Guildmaster", "Highwayman"],
		landscapes: ["Cave Dwellers"],
        expansions: "seasideallies"
    },
	{
        id: 94,
        name: "Treasure Hunt",
        cards: ["Haven", "Lookout", "Treasure Map", "Outpost", "Treasury", "Forts", "Town", "Emissary", "Swap", "Marquis"],
		landscapes: ["Market Towns"],
        expansions: "seasideallies"
    },
	{
        id: 95,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 96,
        name: "Lower Learning",
        cards: ["Vineyard", "University", "Familiar", "Apprentice", "Anvil", "Bishop", "Worker's Village", "Charlatan", "Mint", "Peddler"],
		colony: true,
		extras: ["Potion"],
        expansions: "alchemyprosperity"
    },
	{
        id: 97,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 98,
        name: "Wine Country",
        cards: ["Vineyard", "University", "Familiar", "Golem", "Apprentice", "Guard Dog", "Nomads", "Highway", "Margrave", "Farmland"],
		extras: ["Potion"],
        expansions: "alchemyhinterlands"
    },
	{
        id: 99,
        name: "Infestations",
        cards: ["Transmute", "Vineyard", "Scrying Pool", "Apprentice", "Market Square", "Armory", "Feodum", "Rats", "Wandering Minstrel", "Cultist"],
		shelters: true,
		extras: ["Potion", "Ruins"],
        expansions: "alchemydarkages"
    },
	{
        id: 100,
        name: "Lamentations",
        cards: ["Apothecary", "Herbalist", "University", "Golem", "Beggar", "Forager", "Ironmonger", "Catacombs", "Counterfeit", "Pillage"],
		shelters: true,
		extras: ["Potion", "Spoils"],
        expansions: "alchemydarkages"
    },
	{
        id: 101,
        name: "Clown College",
        cards: ["University", "Alchemist", "Familiar", "Philosopher's Stone", "Golem", "Menagerie", "Horse Traders", "Remake", "Harvest", "Jester"],
		extras: ["Potion"],
        expansions: "alchemycornguilds"
    },
	{
        id: 102,
        name: "Wine & Dine",
        cards: ["Transmute", "Vineyard", "Apothecary", "Herbalist", "Scrying Pool", "Apprentice", "Hamlet", "Young Witch", "Horn of Plenty", "Hunting Party", "Fairgrounds"],
		extras: ["Potion"],
		bane: "Herbalist",
        expansions: "alchemycornguilds"
    },
	{
        id: 103,
        name: "Illuminati",
        cards: ["Scrying Pool", "University", "Philosopher's Stone", "Golem", "Apprentice", "Stonemason", "Masterpiece", "Herald", "Butcher", "Merchant Guild"],
		extras: ["Potion"],
        expansions: "alchemycornguilds"
    },
	{
        id: 104,
        name: "Tonics & Toxins",
        cards: ["Transmute", "Vineyard", "Herbalist", "Alchemist", "Familiar", "Candlestick Maker", "Doctor", "Plaza", "Baker", "Soothsayer"],
		extras: ["Potion"],
        expansions: "alchemycornguilds"
    },
	{
        id: 105,
        name: "Haste Potion",
        cards: ["Transmute", "Vineyard", "Scrying Pool", "University", "Apprentice", "Magpie", "Messenger", "Port", "Royal Carriage", "Treasure Trove"],
		extras: ["Potion"],
		landscapes: ["Plan"],
        expansions: "alchemyadventures"
    },
	{
        id: 106,
        name: "Cursecatchers",
        cards: ["Apothecary", "Herbalist", "Familiar", "Philosopher's Stone", "Golem", "Peasant", "Ratcatcher", "Amulet", "Caravan Guard", "Bridge Troll"],
		extras: ["Potion", "Soldier", "Fugitive", "Disciple", "Teacher"],
		landscapes: ["Save", "Trade"],
        expansions: "alchemyadventures"
    },
	{
        id: 107,
        name: "Collectors",
        cards: ["Transmute", "Apothecary", "Herbalist", "University", "Apprentice", "City Quarter", "Encampment / Plunder", "Enchantress", "Farmers' Market", "Crown"],
		extras: ["Potion"],
		landscapes: ["Colonnade", "Museum"],
        expansions: "alchemyempires"
    },
	{
        id: 108,
        name: "Nightmare Fuel",
        cards: ["Transmute", "Vineyard", "Alchemist", "Apprentice", "Tracker", "Bard", "Blessed Village", "Cemetery", "Skulk", "Sacred Grove"],
		extras: ["Potion", "Haunted Mirror", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
        expansions: "alchemynocturne"
    },
	{
        id: 109,
        name: "Peek-a-Boo",
        cards: ["Apothecary", "Scrying Pool", "Alchemist", "Golem", "Lackeys", "Cargo Ship", "Improve", "Patron", "Silk Merchant", "Sculptor"],
		extras: ["Potion"],
		landscapes: ["Cathedral"],
        expansions: "alchemyrenaissance"
    },
	{
        id: 110,
        name: "Class of 20",
        cards: ["Transmute", "Vineyard", "University", "Snowy Village", "Cavalry", "Coven", "Hunting Lodge", "Kiln", "Livery", "Wayfarer"],
		extras: ["Horse", "Potion"],
		landscapes: ["Delay", "Way of the Owl"],
        expansions: "alchemymenagerie"
    },
	{
        id: 111,
        name: "Recursion",
        cards: ["Scrying Pool", "Alchemist", "Golem", "Apprentice", "Importer", "Merchant Camp", "Wizards", "Barbarian", "Galleria", "Modify"],
		extras: ["Potion"],
		landscapes: ["Coastal Haven"],
        expansions: "alchemyallies"
    },
	{
        id: 112,
        name: "Beginners",
        cards: ["Watchtower", "Clerk", "Monument", "Tiara", "Worker's Village", "Crystal Ball", "Magnate", "Rabble", "Bank", "Expand"],
		colony: true,
        expansions: "prosperity"
    },
	{
        id: 113,
        name: "Friendly Interactive",
        cards: ["Bishop", "Tiara", "Worker's Village", "City", "Collection", "War Chest", "Vault", "Hoard", "Forge", "Peddler"],
		colony: true,
        expansions: "prosperity"
    },
	{
        id: 114,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 115,
        name: "Instant Gratification",
        cards: ["Watchtower", "Bishop", "Mint", "Hoard", "Expand", "Oasis", "Trail", "Berserker", "Cauldron", "Haggler"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
	{
        id: 116,
        name: "Treasure Trove",
        cards: ["Clerk", "Monument", "Tiara", "Crystal Ball", "Bank", "Fool's Gold", "Develop", "Guard Dog", "Cauldron", "Inn"],
		colony: true,
        expansions: "prosperityhinterlands"
    },
	{
        id: 117,
        name: "One Man's Trash",
        cards: ["Anvil", "City", "Crystal Ball", "Magnate", "War Chest", "Squire", "Forager", "Market Square", "Counterfeit", "Pillage"],
		colony: true,
		shelters: true,
		extras: ["Spoils"],
        expansions: "prosperitydarkages"
    },
	{
        id: 118,
        name: "Honor Among Thieves",
        cards: ["Watchtower", "Quarry", "Collection", "Hoard", "Forge", "Squire", "Marauder", "Procession", "Bandit Camp", "Rogue"],
		colony: true,
		shelters: true,
		extras: ["Ruins", "Spoils"],
        expansions: "prosperitydarkages"
    },
	{
        id: 119,
        name: "Detours",
        cards: ["Clerk", "Crystal Ball", "Magnate", "Hoard", "Forge", "Farming Village", "Remake", "Tournament", "Horn of Plenty", "Jester"],
		colony: true,
		extras: ["Prizes"],
        expansions: "prosperitycornguilds"
    },
	{
        id: 120,
        name: "Quarrymen",
        cards: ["Quarry", "Charlatan", "City", "Grand Market", "Expand", "Candlestick Maker", "Baker", "Butcher", "Merchant Guild", "Soothsayer"],
		colony: true,
        expansions: "prosperitycornguilds"
    },
	{
        id: 121,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 122,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 123,
        name: "Last Will and Monument",
        cards: ["Bishop", "Monument", "Collection", "Magnate", "Vault", "Coin of the Realm", "Dungeon", "Messenger", "Port", "Relic"],
		colony: true,
		landscapes: ["Inheritance"],
        expansions: "prosperityadventures"
    },
	{
        id: 124,
        name: "Think Big",
        cards: ["War Chest", "Hoard", "Expand", "King's Court", "Peddler", "Miser", "Distant Lands", "Giant", "Storyteller", "Hireling"],
		colony: true,
		landscapes: ["Ball", "Ferry"],
        expansions: "prosperityadventures"
    },
	{
        id: 125,
        name: "Big Time",
        cards: ["Investment", "Tiara", "Grand Market", "Bank", "Forge", "Royal Blacksmith", "Patrician / Emporium", "Gladiator / Fortune", "Villa", "Capital"],
		colony: true,
		landscapes: ["Dominate", "Obelisk"],
		notes: "Obelisk randomly assigned",
        expansions: "prosperityempires"
    },
	{
        id: 126,
        name: "Gilded Gates",
        cards: ["Anvil", "Collection", "Mint", "War Chest", "Peddler", "City Quarter", "Encampment / Plunder", "Chariot Race", "Groundskeeper", "Wild Hunt"],
		colony: true,
		landscapes: ["Basilica", "Palace"],
        expansions: "prosperityempires"
    },
	{
        id: 127,
        name: "Treasures of the Night",
        cards: ["Investment", "Tiara", "Charlatan", "Crystal Ball", "War Chest", "Guardian", "Night Watchman", "Crypt", "Vampire", "Raider"],
		colony: true,
		extras: ["Hexes", "Bat"],
        expansions: "prosperitynocturne"
    },
	{
        id: 128,
        name: "Day at the Races",
        cards: ["Anvil", "Watchtower", "Bishop", "Clerk", "Peddler", "Druid", "Blessed Village", "Cemetery", "Tormentor", "Tragic Hero"],
		colony: true,
		extras: ["Haunted Mirror", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
		druid: ["The Swamp's Gift", "The River's Gift", "The Forest's Gift"],
        expansions: "prosperitynocturne"
    },
	{
        id: 129,
        name: "Dreamers of Dreams",
        cards: ["Watchtower", "Monument", "Worker's Village", "Charlatan", "Vault", "Cargo Ship", "Priest", "Old Witch", "Scepter", "Scholar"],
		colony: true,
		landscapes: ["Academy"],
        expansions: "prosperityrenaissance"
    },
	{
        id: 130,
        name: "Movers and Shakers",
        cards: ["Investment", "City", "Rabble", "Grand Market", "Bank", "Hideout", "Patron", "Research", "Treasurer", "Villain"],
		colony: true,
		extras: ["Key"],
		landscapes: ["Capitalism", "Citadel"],
        expansions: "prosperityrenaissance"
    },
	{
        id: 131,
        name: "Limited Time Offer",
        cards: ["Anvil", "Worker's Village", "Mint", "Grand Market", "Peddler", "Supplies", "Displace", "Fisherman", "Destrier", "Wayfarer"],
		colony: true,
		extras: ["Horse"],
		landscapes: ["Desperation", "Way of the Frog"],
        expansions: "prosperitymenagerie"
    },
	{
        id: 132,
        name: "Otter Chaos",
        cards: ["Clerk", "Monument", "Quarry", "City", "War Chest", "Camel Train", "Hunting Lodge", "Mastermind", "Paddock", "Animal Fair"],
		colony: true,
		extras: ["Horse"],
		landscapes: ["Reap", "Way of the Otter"],
        expansions: "prosperitymenagerie"
    },
	{
        id: 133,
        name: "Inventing Mania",
        cards: ["Anvil", "Quarry", "Rabble", "Expand", "King's Court", "Bauble", "Augurs", "Importer", "Carpenter", "Capital City"],
		colony: true,
		landscapes: ["Family of Inventors"],
        expansions: "prosperityallies"
    },
	{
        id: 134,
        name: "Bank of Toadies",
        cards: ["Clerk", "Investment", "City", "Vault", "Bank", "Sycophant", "Odysseys", "Broker", "Town", "Marquis"],
		colony: true,
		landscapes: ["League of Bankers"],
        expansions: "prosperityallies"
    },
	{
        id: 135,
        name: "Introduction",
        cards: ["Crossroads", "Develop", "Oasis", "Jack of all Trades", "Nomads", "Spice Merchant", "Weaver", "Cartographer", "Margrave", "Stables"],
        expansions: "hinterlands"
    },
	{
        id: 136,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 137,
        name: "Bargains",
        cards: ["Fool's Gold", "Scheme", "Trader", "Trail", "Cauldron", "Haggler", "Highway", "Souk", "Wheelwright", "Border Village"],
        expansions: "hinterlands"
    },
	{
        id: 138,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 139,
        name: "Far From Home",
        cards: ["Fool's Gold", "Develop", "Weaver", "Cartographer", "Witch's Hut", "Feodum", "Fortress", "Wandering Minstrel", "Catacombs", "Count"],
		shelters: true,
        expansions: "hinterlandsdarkages"
    },
	{
        id: 140,
        name: "Expeditions",
        cards: ["Oasis", "Scheme", "Nomads", "Spice Merchant", "Highway", "Poor House", "Storeroom", "Ironmonger", "Catacombs", "Altar"],
		shelters: true,
        expansions: "hinterlandsdarkages"
    },
	{
        id: 141,
        name: "Blue Harvest",
        cards: ["Fool's Gold", "Trail", "Tunnel", "Weaver", "Witch's Hut", "Hamlet", "Horse Traders", "Tournament", "Horn of Plenty", "Jester"],
		extras: ["Prizes"],
        expansions: "hinterlandscornguilds"
    },
	{
        id: 142,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 143,
        name: "Exchanges",
        cards: ["Develop", "Trader", "Cauldron", "Stables", "Border Village", "Stonemason", "Masterpiece", "Herald", "Butcher", "Soothsayer"],
        expansions: "hinterlandscornguilds"
    },
	{
        id: 144,
        name: "",
        cards: [],
        expansions: "(removed)"
    },
	{
        id: 145,
        name: "Traders and Raiders",
        cards: ["Guard Dog", "Spice Merchant", "Trader", "Berserker", "Haggler", "Page", "Port", "Haunted Woods", "Lost City", "Wine Merchant"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Raid"],
        expansions: "hinterlandsadventures"
    },
	{
        id: 146,
        name: "Journeys",
        cards: ["Crossroads", "Trail", "Cartographer", "Highway", "Inn", "Guide", "Ranger", "Bridge Troll", "Distant Lands", "Giant"],
		landscapes: ["Expedition", "Inheritance"],
        expansions: "hinterlandsadventures"
    },
	{
        id: 147,
        name: "Simple Plans",
        cards: ["Cauldron", "Haggler", "Stables", "Wheelwright", "Border Village", "Patrician / Emporium", "Catapult / Rocks", "Enchantress", "Villa", "Forum"],
		landscapes: ["Donate", "Labyrinth"],
        expansions: "hinterlandsempires"
    },
	{
        id: 148,
        name: "Expansion",
        cards: ["Tunnel", "Spice Merchant", "Highway", "Stables", "Farmland", "Engineer", "Encampment / Plunder", "Castles", "Charm", "Legionary"],
		landscapes: ["Battlefield", "Fountain"],
        expansions: "hinterlandsempires"
    },
	{
        id: 149,
        name: "Search Party",
        cards: ["Oasis", "Scheme", "Cartographer", "Inn", "Souk", "Druid", "Faithful Hound", "Conclave", "Cobbler", "Werewolf"],
		extras: ["Boons", "Hexes", "Will-O'-Wisp"],
		druid: ["The Mountain's Gift", "The Sky's Gift", "The Sun's Gift"],
        expansions: "hinterlandsnocturne"
    },
	{
        id: 150,
        name: "Counting Sheep",
        cards: ["Crossroads", "Oasis", "Tunnel", "Weaver", "Farmland", "Leprechaun", "Secret Cave", "Shepherd", "Crypt", "Pooka"],
		extras: ["Cursed Gold", "Magic Lamp", "Pasture", "Hexes", "Wish"],
        expansions: "hinterlandsnocturne"
    },
	{
        id: 151,
        name: "Sweetened Deals",
        cards: ["Develop", "Guard Dog", "Spice Merchant", "Haggler", "Witch's Hut", "Lackeys", "Flag Bearer", "Mountain Village", "Silk Merchant", "Spices"],
		extras: ["Flag"],
		landscapes: ["Silos"],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 152,
        name: "A Penny Saved",
        cards: ["Oasis", "Trader", "Berserker", "Souk", "Border Village", "Ducat", "Patron", "Scepter", "Seer", "Swashbuckler"],
		extras: ["Treasure Chest"],
		landscapes: ["Barracks", "Guildhall"],
        expansions: "hinterlandsrenaissance"
    },
	{
        id: 153,
        name: "Big Blue",
        cards: ["Tunnel", "Trader", "Trail", "Weaver", "Witch's Hut", "Black Cat", "Sleigh", "Sheepdog", "Village Green", "Falconer"],
		extras: ["Horse"],
		landscapes: ["Banish", "Way of the Turtle"],
        expansions: "hinterlandsmenagerie"
    },
	{
        id: 154,
        name: "Intersection",
        cards: ["Develop", "Nomads", "Stables", "Wheelwright", "Farmland", "Supplies", "Cardinal", "Hostelry", "Livery", "Mastermind"],
		extras: ["Horse"],
		landscapes: ["Gamble", "Way of the Mouse"],
		mouse: "Crossroads",
        expansions: "hinterlandsmenagerie"
    },
	{
        id: 155,
        name: "Longest Tunnel",
        cards: ["Tunnel", "Jack of all Trades", "Trail", "Haggler", "Margrave", "Bauble", "Carpenter", "Innkeeper", "Capital City", "Contract"],
		landscapes: ["Fellowship of Scribes"],
        expansions: "hinterlandsallies"
    },
	{
        id: 156,
        name: "Expertise",
        cards: ["Crossroads", "Spice Merchant", "Highway", "Inn", "Border Village", "Townsfolk", "Underling", "Barbarian", "Highwayman", "Specialist"],
		landscapes: ["Order of Masons"],
        expansions: "hinterlandsallies"
    },
	{
        id: 157,
        name: "Grim Parade",
        cards: ["Forager", "Market Square", "Armory", "Fortress", "Procession", "Band of Misfits", "Catacombs", "Cultist", "Knights", "Hunting Grounds"],
		shelters: true,
		extras: ["Ruins"],
        expansions: "darkages"
    },
	{
        id: 158,
        name: "Chess With Death",
        cards: ["Vagrant", "Sage", "Storeroom", "Rats", "Scavenger", "Bandit Camp", "Graverobber", "Junk Dealer", "Mystic", "Pillage"],
		shelters: true,
		extras: ["Spoils"],
        expansions: "darkages"
    },
	{
        id: 159,
        name: "Dark Carnival",
        cards: ["Hermit", "Fortress", "Band of Misfits", "Cultist", "Junk Dealer", "Hamlet", "Menagerie", "Knights", "Horn of Plenty", "Fairgrounds"],
		shelters: true,
		extras: ["Madman", "Ruins"],
        expansions: "darkagescornguilds"
    },
	{
        id: 160,
        name: "To the Victor",
        cards: ["Death Cart", "Marauder", "Bandit Camp", "Counterfeit", "Pillage", "Sage", "Remake", "Tournament", "Harvest", "Hunting Party"],
		shelters: true,
		extras: ["Prizes", "Ruins", "Spoils"],
        expansions: "darkagescornguilds"
    },
	{
        id: 161,
        name: "Stoneground",
        cards: ["Ironmonger", "Procession", "Marauder", "Rogue", "Hunting Grounds", "Candlestick Maker", "Stonemason", "Advisor", "Plaza", "Baker"],
		shelters: true,
		extras: ["Ruins", "Spoils"],
        expansions: "darkagescornguilds"
    },
	{
        id: 162,
        name: "Class Struggle",
        cards: ["Poor House", "Market Square", "Feodum", "Fortress", "Knights", "Doctor", "Taxman", "Butcher", "Journeyman", "Merchant Guild"],
		shelters: true,
        expansions: "darkagescornguilds"
    },
	{
        id: 163,
        name: "Cemetery Polka",
        cards: ["Marauder", "Procession", "Wandering Minstrel", "Graverobber", "Rogue", "Peasant", "Amulet", "Caravan Guard", "Relic", "Hireling"],
		shelters: true,
		extras: ["Ruins", "Spoils", "Soldier", "Fugitive", "Disciple", "Teacher"],
		landscapes: ["Alms"],
        expansions: "darkagesadventures"
    },
	{
        id: 164,
        name: "Groovy Decay",
        cards: ["Death Cart", "Fortress", "Rats", "Cultist", "Knights", "Ratcatcher", "Raze", "Dungeon", "Transmogrify", "Haunted Woods"],
		shelters: true,
		extras: ["Ruins"],
		landscapes: ["Lost Arts", "Pathfinding"],
        expansions: "darkagesadventures"
    },
	{
        id: 165,
        name: "Tomb of the Rat King",
        cards: ["Storeroom", "Death Cart", "Fortress", "Rats", "Pillage", "City Quarter", "Castles", "Chariot Race", "Sacrifice", "Legionary"],
		shelters: true,
		extras: ["Ruins", "Spoils"],
		landscapes: ["Advance", "Tomb"],
        expansions: "darkagesempires"
    },
	{
        id: 166,
        name: "Triumph of the Bandit King",
        cards: ["Market Square", "Procession", "Bandit Camp", "Catacombs", "Hunting Grounds", "Engineer", "Capital", "Charm", "Groundskeeper", "Legionary"],
		shelters: true,
		extras: ["Spoils"],
		landscapes: ["Defiled Shrine", "Triumph"],
        expansions: "darkagesempires"
    },
	{
		id: 167,
        name: "The Squire's Ritual",
        cards: ["Squire", "Hermit", "Feodum", "Ironmonger", "Rogue", "Patrician / Emporium", "Settlers / Bustling Village", "Catapult / Rocks", "Archive", "Crown"],
		shelters: true,
		extras: ["Madman"],
		landscapes: ["Museum", "Ritual"],
        expansions: "darkagesempires"
	},
	{
		id: 168,
        name: "Grave Matters",
        cards: ["Squire", "Forager", "Market Square", "Armory", "Graverobber", "Cemetery", "Necromancer", "Skulk", "Cursed Village", "Tormentor"],
		shelters: true,
		extras: ["Haunted Mirror", "Hexes", "Ghost", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: "darkagesnocturne"
	},
	{
		id: 169,
        name: "Rats and Bats",
        cards: ["Hermit", "Fortress", "Rats", "Catacombs", "Count", "Tracker", "Changeling", "Devil's Workshop", "Sacred Grove", "Vampire"],
		shelters: true,
		extras: ["Madman", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Bat"],
        expansions: "darkagesnocturne"
	},
	{
		id: 170,
        name: "Stargazing",
        cards: ["Hermit", "Sage", "Procession", "Wandering Minstrel", "Mystic", "Border Guard", "Patron", "Silk Merchant", "Seer", "Swashbuckler"],
		shelters: true,
		extras: ["Madman", "Horn", "Lantern", "Treasure Chest"],
		landscapes: ["Star Chart"],
        expansions: "darkagesrenaissance"
	},
	{
		id: 171,
        name: "Sewer Rats",
        cards: ["Rats", "Count", "Counterfeit", "Cultist", "Graverobber", "Lackeys", "Improve", "Flag Bearer", "Mountain Village", "Research"],
		shelters: true,
		extras: ["Ruins", "Flag"],
		landscapes: ["Crop Rotation", "Sewers"],
        expansions: "darkagesrenaissance"
	},
	{
		id: 172,
        name: "Friendly Carnage",
        cards: ["Beggar", "Market Square", "Fortress", "Catacombs", "Altar", "Goatherd", "Cardinal", "Falconer", "Hunting Lodge", "Animal Fair"],
		shelters: true,
		extras: ["Horse"],
		landscapes: ["Ride", "Way of the Camel"],
        expansions: "darkagesmenagerie"
	},
	{
		id: 173,
        name: "Gift Horses",
        cards: ["Squire", "Sage", "Rats", "Pillage", "Hunting Grounds", "Camel Train", "Scrap", "Displace", "Paddock", "Destrier"],
		shelters: true,
		extras: ["Horse", "Spoils"],
		landscapes: ["Bargain", "Way of the Butterfly"],
        expansions: "darkagesmenagerie"
	},
	{
		id: 174,
        name: "Grave Business",
        cards: ["Poor House", "Beggar", "Forager", "Bandit Camp", "Graverobber", "Wizards", "Broker", "Barbarian", "Contract", "Highwayman"],
		shelters: true,
		extras: ["Spoils"],
		landscapes: ["Cave Dwellers"],
        expansions: "darkagesallies"
	},
	{
		id: 175,
        name: "Rat Traders",
        cards: ["Squire", "Death Cart", "Rats", "Count", "Knights", "Townsfolk", "Importer", "Emissary", "Skirmisher", "Swap"],
		shelters: true,
		extras: ["Ruins"],
		landscapes: ["Desert Guides"],
        expansions: "darkagesallies"
	},
	{
		id: 176,
        name: "Misfortune",
        cards: ["Candlestick Maker", "Doctor", "Fortune Teller", "Advisor", "Farming Village", "Horse Traders", "Taxman", "Jester", "Soothsayer", "Fairgrounds"],
        expansions: "cornguilds"
	},
	{
		id: 177,
        name: "Baking Contest",
        cards: ["Stonemason", "Masterpiece", "Menagerie", "Farming Village", "Herald", "Remake", "Tournament", "Baker", "Harvest", "Journeyman"],
		extras: ["Prizes"],
        expansions: "cornguilds"
	},
	{
		id: 178,
        name: "The Hero's Return",
        cards: ["Menagerie", "Farming Village", "Horse Traders", "Jester", "Fairgrounds", "Page", "Miser", "Ranger", "Artificer", "Relic"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Travelling Fair"],
        expansions: "cornguildsadventures"
	},
	{
		id: 179,
        name: "Seacraft and Witchcraft",
        cards: ["Hamlet", "Fortune Teller", "Tournament", "Young Witch", "Horn of Plenty", "Peasant", "Guide", "Transmogrify", "Storyteller", "Swamp Hag", "Wine Merchant"],
		extras: ["Prizes", "Soldier", "Fugitive", "Disciple", "Teacher"],
		landscapes: ["Ferry", "Seaway"],
		bane: "Guide",
        expansions: "cornguildsadventures"
	},
	{
		id: 180,
        name: "Spendthrift",
        cards: ["Stonemason", "Doctor", "Masterpiece", "Merchant Guild", "Soothsayer", "Gear", "Magpie", "Miser", "Artificer", "Storyteller"],
		landscapes: ["Lost Arts"],
        expansions: "cornguildsadventures"
	},
	{
		id: 181,
        name: "Queen of Tan",
        cards: ["Candlestick Maker", "Advisor", "Herald", "Butcher", "Journeyman", "Coin of the Realm", "Ratcatcher", "Guide", "Duplicate", "Royal Carriage"],
		landscapes: ["Pathfinding", "Save"],
        expansions: "cornguildsadventures"
	},
	{
		id: 182,
        name: "Zookeepers",
        cards: ["Menagerie", "Horse Traders", "Tournament", "Jester", "Fairgrounds", "Overlord", "Settlers / Bustling Village", "Sacrifice", "Villa", "Wild Hunt"],
		extras: ["Prizes"],
		landscapes: ["Annex", "Colonnade"],
        expansions: "cornguildsempires"
	},
	{
		id: 183,
        name: "Cash Flow",
        cards: ["Doctor", "Herald", "Baker", "Butcher", "Soothsayer", "Engineer", "City Quarter", "Royal Blacksmith", "Castles", "Gladiator / Fortune"],
		landscapes: ["Baths", "Mountain Pass"],
        expansions: "cornguildsempires"
	},
	{
		id: 184,
        name: "The Endless Fair",
        cards: ["Fortune Teller", "Farming Village", "Baker", "Merchant Guild", "Fairgrounds", "Monastery", "Pixie", "Devil's Workshop", "Exorcist", "Shepherd"],
		extras: ["Goat", "Pasture", "Boons", "Will-O'-Wisp", "Imp", "Ghost"],
        expansions: "cornguildsnocturne"
	},
	{
		id: 185,
        name: "Happy Chaos",
        cards: ["Doctor", "Masterpiece", "Herald", "Harvest", "Jester", "Faithful Hound", "Changeling", "Fool", "Blessed Village", "Sacred Grove"],
		extras: ["Lucky Coin", "Boons", "Will-O'-Wisp"],
        expansions: "cornguildsnocturne"
	},
	{
		id: 186,
        name: "Combo Corner",
        cards: ["Stonemason", "Herald", "Horse Traders", "Horn of Plenty", "Jester", "Ducat", "Experiment", "Hideout", "Sculptor", "Seer"],
		landscapes: ["Canal"],
        expansions: "cornguildsrenaissance"
	},
	{
		id: 187,
        name: "Filling the Coffers",
        cards: ["Menagerie", "Plaza", "Baker", "Butcher", "Merchant Guild", "Priest", "Recruiter", "Spices", "Swashbuckler", "Treasurer"],
		extras: ["Key", "Treasure Chest"],
		landscapes: ["City Gate", "Star Chart"],
        expansions: "cornguildsrenaissance"
	},
	{
		id: 188,
        name: "Living in Exile",
        cards: ["Hamlet", "Taxman", "Jester", "Journeyman", "Fairgrounds", "Scrap", "Stockpile", "Hostelry", "Gatekeeper", "Livery"],
		extras: ["Horse"],
		landscapes: ["Enclave", "Way of the Mule"],
        expansions: "cornguildsmenagerie"
	},
	{
		id: 189,
        name: "Thrill of the Hunt",
        cards: ["Menagerie", "Horse Traders", "Tournament", "Butcher", "Hunting Party", "Black Cat", "Camel Train", "Bounty Hunter", "Village Green", "Mastermind"],
		extras: ["Prizes"],
		landscapes: ["Pursue", "Way of the Rat"],
        expansions: "cornguildsmenagerie"
	},
	{
		id: 190,
        name: "Huge Collections",
        cards: ["Menagerie", "Advisor", "Plaza", "Hunting Party", "Fairgrounds", "Clashes", "Forts", "Sentinel", "Contract", "Galleria"],
		landscapes: ["Woodworker's Guild"],
        expansions: "cornguildsallies"
	},
	{
		id: 191,
        name: "Forest Scouts",
        cards: ["Candlestick Maker", "Farming Village", "Baker", "Jester", "Journeyman", "Augurs", "Sentinel", "Innkeeper", "Royal Galley", "Emissary"],
		landscapes: ["Forest Dwellers"],
        expansions: "cornguildsallies"
	},
	{
		id: 192,
		name: "Gentle Intro",
        cards: ["Ratcatcher", "Amulet", "Dungeon", "Duplicate", "Port", "Ranger", "Distant Lands", "Giant", "Treasure Trove", "Hireling"],
		landscapes: ["Scouting Party"],
        expansions: "adventures"
	},
	{
		id: 193,
		name: "Expert Intro",
        cards: ["Coin of the Realm", "Peasant", "Raze", "Caravan Guard", "Magpie", "Transmogrify", "Haunted Woods", "Lost City", "Swamp Hag", "Wine Merchant"],
		extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
		landscapes: ["Mission", "Plan"],
        expansions: "adventures"
	},
	{
		id: 194,
		name: "Area Control",
        cards: ["Coin of the Realm", "Page", "Relic", "Treasure Trove", "Wine Merchant", "Catapult / Rocks", "Farmers' Market", "Capital", "Charm", "Crown"],
		extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
		landscapes: ["Banquet", "Keep"],
        expansions: "adventuresempires"
	},
	{
		id: 195,
		name: "No Money No Problems",
        cards: ["Peasant", "Dungeon", "Duplicate", "Transmogrify", "Hireling", "Royal Blacksmith", "Encampment / Plunder", "Temple", "Villa", "Archive"],
		extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
		landscapes: ["Bandit Fort", "Mission"],
        expansions: "adventuresempires"
	},
	{
		id: 196,
		name: "Monster Mash",
        cards: ["Ratcatcher", "Messenger", "Bridge Troll", "Giant", "Storyteller", "Guardian", "Pixie", "Conclave", "Vampire", "Werewolf"],
		extras: ["Goat", "Boons", "Hexes", "Bat", "Will-O'-Wisp"],
		landscapes: ["Quest"],
        expansions: "adventuresnocturne"
	},
	{
		id: 197,
		name: "Lost in the Woods",
        cards: ["Caravan Guard", "Guide", "Ranger", "Haunted Woods", "Hireling", "Druid", "Tracker", "Fool", "Blessed Village", "Sacred Grove"],
		extras: ["Lucky Coin", "Pouch", "Boons", "Will-O'-Wisp"],
		landscapes: ["Pilgrimage"],
		druid: ["The Sky's Gift", "The Field's Gift", "The Sea's Gift"],
        expansions: "adventuresnocturne"
	},
	{
		id: 198,
		name: "Progress",
        cards: ["Raze", "Ranger", "Transmogrify", "Swamp Hag", "Hireling", "Experiment", "Improve", "Silk Merchant", "Recruiter", "Seer"],
		landscapes: ["Piazza", "Training"],
        expansions: "adventuresrenaissance"
	},
	{
		id: 199,
		name: "Once Upon a Time",
        cards: ["Duplicate", "Distant Lands", "Haunted Woods", "Royal Carriage", "Storyteller", "Lackeys", "Acting Troupe", "Priest", "Sculptor", "Spices"],
		landscapes: ["Ferry", "Innovation"],
        expansions: "adventuresrenaissance"
	},
	{
		id: 200,
		name: "Horse Feathers",
        cards: ["Ratcatcher", "Magpie", "Ranger", "Relic", "Royal Carriage", "Sleigh", "Stockpile", "Displace", "Falconer", "Destrier"],
		extras: ["Horse"],
		landscapes: ["Pilgrimage", "Way of the Ox"],
        expansions: "adventuresmenagerie"
	},
	{
		id: 201,
		name: "Sooner or Later",
        cards: ["Raze", "Amulet", "Caravan Guard", "Dungeon", "Giant", "Groom", "Village Green", "Barge", "Gatekeeper", "Mastermind"],
		extras: ["Horse"],
		landscapes: ["Mission", "Toil"],
        expansions: "adventuresmenagerie"
	},
	{
		id: 202,
		name: "Adventures in Pickpocketing",
        cards: ["Duplicate", "Miser", "Artificer", "Lost City", "Treasure Trove", "Bauble", "Augurs", "Innkeeper", "Modify", "Specialist"],
		landscapes: ["Mission", "Gang of Pickpockets"],
        expansions: "adventuresallies"
	},
	{
		id: 203,
		name: "Future Perfect",
        cards: ["Caravan Guard", "Gear", "Port", "Transmogrify", "Haunted Woods", "Sycophant", "Forts", "Sentinel", "Skirmisher", "Marquis"],
		landscapes: ["Seaway", "Market Towns"],
        expansions: "adventuresallies"
	},
	{
		id: 204,
		name: "Basic Intro",
        cards: ["Engineer", "City Quarter", "Patrician / Emporium", "Castles", "Chariot Race", "Farmers' Market", "Sacrifice", "Villa", "Forum", "Legionary"],
		landscapes: ["Tower", "Wedding"],
        expansions: "empires"
	},
	{
		id: 205,
		name: "Advanced Intro",
        cards: ["Royal Blacksmith", "Settlers / Bustling Village", "Catapult / Rocks", "Enchantress", "Gladiator / Fortune", "Temple", "Archive", "Capital", "Crown", "Groundskeeper"],
		landscapes: ["Arena", "Triumphal Arch"],
        expansions: "empires"
	},
	{
		id: 206,
		name: "Luftschloss",
        cards: ["Engineer", "Castles", "Catapult / Rocks", "Temple", "Archive", "Changeling", "Fool", "Cemetery", "Exorcist", "Shepherd"],
		extras: ["Haunted Mirror", "Lucky Coin", "Pasture", "Boons", "Will-O'-Wisp", "Imp", "Ghost"],
		landscapes: ["Tomb"],
        expansions: "empiresnocturne"
	},
	{
		id: 207,
		name: "Pooka Pranks",
        cards: ["Settlers / Bustling Village", "Chariot Race", "Sacrifice", "Forum", "Groundskeeper", "Faithful Hound", "Pixie", "Ghost Town", "Skulk", "Pooka"],
		extras: ["Cursed Gold", "Goat", "Boons", "Hexes", "Will-O'-Wisp"],
		landscapes: ["Banquet"],
        expansions: "empiresnocturne"
	},
	{
		id: 208,
		name: "Exploring the City",
        cards: ["City Quarter", "Farmers' Market", "Sacrifice", "Groundskeeper", "Wild Hunt", "Cargo Ship", "Experiment", "Mountain Village", "Priest", "Sculptor"],
		landscapes: ["Battlefield", "Exploration"],
        expansions: "empiresrenaissance"
	},
	{
		id: 209,
		name: "Navigating the Sewers",
        cards: ["Patrician / Emporium", "Chariot Race", "Enchantress", "Gladiator / Fortune", "Villa", "Acting Troupe", "Improve", "Flag Bearer", "Old Witch", "Scepter"],
		extras: ["Flag"],
		landscapes: ["Ritual", "Sewers"],
        expansions: "empiresrenaissance"
	},
	{
		id: 210,
		name: "No Money Down",
        cards: ["Engineer", "City Quarter", "Catapult / Rocks", "Villa", "Crown", "Sleigh", "Stockpile", "Cavalry", "Wayfarer", "Animal Fair"],
		extras: ["Horse"],
		landscapes: ["Advance", "Way of the Pig"],
        expansions: "empiresmenagerie"
	},
	{
		id: 211,
		name: "Detours and Shortcuts",
        cards: ["Overlord", "Settlers / Bustling Village", "Enchantress", "Sacrifice", "Wild Hunt", "Camel Train", "Snowy Village", "Fisherman", "Gatekeeper", "Sanctuary"],
		landscapes: ["Transport", "Triumphal Arch"],
        expansions: "empiresmenagerie"
	},
	{
		id: 212,
		name: "Island Empire",
        cards: ["City Quarter", "Settlers / Bustling Village", "Enchantress", "Farmers' Market", "Wild Hunt", "Sycophant", "Forts", "Contract", "Specialist", "Swap"],
		landscapes: ["Orchard", "Island Folk"],
        expansions: "empiresallies"
	},
	{
		id: 213,
		name: "Castle Wars",
        cards: ["Patrician / Emporium", "Castles", "Catapult / Rocks", "Charm", "Crown", "Clashes", "Importer", "Carpenter", "Capital City", "Hunter"],
		landscapes: ["Triumph", "Trappers' Lodge"],
        expansions: "empiresallies"
	},
	{
		id: 214,
		name: "Dusk",
        cards: ["Faithful Hound", "Monastery", "Fool", "Night Watchman", "Blessed Village", "Shepherd", "Cobbler", "Den of Sin", "Tormentor", "Tragic Hero"],
		extras: ["Lucky Coin", "Pasture", "Boons", "Hexes", "Will-O'-Wisp"],
        expansions: "nocturne"
	},
	{
		id: 215,
		name: "Midnight",
        cards: ["Druid", "Leprechaun", "Secret Cave", "Conclave", "Devil's Workshop", "Exorcist", "Crypt", "Cursed Village", "Pooka", "Raider"],
		extras: ["Cursed Gold", "Magic Lamp", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost", "Wish"],
		druid: ["The Swamp's Gift", "The Flame's Gift", "The Wind's Gift"],
        expansions: "nocturne"
	},
	{
		id: 216,
		name: "Becoming a Monster",
        cards: ["Monastery", "Devil's Workshop", "Shepherd", "Skulk", "Tragic Hero", "Experiment", "Mountain Village", "Research", "Old Witch", "Spices"],
		extras: ["Pasture", "Hexes", "Imp"],
		landscapes: ["Exploration"],
        expansions: "nocturnerenaissance"
	},
	{
		id: 217,
		name: "True Believers",
        cards: ["Faithful Hound", "Secret Cave", "Blessed Village", "Crypt", "Sacred Grove", "Border Guard", "Cargo Ship", "Scholar", "Sculptor", "Villain"],
		extras: ["Horn", "Lantern", "Magic Lamp", "Boons", "Will-O'-Wisp", "Wish"],
		landscapes: ["Cathedral", "Piazza"],
        expansions: "nocturnerenaissance"
	},
	{
		id: 218,
		name: "Seize the Night",
        cards: ["Monastery", "Devil's Workshop", "Exorcist", "Skulk", "Cobbler", "Supplies", "Sheepdog", "Hostelry", "Barge", "Falconer"],
		extras: ["Horse", "Hexes", "Will-O'-Wisp", "Imp", "Ghost"],
		landscapes: ["Seize the Day", "Way of the Sheep"],
        expansions: "nocturnemenagerie"
	},
	{
		id: 219,
		name: "Animal Crackers",
        cards: ["Faithful Hound", "Pixie", "Shepherd", "Pooka", "Sacred Grove", "Black Cat", "Goatherd", "Groom", "Hunting Lodge", "Kiln"],
		extras: ["Horse", "Cursed Gold", "Goat", "Pasture", "Boons", "Will-O'-Wisp"],
		landscapes: ["Enhance", "Way of the Chameleon"],
        expansions: "nocturnemenagerie"
	},
	{
		id: 220,
		name: "Love and Death",
        cards: ["Faithful Hound", "Conclave", "Necromancer", "Den of Sin", "Idol", "Bauble", "Sycophant", "Augurs", "Carpenter", "Hunter"],
		extras: ["Boons", "Will-O'-Wisp", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
		landscapes: ["Peaceful Cult"],
        expansions: "nocturneallies"
	},
	{
		id: 221,
		name: "Play it Again Sam",
        cards: ["Tracker", "Leprechaun", "Blessed Village", "Skulk", "Tormentor", "Wizards", "Courier", "Royal Galley", "Hunter", "Swap"],
		extras: ["Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Wish"],
		landscapes: ["Woodworker's Guild"],
        expansions: "nocturneallies"
	},
	{
		id: 222,
		name: "Overture",
        cards: ["Lackeys", "Acting Troupe", "Experiment", "Improve", "Flag Bearer", "Hideout", "Inventor", "Old Witch", "Seer", "Treasurer"],
		extras: ["Flag", "Key"],
		landscapes: ["Fair"],
        expansions: "renaissance"
	},
	{
		id: 223,
		name: "Prelude",
        cards: ["Border Guard", "Ducat", "Cargo Ship", "Mountain Village", "Priest", "Silk Merchant", "Recruiter", "Sculptor", "Swashbuckler", "Villain"],
		extras: ["Horn", "Lantern", "Treasure Chest"],
		landscapes: ["Citadel", "Star Chart"],
        expansions: "renaissance"
	},
	{
		id: 224,
		name: "Biding Time",
        cards: ["Ducat", "Priest", "Recruiter", "Scepter", "Swashbuckler", "Goatherd", "Cavalry", "Coven", "Displace", "Fisherman"],
		extras: ["Horse", "Treasure Chest"],
		landscapes: ["Sinister Plot", "Way of the Turtle"],
        expansions: "renaissancemenagerie"
	},
	{
		id: 225,
		name: "Villager Madness",
        cards: ["Border Guard", "Flag Bearer", "Patron", "Silk Merchant", "Spices", "Cardinal", "Groom", "Kiln", "Livery", "Wayfarer"],
		extras: ["Horse", "Flag", "Horn", "Lantern"],
		landscapes: ["Academy", "Demand"],
        expansions: "renaissancemenagerie"
	},
	{
		id: 226,
		name: "Production Line",
        cards: ["Experiment", "Mountain Village", "Patron", "Spices", "Treasurer", "Townsfolk", "Importer", "Wizards", "Courier", "Modify"],
		extras: ["Key"],
		landscapes: ["Exploration", "Band of Nomads"],
        expansions: "renaissanceallies"
	},
	{
		id: 227,
		name: "Age of Scribes",
        cards: ["Acting Troupe", "Inventor", "Research", "Old Witch", "Villain", "Odysseys", "Underling", "Capital City", "Galleria", "Specialist"],
		landscapes: ["Sinister Plot", "Fellowship of Scribes"],
        expansions: "renaissanceallies"
	},
	{
		id: 228,
		name: "Intro to Horses",
        cards: ["Supplies", "Goatherd", "Scrap", "Sheepdog", "Hostelry", "Barge", "Livery", "Paddock", "Destrier", "Animal Fair"],
		extras: ["Horse"],
		landscapes: ["Enhance", "Way of the Sheep"],
        expansions: "menagerie"
	},
	{
		id: 229,
		name: "Intro to Exile",
        cards: ["Black Cat", "Camel Train", "Snowy Village", "Stockpile", "Bounty Hunter", "Cardinal", "Falconer", "Mastermind", "Sanctuary", "Wayfarer"],
		landscapes: ["March", "Way of the Worm"],
        expansions: "menagerie"
	},
	{
		id: 230,
		name: "Wise Owls",
        cards: ["Black Cat", "Bounty Hunter", "Hostelry", "Hunting Lodge", "Animal Fair", "Merchant Camp", "Wizards", "Town", "Barbarian", "Marquis"],
		extras: ["Horse"],
		landscapes: ["Way of the Owl", "Architects' Guild"],
        expansions: "menagerieallies"
	},
	{
		id: 231,
		name: "Mountain Kings",
        cards: ["Supplies", "Scrap", "Snowy Village", "Barge", "Coven", "Forts", "Broker", "Courier", "Guildmaster", "Skirmisher"],
		extras: ["Horse"],
		landscapes: ["Toil", "Mountain Folk"],
        expansions: "menagerieallies"
	},
	{
		id: 232,
		name: "Decisions Decisions",
        cards: ["Bauble", "Townsfolk", "Merchant Camp", "Courier", "Innkeeper", "Royal Galley", "Highwayman", "Hunter", "Modify", "Marquis"],
		landscapes: ["City-State"],
        expansions: "allies"
	},
	{
		id: 233,
		name: "Foresight",
        cards: ["Augurs", "Sentinel", "Underling", "Carpenter", "Town", "Barbarian", "Emissary", "Galleria", "Skirmisher", "Specialist"],
		landscapes: ["Order of Astrologers"],
        expansions: "allies"
	},
	{
		id: 234,
		name: "Flotsam",
        cards: ["Jewelled Egg", "Secluded Shrine", "Abundance", "Crucible", "Fortune Hunter", "Landing Party", "First Mate", "Mining Road", "Silver Mine", "Wealthy Village"],
		landscapes: ["Hasty"],
		traits: ["Hasty", "First Mate"],
        expansions: "plunder"
	},
	{
		id: 235,
		name: "Jetsam",
        cards: ["Grotto", "Search", "Siren", "Stowaway", "Gondola", "Crew", "Cutthroat", "Longship", "Pickaxe", "Quartermaster"],
		landscapes: ["Pious", "Prepare"],
		traits: ["Pious", "Grotto"],
        expansions: "plunder"
	},
	{
		id: 236,
		name: "Basic Looting",
        cards: ["Cellar", "Moat", "Vassal", "Market", "Mine", "Harbor Village", "Maroon", "Frigate", "Pilgrim", "Sack of Loot"],
		landscapes: ["Tireless"],
		traits: ["Tireless", "Harbor Village"],
        expansions: "baseplunder"
	},
	{
		id: 237,
		name: "Voodoo",
        cards: ["Bureaucrat", "Moneylender", "Remodel", "Festival", "Artisan", "Shaman", "Flagship", "Gondola", "Buried Treasure", "First Mate"],
		landscapes: ["Cursed", "Maelstrom"],
		traits: ["Cursed", "Festival"],
        expansions: "baseplunder"
	},
	{
		id: 238,
		name: "Breaking Eggs",
        cards: ["Mining Village", "Courtier", "Replace", "Harem", "Nobles", "Jewelled Egg", "Mapmaker", "Maroon", "Buried Treasure",  "Quartermaster"],
		landscapes: ["Reckless"],
		traits: ["Reckless", "Maroon"],
        expansions: "intrigueplunder"
	},
	{
		id: 239,
		name: "Landlubbers",
        cards: ["Pawn", "Wishing Well", "Conspirator", "Mill", "Secret Passage", "Fortune Hunter", "Cutthroat", "Pendant", "Pilgrim", "Wealthy Village"],
		landscapes: ["Avoid", "Friendly"],
		traits: ["Friendly", "Conspirator"],
        expansions: "intrigueplunder"
	},
	{
		id: 240,
		name: "Wine-dark Seas",
        cards: ["Astrolabe", "Fishing Village", "Caravan", "Sailor", "Sea Witch", "Cage", "Cabin Boy", "Rope", "Enlarge", "Frigate"],
		landscapes: ["Cheap"],
		traits: ["Cheap", "Frigate"],
        expansions: "seasideplunder"
	},
	{
		id: 241,
		name: "Treasure Island",
        cards: ["Lookout", "Sea Chart", "Island", "Treasure Map", "Corsair", "Stowaway", "Abundance", "Buried Treasure", "Crew", "Longship"],
		landscapes: ["Inherited", "Launch"],
		traits: ["Inherited", "Treasure Map"],
        expansions: "seasideplunder"
	},
	{
		id: 242,
		name: "Special Delivery",
        cards: ["Transmute", "Apothecary", "Alchemist", "Golem", "Jewelled Egg", "Flagship", "Swamp Shacks", "Tools", "Mining Road", "Trickster"],
		landscapes: ["Cursed", "Deliver"],
		traits: ["Cursed", "Golem"],
        expansions: "alchemyplunder"
	},
	{
		id: 243,
		name: "Pretty Trinkets",
        cards: ["Investment", "Tiara", "Crystal Ball", "War Chest", "Bank", "Jewelled Egg", "Rope", "Figurine", "Silver Mine", "King's Cache"],
		colony: true,
		landscapes: ["Fated"],
		traits: ["Fated", "Rope"],
        expansions: "prosperityplunder"
	},
	{
		id: 244,
		name: "Buying Happiness",
        cards: ["Anvil", "Bishop", "Clerk", "Worker's Village", "Magnate", "Cage", "Stowaway", "Swamp Shacks", "Mining Road", "Pendant"],
		colony: true,
		landscapes: ["Fawning", "Looting"],
		traits: ["Fawning", "Magnate"],
        expansions: "prosperityplunder"
	},
	{
		id: 245,
		name: "Desert Dreams",
        cards: ["Oasis", "Nomads", "Weaver", "Haggler", "Souk", "Grotto", "Harbor Village", "Mapmaker", "Enlarge", "Pendant"],
		landscapes: ["Reckless"],
		traits: ["Reckless", "Nomads"],
        expansions: "hinterlandsplunder"
	},
	{
		id: 246,
		name: "Viking Schemes",
        cards: ["Fool's Gold", "Scheme", "Berserker", "Cauldron", "Stables", "Cabin Boy", "Crucible", "Crew", "Frigate", "Wealthy Village"],
		landscapes: ["Rich", "Scrounge"],
		traits: ["Rich", "Berserker"],
        expansions: "hinterlandsplunder"
	},
	{
		id: 247,
		name: "Dad's Rats",
        cards: ["Poor House", "Squire", "Vagrant", "Death Cart", "Rats", "Search", "Shaman", "Maroon", "Rope", "First Mate"],
		shelters: true,
		extras: ["Ruins"],
		landscapes: ["Inherited"],
		traits: ["Inherited", "Rats"],
        expansions: "darkagesplunder"
	},
	{
		id: 248,
		name: "Ravagers",
        cards: ["Forager", "Storeroom", "Ironmonger", "Counterfeit", "Pillage", "Grotto", "Cutthroat", "Enlarge", "Trickster", "King's Cache"],
		shelters: true,
		extras: ["Spoils"],
		landscapes: ["Invasion", "Tireless"],
		traits: ["Tireless", "Forager"],
        expansions: "darkagesplunder"
	},
	{
		id: 249,
		name: "Of Heralds and Hunters",
        cards: ["Stonemason", "Doctor", "Herald", "Soothsayer", "Fairgrounds", "Cabin Boy", "Flagship", "Fortune Hunter", "Pendant", "Pickaxe"],
		landscapes: ["Inspiring"],
		traits: ["Inspiring", "Fortune Hunter"],
        expansions: "cornguildsplunder"
	},
	{
		id: 250,
		name: "Through the Swamp",
        cards: ["Hamlet", "Menagerie", "Baker", "Horn of Plenty", "Merchant Guild", "Cage", "Taskmaster", "Swamp Shacks", "Tools", "Pilgrim"],
		landscapes: ["Journey", "Patient"],
		traits: ["Patient", "Pilgrim"],
        expansions: "cornguildsplunder"
	},
	{
		id: 251,
		name: "Set Sail",
        cards: ["Ratcatcher", "Port", "Artificer", "Distant Lands", "Treasure Trove", "Search", "Fortune Hunter", "Mapmaker", "Figurine", "First Mate"],
		landscapes: ["Ferry", "Patient"],
		traits: ["Patient", "Artificer"],
        expansions: "adventuresplunder"
	},
	{
		id: 252,
		name: "Rush Job",
        cards: ["Coin of the Realm", "Gear", "Haunted Woods", "Wine Merchant", "Hireling", "Secluded Shrine", "Stowaway", "Swamp Shacks", "Tools", "Quartermaster"],
		landscapes: ["Rush", "Shy"],
		traits: ["Shy", "Wine Merchant"],
        expansions: "adventuresplunder"
	},
	{
		id: 253,
		name: "City Builders",
        cards: ["City Quarter", "Patrician / Emporium", "Farmers' Market", "Groundskeeper", "Wild Hunt", "Taskmaster", "Abundance", "Crucible", "Tools", "Frigate"],
		landscapes: ["Museum", "Nearby"],
		traits: ["Nearby", "Patrician / Emporium"],
        expansions: "empiresplunder"
	},
	{
		id: 254,
		name: "Plenty",
        cards: ["Enchantress", "Gladiator / Fortune", "Sacrifice", "Charm", "Crown", "Landing Party", "Rope", "Figurine", "Mining Road", "Wealthy Village"],
		landscapes: ["Friendly", "Prosper"],
		traits: ["Friendly", "Figurine"],
        expansions: "empiresplunder"
	},
	{
		id: 255,
		name: "Night of the Loot",
        cards: ["Faithful Hound", "Blessed Village", "Crypt", "Tragic Hero", "Werewolf", "Taskmaster", "Cabin Boy", "Figurine", "Pendant", "Sack of Loot"],
		extras: ["Boons", "Will-O'-Wisp"],
		landscapes: ["Pious"],
		traits: ["Pious", "Taskmaster"],
        expansions: "nocturneplunder"
	},
	{
		id: 256,
		name: "Skeleton Isle",
        cards: ["Tracker", "Ghost Town", "Devil's Workshop", "Skulk", "Idol", "Secluded Shrine", "Cutthroat", "Longship", "Pilgrim", "King’s Cache"],
		extras: ["Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Imp"],
		landscapes: ["Foray", "Hasty"],
		traits: ["Hasty", "Idol"],
        expansions: "nocturneplunder"
	},
	{
		id: 257,
		name: "Circle of Life",
        cards: ["Acting Troupe", "Experiment", "Patron", "Scholar", "Swashbuckler", "Jewelled Egg", "Search", "Shaman", "Frigate", "Pickaxe"],
		extras: ["Treasure Chest"],
		landscapes: ["Cathedral", "Inspiring"],
		traits: ["Inspiring", "Scholar"],
        expansions: "renaissanceplunder"
	},
	{
		id: 258,
		name: "Mirror Masters",
        cards: ["Border Guard", "Cargo Ship", "Flag Bearer", "Seer", "Spices", "Taskmaster", "Crucible", "Gondola", "Quartermaster", "Trickster"],
		extras: ["Horn", "Lantern", "Flag"],
		landscapes: ["Fated", "Mirror"],
		traits: ["Fated", "Spices"],
        expansions: "renaissanceplunder"
	},
	{
		id: 259,
		name: "Going Home",
        cards: ["Supplies", "Snowy Village", "Barge", "Gatekeeper", "Kiln", "Secluded Shrine", "Gondola", "Landing Party", "Mapmaker",  "Silver Mine"],
		extras: ["Horse"],
		landscapes: ["Cheap", "Way of the Squirrel"],
		traits: ["Cheap", "Gatekeeper"],
        expansions: "menagerieplunder"
	},
	{
		id: 260,
		name: "Going Big",
        cards: ["Camel Train", "Sheepdog", "Mastermind", "Sanctuary", "Animal Fair", "Grotto", "Siren", "Harbor Village", "Enlarge", "Sack of Loot"],
		landscapes: ["Nearby", "Peril"],
		traits: ["Nearby", "Animal Fair"],
        expansions: "menagerieplunder"
	},
	{
		id: 261,
		name: "Shipmates",
        cards: ["Sycophant", "Forts", "Broker", "Innkeeper", "Modify", "Shaman", "Flagship", "Harbor Village", "Crew", "Sack of Loot"],
		landscapes: ["Cave Dwellers", "Fawning"],
		traits: ["Fawning", "Sycophant"],
        expansions: "alliesplunder"
	},
	{
		id: 262,
		name: "Buried and Sunk",
        cards: ["Merchant Camp", "Odysseys", "Courier", "Highwayman", "Skirmisher", "Abundance", "Landing Party", "Maroon", "Buried Treasure", "King's Cache"],
		landscapes: ["Bury", "Shy"],
		traits: ["Shy", "Merchant Camp"],
        expansions: "alliesplunder"
	}
]
