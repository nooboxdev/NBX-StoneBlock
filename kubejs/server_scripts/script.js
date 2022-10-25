// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({output: 'minecraft:crafting_table'})
	event.remove({output: 'tconstruct:crafting_station'})
	event.remove({id: 'create:milling/gravel'})
	event.remove({id: 'create:milling/sandstone'})
	
	
	
	
	event.shapeless('tconstruct:crafting_station', ['4x #minecraft:planks'])
	event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table'])
	event.shapeless('minecraft:crafting_table', ['tconstruct:crafting_station'])
	
	event.recipes.createMilling('minecraft:sand', 'minecraft:gravel')
	
	
	
	event.shaped('watercondenser:watercondenser', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: '#minecraft:logs',
    A: '#minecraft:leaves'
  })
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

onEvent('block.loot_tables', event => {
  // all dirt blocks have a 50% chance to drop an enchanted diamond sword named "test"
  event.modifyBlock('minecraft:stone', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:coal_ore').randomChance(0.1)
      pool.addItem('minecraft:iron_ore').randomChance(0.1)
      pool.addItem('minecraft:copper_ore').randomChance(0.1)
      pool.addItem('minecraft:gold_ore').randomChance(0.1)
      pool.addItem('minecraft:redstone_ore').randomChance(0.1)
      pool.addItem('minecraft:emerald_ore').randomChance(0.1)
      pool.addItem('minecraft:lapis_ore').randomChance(0.1)
      pool.addItem('minecraft:diamond_ore').randomChance(0.1)
      pool.addItem('minecraft:nether_quartz_ore').randomChance(0.1)
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
	  
      pool.addItem('minecraft:andesite').randomChance(0.1)
      pool.addItem('minecraft:diorite').randomChance(0.1)
      pool.addItem('minecraft:granite').randomChance(0.1)
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