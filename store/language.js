import { action, observable } from 'mobx';
import KR from '../static/lang/kr';
import EN from '../static/lang/en';

class Language {
    @observable lang = 'en';


    @action.bound
     setLang = (language) => {
        this.lang = language;
    }

    getLang = () => {
       return this.lang === 'kr' ? KR : EN;
    }

}

export default new Language();