import { notMessage, hasMessage } from '../message/message';

const getData = onComplete => {
    const data = localStorage.getItem("users");

    onComplete({
        response: data ? true : false,
        message: data ? hasMessage : notMessage
    })
}

const setData = onComplete => {

}

export {
    getData,
    setData
}