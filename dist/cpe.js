"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Model to hold parsed cpe attribute values.
 *
 * @export
 * @class Cpe
 */
class Cpe {
    constructor() {
        this.edition = '*';
        this.language = '*';
        this.other = '*';
        this.sw_edition = '*';
        this.target_hw = '*';
        this.target_sw = '*';
        this.update = '*';
        this.part = null;
        this.product = null;
        this.vendor = null;
        this.version = null;
    }
}
exports.Cpe = Cpe;
//# sourceMappingURL=cpe.js.map