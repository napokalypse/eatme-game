gdjs.GameCode = {};
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.GDplayerObjects1= [];
gdjs.GameCode.GDplayerObjects2= [];
gdjs.GameCode.GDplayerObjects3= [];
gdjs.GameCode.GDamandaObjects1= [];
gdjs.GameCode.GDamandaObjects2= [];
gdjs.GameCode.GDamandaObjects3= [];
gdjs.GameCode.GDjoss2Objects1= [];
gdjs.GameCode.GDjoss2Objects2= [];
gdjs.GameCode.GDjoss2Objects3= [];
gdjs.GameCode.GDben10Objects1= [];
gdjs.GameCode.GDben10Objects2= [];
gdjs.GameCode.GDben10Objects3= [];
gdjs.GameCode.GDtrymagainObjects1= [];
gdjs.GameCode.GDtrymagainObjects2= [];
gdjs.GameCode.GDtrymagainObjects3= [];
gdjs.GameCode.GDtrymObjects1= [];
gdjs.GameCode.GDtrymObjects2= [];
gdjs.GameCode.GDtrymObjects3= [];
gdjs.GameCode.GDdnailObjects1= [];
gdjs.GameCode.GDdnailObjects2= [];
gdjs.GameCode.GDdnailObjects3= [];
gdjs.GameCode.GDtordObjects1= [];
gdjs.GameCode.GDtordObjects2= [];
gdjs.GameCode.GDtordObjects3= [];
gdjs.GameCode.GDsnorreObjects1= [];
gdjs.GameCode.GDsnorreObjects2= [];
gdjs.GameCode.GDsnorreObjects3= [];
gdjs.GameCode.GDdaveObjects1= [];
gdjs.GameCode.GDdaveObjects2= [];
gdjs.GameCode.GDdaveObjects3= [];
gdjs.GameCode.GDben11Objects1= [];
gdjs.GameCode.GDben11Objects2= [];
gdjs.GameCode.GDben11Objects3= [];
gdjs.GameCode.GDcookie3Objects1= [];
gdjs.GameCode.GDcookie3Objects2= [];
gdjs.GameCode.GDcookie3Objects3= [];
gdjs.GameCode.GDcookie2Objects1= [];
gdjs.GameCode.GDcookie2Objects2= [];
gdjs.GameCode.GDcookie2Objects3= [];
gdjs.GameCode.GDcookie4Objects1= [];
gdjs.GameCode.GDcookie4Objects2= [];
gdjs.GameCode.GDcookie4Objects3= [];
gdjs.GameCode.GDcookieObjects1= [];
gdjs.GameCode.GDcookieObjects2= [];
gdjs.GameCode.GDcookieObjects3= [];
gdjs.GameCode.GDbgObjects1= [];
gdjs.GameCode.GDbgObjects2= [];
gdjs.GameCode.GDbgObjects3= [];
gdjs.GameCode.GDborderTopObjects1= [];
gdjs.GameCode.GDborderTopObjects2= [];
gdjs.GameCode.GDborderTopObjects3= [];
gdjs.GameCode.GDborderRightObjects1= [];
gdjs.GameCode.GDborderRightObjects2= [];
gdjs.GameCode.GDborderRightObjects3= [];
gdjs.GameCode.GDborderBottomObjects1= [];
gdjs.GameCode.GDborderBottomObjects2= [];
gdjs.GameCode.GDborderBottomObjects3= [];
gdjs.GameCode.GDborderLeftObjects1= [];
gdjs.GameCode.GDborderLeftObjects2= [];
gdjs.GameCode.GDborderLeftObjects3= [];
gdjs.GameCode.GDscoreTextObjects1= [];
gdjs.GameCode.GDscoreTextObjects2= [];
gdjs.GameCode.GDscoreTextObjects3= [];
gdjs.GameCode.GDresponsibilityObjects1= [];
gdjs.GameCode.GDresponsibilityObjects2= [];
gdjs.GameCode.GDresponsibilityObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("jostein1");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (10));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (15));
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("amanda");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("jostein2");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (5));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("ben1");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (5));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("trim2");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (7));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("trim1");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (5));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 7;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("dnail");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (10));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 8;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("tord");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (17));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 9;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("snorre");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (5));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 10;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects2.createFrom(gdjs.GameCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimationName("dave");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setScale(gdjs.GameCode.GDplayerObjects2[i].getScale() / (8));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 11;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setAnimationName("ben2");
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setScale(gdjs.GameCode.GDplayerObjects1[i].getScale() / (8));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects2Objects = Hashtable.newFrom({"cookie": gdjs.GameCode.GDcookieObjects2});gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDcookieObjects1 */

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDcookieObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDscoreTextObjects2.createFrom(runtimeScene.getObjects("scoreText"));
gdjs.GameCode.GDcookieObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDcookieObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDcookieObjects2.push(gdjs.GameCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDcookieObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(50);
}{for(var i = 0, len = gdjs.GameCode.GDscoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDscoreTextObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects2Objects, "cookie", gdjs.randomInRange(800, 900), gdjs.randomInRange(-(11), -(290)), "");
}{for(var i = 0, len = gdjs.GameCode.GDcookieObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects2[i].addPolarForce(gdjs.random(90), 500, 1);
}
}}
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects2Objects = Hashtable.newFrom({"cookie2": gdjs.GameCode.GDcookie2Objects2});gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDcookie2Objects1 */

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDcookie2Objects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDscoreTextObjects2.createFrom(runtimeScene.getObjects("scoreText"));
gdjs.GameCode.GDcookie2Objects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDcookie2Objects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDcookie2Objects2.push(gdjs.GameCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(20);
}{for(var i = 0, len = gdjs.GameCode.GDscoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDscoreTextObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects2Objects, "cookie2", gdjs.randomInRange(800, 900), gdjs.randomInRange(-(11), -(290)), "");
}{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects2[i].addPolarForce(gdjs.random(90), 500, 1);
}
}}
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects3Objects = Hashtable.newFrom({"cookie3": gdjs.GameCode.GDcookie3Objects3});gdjs.GameCode.eventsList5 = function(runtimeScene) {

};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.GameCode.GDcookie3Objects2.createFrom(gdjs.GameCode.GDcookie3Objects1);


