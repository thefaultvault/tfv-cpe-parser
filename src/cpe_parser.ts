import { Cpe } from './cpe';

export class CpeParser {

    /**
     * Parse a cpe 23 string value.
     *
     * @param {string} cpe
     * @returns {Cpe}
     * @memberof CpeParser
     */
    parseCpe23(cpe: string): Cpe {
        if (typeof cpe !== 'string' || !cpe) return null;
        const prefix = 'cpe:2.3:';
        let substring = cpe.startsWith(prefix) ? cpe.substring(prefix.length) : cpe;
        let attributes = substring.split(':');
        let cpeModel = new Cpe();
        for (let i = 0; i < attributes.length; i++) {
            let parsedAttributeValue = this.parseAttributeValue(attributes[i]);
            switch (i) {
                case 0:
                    cpeModel.part = parsedAttributeValue;
                    break;
                case 1:
                    cpeModel.vendor = parsedAttributeValue;
                    break;
                case 2:
                    cpeModel.product = parsedAttributeValue;
                    break;
                case 3:
                    cpeModel.version = parsedAttributeValue;
                    break;
                case 4:
                    cpeModel.update = parsedAttributeValue;
                    break;
                case 5:
                    cpeModel.edition = parsedAttributeValue;
                    break;
                case 6:
                    cpeModel.language = parsedAttributeValue;
                    break;
                case 7:
                    cpeModel.sw_edition = parsedAttributeValue;
                    break;
                case 8:
                    cpeModel.target_sw = parsedAttributeValue;
                    break;
                case 9:
                    cpeModel.target_hw = parsedAttributeValue;
                    break;
                case 10:
                    cpeModel.other = parsedAttributeValue;
            }
        }
        return cpeModel;
    }

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
    private parseAttributeValue(rawAttributeValue: string): string {
        if (typeof rawAttributeValue !== 'string' || !rawAttributeValue) return '';
        return rawAttributeValue.trim().replace(/_/g, ' ');
    }
}