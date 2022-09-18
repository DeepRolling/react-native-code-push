// Example content of gitpkg.config.js
module.exports = () => ({
    registry: 'git@github.com:DeepRolling/react-native-code-push.git',
    getTagName: pkg => `v${pkg.version}-gitpkg`
});
