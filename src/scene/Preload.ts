class Preload extends Phaser.Scene{
    constructor(){
        super("preload");
    }

    create(){
        this.load.image("background1", "./assets/bg1.png");
        this.load.image("background2", "./assets/bg2.png");
        this.load.image("background3", "./assets/bg3.png");
        this.load.tilemapTiledJSON("map", "./assets/rockyworld2.json");
        this.load.image("world","./assets/main_lev_build.png");
        this.load.image("trees","./assets/other_lev_build.png");
        this.onComplete();
        this.load.start();
    }

    private onComplete(): void{
        console.log(" complete :)");
        this.scene.start("main");
    }
}

export { Preload }