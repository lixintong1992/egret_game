var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
*游戏的开始主面板
*
* @author_lixintong
*
*/
var GameStartPanel = (function (_super) {
    __extends(GameStartPanel, _super);
    function GameStartPanel() {
        var _this = _super.call(this) || this;
        _this.draw();
        return _this;
    }
    GameStartPanel.prototype.draw = function () {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        var img = new egret.Bitmap();
        img.texture = RES.getRes('title');
        //        img.texture = RES.getRes('title');
        //        img.fillMode = egret.BitmapFillMode.REPEAT;
        img.width = w;
        img.height = h;
        this.addChild(img);
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0x53FF53);
        btn.graphics.drawRect(0, 0, 150, 50);
        btn.graphics.endFill();
        btn.x = (w - 145) / 2;
        btn.y = (h - 50) / 2 + 50;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_END, this.startGame, this);
        btn.alpha = 0;
        this.addChild(btn);
        var btn_explain = new egret.Sprite();
        btn_explain.graphics.beginFill(0x53FF53);
        btn_explain.graphics.drawRect(0, 0, 150, 50);
        btn_explain.graphics.endFill();
        btn_explain.x = (w - 145) / 2;
        btn_explain.y = (h - 50) / 2 + 130;
        btn_explain.touchEnabled = true;
        btn_explain.addEventListener(egret.TouchEvent.TOUCH_END, this.explainGame, this);
        btn_explain.alpha = 0;
        this.addChild(btn_explain);
    };
    GameStartPanel.prototype.startGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("startGame");
    };
    GameStartPanel.prototype.explainGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("explainGame");
    };
    return GameStartPanel;
}(egret.Sprite));
__reflect(GameStartPanel.prototype, "GameStartPanel");
//# sourceMappingURL=GameStartPanel.js.map