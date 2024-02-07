import coinsrc from "../images/Coin.png";

function Sprite(name,imgsrc, frames, size, x, y){
    this.name = name;
    this.imgsrc = imgsrc;
    this.frames = frames;
    this.size = size;
    this.currentFrame = 0;
    this.x = x;
    this.y = y;
    this.draw = function(ctx){
        let img = new Image();
        img.src = this.imgsrc;
        const sz = this.size;
        img.onload = function() {
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        //where s = sprite, d = draw
        ctx.drawImage(img, this.currentFrame*sz, 0, sz, sz, this.x, this.y, sz,sz);
        }
        console.log(ctx);
        console.log(spriteList);
    }
    this.nextFrame = function(){
        this.currentFrame+=1;
        if (this.currentFrame >= frames){
            this.currentFrame=0;
        }
}
}

const initSprites = () =>{
   const coin = new Sprite("coin_1", coinsrc, 12, 64, 50,50);
    spriteList.push(coin);
}

const spriteList = [];

export {spriteList, initSprites}