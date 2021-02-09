class Block{
    constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0.9,	
			}
			this.Visibility = 255;
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 6) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(1.4);
            stroke("black");
            rect(0, 0, this.w, this.h);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.Visibility = this.Visibility - 1;
            tint(255, this.Visibility);
            pop();
        }
			
	}
}
