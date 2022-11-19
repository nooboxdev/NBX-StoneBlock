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
	event.remove({output: 'create:propeller'})
	
	
	event.remove({output: 'create:andesite_alloy'})
	event.remove({id: 'create:milling/gravel'})
	event.remove({id: 'create:milling/sandstone'})
	event.remove({id: 'create:splashing/gravel'})
	event.remove({id: 'create:splashing/sand'})
	event.remove({id: 'create:splashing/soul_sand'})
	event.remove({id: 'tconstruct:common/basalt_blast_furnace'})
	

	
	
	
	event.shapeless('tconstruct:crafting_station', ['4x #minecraft:planks'])
	event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table'])
	event.shapeless('minecraft:crafting_table', ['tconstruct:crafting_station'])
	event.blasting('create:andesite_alloy', 'minecraft:andesite')
	

	event.recipes.createMilling('minecraft:sand', 'minecraft:gravel')
  
  //crushing sand to dust
	event.recipes.createMilling('nbx:dust', 'minecraft:sand')
	event.recipes.thermal.pulverizer('nbx:dust', 'minecraft:sand')
	event.recipes.mekanismCrushing('nbx:dust', 'minecraft:sand')


  //recipe for clay
	event.recipes.createFilling('minecraft:clay', ['nbx:dust',  Fluid.of('minecraft:water', 1000)])
	event.recipes.createFilling('minecraft:dirt', ['minecraft:gravel',  Fluid.of('minecraft:water', 1000)])
	
  //recipe for andesite alloy plate
	event.recipes.thermal.press('nbx:andesite_alloy_plate', 'create:andesite_alloy')
	event.recipes.createPressing('nbx:andesite_alloy_plate', 'create:andesite_alloy')
	event.shaped('nbx:andesite_alloy_plate', [
    'SS'
	], {
    S: 'create:andesite_alloy'
	})
	
	
	

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
  ], 'nbx:dust')

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
    Item.of('minecraft:bamboo').withChance(0.15),
    Item.of('minecraft:sugar_cane').withChance(0.15),
    Item.of('minecraft:cactus').withChance(0.15)
  ], 'minecraft:dirt')

  event.recipes.createSplashing ([
    Item.of('minecraft:red_mushroom').withChance(0.15),
    Item.of('minecraft:brown_mushroom').withChance(0.15),
    Item.of('minecraft:nether_wart').withChance(0.15)
  ], 'minecraft:soul_soil')



	
	event.recipes.thermal.press('minecraft:bone', '3x minecraft:bone_meal')
	
	event.shaped('watercondenser:watercondenser', [
    'BBB',
    'SAS',
    'SSS'
  ], {
    S: '#minecraft:logs',
    A: Item.of('woodenbucket:wooden_bucket', '{Damage:0}'),
    B: '#minecraft:leaves'
  })


  
	event.shaped('create:cogwheel', [
	'SSS',
	'SAS',
	'SSS'
	], {
	S: '#minecraft:wooden_buttons',
	A: 'minecraft:polished_andesite'
	})
	
	event.shaped('create:propeller', [
	' A ',
	'ASA',
	' A '
	], {
	S: 'create:andesite_alloy',
	A: 'nbx:andesite_alloy_plate'
	})

  

  
	event.shaped('minecraft:blast_furnace', [
    'SSS',
    'SAS',
    'BBB'
  ], {
    S: '#forge:storage_blocks/charcoal',
    A: 'minecraft:furnace',
    B: 'minecraft:smooth_stone'
  })

//recipe for chickens

event.shaped(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:flint_chicken"}}'), [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'minecraft:flint',
  A: 'minecraft:egg'
})

event.shaped(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:quartz_chicken"}}'), [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'minecraft:quartz',
  A: 'minecraft:egg'
})

event.shaped(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:sand_chicken"}}'), [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'minecraft:sand',
  A: 'minecraft:egg'
})

event.shaped(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:log_chicken"}}'), [
  'SSS',
  'SAS',
  'SSS'
], {
  S: '#minecraft:logs',
  A: 'minecraft:egg'
})



event.shaped('tconstruct:budding_earth_slime_crystal', [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'tconstruct:earth_slime_crystal',
  A: 'buddingcrystals:crystal_catalyst'
})

event.shaped('tconstruct:budding_sky_slime_crystal', [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'tconstruct:sky_slime_crystal',
  A: 'buddingcrystals:crystal_catalyst'
})

event.shaped('tconstruct:budding_ichor_slime_crystal', [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'tconstruct:ichor_slime_crystal',
  A: 'buddingcrystals:crystal_catalyst'
})

event.shaped('tconstruct:budding_ender_slime_crystal', [
  'SSS',
  'SAS',
  'SSS'
], {
  S: 'tconstruct:ender_slime_crystal',
  A: 'buddingcrystals:crystal_catalyst'
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

})


onEvent('block.right_click', event => {
    if (event.block.id !='minecraft:cauldron') return
    if (event.item.count == 0) return
  	event.cancel()
    let item = event.item.copy()
    //if did not use .copy() the item would still be referencing the one in the hand, so setting the count to 1 would set the count in the hand to 1
    item.count = 1
  	event.item.count--
  	
    let itemEntity = event.block.createEntity('item')
    itemEntity.y+=0.8 // on the top of the encahnting table, not in it
    itemEntity.x+=0.5
    itemEntity.z+=0.5
    itemEntity.item = item
    itemEntity.item.count = 1
    itemEntity.pickupDelay = 100
    itemEntity.noGravity = true
    itemEntity.motionY = 0.08
    itemEntity.spawn()
  	
  	function callback (i) {
    	//changes the scope of itemEntity (otherwise if used 2 times in a row within 5 seconds, problems would occur)
    	event.server.scheduleInTicks(100, callback => { // this code runs 5 seconds later
    		i.noGravity = false
    	})
    }
  	callback(itemEntity)
})


onEvent('tags.items', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	event.add('forge:plates/andesite', 'nbx:andesite_alloy_plate')

})
