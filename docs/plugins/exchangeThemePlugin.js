export default {
    install(Vue, options) {
        Vue.prototype.$exchangeTheme = function(sThemeId) {
            document.body.className = '';
            if (sThemeId) {
                document.body.classList.add(sThemeId);
            }
        }
    }
}
