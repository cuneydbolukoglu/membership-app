const updateLocalStorageData = (newData, localData) => {
    const parsedLocalData = JSON.parse(localData);
    const resultData = [...parsedLocalData, newData];

    return JSON.stringify(resultData);
}

export {
    updateLocalStorageData
}