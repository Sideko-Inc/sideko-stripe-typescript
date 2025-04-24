import {
  External$ShippingRateDeliveryEstimate,
  Schemas$ShippingRateDeliveryEstimate,
  ShippingRateDeliveryEstimate,
} from "./shipping-rate-delivery-estimate";
import {
  External$ShippingRateFixedAmount,
  Schemas$ShippingRateFixedAmount,
  ShippingRateFixedAmount,
} from "./shipping-rate-fixed-amount";
import {
  External$ShippingRateMetadata,
  Schemas$ShippingRateMetadata,
  ShippingRateMetadata,
} from "./shipping-rate-metadata";
import { External$TaxCode, Schemas$TaxCode, TaxCode } from "./tax-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping rates describe the price of shipping presented to your customers and
 * applied to a purchase. For more information, see [Charge for shipping](https://stripe.com/docs/payments/during-payment/charge-shipping).
 */
export type ShippingRate = {
  /**
   * Whether the shipping rate can be used for new purchases. Defaults to `true`.
   */
  active: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  deliveryEstimate?: ShippingRateDeliveryEstimate | undefined;
  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  displayName?: string | null | undefined;
  fixedAmount?: ShippingRateFixedAmount | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: ShippingRateMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "shipping_rate";
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | null | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  taxCode?: (string | TaxCode) | undefined;
  /**
   * The type of calculation to use on the shipping rate.
   */
  type: "fixed_amount";
};

/**
 * @internal
 * ShippingRate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRate = {
  active: boolean;
  created: number;
  delivery_estimate?: External$ShippingRateDeliveryEstimate | undefined;
  display_name?: string | null | undefined;
  fixed_amount?: External$ShippingRateFixedAmount | undefined;
  id: string;
  livemode: boolean;
  metadata: External$ShippingRateMetadata;
  object: "shipping_rate";
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | null | undefined;
  tax_code?: (string | External$TaxCode) | undefined;
  type: "fixed_amount";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRate
 */
const SchemaIn$ShippingRate: z.ZodType<
  ShippingRate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    created: z.number().int(),
    delivery_estimate: Schemas$ShippingRateDeliveryEstimate.in.optional(),
    display_name: z.string().nullable().optional(),
    fixed_amount: Schemas$ShippingRateFixedAmount.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ShippingRateMetadata.in,
    object: z.enum(["shipping_rate"]),
    tax_behavior: z
      .enum(["exclusive", "inclusive", "unspecified"])
      .nullable()
      .optional(),
    tax_code: z.union([z.string(), Schemas$TaxCode.in]).optional(),
    type: z.enum(["fixed_amount"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      delivery_estimate: "deliveryEstimate",
      display_name: "displayName",
      fixed_amount: "fixedAmount",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRate
 */
const SchemaOut$ShippingRate: z.ZodType<
  External$ShippingRate, // output type of this zod object
  z.ZodTypeDef,
  ShippingRate // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    created: z.number().int(),
    deliveryEstimate: Schemas$ShippingRateDeliveryEstimate.out.optional(),
    displayName: z.string().nullable().optional(),
    fixedAmount: Schemas$ShippingRateFixedAmount.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ShippingRateMetadata.out,
    object: z.enum(["shipping_rate"]),
    taxBehavior: z
      .enum(["exclusive", "inclusive", "unspecified"])
      .nullable()
      .optional(),
    taxCode: z.union([z.string(), Schemas$TaxCode.out]).optional(),
    type: z.enum(["fixed_amount"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      deliveryEstimate: "delivery_estimate",
      displayName: "display_name",
      fixedAmount: "fixed_amount",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      type: "type",
    });
  });

export const Schemas$ShippingRate = {
  in: SchemaIn$ShippingRate,
  out: SchemaOut$ShippingRate,
};