for(gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDcookie3Objects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDscoreTextObjects3.createFrom(runtimeScene.getObjects("scoreText"));
gdjs.GameCode.GDcookie3Objects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDcookie3Objects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDcookie3Objects3.push(gdjs.GameCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(5);
}{for(var i = 0, len = gdjs.GameCode.GDscoreTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDscoreTextObjects3[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects3Objects, "cookie3", gdjs.randomInRange(800, 900), gdjs.randomInRange(-(11), -(290)), "");
}{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects3[i].addPolarForce(gdjs.random(90), 500, 1);
}
}}
}

}


{



}


{



}


{



}


{



}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects2Objects = Hashtable.newFrom({"cookie4": gdjs.GameCode.GDcookie4Objects2});gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDcookie4Objects1 */

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDcookie4Objects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDscoreTextObjects2.createFrom(runtimeScene.getObjects("scoreText"));
gdjs.GameCode.GDcookie4Objects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDcookie4Objects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDcookie4Objects2.push(gdjs.GameCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(100);
}{for(var i = 0, len = gdjs.GameCode.GDscoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDscoreTextObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects2Objects, "cookie4", gdjs.randomInRange(800, 900), gdjs.randomInRange(-(10), -(290)), "");
}{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects2[i].addPolarForce(gdjs.random(90), 500, 1);
}
}}
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects = Hashtable.newFrom({"borderBottom": gdjs.GameCode.GDborderBottomObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects = Hashtable.newFrom({"borderLeft": gdjs.GameCode.GDborderLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects = Hashtable.newFrom({"borderRight": gdjs.GameCode.GDborderRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects = Hashtable.newFrom({"borderTop": gdjs.GameCode.GDborderTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects = Hashtable.newFrom({"responsibility": gdjs.GameCode.GDresponsibilityObjects1});gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));
gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));
gdjs.GameCode.GDplayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, "player", gdjs.randomInRange(0, 700), gdjs.randomInRange(0, 500), "");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects1[i].addPolarForce(12, 433, 1);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].addPolarForce(45, 240, 1);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].addPolarForce(21, 250, 1);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].addPolarForce(65, 600, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gametimer");
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].addForce(300, 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].addForce(0, 300, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].addForce(0, -(300), 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].addForce(-(300), 0, 0);
}
}}

}


