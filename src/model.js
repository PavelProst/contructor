import image from './assets/slider1.png';
import {TitleBlock, TextBlock, ColumnsBlock} from './classes/Block';

const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`

export const model = [
    new TitleBlock ('Конструктор Класс', {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: 'green',
                padding: '1.5rem',
                'text-align': 'center',
            },
        }
    ),
    new TextBlock (text, {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            adding: '2rem',
            color: '#fff',
            padding: '1.5rem',
            'font-weight': 'bold'
        },
        }
    ),
    new ColumnsBlock ([
            'Приложение на чистом JavaScript, без использования библиотек',
            'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
        ], {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        },
        }
    ),

    //{
    //    type: 'image', value: image,
    //},
]