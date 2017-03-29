export default (function() {
    var storageKey = '_miniStorage';

    function getCurrentData() {
        return localStorage.getItem(storageKey) || null;
    }

    function setCurrentData(obj) {
        localStorage.setItem(storageKey, JSON.stringify(obj));
    }

    return {
        setItem: function(key, value) {
            var currentData = JSON.parse(getCurrentData() || '{}');
            currentData[key] = value;
            setCurrentData(currentData);
        },
        getItem: function(key) {
            var currentData = getCurrentData();
            if (currentData) {
                return JSON.parse(currentData)[key];
            }
        },
        removeItem: function(key) {
            var currentData = getCurrentData();
            if (currentData) {
                currentData = JSON.parse(currentData);
                delete currentData[key];
                setCurrentData(currentData);
            }
        },
        clear: function() {
            localStorage.removeItem(storageKey);
        }
    };
}());