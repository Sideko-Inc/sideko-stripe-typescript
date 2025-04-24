import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-delivery-estimate";
import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-fixed-amount";
import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData = {
  deliveryEstimate?:
    | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate
    | undefined;
  displayName: string;
  fixedAmount?:
    | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount
    | undefined;
  metadata?:
    | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  taxCode?: string | undefined;
  type?: "fixed_amount" | undefined;
};

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData =
  {
    delivery_estimate?:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate
      | undefined;
    display_name: string;
    fixed_amount?:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount
      | undefined;
    metadata?:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata
      | undefined;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
    tax_code?: string | undefined;
    type?: "fixed_amount" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delivery_estimate:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate.in.optional(),
    display_name: z.string(),
    fixed_amount:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount.in.optional(),
    metadata:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData // the object to be transformed
> = z
  .object({
    deliveryEstimate:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate.out.optional(),
    displayName: z.string(),
    fixedAmount:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount.out.optional(),
    metadata:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataMetadata.out.optional(),
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

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData,
  };
