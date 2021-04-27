function outputWhiteListEmails(whiteL, blackL){
    for (let index = 0; index < blackL.length; index++) {
        nameInBlackList = blackL[index];
        curNameInWhiteList = whiteL.indexOf(nameInBlackList);
        if(curNameInWhiteList != -1){
            whiteL.splice(curNameInWhiteList, curNameInWhiteList+1);
        }
    }
    return whiteL
}
var whiteList = ['qw@gmail.com', 'qweqew@gmail.com', 'asdasda@gmail.com', 'zczxczcz@gmail.com',
 '123@gmail.com', '4353453@gmail.com'];
var blacklist = ['123@gmail.com', '4353453@gmail.com'];
newWhiteList = outputWhiteListEmails(whiteList, blacklist);
console.log(newWhiteList);

default {outputWhiteListEmails};