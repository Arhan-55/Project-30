class slingshot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.020, 
			length:0.5
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.slingshot = Constraint.create(options)
		World.add(world,this.slingshot)
	}

	attach(body){
		this.slingshot.bodyA=body;
	}

	fly()
	{
		this.slingshot.bodyA=null;
	}

	display()
	{
		if(this.slingshot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(4);
			stroke("#45A4A2")		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}