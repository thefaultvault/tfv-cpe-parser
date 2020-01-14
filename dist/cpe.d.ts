export declare class Cpe {
    /**
     * Classification of enumeration.
     *
     * The value “a” is for a class of applications.
     * The value “o” is for a class of operating systems.
     * The value “h” is for a class of hardware devices.
     *
     * @type {string}
     * @memberof Cpe
     */
    part: string;
    /**
     * Describes or identifies the person or organization that manufactured or
     * created the product.
     *
     * @type {string}
     * @memberof Cpe
     */
    vendor: string;
    /**
     * Describes or identifies the most common and recognizable title or name
     * of the product.
     *
     * @type {string}
     * @memberof Cpe
     */
    product: string;
    /**
     * Vendor-specific alphanumeric strings characterizing the particular
     * release version of the product.
     *
     * @type {string}
     * @memberof Cpe
     */
    version: string;
    /**
     * Vendor-specific alphanumeric strings characterizing the particular
     * update, service pack, or point release of the product.
     *
     * @type {string}
     * @memberof Cpe
     */
    update?: string;
    /**
     * Capture edition-related terms applied by the
     * vendor to the product.
     *
     * @type {string}
     * @memberof Cpe
     */
    edition?: string;
    /**
     *  The language supported in the user interface of the product being described.
     *
     * @type {string}
     * @memberof Cpe
     */
    language?: string;
    /**
     * Characterize how the product is tailored to a particular market or class
     * of end users.
     *
     * @type {string}
     * @memberof Cpe
     */
    sw_edition?: string;
    /**
     * Characterize the software computing environment within which the
     * product operates.
     *
     * @type {string}
     * @memberof Cpe
     */
    target_sw?: string;
    /**
     * Characterize the instruction set architecture (e.g., x86) on which the
     * product being described or identified by the WFN operates.
     *
     * @type {string}
     * @memberof Cpe
     */
    target_hw?: string;
    /**
     * Captures any other general descriptive or identifying information which
     * is vendor- or product-specific and which does not logically fit in any other attribute value.
     *
     * @type {string}
     * @memberof Cpe
     */
    other?: string;
}
//# sourceMappingURL=cpe.d.ts.map