import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

type ITextData = {
    id: number,
    text: string,
    date: Date
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormComponent {
    constructor(private translate: TranslateService) {
    };

    public dataArray: ITextData[] = [];
    public text: string;
    public id: number = 0;
    public language = {
        ru: 'ru',
        en: 'en'
    };

    changeHandler() {
        if (this.text !== '') {
            this.dataArray = this.dataArray.concat([{
                id: this.id++,
                text: this.text,
                date: new Date()
            }]);
        }
        this.text = ''
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

    activeLang(lang: string) {
        if (this.translate.currentLang === lang) {
            return '#cbe3ff'
        } else if (this.translate.currentLang === undefined && this.translate.defaultLang === lang) {
            return '#cbe3ff'
        }
        return '#f3f3f0'
    }
}
