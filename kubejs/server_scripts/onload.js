onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give(Item.of('minecraft:stone_pickaxe', "{Damage:0,Enchantments:[{id:\"minecraft:efficiency\",lvl:2}],Unbreakable:1b,display:{Name:'{\"text\":\"NBX Infinity Pickaxe\"}'}}", 1))
    event.player.give('tempad:tempad', 1)
    event.player.give('petrock:petrockbox', 1)
    event.player.give('8x petrock:stoneium', 1)
  }
})