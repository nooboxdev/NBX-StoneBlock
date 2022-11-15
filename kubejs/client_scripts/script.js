// priority: 0

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('create:incomplete_precision_mechanism'),

})

onEvent('jei.information', event => {
	event.add('chickens:smart_chicken', ['Right click with a book', 'in vanilla chicken'])
  })


