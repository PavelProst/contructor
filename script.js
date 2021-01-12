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
        value: ['1111111', '2222222', '333333333'],
    },
]

const $site = document.querySelector('#site');

model.forEach(block => {
        let html = '';

        if (block.type === 'title') {
            html = `
            <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
            </div>
        `
        } else if (block.type === 'text') {
            html = `<div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        `
        } else if (block.type === 'columns') {
            html = `<div class="row">`
            for (let i = 0; i < block.value.length; i++) {
            html += `<div class="col-sm">
                ${block.value[i]}
            </div>`
            }
            html += `</div>`
        }

        $site.insertAdjacentHTML('beforeend', html);

    });

