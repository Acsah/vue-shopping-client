import { v4 as uuidv4 } from 'uuid';
/**
 * 用来获取用户唯一标识的
 * 先从localStorage里去拿，如果没有，再调用uuid创建新的，并且还要存储到localStorage
 */
function getUserTempId() {
    let userTempId = localStorage.getItem('USERTEMPID_KEY');

    if (!userTempId) { //拿不到就是null false
        userTempId = uuidv4(); //生成
        localStorage.setItem('USERTEMPID_KEY', userTempId);//存储
    }
    return userTempId;
}

export {
    getUserTempId
}