{

gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookieObjects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderTopObjects1.createFrom(runtimeScene.getObjects("borderTop"));
gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderTopObjects1 */
/* Reuse gdjs.GameCode.GDcookieObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderRightObjects1.createFrom(runtimeScene.getObjects("borderRight"));
gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderRightObjects1 */
/* Reuse gdjs.GameCode.GDcookieObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderBottomObjects1.createFrom(runtimeScene.getObjects("borderBottom"));
gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderBottomObjects1 */
/* Reuse gdjs.GameCode.GDcookieObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderLeftObjects1.createFrom(runtimeScene.getObjects("borderLeft"));
gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderLeftObjects1 */
/* Reuse gdjs.GameCode.GDcookieObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderTopObjects1.createFrom(runtimeScene.getObjects("borderTop"));
gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderTopObjects1 */
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderRightObjects1.createFrom(runtimeScene.getObjects("borderRight"));
gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderRightObjects1 */
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderBottomObjects1.createFrom(runtimeScene.getObjects("borderBottom"));
gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderBottomObjects1 */
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderLeftObjects1.createFrom(runtimeScene.getObjects("borderLeft"));
gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderLeftObjects1 */
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookie2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookieObjects1 */
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));
gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookieObjects1 */
/* Reuse gdjs.GameCode.GDcookie2Objects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDcookieObjects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookieObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderTopObjects1.createFrom(runtimeScene.getObjects("borderTop"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderTopObjects1 */
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderRightObjects1.createFrom(runtimeScene.getObjects("borderRight"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderRightObjects1 */
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderBottomObjects1.createFrom(runtimeScene.getObjects("borderBottom"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderBottomObjects1 */
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderLeftObjects1.createFrom(runtimeScene.getObjects("borderLeft"));
gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderLeftObjects1 */
/* Reuse gdjs.GameCode.GDcookie3Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie3Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderTopObjects1.createFrom(runtimeScene.getObjects("borderTop"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderTopObjects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderRightObjects1.createFrom(runtimeScene.getObjects("borderRight"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderRightObjects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderBottomObjects1.createFrom(runtimeScene.getObjects("borderBottom"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderBottomObjects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderLeftObjects1.createFrom(runtimeScene.getObjects("borderLeft"));
gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderLeftObjects1 */
/* Reuse gdjs.GameCode.GDcookie4Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDcookie4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcookie4Objects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookieObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDcookie2Objects1.createFrom(runtimeScene.getObjects("cookie2"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie2Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDcookie3Objects1.createFrom(runtimeScene.getObjects("cookie3"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie3Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDcookie4Objects1.createFrom(runtimeScene.getObjects("cookie4"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcookie4Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "gametimer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects);
}{for(var i = 0, len = gdjs.GameCode.GDresponsibilityObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresponsibilityObjects1[i].addPolarForce(gdjs.random(40), 800, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gametimer");
}}

}


{

gdjs.GameCode.GDborderBottomObjects1.createFrom(runtimeScene.getObjects("borderBottom"));
gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderBottomObjects1 */
/* Reuse gdjs.GameCode.GDresponsibilityObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresponsibilityObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresponsibilityObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderBottomObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderLeftObjects1.createFrom(runtimeScene.getObjects("borderLeft"));
gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderLeftObjects1 */
/* Reuse gdjs.GameCode.GDresponsibilityObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresponsibilityObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresponsibilityObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderLeftObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderRightObjects1.createFrom(runtimeScene.getObjects("borderRight"));
gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderRightObjects1 */
/* Reuse gdjs.GameCode.GDresponsibilityObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresponsibilityObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresponsibilityObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderRightObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDborderTopObjects1.createFrom(runtimeScene.getObjects("borderTop"));
gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDborderTopObjects1 */
/* Reuse gdjs.GameCode.GDresponsibilityObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresponsibilityObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresponsibilityObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDborderTopObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDresponsibilityObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresponsibilityObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresponsibilityObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.GameCode.GDresponsibilityObjects1.createFrom(runtimeScene.getObjects("responsibility"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresponsibilityObjects1Objects, false, runtimeScene, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Thanks", true);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDplayerObjects1.length = 0;
gdjs.GameCode.GDplayerObjects2.length = 0;
gdjs.GameCode.GDplayerObjects3.length = 0;
gdjs.GameCode.GDamandaObjects1.length = 0;
gdjs.GameCode.GDamandaObjects2.length = 0;
gdjs.GameCode.GDamandaObjects3.length = 0;
gdjs.GameCode.GDjoss2Objects1.length = 0;
gdjs.GameCode.GDjoss2Objects2.length = 0;
gdjs.GameCode.GDjoss2Objects3.length = 0;
gdjs.GameCode.GDben10Objects1.length = 0;
gdjs.GameCode.GDben10Objects2.length = 0;
gdjs.GameCode.GDben10Objects3.length = 0;
gdjs.GameCode.GDtrymagainObjects1.length = 0;
gdjs.GameCode.GDtrymagainObjects2.length = 0;
gdjs.GameCode.GDtrymagainObjects3.length = 0;
gdjs.GameCode.GDtrymObjects1.length = 0;
gdjs.GameCode.GDtrymObjects2.length = 0;
gdjs.GameCode.GDtrymObjects3.length = 0;
gdjs.GameCode.GDdnailObjects1.length = 0;
gdjs.GameCode.GDdnailObjects2.length = 0;
gdjs.GameCode.GDdnailObjects3.length = 0;
gdjs.GameCode.GDtordObjects1.length = 0;
gdjs.GameCode.GDtordObjects2.length = 0;
gdjs.GameCode.GDtordObjects3.length = 0;
gdjs.GameCode.GDsnorreObjects1.length = 0;
gdjs.GameCode.GDsnorreObjects2.length = 0;
gdjs.GameCode.GDsnorreObjects3.length = 0;
gdjs.GameCode.GDdaveObjects1.length = 0;
gdjs.GameCode.GDdaveObjects2.length = 0;
gdjs.GameCode.GDdaveObjects3.length = 0;
gdjs.GameCode.GDben11Objects1.length = 0;
gdjs.GameCode.GDben11Objects2.length = 0;
gdjs.GameCode.GDben11Objects3.length = 0;
gdjs.GameCode.GDcookie3Objects1.length = 0;
gdjs.GameCode.GDcookie3Objects2.length = 0;
gdjs.GameCode.GDcookie3Objects3.length = 0;
gdjs.GameCode.GDcookie2Objects1.length = 0;
gdjs.GameCode.GDcookie2Objects2.length = 0;
gdjs.GameCode.GDcookie2Objects3.length = 0;
gdjs.GameCode.GDcookie4Objects1.length = 0;
gdjs.GameCode.GDcookie4Objects2.length = 0;
gdjs.GameCode.GDcookie4Objects3.length = 0;
gdjs.GameCode.GDcookieObjects1.length = 0;
gdjs.GameCode.GDcookieObjects2.length = 0;
gdjs.GameCode.GDcookieObjects3.length = 0;
gdjs.GameCode.GDbgObjects1.length = 0;
gdjs.GameCode.GDbgObjects2.length = 0;
gdjs.GameCode.GDbgObjects3.length = 0;
gdjs.GameCode.GDborderTopObjects1.length = 0;
gdjs.GameCode.GDborderTopObjects2.length = 0;
gdjs.GameCode.GDborderTopObjects3.length = 0;
gdjs.GameCode.GDborderRightObjects1.length = 0;
gdjs.GameCode.GDborderRightObjects2.length = 0;
gdjs.GameCode.GDborderRightObjects3.length = 0;
gdjs.GameCode.GDborderBottomObjects1.length = 0;
gdjs.GameCode.GDborderBottomObjects2.length = 0;
gdjs.GameCode.GDborderBottomObjects3.length = 0;
gdjs.GameCode.GDborderLeftObjects1.length = 0;
gdjs.GameCode.GDborderLeftObjects2.length = 0;
gdjs.GameCode.GDborderLeftObjects3.length = 0;
gdjs.GameCode.GDscoreTextObjects1.length = 0;
gdjs.GameCode.GDscoreTextObjects2.length = 0;
gdjs.GameCode.GDscoreTextObjects3.length = 0;
gdjs.GameCode.GDresponsibilityObjects1.length = 0;
gdjs.GameCode.GDresponsibilityObjects2.length = 0;
gdjs.GameCode.GDresponsibilityObjects3.length = 0;

gdjs.GameCode.eventsList9(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
