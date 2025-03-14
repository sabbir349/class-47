const getDataFromLocalStorage = () => {
    const storeData = localStorage.getItem('appliedJobs')
    if (storeData) {
        return JSON.parse(storeData)
    }
    return []
}

const setDataToLocalStorage = (id) => {
    const data = getDataFromLocalStorage()
    const exits = data.find(da => da === id)
    if (!exits) {
        data.push(id)
        localStorage.setItem('appliedJobs', JSON.stringify(data))
    }

}

const deleteDataFromLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const exists = data.filter(da=>da !== id)
    if(exists){
        localStorage.setItem('appliedJobs',JSON.stringify(exists))
    }
}

export {
    getDataFromLocalStorage,
    setDataToLocalStorage,
    deleteDataFromLocalStorage
}