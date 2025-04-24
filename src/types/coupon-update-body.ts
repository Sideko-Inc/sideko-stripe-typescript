import {
  CouponUpdateBodyCurrencyOptions,
  External$CouponUpdateBodyCurrencyOptions,
  Schemas$CouponUpdateBodyCurrencyOptions,
} from "./coupon-update-body-currency-options";
import {
  CouponUpdateBodyMetadataObj0,
  External$CouponUpdateBodyMetadataObj0,
  Schemas$CouponUpdateBodyMetadataObj0,
} from "./coupon-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponUpdateBody
 */
export type CouponUpdateBody = {
  /**
   * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CouponUpdateBodyCurrencyOptions | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CouponUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (CouponUpdateBodyCurrencyOptions | undefined)
    | (string[] | undefined)
    | ((CouponUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CouponUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponUpdateBody = {
  currency_options?: External$CouponUpdateBodyCurrencyOptions | undefined;
  expand?: string[] | undefined;
  metadata?: (External$CouponUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;

  [additionalProperty: string]:
    | (External$CouponUpdateBodyCurrencyOptions | undefined)
    | (string[] | undefined)
    | ((External$CouponUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | External$CouponUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponUpdateBody
 */
const SchemaIn$CouponUpdateBody: z.ZodType<
  CouponUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency_options: Schemas$CouponUpdateBodyCurrencyOptions.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CouponUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      currency_options: "currencyOptions",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponUpdateBody
 */
const SchemaOut$CouponUpdateBody: z.ZodType<
  External$CouponUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  CouponUpdateBody // the object to be transformed
> = z
  .object({
    currencyOptions: Schemas$CouponUpdateBodyCurrencyOptions.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CouponUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      currencyOptions: "currency_options",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$CouponUpdateBody = {
  in: SchemaIn$CouponUpdateBody,
  out: SchemaOut$CouponUpdateBody,
};
