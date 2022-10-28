// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({output: 'minecraft:crafting_table'})
	event.remove({output: 'tconstruct:crafting_station'})
	event.remove({output: 'thermal:machine_chiller'})
	event.remove({output: 'mob_grinding_utils:nutritious_chicken_feed'})
	event.remove({output: 'mob_grinding_utils:gm_chicken_feed_cursed'})
	event.remove({id: 'create:milling/gravel'})
	event.remove({id: 'create:milling/sandstone'})
	event.remove({id: 'create:splashing/gravel'})
	event.remove({id: 'create:splashing/sand'})
	event.remove({id: 'create:splashing/soul_sand'})
	

	
	
	
	event.shapeless('tconstruct:crafting_station', ['4x #minecraft:planks'])
	event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table'])
	event.shapeless('minecraft:crafting_table', ['tconstruct:crafting_station'])
	

	event.recipes.createMilling('minecraft:sand', 'minecraft:gravel')
  
  //crushing sand to dust
	event.recipes.createMilling('kubejs:dust', 'minecraft:sand')
  event.recipes.thermal.pulverizer('kubejs:dust', 'minecraft:sand')
  event.recipes.mekanismCrushing('kubejs:dust', 'minecraft:sand')


  //recipe for clay
  event.recipes.createFilling('minecraft:clay', ['kubejs:dust',  Fluid.of('minecraft:water', 1000)])


  event.recipes.createFilling('minecraft:dirt', ['minecraft:gravel',  Fluid.of('minecraft:water', 1000)])

  //recipe for ores
  event.recipes.createSplashing ([
    Item.of('minecraft:raw_iron').withChance(0.25),
    Item.of('minecraft:emerald').withChance(0.15),
    Item.of('minecraft:diamond').withChance(0.1),
    Item.of('minecraft:raw_copper').withChance(0.1),
    Item.of('minecraft:raw_gold').withChance(0.15),
    Item.of('minecraft:coal').withChance(0.1),
    Item.of('miniutilities:ender_dust').withChance(0.1),
    Item.of('mekanism:raw_lead').withChance(0.15),
    Item.of('create:raw_zinc').withChance(0.15),
    Item.of('mekanism:raw_osmium').withChance(0.15),
    Item.of('mekanism:raw_uranium').withChance(0.15),
    Item.of('thermal:raw_nickel').withChance(0.15),
    Item.of('thermal:raw_silver').withChance(0.15),
    Item.of('thermal:raw_tin').withChance(0.15),
    Item.of('tconstruct:raw_cobalt').withChance(0.05),
  ], 'minecraft:gravel')

  
  event.recipes.createSplashing ([
    Item.of('minecraft:prismarine_shard').withChance(0.15),
    Item.of('minecraft:prismarine_crystals').withChance(0.15),
    Item.of('mekanism:salt').withChance(0.15),
    Item.of('mekanism:fluorite_gem').withChance(0.15),
    Item.of('minecraft:cocoa_beans').withChance(0.05),
    Item.of('thermal:niter').withChance(0.15),
    Item.of('thermal:apatite').withChance(0.15),
    Item.of('thermal:cinnabar').withChance(0.15),
    Item.of('thermal:sulfur').withChance(0.15),
    Item.of('minecraft:lapis_lazuli').withChance(0.15)
  ], 'minecraft:sand')

  event.recipes.createSplashing ([
    Item.of('minecraft:redstone').withChance(0.15),
    Item.of('minecraft:glowstone_dust').withChance(0.15),
    Item.of('minecraft:blaze_powder').withChance(0.15),
    Item.of('minecraft:gunpowder').withChance(0.15),
    Item.of('minecraft:bone_meal').withChance(0.15),
    Item.of('ae2:fluix_dust').withChance(0.15),
    Item.of('ae2:sky_dust').withChance(0.15),
    Item.of('ae2:certus_quartz_dust').withChance(0.15)
  ], 'kubejs:dust')

  event.recipes.createSplashing ([
    Item.of('minecraft:ghast_tear').withChance(0.15),
    Item.of('minecraft:quartz').withChance(0.15),
    Item.of('minecraft:nether_wart').withChance(0.15),
    Item.of('minecraft:netherite_scrap').withChance(0.15),
    Item.of('forbidden_arcanus:arcane_crystal').withChance(0.15),
    Item.of('rftoolsbase:dimensionalshard').withChance(0.15)
  ], 'minecraft:soul_sand')

  event.recipes.createSplashing ([
    Item.of('minecraft:wheat_seeds').withChance(0.15),
    Item.of('minecraft:beetroot_seeds').withChance(0.15),
    Item.of('minecraft:potato').withChance(0.15),
    Item.of('minecraft:carrot').withChance(0.15),
    Item.of('minecraft:melon_seeds').withChance(0.15),
    Item.of('minecraft:pumpkin_seeds').withChance(0.15),
    Item.of('minecraft:red_mushroom').withChance(0.15),
    Item.of('minecraft:brown_mushroom').withChance(0.15)
  ], 'minecraft:dirt')


	
	event.recipes.thermal.press('minecraft:bone', '3x minecraft:bone_meal')
	
	event.shaped('watercondenser:watercondenser', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: '#minecraft:logs',
    A: '#minecraft:leaves'
  })


  event.shaped('mob_grinding_utils:golden_egg', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'minecraft:gold_block',
    A: 'minecraft:egg'
  })

  event.shaped('mob_grinding_utils:rotten_egg', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'minecraft:rotten_flesh',
    A: 'minecraft:egg'
  })



