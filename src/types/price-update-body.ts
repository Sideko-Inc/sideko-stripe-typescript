import {
  External$PriceUpdateBodyCurrencyOptionsObj0,
  PriceUpdateBodyCurrencyOptionsObj0,
  Schemas$PriceUpdateBodyCurrencyOptionsObj0,
} from "./price-update-body-currency-options-obj0";
import {
  External$PriceUpdateBodyMetadataObj0,
  PriceUpdateBodyMetadataObj0,
  Schemas$PriceUpdateBodyMetadataObj0,
} from "./price-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceUpdateBody
 */
export type PriceUpdateBody = {
  /**
   * Whether the price can be used for new purchases. Defaults to `true`.
   */
  active?: boolean | undefined;
  /**
   * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: (PriceUpdateBodyCurrencyOptionsObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PriceUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * A brief description of the price, hidden from customers.
   */
  nickname?: string | undefined;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  /**
   * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
   */
  transferLookupKey?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | ((PriceUpdateBodyCurrencyOptionsObj0 | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((PriceUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PriceUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceUpdateBody = {
  active?: boolean | undefined;
  currency_options?:
    | (External$PriceUpdateBodyCurrencyOptionsObj0 | string)
    | undefined;
  expand?: string[] | undefined;
  lookup_key?: string | undefined;
  metadata?: (External$PriceUpdateBodyMetadataObj0 | string) | undefined;
  nickname?: string | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  transfer_lookup_key?: boolean | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | ((External$PriceUpdateBodyCurrencyOptionsObj0 | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((External$PriceUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | (boolean | undefined)
    | External$PriceUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceUpdateBody
 */
const SchemaIn$PriceUpdateBody: z.ZodType<
  PriceUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    currency_options: z
      .union([Schemas$PriceUpdateBodyCurrencyOptionsObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    lookup_key: z.string().optional(),
    metadata: z
      .union([Schemas$PriceUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    nickname: z.string().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    transfer_lookup_key: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      currency_options: "currencyOptions",
      expand: "expand",
      lookup_key: "lookupKey",
      metadata: "metadata",
      nickname: "nickname",
      tax_behavior: "taxBehavior",
      transfer_lookup_key: "transferLookupKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceUpdateBody
 */
const SchemaOut$PriceUpdateBody: z.ZodType<
  External$PriceUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PriceUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    currencyOptions: z
      .union([Schemas$PriceUpdateBodyCurrencyOptionsObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    lookupKey: z.string().optional(),
    metadata: z
      .union([Schemas$PriceUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    nickname: z.string().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    transferLookupKey: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      currencyOptions: "currency_options",
      expand: "expand",
      lookupKey: "lookup_key",
      metadata: "metadata",
      nickname: "nickname",
      taxBehavior: "tax_behavior",
      transferLookupKey: "transfer_lookup_key",
    });
  });

export const Schemas$PriceUpdateBody = {
  in: SchemaIn$PriceUpdateBody,
  out: SchemaOut$PriceUpdateBody,
};
