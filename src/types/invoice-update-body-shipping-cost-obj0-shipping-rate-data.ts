import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-delivery-estimate";
import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-fixed-amount";
import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateData
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateData = {
  deliveryEstimate?:
    | InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate
    | undefined;
  displayName: string;
  fixedAmount?:
    | InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount
    | undefined;
  metadata?:
    | InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  taxCode?: string | undefined;
  type?: "fixed_amount" | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateData = {
  delivery_estimate?:
    | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate
    | undefined;
  display_name: string;
  fixed_amount?:
    | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount
    | undefined;
  metadata?:
    | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: string | undefined;
  type?: "fixed_amount" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateData
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateData: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delivery_estimate:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate.in.optional(),
    display_name: z.string(),
    fixed_amount:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount.in.optional(),
    metadata:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateData
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateData: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateData // the object to be transformed
> = z
  .object({
    deliveryEstimate:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate.out.optional(),
    displayName: z.string(),
    fixedAmount:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount.out.optional(),
    metadata:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataMetadata.out.optional(),
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

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateData = {
  in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateData,
  out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateData,
};
