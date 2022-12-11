import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'be3d6074fe8b46648911734583bfc5d2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
