// Example content of gitpkg.config.js
module.exports = () => ({
    registry: 'git@github.com:DeepRolling/react-native-code-push.git',
    getTagName: pkg => `${pkg.name}-v${pkg.version}-gitpkg-fix`
});
