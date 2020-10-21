class Main extends Phaser.Scene {
    private background1: Phaser.GameObjects.Image;
    private background2: Phaser.GameObjects.Image;
    private background3: Phaser.GameObjects.Image;

    private map: Phaser.Tilemaps.Tilemap;
    private worldTileset: Phaser.Tilemaps.Tileset;
    private treesTileset: Phaser.Tilemaps.Tileset;

    constructor(){
        super("main");
    }

    create(){
        // this.background1 = this.add.image(500,100,"background1");
        // this.background2 = this.add.image(100,100,"background2");
        // this.background3 = this.add.image(100,100,"background3");
        // this.add.existing(this.background1);
        // this.add.existing(this.background2);
        // this.add.existing(this.background3);
        // console.log("baCKGROUND1");

        this.map = this.make.tilemap({ key: "map" });
        this.worldTileset = this.map.addTilesetImage("worldtiles","world");
        this.treesTileset = this.map.addTilesetImage("treestiles","trees");
        let layer = this.map.createStaticLayer(4,"worldtiles",0,0);
        this.add.existing(layer);
        
    }

}

export { Main }