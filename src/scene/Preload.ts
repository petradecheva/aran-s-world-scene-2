class Preload extends Phaser.Scene {
    private loadingText: Phaser.GameObjects.Text;
    constructor() {
        super("preload");
    }
    create() {
        this.load.on("complete", this.onComplete, this);
        this.load.image("tiles1", "./assets/main_lev_build.png");
        this.load.image("tiles2", "./assets/other_lev_build.png");
        this.load.image("background1", "./assets/bg1.png");
        this.load.image("background2", "./assets/bg2.png");
        this.load.tilemapTiledJSON("level2", "./assets/rockyworld2.json");
        this.load.atlas("player", "./assets/player.png", "./assets/player.json");
        this.load.start();
    }
    private onComplete(): void {
        console.log("load complete");
        this.scene.start("main");
    }
}
export { Preload }