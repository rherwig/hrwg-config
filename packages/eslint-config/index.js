const rules = require('./rules');

module.exports = {
    extends: [
        require.resolve('@kellerkinder/eslint-config'),
    ],
    rules,
};
