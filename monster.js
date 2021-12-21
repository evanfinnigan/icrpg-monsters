
function random(list) {
	return list[Math.floor(Math.random() * list.length)]
}

function generateName() {
  var adjective = ["","","","","Horrifying", "Angry", "Insane", "Great", "Hideous", "Huge", "Tiny", "Sneaky", "Ferocious", "Scary", "Strange", "Fiery", "Undying", "Unholy", "Red", "Green", "Yellow", "Blue", "Dark", "Grey", "Toxic", "Poisonous", "Venomous", "Mysterious", "Flying", "Infected", "Diseased", "Stinging", "Killer"]
  var noun = ["Beast", "Abomination", "Giant", "Ooze", "Slime", "Spider", "Skeleton", "Zombie", "Demon", "Devil", "Ghost", "Stranger", "Monster", "Horror", "Creature", "Swarm"]
  var suffix = ["","","","", "From Below", "Of the Wilds", "From the Frozen Depths", "Of the Mountains", "Of the Lake", "Of the Haunted Lands", "Of Destruction", "From Above", "Of Doom", "Of the Sea", "Of the Desert", "Of the Sky", "From Outer Space", "From Hell", "Of the Wasteland", "Of the Swamp"]

  return `The ${random(adjective)} ${random(noun)} ${random(suffix)}`.toUpperCase()
}

function generateAttackAbility() {
  var adjective = ["", "Battle", "Great", "Heavy", "Sharpened", "Enchanted", "Hard-Hitting", "Swift"]
  var noun = ["Claws", "Axe", "Sword", "Arrows", "Hammer", "Jaws", "Fists"]
  var damage_type = ["Weapon"]
  var effect = ["hits all NEAR targets", "hits very hard", "covered with poison", "painful", "extremely painful", "knocks over its target", "destroys objects", "deals additional ULTIMATE damage"]

  ability_name = `${random(adjective)} ${random(noun)}`.toUpperCase()

  return `<p><b>${ability_name}</b>: ${random(damage_type)} Damage, ${random(effect)}</p>`
}

function generateBuffAbility() {
  var adjective = ["", "Empowering", "Confident", "Powerful", "Super", "Magical", "Incomprehensible", "Groovy"]
  var noun = ["Battle Cry", "Stance", "Enhancement", "Spell", "Song", "Noise", "Grunt", "Position", "Dance", "Vibes"]
  var effect = ["Heal 1 heart", "Heal BASIC effort", "Gains resistance to the next attack against it", "Add ULTIMATE damage to the next attack", "Attacks against this creature are HARD until it's next turn", "The next attack this creature makes is EASY"]

  ability_name = `${random(adjective)} ${random(noun)}`.toUpperCase()

  return `<p><b>${ability_name}</b>: ${random(effect)}</p>`
}

function generateMagicAbility() {
  var adjective = ["", "Mystic", "Dark", "Terrible", "Haunting", "Mysterious"]
  var noun = ["Spell", "Enchantment", "Words", "Gesture", "Ritual"]
  var suffix = ["", "From Below", "Of Doom", "From Hell", "Of the Wasteland", "Of Darkness", ""]
  var effect = ["Inflicts MAGIC damage to all NEAR targets", "Inflicts MAGIC damage to a FAR target", "Poisons the target", "knocks over its target", "destroys objects", "summons a minion", "teleport FAR", "target becomes confused and moves in a random direction, then attacks the nearest creature if able", "sets everything NEAR on fire", "the creature turns invisible for 1d4 rounds", "reads the mind of all CLOSE creatures"]

  ability_name = `${random(adjective)} ${random(noun)} ${random(suffix)}`.toUpperCase()

  return `<p><b>${ability_name}</b>: ${random(effect)}</p>`
}

function generateOtherAbility() {
  var adjective = ["", "Battle", "Great", "Heavy", "Sharpened", "Enchanted", "Hard-Hitting", "Swift"]
  var noun = ["Claws", "Axe", "Sword", "Arrows", "Hammer", "Jaws", "Fists"]
  var effect = ["hits all NEAR targets", "hits very hard", "covered with poison", "painful", "extremely painful", "knocks over its target", "destroys objects", "deals additional ULTIMATE damage"]

  ability_name = `${random(adjective)} ${random(noun)}`.toUpperCase()

  return `<p><b>${ability_name}</b>: ${random(effect)}</p>`
}

