import {Site} from "./Site";
import {Sitebar} from "./Sitebar";

export class App {
    constructor(model) {
        this.model = model
        this.init()
    }
    init() {
        const site = new Site('#site');

        site.render(this.model);

        const updateCallback = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        }

        new Sitebar('#panel', updateCallback);
    }
}