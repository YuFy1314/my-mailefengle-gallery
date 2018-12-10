export default {
    install(Vue, options) {
        Vue.prototype.$exchangeTheme = function(sThemeId) {
            document.body.className = '';
            switch (sThemeId) {
                case 'default':
                    document.body.classList.add('default');
                    break;
                case 'custom':
                    document.body.classList.add('custom');
                    break;
                case 'yahei':
                    document.body.classList.add('yahei');
                    break;
                case 'redbegonia':
                    document.body.classList.add('redbegonia');
                    break;
                case 'navy':
                    document.body.classList.add('navy');
                    break;
            }
        }
    }
}
