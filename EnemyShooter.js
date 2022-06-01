class EnemyShooter extends Boss {
    constructor(posX, posY, state, img) {
        super(posX, posY, state, img);
    }

    behavior(playerPosX, playerPosY){
        if(this.moveDuration < 0){
            super.moveAxisSetting();
            this.moveDuration = 30;
        }
        super.move();

        if(this.attackDelay < 0){
            super.tempSetting(playerPosX - this.x, playerPosY - this.y);
            this.attackDelay = 220;
        }
        else if(this.attackDelay > 200){
            //+= this.tempX/20;
             //+= this.tempY/20;
        }
        else if(this.attackDelay > 190){
             //-= this.tempX/10;
             //-= this.tempY/10;
        }

        this.moveDuration--;
        this.attackDelay--;
        super.isEnemyDead();
    }

    display() {
        push();
        translate(this.x, this.y, 100);
        this.lifePerColor();
        torus(30);
        pop();
    }
}