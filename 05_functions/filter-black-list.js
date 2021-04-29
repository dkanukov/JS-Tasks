function outputWhiteListEmails(whiteList, blackList, sortedList){
    let n;
    for (let index = 0; index < whiteList.length; index++) {
        n = blackList.includes(whiteList[index]);
        if (n == false) {
            sortedList.push(whiteList[index])
        }
    }
    return sortedList
}


var sortedList = [];
var whiteList = ['qw@gmail.com', 'qweqew@gmail.com', 'asdasda@gmail.com', 'zczxczcz@gmail.com',
 '123@gmail.com', '4353453@gmail.com'];
var blackList = ['123@gmail.com', '4353453@gmail.com'];
outputWhiteListEmails(whiteList, blackList, sortedList);
console.log(sortedList);

export default outputWhiteListEmails;