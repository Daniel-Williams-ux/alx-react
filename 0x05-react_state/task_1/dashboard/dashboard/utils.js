export const getFullYear = () => {
    var currentTime = new Date()

    return currentTime.getFullYear()
}

export const getFooterCopy = (isIndex) => {
    if (isIndex === true){
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

export const getLatestNotification = (a) => {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}

export default getLatestNotification;