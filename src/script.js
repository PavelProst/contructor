const model = [
    {
        type: 'title',
        value: 'Hello from JS!',
    },
    {
        type: 'text',
        value: 'HLorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quia.',
    },
    {
        type: 'columns',
        value: ['1111111', '2222222', '333333333', '444444'],
    },
    {
        type: 'image', value: './assets/slider1.png',
    },
]

const $site = document.querySelector('#site');

model.forEach(block => {
    let html = '';

    if (block.type === 'title') {
        html = title(block);
    } else if (block.type === 'text') {
        html = text(block);
    } else if (block.type === 'columns') {
        html = columns(block);
    } else if (block.type === 'image') {
        html = image(block);
    }
    $site.insertAdjacentHTML('beforeend', html);

});

function title(block) {
    return `<div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
       `
}

function text(block) {
    return `<div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `<div class="row">${html.join('')}</div>`
}

function image(block) {
    return `<div class="row"><div class="col-sm"><img src="${block.value}" width="100px" height="100px"/></div></div>`
}