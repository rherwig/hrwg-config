const rules = require('./rules/vue');

module.exports = {
    extends: [
        require.resolve('@kellerkinder/eslint-config/vue'),
    ],
    rules,
};
