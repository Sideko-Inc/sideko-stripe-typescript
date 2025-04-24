import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-delivery-estimate";
import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-fixed-amount";
import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateData
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateData = {
  deliveryEstimate?:
    | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate
    | undefined;
  displayName: string;
  fixedAmount?:
    | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount
    | undefined;
  metadata?:
    | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  taxCode?: string | undefined;
  type?: "fixed_amount" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData =
  {
    delivery_estimate?:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate
      | undefined;
    display_name: string;
    fixed_amount?:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount
      | undefined;
    metadata?:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata
      | undefined;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
    tax_code?: string | undefined;
    type?: "fixed_amount" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateData
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delivery_estimate:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate.in.optional(),
    display_name: z.string(),
    fixed_amount:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount.in.optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tax_code: z.string().optional(),
    type: z.enum(["fixed_amount"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delivery_estimate: "deliveryEstimate",
      display_name: "displayName",
      fixed_amount: "fixedAmount",
      metadata: "metadata",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateData // the object to be transformed
> = z
  .object({
    deliveryEstimate:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate.out.optional(),
    displayName: z.string(),
    fixedAmount:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount.out.optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    taxCode: z.string().optional(),
    type: z.enum(["fixed_amount"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deliveryEstimate: "delivery_estimate",
      displayName: "display_name",
      fixedAmount: "fixed_amount",
      metadata: "metadata",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      type: "type",
    });
  });

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData,
  };
