import {
  External$ShippingRateCreateBodyDeliveryEstimate,
  Schemas$ShippingRateCreateBodyDeliveryEstimate,
  ShippingRateCreateBodyDeliveryEstimate,
} from "./shipping-rate-create-body-delivery-estimate";
import {
  External$ShippingRateCreateBodyFixedAmount,
  Schemas$ShippingRateCreateBodyFixedAmount,
  ShippingRateCreateBodyFixedAmount,
} from "./shipping-rate-create-body-fixed-amount";
import {
  External$ShippingRateCreateBodyMetadata,
  Schemas$ShippingRateCreateBodyMetadata,
  ShippingRateCreateBodyMetadata,
} from "./shipping-rate-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateCreateBody
 */
export type ShippingRateCreateBody = {
  /**
   * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  deliveryEstimate?: ShippingRateCreateBodyDeliveryEstimate | undefined;
  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixedAmount?: ShippingRateCreateBodyFixedAmount | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ShippingRateCreateBodyMetadata | undefined;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  taxCode?: string | undefined;
  /**
   * The type of calculation to use on the shipping rate.
   */
  type?: "fixed_amount" | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (ShippingRateCreateBodyDeliveryEstimate | undefined)
    | string
    | (string[] | undefined)
    | (ShippingRateCreateBodyFixedAmount | undefined)
    | (ShippingRateCreateBodyMetadata | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | (string | undefined)
    | ("fixed_amount" | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ShippingRateCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBody = {
  delivery_estimate?:
    | External$ShippingRateCreateBodyDeliveryEstimate
    | undefined;
  display_name: string;
  expand?: string[] | undefined;
  fixed_amount?: External$ShippingRateCreateBodyFixedAmount | undefined;
  metadata?: External$ShippingRateCreateBodyMetadata | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: string | undefined;
  type?: "fixed_amount" | undefined;

  [additionalProperty: string]:
    | (External$ShippingRateCreateBodyDeliveryEstimate | undefined)
    | string
    | (string[] | undefined)
    | (External$ShippingRateCreateBodyFixedAmount | undefined)
    | (External$ShippingRateCreateBodyMetadata | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | (string | undefined)
    | ("fixed_amount" | undefined)
    | External$ShippingRateCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBody
 */
const SchemaIn$ShippingRateCreateBody: z.ZodType<
  ShippingRateCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delivery_estimate:
      Schemas$ShippingRateCreateBodyDeliveryEstimate.in.optional(),
    display_name: z.string(),
    expand: z.array(z.string()).optional(),
    fixed_amount: Schemas$ShippingRateCreateBodyFixedAmount.in.optional(),
    metadata: Schemas$ShippingRateCreateBodyMetadata.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tax_code: z.string().optional(),
    type: z.enum(["fixed_amount"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      delivery_estimate: "deliveryEstimate",
      display_name: "displayName",
      expand: "expand",
      fixed_amount: "fixedAmount",
      metadata: "metadata",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBody
 */
const SchemaOut$ShippingRateCreateBody: z.ZodType<
  External$ShippingRateCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBody // the object to be transformed
> = z
  .object({
    deliveryEstimate:
      Schemas$ShippingRateCreateBodyDeliveryEstimate.out.optional(),
    displayName: z.string(),
    expand: z.array(z.string()).optional(),
    fixedAmount: Schemas$ShippingRateCreateBodyFixedAmount.out.optional(),
    metadata: Schemas$ShippingRateCreateBodyMetadata.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    taxCode: z.string().optional(),
    type: z.enum(["fixed_amount"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      deliveryEstimate: "delivery_estimate",
      displayName: "display_name",
      expand: "expand",
      fixedAmount: "fixed_amount",
      metadata: "metadata",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      type: "type",
    });
  });

export const Schemas$ShippingRateCreateBody = {
  in: SchemaIn$ShippingRateCreateBody,
  out: SchemaOut$ShippingRateCreateBody,
};
