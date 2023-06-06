import { Constants } from "../constants.js";

export class CharGenApp extends FormApplication {
    constructor() {
        super();
    }

    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            height: 'auto',
            width: 'auto',
            template: Constants.TEMPLATES.CHAR_GEN_APP,
            title: 'Materia Character Generator',
            userId: game.userId
        }

        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        return mergedOptions;
    }

    activateListeners(html) {
        // use this pattern to attach callbacks to controls in this app
        // html.find('.some-item-class').click( ev => this.myCallback( args ) );
    }

    getData() {
        let data = {};
        // use this pattern to bind to data for rendering in the templates
        // data.memberName = this.propertyName
        // data.otherMemberName = this.methodCall()

        // NOTE: need to call this.render() to update these
        return data;
    }

    setActor(actorId) {
        this.actorId = actorId;
    }
}