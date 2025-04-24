import {
  External$ExternalAccountCreateBodyDocuments,
  ExternalAccountCreateBodyDocuments,
  Schemas$ExternalAccountCreateBodyDocuments,
} from "./external-account-create-body-documents";
import {
  External$ExternalAccountCreateBodyMetadataObj0,
  ExternalAccountCreateBodyMetadataObj0,
  Schemas$ExternalAccountCreateBodyMetadataObj0,
} from "./external-account-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ExternalAccountCreateBody
 */
export type ExternalAccountCreateBody = {
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string | undefined;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: ("company" | "individual") | undefined;
  /**
   * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  /**
   * City/District/Suburb/Town/Village.
   */
  addressCity?: string | undefined;
  /**
   * Billing address country, if provided when creating card.
   */
  addressCountry?: string | undefined;
  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  addressLine1?: string | undefined;
  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  addressLine2?: string | undefined;
  /**
   * State/County/Province/Region.
   */
  addressState?: string | undefined;
  /**
   * ZIP or postal code.
   */
  addressZip?: string | undefined;
  /**
   * When set to true, this becomes the default external account for its currency.
   */
  defaultForCurrency?: boolean | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: ExternalAccountCreateBodyDocuments | undefined;
  /**
   * Two digit number representing the card’s expiration month.
   */
  expMonth?: string | undefined;
  /**
   * Four digit number representing the card’s expiration year.
   */
  expYear?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ExternalAccountCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Cardholder name.
   */
  name?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (("company" | "individual") | undefined)
    | (("checking" | "futsu" | "savings" | "toza") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | (ExternalAccountCreateBodyDocuments | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((ExternalAccountCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ExternalAccountCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExternalAccountCreateBody = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  account_type?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  address_city?: string | undefined;
  address_country?: string | undefined;
  address_line1?: string | undefined;
  address_line2?: string | undefined;
  address_state?: string | undefined;
  address_zip?: string | undefined;
  default_for_currency?: boolean | undefined;
  documents?: External$ExternalAccountCreateBodyDocuments | undefined;
  exp_month?: string | undefined;
  exp_year?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$ExternalAccountCreateBodyMetadataObj0 | string)
    | undefined;
  name?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (("company" | "individual") | undefined)
    | (("checking" | "futsu" | "savings" | "toza") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | (External$ExternalAccountCreateBodyDocuments | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$ExternalAccountCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | External$ExternalAccountCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExternalAccountCreateBody
 */
const SchemaIn$ExternalAccountCreateBody: z.ZodType<
  ExternalAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().optional(),
    account_holder_type: z.enum(["company", "individual"]).optional(),
    account_type: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    address_city: z.string().optional(),
    address_country: z.string().optional(),
    address_line1: z.string().optional(),
    address_line2: z.string().optional(),
    address_state: z.string().optional(),
    address_zip: z.string().optional(),
    default_for_currency: z.boolean().optional(),
    documents: Schemas$ExternalAccountCreateBodyDocuments.in.optional(),
    exp_month: z.string().optional(),
    exp_year: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ExternalAccountCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      account_type: "accountType",
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      default_for_currency: "defaultForCurrency",
      documents: "documents",
      exp_month: "expMonth",
      exp_year: "expYear",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExternalAccountCreateBody
 */
const SchemaOut$ExternalAccountCreateBody: z.ZodType<
  External$ExternalAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ExternalAccountCreateBody // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountType: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    addressCity: z.string().optional(),
    addressCountry: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressState: z.string().optional(),
    addressZip: z.string().optional(),
    defaultForCurrency: z.boolean().optional(),
    documents: Schemas$ExternalAccountCreateBodyDocuments.out.optional(),
    expMonth: z.string().optional(),
    expYear: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ExternalAccountCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      accountType: "account_type",
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      defaultForCurrency: "default_for_currency",
      documents: "documents",
      expMonth: "exp_month",
      expYear: "exp_year",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$ExternalAccountCreateBody = {
  in: SchemaIn$ExternalAccountCreateBody,
  out: SchemaOut$ExternalAccountCreateBody,
};
