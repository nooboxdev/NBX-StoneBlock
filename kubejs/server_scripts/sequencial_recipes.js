onEvent('recipes', event => {

    event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('torcherino:torcherino').withChance(100.0), // this is the item that will appear in JEI as the result
	],'minecraft:redstone_torch',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('nbx:incomplete_torcherio',['nbx:incomplete_torcherio','minecraft:clock']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('nbx:incomplete_torcherio',['nbx:incomplete_torcherio','minecraft:sugar']),
		event.recipes.createDeploying('nbx:incomplete_torcherio',['nbx:incomplete_torcherio','minecraft:redstone_block'])
	]).transitionalItem('nbx:incomplete_torcherio').loops(5)
	
})