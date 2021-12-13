class Star {
    constructor(col){
        this.pos=createVector(mouseX,mouseY)
        this.r=random(15,25)
        this.s //shine
        
        this.col=col
        

    }
show(){
  
    strokeWeight(this.r)

    stroke(this.col)
   
    point(this.pos)
}
returnPos(){
    return this.pos

}
glow(alph){
    this.col.setAlpha(alph)

}


}