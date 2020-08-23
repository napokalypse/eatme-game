gdjs.ThanksCode = {};
gdjs.ThanksCode.GDplayerObjects1= [];
gdjs.ThanksCode.GDplayerObjects2= [];
gdjs.ThanksCode.GDamandaObjects1= [];
gdjs.ThanksCode.GDamandaObjects2= [];
gdjs.ThanksCode.GDjoss2Objects1= [];
gdjs.ThanksCode.GDjoss2Objects2= [];
gdjs.ThanksCode.GDben10Objects1= [];
gdjs.ThanksCode.GDben10Objects2= [];
gdjs.ThanksCode.GDtrymagainObjects1= [];
gdjs.ThanksCode.GDtrymagainObjects2= [];
gdjs.ThanksCode.GDtrymObjects1= [];
gdjs.ThanksCode.GDtrymObjects2= [];
gdjs.ThanksCode.GDdnailObjects1= [];
gdjs.ThanksCode.GDdnailObjects2= [];
gdjs.ThanksCode.GDtordObjects1= [];
gdjs.ThanksCode.GDtordObjects2= [];
gdjs.ThanksCode.GDsnorreObjects1= [];
gdjs.ThanksCode.GDsnorreObjects2= [];
gdjs.ThanksCode.GDdaveObjects1= [];
gdjs.ThanksCode.GDdaveObjects2= [];
gdjs.ThanksCode.GDben11Objects1= [];
gdjs.ThanksCode.GDben11Objects2= [];
gdjs.ThanksCode.GDcookie3Objects1= [];
gdjs.ThanksCode.GDcookie3Objects2= [];
gdjs.ThanksCode.GDcookie2Objects1= [];
gdjs.ThanksCode.GDcookie2Objects2= [];
gdjs.ThanksCode.GDcookie4Objects1= [];
gdjs.ThanksCode.GDcookie4Objects2= [];
gdjs.ThanksCode.GDcookieObjects1= [];
gdjs.ThanksCode.GDcookieObjects2= [];
gdjs.ThanksCode.GDthanksPicObjects1= [];
gdjs.ThanksCode.GDthanksPicObjects2= [];
gdjs.ThanksCode.GDthanksTextObjects1= [];
gdjs.ThanksCode.GDthanksTextObjects2= [];
gdjs.ThanksCode.GDthanksScoreObjects1= [];
gdjs.ThanksCode.GDthanksScoreObjects2= [];
gdjs.ThanksCode.GDtryAgainObjects1= [];
gdjs.ThanksCode.GDtryAgainObjects2= [];
gdjs.ThanksCode.GDrespEndObjects1= [];
gdjs.ThanksCode.GDrespEndObjects2= [];

gdjs.ThanksCode.conditionTrue_0 = {val:false};
gdjs.ThanksCode.condition0IsTrue_0 = {val:false};
gdjs.ThanksCode.condition1IsTrue_0 = {val:false};


gdjs.ThanksCode.eventsList0 = function(runtimeScene) {

{


gdjs.ThanksCode.condition0IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ThanksCode.condition0IsTrue_0.val) {
gdjs.ThanksCode.GDthanksScoreObjects1.createFrom(runtimeScene.getObjects("thanksScore"));
{for(var i = 0, len = gdjs.ThanksCode.GDthanksScoreObjects1.length ;i < len;++i) {
    gdjs.ThanksCode.GDthanksScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.ThanksCode.condition0IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ThanksCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pickChar", true);
}}

}


{


{
}

}


};

gdjs.ThanksCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ThanksCode.GDplayerObjects1.length = 0;
gdjs.ThanksCode.GDplayerObjects2.length = 0;
gdjs.ThanksCode.GDamandaObjects1.length = 0;
gdjs.ThanksCode.GDamandaObjects2.length = 0;
gdjs.ThanksCode.GDjoss2Objects1.length = 0;
gdjs.ThanksCode.GDjoss2Objects2.length = 0;
gdjs.ThanksCode.GDben10Objects1.length = 0;
gdjs.ThanksCode.GDben10Objects2.length = 0;
gdjs.ThanksCode.GDtrymagainObjects1.length = 0;
gdjs.ThanksCode.GDtrymagainObjects2.length = 0;
gdjs.ThanksCode.GDtrymObjects1.length = 0;
gdjs.ThanksCode.GDtrymObjects2.length = 0;
gdjs.ThanksCode.GDdnailObjects1.length = 0;
gdjs.ThanksCode.GDdnailObjects2.length = 0;
gdjs.ThanksCode.GDtordObjects1.length = 0;
gdjs.ThanksCode.GDtordObjects2.length = 0;
gdjs.ThanksCode.GDsnorreObjects1.length = 0;
gdjs.ThanksCode.GDsnorreObjects2.length = 0;
gdjs.ThanksCode.GDdaveObjects1.length = 0;
gdjs.ThanksCode.GDdaveObjects2.length = 0;
gdjs.ThanksCode.GDben11Objects1.length = 0;
gdjs.ThanksCode.GDben11Objects2.length = 0;
gdjs.ThanksCode.GDcookie3Objects1.length = 0;
gdjs.ThanksCode.GDcookie3Objects2.length = 0;
gdjs.ThanksCode.GDcookie2Objects1.length = 0;
gdjs.ThanksCode.GDcookie2Objects2.length = 0;
gdjs.ThanksCode.GDcookie4Objects1.length = 0;
gdjs.ThanksCode.GDcookie4Objects2.length = 0;
gdjs.ThanksCode.GDcookieObjects1.length = 0;
gdjs.ThanksCode.GDcookieObjects2.length = 0;
gdjs.ThanksCode.GDthanksPicObjects1.length = 0;
gdjs.ThanksCode.GDthanksPicObjects2.length = 0;
gdjs.ThanksCode.GDthanksTextObjects1.length = 0;
gdjs.ThanksCode.GDthanksTextObjects2.length = 0;
gdjs.ThanksCode.GDthanksScoreObjects1.length = 0;
gdjs.ThanksCode.GDthanksScoreObjects2.length = 0;
gdjs.ThanksCode.GDtryAgainObjects1.length = 0;
gdjs.ThanksCode.GDtryAgainObjects2.length = 0;
gdjs.ThanksCode.GDrespEndObjects1.length = 0;
gdjs.ThanksCode.GDrespEndObjects2.length = 0;

gdjs.ThanksCode.eventsList0(runtimeScene);
return;

}

gdjs['ThanksCode'] = gdjs.ThanksCode;
