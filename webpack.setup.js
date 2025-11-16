// Webpack build setup for Node.js environments (CI/CD).
// Prevents localStorage SecurityError in html-webpack-plugin's template evaluation.

if (typeof localStorage === 'undefined' && typeof global !== 'undefined') {
    // Mock localStorage with a simple in-memory object so html-webpack-plugin doesn't crash
    global.localStorage = {
        data: {},
        getItem(key) { return this.data[key] || null; },
        setItem(key, value) { this.data[key] = String(value); },
        removeItem(key) { delete this.data[key]; },
        clear() { this.data = {}; },
        key(index) { return Object.keys(this.data)[index] || null; },
        get length() { return Object.keys(this.data).length; }
    };
}

