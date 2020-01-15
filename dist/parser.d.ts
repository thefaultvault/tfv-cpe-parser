import { Cpe } from './cpe';
export declare class CpeParser {
    private _uriBindingPrefix;
    private _formattedBindingPrefix;
    private _uriBindingExtendedAttributesDelimiterKey;
    /**
     * Parse a cpe string value with either uri or formatted
     * binding.
     *
     * @param {string} cpe
     * @returns {Cpe}
     * @memberof CpeParser
     */
    parse(cpe: string): Cpe;
    /**
     * Get an attribute list from either a uri binding
     * or formatted binding cpe value. The cpeAttributes
     * need to be pristine of any binding prefix.
     *
     * @private
     * @param {string} fullCpe
     * @param {string} cpeAttributes
     * @returns {string[]}
     * @memberof CpeParser
     */
    private getAttributeList;
    /**
     * Check if the cpe value has a uri binding syntax. This is
     * done by checking if the value starts with `cpe:/`.
     *
     * @param {string} cpe
     * @returns {boolean}
     * @memberof CpeParser
     */
    hasUriBinding(cpe: string): boolean;
    /**
     * Check if the cpe value has a formatted binding syntax. This is
     * done by checking if the value starts with `cpe:2.3:`.
     *
     * @param {string} cpe
     * @returns {boolean}
     * @memberof CpeParser
     */
    hasFormattedBinding(cpe: string): boolean;
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
    /**
     * Get the substring of the cpe that contain the values
     * that can be parsed into the hydrated model.
     *
     * @private
     * @param {string} fullCpe
     * @returns {string}
     * @memberof CpeParser
     */
    private getCpeAttributesSubstring;
}
//# sourceMappingURL=parser.d.ts.map