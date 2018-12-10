export default {
    UPDATE_TITLE(state, title) {
        state.headerTitle = title;
    },
    UPDATE_SIDEBAR_OPEN(state, val) {
        state.sidebar.open = val;
    },
    UPDATE_THEME(state, val) {
        state.theme = val;
    }
};
