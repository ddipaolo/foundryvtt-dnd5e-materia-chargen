import { Settings } from "./settings.js";
import { Constants } from "./constants.js";
import { CharGenApp } from "./apps/chargenapp.js";

Hooks.once('init', async function() {
    Settings.initialize();
});

Hooks.once('ready', async function() {
});

Hooks.on('renderActorSheet', (app, html, data) => {
    if (game.settings.get(Constants.MODULE_ID, Settings.SETTINGS.DISPLAY_ON_TITLEBAR)) {
        // only display for PC sheets
        if (app.actor.type != 'character') { return; }
        // check if the user is either a GM or an owner of the actor
        let isOwner = false;
        if (game.user.isGM || data.actor.ownership[Constants.ACTOR_DEFAULT_OWNER_KEY] >= Constants.MINIMUM_OWNERSHIP_VALUE) {
            isOwner = true;
        } else {
            // check if exists in perm list and if meets ownership min val
            if (game.userId in data.actor.ownership && data.actor.ownership[game.userId] >= Constants.MINIMUM_OWNERSHIP_VALUE ) {
                isOwner = true;
            }
        }
        if (!isOwner) { return; }
        const buttonText = game.i18n.localize('MATERIA-CHARGEN-DND5E.ui.charsheet-titlebar-button');
        let openButton = $(`<a class="open-char-gen"><i class="fas fa-layer-group"></i> ${buttonText}</a>`);
        openButton.click(async (event) => {
            var charGenApp = new CharGenApp();
            charGenApp.setActor(data.actor._id);
            charGenApp.render(true);
        });
        html.closest('.app').find('.open-char-gen').remove();
        let titleElement = html.closest('.app').find('.window-title');
        openButton.insertAfter(titleElement);
    }
})
