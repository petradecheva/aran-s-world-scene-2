import { Player } from "../actors/Player";

class Main extends Phaser.Scene {
    private map: Phaser.Tilemaps.Tilemap;
    private player: Player;
    constructor(){
        super("main");
    }

    create(){
        this.map = this.make.tilemap({key: "level2", tileWidth: 32, tileHeight: 32});
        let background1: Phaser.GameObjects.Image = this.add.image(0,0,"background1");
        background1.setOrigin(0);
        background1.setScale(3,2.5);
        this.add.existing(background1);
        let background3: Phaser.GameObjects.Image = this.add.image(background1.displayWidth,0,"background1");
        background3.setOrigin(0);
        background3.setScale(3,2.5);
        this.add.existing(background3);
        let background2: Phaser.GameObjects.Image = this.add.image(0,0,"background2");
        background2.setOrigin(0);
        background2.setScale(3.3,2.5);
        let background4: Phaser.GameObjects.Image = this.add.image(background2.displayWidth,0,"background2");
        background4.setOrigin(0);
        background4.setScale(3.3,2.5);
        this.add.existing(background4);

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

        this.player = new Player(this, 50, 200).setDepth(4);
        this.add.existing(this.player);

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels-970, this.map.heightInPixels-300);
        this.physics.world.setBounds(0, 0, this.map.widthInPixels-970, this.map.heightInPixels-300);
        this.cameras.main.startFollow(this.player);

        this.physics.add.collider(this.player, MainLayer);
        MainLayer.setCollisionByProperty({ collides: true });

        
    }

    update(){
        this.player.update();
    }

}

export { Main }