event.shaped('thermal:machine_chiller', [
    'AGA',
    'ODO',
    'EFE'
  ], {
    A: 'minecraft:air',
    G: 'minecraft:glass',
    O: 'minecraft:obsidian',
    D: 'thermal:machine_frame',
    E: 'thermal:invar_gear',
    F: 'thermal:rf_coil'
})


//tinkers

event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"item": "minecraft:blaze_powder"
	},
	"result": {
		"fluid": "tconstruct:blazing_blood",
		"amount": 100
	},
	"temperature": 250,
	"time": 40
})
	

	
	
})

onEvent('block.loot_tables', event => {
  // all stone blocks have a 10% chance to drop ores
  event.modifyBlock('minecraft:stone', table => {
    table.addPool(pool => {
    /*  pool.addItem('minecraft:coal_ore').randomChance(0.1)
      pool.addItem('minecraft:iron_ore').randomChance(0.1)
      pool.addItem('minecraft:copper_ore').randomChance(0.1)
      pool.addItem('minecraft:gold_ore').randomChance(0.1)
      pool.addItem('minecraft:redstone_ore').randomChance(0.1)
      pool.addItem('minecraft:emerald_ore').randomChance(0.1)
      pool.addItem('minecraft:lapis_ore').randomChance(0.1)
      pool.addItem('minecraft:diamond_ore').randomChance(0.1)
      pool.addItem('ae2:quartz_ore').randomChance(0.1)
      pool.addItem('create:zinc_ore').randomChance(0.1)
      pool.addItem('forbidden_arcanus:xpetrified_ore').randomChance(0.1)
      pool.addItem('forbidden_arcanus:arcane_crystal_ore').randomChance(0.1)
      pool.addItem('forbidden_arcanus:runic_stone').randomChance(0.1)
      pool.addItem('thermal:nickel_ore').randomChance(0.1)
      pool.addItem('thermal:silver_ore').randomChance(0.1)
      pool.addItem('thermal:sulfur_ore').randomChance(0.1)
      pool.addItem('thermal:niter_ore').randomChance(0.1)
      pool.addItem('thermal:cinnabar_ore').randomChance(0.1)
      pool.addItem('thermal:apatite_ore').randomChance(0.1)
      pool.addItem('rftoolsbase:dimensionalshard_overworld').randomChance(0.1)
      pool.addItem('mekanism:lead_ore').randomChance(0.1)
      pool.addItem('mekanism:fluorite_ore').randomChance(0.1)
      pool.addItem('mekanism:uranium_ore').randomChance(0.1)
      pool.addItem('mekanism:osmium_ore').randomChance(0.1)
      pool.addItem('mekanism:tin_ore').randomChance(0.1)
      pool.addItem('miniutilities:ender_ore').randomChance(0.1)
	  */
      pool.addItem('minecraft:andesite').randomChance(0.1)
      pool.addItem('minecraft:diorite').randomChance(0.1)
      pool.addItem('minecraft:granite').randomChance(0.1)
      pool.addItem('minecraft:calcite').randomChance(0.1)
      pool.addItem('minecraft:tuff').randomChance(0.1)
      pool.addItem('minecraft:deepslate').randomChance(0.1)
      
    })
  })
})

onEvent("block.right_click", (event) => {
  const { block, hand, item, world, player } = event;
  if (hand.name() != "MAIN_HAND") return;

  if (item == "create:wrench" && player.isCrouching()) {
    if (block.equals("minecraft:end_portal_frame")) {
      const hasEnderEye = block.properties.eye;
      block.set("minecraft:air");
      player.give("minecraft:end_portal_frame");
      if (hasEnderEye == "true") {
        player.give("minecraft:ender_eye");
      }
    }
  }

});