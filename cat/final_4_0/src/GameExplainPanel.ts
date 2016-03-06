/**
*游戏的开始主面板
* 
* @author_lixintong
*
*/
class GameExplainPanel extends egret.Sprite {
    public constructor() {
        super();
        this.draw();
        }
        
    private draw() {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
                
        var img: egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes('explain');
//        img.texture = RES.getRes('explain');
        //        img.fillMode = egret.BitmapFillMode.REPEAT;
        img.width = w;
        img.height = h;
        this.addChild(img);
        
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0x53FF53);
        btn.graphics.drawRect(0,0,150,50);
        btn.graphics.endFill();
        btn.x = (w - 145) / 2;
        btn.y = (h - 50)/ 2 + 290;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_END,this.startGame,this);
        btn.alpha = 0;
        this.addChild(btn);
    }
    private startGame() {
        this.parent.removeChild(this);
        this.dispatchEventWith("startGame");
    }
}
            