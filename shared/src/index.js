
const shared = {
    verify: require('./verify').verify,
    suite: require('./test.suite').suite,
    html: require('./test.suite').html,
    dependencies: require('./dependencies').dependencies,
    versions: [
        '@hansogj/abonnement-js@v4.3.0',
        '@hansogj/array.utils@v2.3.0',
        '@hansogj/find-js@v6.3.0',
        '@hansogj/maybe@v2.2.23',
    ]
}

try {
    module.exports = shared

} catch (e) {
    console.error("Not able to load shared lib", e)
}