gdjs.ThanksCode = {};
gdjs.ThanksCode.GDplayerObjects1= [];
gdjs.ThanksCode.GDplayerObjects2= [];
gdjs.ThanksCode.GDplayerAObjects1= [];
gdjs.ThanksCode.GDplayerAObjects2= [];
gdjs.ThanksCode.GDplayerJ1Objects1= [];
gdjs.ThanksCode.GDplayerJ1Objects2= [];
gdjs.ThanksCode.GDplayerB1Objects1= [];
gdjs.ThanksCode.GDplayerB1Objects2= [];
gdjs.ThanksCode.GDplayerT1Objects1= [];
gdjs.ThanksCode.GDplayerT1Objects2= [];
gdjs.ThanksCode.GDplayerT2Objects1= [];
gdjs.ThanksCode.GDplayerT2Objects2= [];
gdjs.ThanksCode.GDplayerD1Objects1= [];
gdjs.ThanksCode.GDplayerD1Objects2= [];
gdjs.ThanksCode.GDplayerTo1Objects1= [];
gdjs.ThanksCode.GDplayerTo1Objects2= [];
gdjs.ThanksCode.GDplayerS1Objects1= [];
gdjs.ThanksCode.GDplayerS1Objects2= [];
gdjs.ThanksCode.GDplayerDa1Objects1= [];
gdjs.ThanksCode.GDplayerDa1Objects2= [];
gdjs.ThanksCode.GDplayerB2Objects1= [];
gdjs.ThanksCode.GDplayerB2Objects2= [];
gdjs.ThanksCode.GDcookie3Objects1= [];
gdjs.ThanksCode.GDcookie3Objects2= [];
gdjs.ThanksCode.GDcookie2Objects1= [];
gdjs.ThanksCode.GDcookie2Objects2= [];
gdjs.ThanksCode.GDcookie4Objects1= [];
gdjs.ThanksCode.GDcookie4Objects2= [];
gdjs.ThanksCode.GDcookieObjects1= [];
gdjs.ThanksCode.GDcookieObjects2= [];
gdjs.ThanksCode.GDplayerJ2Objects1= [];
gdjs.ThanksCode.GDplayerJ2Objects2= [];
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
gdjs.ThanksCode.condition2IsTrue_0 = {val:false};


gdjs.ThanksCode.mapOfGDgdjs_46ThanksCode_46GDtryAgainObjects1Objects = Hashtable.newFrom({"tryAgain": gdjs.ThanksCode.GDtryAgainObjects1});gdjs.ThanksCode.eventsList0 = function(runtimeScene) {

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

gdjs.ThanksCode.GDtryAgainObjects1.createFrom(runtimeScene.getObjects("tryAgain"));

gdjs.ThanksCode.condition0IsTrue_0.val = false;
gdjs.ThanksCode.condition1IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ThanksCode.mapOfGDgdjs_46ThanksCode_46GDtryAgainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ThanksCode.condition0IsTrue_0.val ) {
{
gdjs.ThanksCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ThanksCode.condition1IsTrue_0.val) {
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
gdjs.ThanksCode.GDplayerAObjects1.length = 0;
gdjs.ThanksCode.GDplayerAObjects2.length = 0;
gdjs.ThanksCode.GDplayerJ1Objects1.length = 0;
gdjs.ThanksCode.GDplayerJ1Objects2.length = 0;
gdjs.ThanksCode.GDplayerB1Objects1.length = 0;
gdjs.ThanksCode.GDplayerB1Objects2.length = 0;
gdjs.ThanksCode.GDplayerT1Objects1.length = 0;
gdjs.ThanksCode.GDplayerT1Objects2.length = 0;
gdjs.ThanksCode.GDplayerT2Objects1.length = 0;
gdjs.ThanksCode.GDplayerT2Objects2.length = 0;
gdjs.ThanksCode.GDplayerD1Objects1.length = 0;
gdjs.ThanksCode.GDplayerD1Objects2.length = 0;
gdjs.ThanksCode.GDplayerTo1Objects1.length = 0;
gdjs.ThanksCode.GDplayerTo1Objects2.length = 0;
gdjs.ThanksCode.GDplayerS1Objects1.length = 0;
gdjs.ThanksCode.GDplayerS1Objects2.length = 0;
gdjs.ThanksCode.GDplayerDa1Objects1.length = 0;
gdjs.ThanksCode.GDplayerDa1Objects2.length = 0;
gdjs.ThanksCode.GDplayerB2Objects1.length = 0;
gdjs.ThanksCode.GDplayerB2Objects2.length = 0;
gdjs.ThanksCode.GDcookie3Objects1.length = 0;
gdjs.ThanksCode.GDcookie3Objects2.length = 0;
gdjs.ThanksCode.GDcookie2Objects1.length = 0;
gdjs.ThanksCode.GDcookie2Objects2.length = 0;
gdjs.ThanksCode.GDcookie4Objects1.length = 0;
gdjs.ThanksCode.GDcookie4Objects2.length = 0;
gdjs.ThanksCode.GDcookieObjects1.length = 0;
gdjs.ThanksCode.GDcookieObjects2.length = 0;
gdjs.ThanksCode.GDplayerJ2Objects1.length = 0;
gdjs.ThanksCode.GDplayerJ2Objects2.length = 0;
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
