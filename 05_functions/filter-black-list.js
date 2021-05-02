function outputWhiteListEmails(whiteList, blackList){
    let sortedList = [];
    for (let index = 0; index < whiteList.length; index++) {
        if (!blackList.includes(whiteList[index])) {
            sortedList.push(whiteList[index]);
        }
    }
    return sortedList;
}

let whiteList = ['qw@gmail.com', 'qweqew@gmail.com', 'asdasda@gmail.com', 'zczxczcz@gmail.com',
 '123@gmail.com', '4353453@gmail.com'];
let blackList = ['123@gmail.com', '4353453@gmail.com'];
outputWhiteListEmails(whiteList, blackList);
export default outputWhiteListEmails;