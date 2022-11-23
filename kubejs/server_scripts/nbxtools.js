onEvent("lootjs", (event) => {
    //crook for sand
	event
        .addBlockLootModifier("minecraft:sand")
        .matchEquip(EquipmentSlot.MAINHAND, Item.of("nbx:crook").ignoreNBT())
		//.randomChance(0.3)
		.removeLoot("minecraft:sand")
		.addWeightedLoot([
			Item.of("minecraft:kelp").withChance(0.5),
			Item.of("minecraft:cactus").withChance(0.5),
			Item.of("minecraft:sugar_cane").withChance(0.5)
		]);
		
	event
        .addBlockLootModifier("minecraft:dirt")
        .matchEquip(EquipmentSlot.MAINHAND, Item.of("nbx:crook").ignoreNBT())
		//.randomChance(0.3)
		.removeLoot("minecraft:dirt")
		.addWeightedLoot([
			Item.of("minecraft:wheat_seeds").withChance(0.5),
			Item.of("minecraft:pumpkin_seeds").withChance(0.5),
			Item.of("minecraft:melon_seeds").withChance(0.5),
			Item.of("minecraft:beetroot_seeds").withChance(0.5),
			Item.of("minecraft:carrot").withChance(0.5),
			Item.of('minecraft:cocoa_beans').withChance(0.5),
			Item.of("minecraft:potato").withChance(0.5)
		]);

		event
        .addBlockLootModifier("minecraft:soul_sand")
        .matchEquip(EquipmentSlot.MAINHAND, Item.of("nbx:crook").ignoreNBT())
		//.randomChance(0.3)
		.removeLoot("minecraft:soul_sand")
		.addWeightedLoot([
			Item.of("minecraft:brown_mushroom").withChance(0.5),
			Item.of("minecraft:red_mushroom").withChance(0.5),
			Item.of("minecraft:crimson_fungus").withChance(0.5),
			Item.of("minecraft:warped_fungus").withChance(0.5)
		]);


	//crook for leaves
	event
        .addBlockLootModifier("#minecraft:leaves")
        .matchEquip(EquipmentSlot.MAINHAND, Item.of("nbx:crook").ignoreNBT())
		.addWeightedLoot(5, [
			Item.of("minecraft:apple").withChance(0.8)
		]);

});
