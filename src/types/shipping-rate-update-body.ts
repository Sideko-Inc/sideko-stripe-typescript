import {
  External$ShippingRateUpdateBodyFixedAmount,
  Schemas$ShippingRateUpdateBodyFixedAmount,
  ShippingRateUpdateBodyFixedAmount,
} from "./shipping-rate-update-body-fixed-amount";
import {
  External$ShippingRateUpdateBodyMetadataObj0,
  Schemas$ShippingRateUpdateBodyMetadataObj0,
  ShippingRateUpdateBodyMetadataObj0,
} from "./shipping-rate-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateUpdateBody
 */
export type ShippingRateUpdateBody = {
  /**
   * Whether the shipping rate can be used for new purchases. Defaults to `true`.
   */
  active?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixedAmount?: ShippingRateUpdateBodyFixedAmount | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ShippingRateUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | (ShippingRateUpdateBodyFixedAmount | undefined)
    | ((ShippingRateUpdateBodyMetadataObj0 | string) | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ShippingRateUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateUpdateBody = {
  active?: boolean | undefined;
  expand?: string[] | undefined;
  fixed_amount?: External$ShippingRateUpdateBodyFixedAmount | undefined;
  metadata?: (External$ShippingRateUpdateBodyMetadataObj0 | string) | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | (External$ShippingRateUpdateBodyFixedAmount | undefined)
    | ((External$ShippingRateUpdateBodyMetadataObj0 | string) | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | External$ShippingRateUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateUpdateBody
 */
const SchemaIn$ShippingRateUpdateBody: z.ZodType<
  ShippingRateUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    fixed_amount: Schemas$ShippingRateUpdateBodyFixedAmount.in.optional(),
    metadata: z
      .union([Schemas$ShippingRateUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      fixed_amount: "fixedAmount",
      metadata: "metadata",
      tax_behavior: "taxBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateUpdateBody
 */
const SchemaOut$ShippingRateUpdateBody: z.ZodType<
  External$ShippingRateUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    fixedAmount: Schemas$ShippingRateUpdateBodyFixedAmount.out.optional(),
    metadata: z
      .union([Schemas$ShippingRateUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      fixedAmount: "fixed_amount",
      metadata: "metadata",
      taxBehavior: "tax_behavior",
    });
  });

export const Schemas$ShippingRateUpdateBody = {
  in: SchemaIn$ShippingRateUpdateBody,
  out: SchemaOut$ShippingRateUpdateBody,
};