function generateAbilities() {
  var abilities = ""
  var numAbilities = Math.ceil(Math.random() * 2 + 1)
  for (var i = 0; i < numAbilities; i++) {
    type = Math.floor(Math.random()*4)
    if (type == 0) {
      abilities += generateAttackAbility()
    } else if (type == 1){
      abilities += generateBuffAbility()
    } else if (type == 2){
      abilities += generateMagicAbility()
    } else if (type == 3){
      abilities += generateOtherAbility()
    }
  }
  return abilities;
}

function generateStats() {
  var stats = ["STR", "DEX", "CON", "WIS", "INT", "CHA", "WEAPON", "MAGIC"]
  var extra = ["2 Actions / Turn. ", "3 Actions / Turn. ", "REGAINS 1 HP / Turn. "]
  var strength_weakness = ["COLD", "FIRE", "MAGIC", "WEAPON", "BASIC", "ELECTRIC", "WATER", "POISON", "CORROSION", "STUN", "DEATH"]

  stat_out = ""
  if (Math.random() < 0.5) {
    var bonus = Math.round(1+Math.random()*4)
    stat_out = `+${bonus} TO ALL ROLLS. `
  } else {
    var numstats = Math.floor(Math.random()*3+1)
    for (var i = 0; i < numstats; i++) {
      var bonus = Math.round(1+Math.random()*4)
      var index = Math.floor(Math.random()*stats.length)
      var stat = stats.splice(index, 1)
      if (bonus >= 0) stat_out += " +"
      stat_out += `${bonus} ${stat}`
      if (i != numstats-1) {
        stat_out += ", "
      } else {
        stat_out += ". "
      }
    }
  }

  if (Math.random() < 0.25) {
    stat_out += random(extra)
  }

  if (Math.random() < 0.25) {
    stat_out += random(strength_weakness)
    var rng = Math.random()
    if (rng < 0.25) {
      stat_out += " Vulnerability"
    } else if (rng > 0.95) {
      stat_out += " Immunity"
    } else {
      stat_out += " Resistance"
    }
  }

  return stat_out
}

function generateLore() {
  var lore = [
    "Nobody knows where it comes from, but most suspect that it's somewhere unpleasant",
    "This creature has been a bane to heroes since the dawn of time",
    "A wild and ferocious creature",
    "This creature is filled with anger and will tear you apart without hesitation",
    "Many are surprised to learn that this is an intelligent creature and employs excellent battle tactics",
    "This creature is feared in local folklore. If one is sighted it is typically taken as a bad omen",
    "This creature is said to have evolved from ancient sea scum",
    "This creature guards a dark secret",
    "A popular bard song tells of the heroic slaying of this creature. And yet, here it lives. Perhaps it is immortal, or could this be offspring of that from the tale?",
    "Few have witnessed something so hideous and terrifying as this.",
    "A forgotten myth once told of this creatures only weakness.",
    "This creature hates being cold",
    "This creature loves to lurk in the darkness and ambush its victims",
    "This creature can swim surprisingly well",
    "This creature is born of hate, and is unable to know love. It's kind of sad if you think about it.",
    "First sighted on a far away contenant, these creatures are an invasive species and have grown far too common in the nearby lands."
  ]
  return random(lore)
}

function generate() {
  // var x = document.getElementById("monsters").value
  for (var i = 0; i < 4; i++) {
    createMonster()
  }
}

function createMonster() {
  var monster_name = generateName()
  var abilities = generateAbilities()
  var monster_lore = generateLore()
  var stats = generateStats()
  var hearts = "❤".repeat(Math.floor(1 + Math.random() * 4))
  var monster = `
  <div class="monster">
    <h1>${monster_name}</h1>
    <div class="hearts">${hearts}</div>
    <p class="stats">${stats}</p>
    <hr>
    ${abilities}
    <br>
    <hr>
    <p class="lore"><em>${monster_lore}</em></p>
  </div>
  `
  document.getElementById("generated").innerHTML = monster + document.getElementById("generated").innerHTML
}

function clearAll() {
  document.getElementById("generated").innerHTML = ""
}
