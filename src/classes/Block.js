import {col, css, row} from "../utilis";

export class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    };
    toHtml() {
        throw new Error('Метод должен быть реализован')
    }
};


export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    };

    toHtml() {
            const {tag = 'h1', styles} = this.options;
            return row(col(`<${tag}>${this.value}</${tag}>`),css(styles));
    }
};

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options);
    };
    toHtml() {
        const {styles} = this.options;
        return row(col(`<p>${this.value}</p>`), css(styles));
    }
};

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    };
    toHtml() {
        const {styles} = this.options;
        const html = this.value.map(col).join('');
        return row(html, css(styles));
    }
};