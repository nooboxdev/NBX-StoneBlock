// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('nbx:andesite_alloy_plate').displayName('Andesite Alloy Plate')
	//event.create('nbx:wooden_gear').displayName('Wooden gear')
	//event.create('nbx:wooden_plate').displayName('Wooden Plate')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('nbx:dust').material('sand').hardness(1.0).displayName('Dust')
	//event.create('nbx:wood_machine_frame').material('wood').hardness(1.0).displayName('Wood Machine Frame')
})




onEvent('fluid.registry', event => {
// These first examples are 1.16.5 and 1.18.2 syntax
				
/* Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
	event.create('ore_water')
	.thinTexture(0xA87883)
	.bucketColor(0xA87883)
	.displayName('Ore Water')
	.noBucket() // both these methods are 1.18.2+ only
	.noBlock() 
*/
})





onForgeEvent('net.minecraftforge.event.world.BlockEvent$PortalSpawnEvent', event => {
  event.setCanceled(true)
})

onEvent('item.modification', event => {
	event.modify('minecraft:egg', item => {item.maxStackSize = 64})
	event.modify('minecraft:ender_pearl', item => {item.maxStackSize = 64})
	event.modify('minecraft:snowball', item => {item.maxStackSize = 64})
})
