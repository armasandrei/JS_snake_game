let snake = new Snake(2,5)
let map = new Map()
let apple1 = new Apple(2,6)
let apple2 = new Apple(8,6)

map.children.push( apple1 )
map.children.push( apple2 )
map.children.push( snake )

map.render( container )