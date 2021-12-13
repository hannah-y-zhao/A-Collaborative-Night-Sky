class Galaxy {
 constructor(x,y,size,glow){
    this.x=x
    this.y=y
    this.size=size
    this.glow=glow
    this.v=random(1,3)



 }
 show(){
    noStroke()
    fill(255,this.glow)
    circle(this.x,this.y,this.size)
    

 }
 shine(){
   if (this.glow>240){
      this.v*=-1
   }else if (this.glow<150){
      this.x=random(width)
      this.y=random(height)
      this.v*=-1
 }
 this.glow+=this.v
 }
}