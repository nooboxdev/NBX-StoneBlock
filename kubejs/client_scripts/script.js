// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	 event.hide('mob_grinding_utils:nutritious_chicken_feed')
	 event.hide('mob_grinding_utils:gm_chicken_feed_cursed')
})