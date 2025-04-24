import {
  CustomerCardUpdateBodyMetadataObj0,
  External$CustomerCardUpdateBodyMetadataObj0,
  Schemas$CustomerCardUpdateBodyMetadataObj0,
} from "./customer-card-update-body-metadata-obj0";
import {
  CustomerCardUpdateBodyOwner,
  External$CustomerCardUpdateBodyOwner,
  Schemas$CustomerCardUpdateBodyOwner,
} from "./customer-card-update-body-owner";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCardUpdateBody
 */
export type CustomerCardUpdateBody = {
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string | undefined;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: ("company" | "individual") | undefined;
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
  metadata?: (CustomerCardUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Cardholder name.
   */
  name?: string | undefined;
  owner?: CustomerCardUpdateBodyOwner | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (("company" | "individual") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((CustomerCardUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (CustomerCardUpdateBodyOwner | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerCardUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCardUpdateBody = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  address_city?: string | undefined;
  address_country?: string | undefined;
  address_line1?: string | undefined;
  address_line2?: string | undefined;
  address_state?: string | undefined;
  address_zip?: string | undefined;
  exp_month?: string | undefined;
  exp_year?: string | undefined;
  expand?: string[] | undefined;
  metadata?: (External$CustomerCardUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  owner?: External$CustomerCardUpdateBodyOwner | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (("company" | "individual") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$CustomerCardUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (External$CustomerCardUpdateBodyOwner | undefined)
    | External$CustomerCardUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCardUpdateBody
 */
const SchemaIn$CustomerCardUpdateBody: z.ZodType<
  CustomerCardUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().optional(),
    account_holder_type: z.enum(["company", "individual"]).optional(),
    address_city: z.string().optional(),
    address_country: z.string().optional(),
    address_line1: z.string().optional(),
    address_line2: z.string().optional(),
    address_state: z.string().optional(),
    address_zip: z.string().optional(),
    exp_month: z.string().optional(),
    exp_year: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CustomerCardUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    owner: Schemas$CustomerCardUpdateBodyOwner.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      exp_month: "expMonth",
      exp_year: "expYear",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      owner: "owner",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCardUpdateBody
 */
const SchemaOut$CustomerCardUpdateBody: z.ZodType<
  External$CustomerCardUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerCardUpdateBody // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    addressCity: z.string().optional(),
    addressCountry: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressState: z.string().optional(),
    addressZip: z.string().optional(),
    expMonth: z.string().optional(),
    expYear: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CustomerCardUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    owner: Schemas$CustomerCardUpdateBodyOwner.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      expMonth: "exp_month",
      expYear: "exp_year",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      owner: "owner",
    });
  });

export const Schemas$CustomerCardUpdateBody = {
  in: SchemaIn$CustomerCardUpdateBody,
  out: SchemaOut$CustomerCardUpdateBody,
};
