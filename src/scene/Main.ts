class Main extends Phaser.Scene {
    private map: Phaser.Tilemaps.Tilemap;
    constructor(){
        super("main");
    }

    create(){
        this.map = this.make.tilemap({key: "level2", tileWidth: 32, tileHeight: 32});
        let background1: Phaser.GameObjects.Image = this.add.image(0,0,"background1");
        background1.setOrigin(0);
        background1.setScale(2.5);
        this.add.existing(background1);
        let background2: Phaser.GameObjects.Image = this.add.image(0,0,"background2");
        background2.setOrigin(0);
        background2.setScale(2.5);
        this.add.existing(background2);
        let worldTileset: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("rockyworld_tileset","tiles1");
        let treesTileset: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("rockytrees_tileset", "tiles2");

        let TreeLayer1: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("Tree Layer", worldTileset).setDepth(0);
        let TileLayer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("Tile Layer 1",worldTileset).setDepth(1);
        let TreeLayer2: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("Tree Layer 2", [treesTileset, worldTileset]).setDepth(2);
        let MainLayer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("Main Layer", worldTileset).setDepth(3);

        TreeLayer1.setScale(0.7);
        TileLayer.setScale(0.7);
        TreeLayer2.setScale(0.7);
        MainLayer.setScale(0.7);

        
    }

}

export { Main }