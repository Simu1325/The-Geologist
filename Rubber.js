class Rubber{
	constructor(x,y,r)
	{var options = {
		'density':0.3,
		'friction': 5,
		'restitution':1
	  }
	// assign options to the rubber ball
	   // this.body = Bodies.circle(x, y, r, options);
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		var angle = this.body.angle;
		var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("blue");
			//rotate(angle);
			//draw the ellipse here to display the rubber ball
			//ellipseMode(RADIUS)
		    ellipse(0,0,this.r,this.r)
			pop();
	}
};