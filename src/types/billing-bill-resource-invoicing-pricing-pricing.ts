import {
  BillingBillResourceInvoicingPricingPricingPriceDetails,
  External$BillingBillResourceInvoicingPricingPricingPriceDetails,
  Schemas$BillingBillResourceInvoicingPricingPricingPriceDetails,
} from "./billing-bill-resource-invoicing-pricing-pricing-price-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingPricingPricing = {
  priceDetails?:
    | BillingBillResourceInvoicingPricingPricingPriceDetails
    | undefined;
  /**
   * The type of the pricing details.
   */
  type: "price_details";
  /**
   * The unit amount (in the `currency` specified) of the item which contains a decimal value with at most 12 decimal places.
   */
  unitAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * BillingBillResourceInvoicingPricingPricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingPricingPricing = {
  price_details?:
    | External$BillingBillResourceInvoicingPricingPricingPriceDetails
    | undefined;
  type: "price_details";
  unit_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingPricingPricing
 */
const SchemaIn$BillingBillResourceInvoicingPricingPricing: z.ZodType<
  BillingBillResourceInvoicingPricingPricing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    price_details:
      Schemas$BillingBillResourceInvoicingPricingPricingPriceDetails.in.optional(),
    type: z.enum(["price_details"]),
    unit_amount_decimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price_details: "priceDetails",
      type: "type",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingPricingPricing
 */
const SchemaOut$BillingBillResourceInvoicingPricingPricing: z.ZodType<
  External$BillingBillResourceInvoicingPricingPricing, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingPricingPricing // the object to be transformed
> = z
  .object({
    priceDetails:
      Schemas$BillingBillResourceInvoicingPricingPricingPriceDetails.out.optional(),
    type: z.enum(["price_details"]),
    unitAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      priceDetails: "price_details",
      type: "type",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$BillingBillResourceInvoicingPricingPricing = {
  in: SchemaIn$BillingBillResourceInvoicingPricingPricing,
  out: SchemaOut$BillingBillResourceInvoicingPricingPricing,
};
