import { Cpe } from './cpe';
export declare class CpeParser {
    /**
     * Parse a cpe 23 string value.
     *
     * @param {string} cpe
     * @returns {Cpe}
     * @memberof CpeParser
     */
    parseCpe23(cpe: string): Cpe;
    /**
     * Applies logic per section 5.3.2 of:
     * https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir7695.pdf
     *
     * TODO: What to do with quoted (i.e. \) characters?
     * @private
     * @param {string} rawAttributeValue
     * @returns {string}
     * @memberof CpeParser
     */
    private parseAttributeValue;
}
//# sourceMappingURL=cpe_parser.d.ts.map