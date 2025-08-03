
const shared = {
    verify: require('./verify').verify,
    suite: require('./test.suite').suite,
    html: require('./test.suite').html,
    dependencies: require('./dependencies').dependencies,
    versions: {
        "@hansogj/abonnement-js": "4.7.1",
        "@hansogj/array.utils": "2.7.1",
        "@hansogj/find-js": "6.7.1",
        "@hansogj/maybe": "2.4.2",
        "http-server": "14.1.1"
    }
}

try {
    module.exports = shared

} catch (e) {
    console.error("Not able to load shared lib", e)
}