import {row,col,css} from './utilis';

function title(block) {
    const {tag = 'h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`),css(styles));
};

function text(block) {
    const {styles} = block.options;
    return row(col(`<p>${block.value}</p>`), css(styles));
}

function columns(block) {
    const {styles} = block.options;
    const html = block.value.map(col).join('');
    return row(html, css(styles));
}

function image(block) {
    return row(col(`<img src="${block.value}" width="100px" height="100px"/>`));
}

export const templates = {
    title,
    text,
    image,
    columns,
}