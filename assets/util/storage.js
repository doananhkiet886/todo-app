export default function createStorage(storageKey) {
    const store = JSON.parse(localStorage.getItem(storageKey)) ?? {};

    function save() {
        localStorage.setItem(storageKey, JSON.stringify(store));
    }

    return {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        },
        clear() {
            localStorage.removeItem(storageKey);
        }
    }
}