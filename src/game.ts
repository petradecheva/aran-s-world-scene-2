import 'phaser';
import { Preload } from './scene/Preload';
import { Main } from './scene/Main';
// import { Menu } from './scene/Menu';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: 'black',
                width: 1024,
                height: 512,
                physics: {
                    default: 'arcade',
                    arcade: {
                        debug: true
                    }
                },
                scene: [Preload, Main]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
