import {
  CheckoutSessionCreateBodyLineItemsItemPriceDataProductData,
  External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData,
  Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData,
} from "./checkout-session-create-body-line-items-item-price-data-product-data";
import {
  CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring,
  External$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring,
  Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring,
} from "./checkout-session-create-body-line-items-item-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyLineItemsItemPriceData
 */
export type CheckoutSessionCreateBodyLineItemsItemPriceData = {
  currency: string;
  product?: string | undefined;
  productData?:
    | CheckoutSessionCreateBodyLineItemsItemPriceDataProductData
    | undefined;
  recurring?:
    | CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyLineItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyLineItemsItemPriceData = {
  currency: string;
  product?: string | undefined;
  product_data?:
    | External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData
    | undefined;
  recurring?:
    | External$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyLineItemsItemPriceData
 */
const SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceData: z.ZodType<
  CheckoutSessionCreateBodyLineItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    product_data:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData.in.optional(),
    recurring:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      product_data: "productData",
      recurring: "recurring",
      tax_behavior: "taxBehavior",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyLineItemsItemPriceData
 */
const SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceData: z.ZodType<
  External$CheckoutSessionCreateBodyLineItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyLineItemsItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    productData:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData.out.optional(),
    recurring:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      productData: "product_data",
      recurring: "recurring",
      taxBehavior: "tax_behavior",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$CheckoutSessionCreateBodyLineItemsItemPriceData = {
  in: SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceData,
  out: SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceData,
};
