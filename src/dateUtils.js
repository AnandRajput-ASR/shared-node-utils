function formatDate(date = new Date()) {
    return date.toISOString().split('T')[0]; // yyyy-mm-dd
}

function getTimeNow() {
    return new Date().toLocaleTimeString();
}

module.exports = { formatDate, getTimeNow };
