import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingPricingPricingPriceDetails = {
  /**
   * The ID of the price this item is associated with.
   */
  price: string;
  /**
   * The ID of the product this item is associated with.
   */
  product: string;
};

/**
 * @internal
 * BillingBillResourceInvoicingPricingPricingPriceDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingPricingPricingPriceDetails = {
  price: string;
  product: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingPricingPricingPriceDetails
 */
const SchemaIn$BillingBillResourceInvoicingPricingPricingPriceDetails: z.ZodType<
  BillingBillResourceInvoicingPricingPricingPriceDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    price: z.string(),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
      product: "product",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingPricingPricingPriceDetails
 */
const SchemaOut$BillingBillResourceInvoicingPricingPricingPriceDetails: z.ZodType<
  External$BillingBillResourceInvoicingPricingPricingPriceDetails, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingPricingPricingPriceDetails // the object to be transformed
> = z
  .object({
    price: z.string(),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
      product: "product",
    });
  });

export const Schemas$BillingBillResourceInvoicingPricingPricingPriceDetails = {
  in: SchemaIn$BillingBillResourceInvoicingPricingPricingPriceDetails,
  out: SchemaOut$BillingBillResourceInvoicingPricingPricingPriceDetails,
};
