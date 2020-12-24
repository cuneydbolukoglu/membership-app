import { DATA_LOCALSTORAGE_NAME, NULL_DATA_MESSAGE, ADD_DATA_MESSAGE, MATCH_USER_MESSAGE } from '../message/message';
import { updateLocalStorageData } from '../helper';

const getData = onComplete => {
    const data = localStorage.getItem(DATA_LOCALSTORAGE_NAME);

    onComplete({
        data: data,
        result: data ? true : false,
        message: data ? "" : NULL_DATA_MESSAGE
    })
}

const setData = (data, onComplete) => {
    const localData = localStorage.getItem(DATA_LOCALSTORAGE_NAME);
    const controlData = localData ? localData : "[]";
    const hasUser = JSON.parse(controlData).find(item => item.username === data.username);

    !hasUser && localStorage.setItem(DATA_LOCALSTORAGE_NAME, controlData ? updateLocalStorageData(data, controlData) : JSON.stringify([data]));

    onComplete({
        result: !hasUser,
        message: hasUser ? MATCH_USER_MESSAGE : ADD_DATA_MESSAGE
    })
}

export {
    getData,
    setData
}