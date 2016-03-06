/**
 *游戏的结束主面板
 * 
 * @author_liyiding 
 *
 */
class GameOverPanel extends egret.Sprite {
    public constructor() {
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED,this.shouText,this);
    //    this.addEventListener(egret.Event.ADDED,this.gameoverShow,this);

    }

    private txt: egret.TextField;


    private draw() {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;


        var img: egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes('end');
//        img.texture = RES.getRes('end');
        img.width = w;
        img.height = h;
        this.addChild(img);  
        


        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.height = 200;
        this.txt.y = h / 2 - 75;
        this.txt.x = w / 2 + 58; 
        this.txt.size = 40;
        this.txt.textColor = 0x000000;
//        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);

        var btn = new egret.Sprite();
        btn.graphics.beginFill(0x53FF53);
        btn.graphics.drawRect(0,0,150,50);
        btn.graphics.endFill();
        btn.x = (w - 160) / 2;
        btn.y = (h - 50)/ 2 + 150;
        btn.alpha = 0;
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_END,this.startGame,this);
        
        var btn_back = new egret.Sprite();
        btn_back.graphics.beginFill(0x53FF53);
        btn_back.graphics.drawRect(0,0,100,50);
        btn_back.graphics.endFill();
        btn_back.x = (w - 120) / 2;
        btn_back.y = (h - 50) / 2 + 210;
        btn_back.alpha = 0;
        this.addChild(btn_back);
        btn_back.touchEnabled = true;
        btn_back.addEventListener(egret.TouchEvent.TOUCH_END,this.backGame,this);
    }
    
    
    private shouText() {
        this.txt.text = ' '+(Data.score - 1);
            }
        
    private startGame()
        {
        this.parent.removeChild(this);
        this.dispatchEventWith("restartGame");
        }
    private backGame(){
        this.parent.removeChild(this);
        this.dispatchEventWith("backGame");       
    }
        
        
}
