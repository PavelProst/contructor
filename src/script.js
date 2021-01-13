import {model} from './model';
//import {templates} from "./templates";
import './styles/style.css'

const $site = document.querySelector('#site');

model.forEach(block => {
    //const toHtml = templates[block.type];
        $site.insertAdjacentHTML('beforeend', block.toHtml());

});

