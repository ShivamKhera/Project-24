groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);