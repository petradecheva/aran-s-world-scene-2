class Menu extends Phaser.Scene{
    private startText: Phaser.GameObjects.Text;
    private titleText: Phaser.GameObjects.Text;

    constructor(){
        super("menu");
    }

    create(){
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.width;

        this.titleText = this.add.text(width/2, height/2 - 300, "Press The Key!", {font:"70px Verdana", fill:"0xEC87E4"});
        this.titleText.setOrigin(0.5);
        this.add.existing(this.titleText);

        this.startText = this.add.text(width/2 - 10, height/2 - 100, "START", {font:"30px Verdana", fill: "0xD3FBD8"});
        this.startText.setOrigin(0.5);
        this.startText.setInteractive();
        this.startText.on('pointerdown', () => {this.scene.start("main")});
        this.add.existing(this.startText);

    }
}
 
export { Menu }