export class Constants {
    static MODULE_ID = 'materia-chargen-dnd5e';
    static ACTOR_DEFAULT_OWNER_KEY = 'default';
    static MINIMUM_OWNERSHIP_VALUE = 3; // 0 = None, 1 = Limited, 2 = Observer, 3 = Owner

    static TEMPLATES = {
        CHAR_GEN_APP: `modules/${this.MODULE_ID}/templates/char-gen-app.hbs`
    }
}