import {
  External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate,
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-delivery-estimate";
import {
  External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount,
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmount,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-fixed-amount";
import {
  External$InvoiceCreateBodyShippingCostShippingRateDataMetadata,
  InvoiceCreateBodyShippingCostShippingRateDataMetadata,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataMetadata,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateData
 */
export type InvoiceCreateBodyShippingCostShippingRateData = {
  deliveryEstimate?:
    | InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate
    | undefined;
  displayName: string;
  fixedAmount?:
    | InvoiceCreateBodyShippingCostShippingRateDataFixedAmount
    | undefined;
  metadata?: InvoiceCreateBodyShippingCostShippingRateDataMetadata | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  taxCode?: string | undefined;
  type?: "fixed_amount" | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateData = {
  delivery_estimate?:
    | External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate
    | undefined;
  display_name: string;
  fixed_amount?:
    | External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount
    | undefined;
  metadata?:
    | External$InvoiceCreateBodyShippingCostShippingRateDataMetadata
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: string | undefined;
  type?: "fixed_amount" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateData
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateData: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delivery_estimate:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate.in.optional(),
    display_name: z.string(),
    fixed_amount:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount.in.optional(),
    metadata:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateData
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateData: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateData // the object to be transformed
> = z
  .object({
    deliveryEstimate:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate.out.optional(),
    displayName: z.string(),
    fixedAmount:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount.out.optional(),
    metadata:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataMetadata.out.optional(),
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

export const Schemas$InvoiceCreateBodyShippingCostShippingRateData = {
  in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateData,
  out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateData,
};
