import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxCalculationCreateBodyLineItemsItem
 */
export type TaxCalculationCreateBodyLineItemsItem = {
  amount: number;
  product?: string | undefined;
  quantity?: number | undefined;
  reference?: string | undefined;
  taxBehavior?: ("exclusive" | "inclusive") | undefined;
  taxCode?: string | undefined;
};

/**
 * @internal
 * TaxCalculationCreateBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationCreateBodyLineItemsItem = {
  amount: number;
  product?: string | undefined;
  quantity?: number | undefined;
  reference?: string | undefined;
  tax_behavior?: ("exclusive" | "inclusive") | undefined;
  tax_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationCreateBodyLineItemsItem
 */
const SchemaIn$TaxCalculationCreateBodyLineItemsItem: z.ZodType<
  TaxCalculationCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    product: z.string().optional(),
    quantity: z.number().int().optional(),
    reference: z.string().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive"]).optional(),
    tax_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      product: "product",
      quantity: "quantity",
      reference: "reference",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationCreateBodyLineItemsItem
 */
const SchemaOut$TaxCalculationCreateBodyLineItemsItem: z.ZodType<
  External$TaxCalculationCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationCreateBodyLineItemsItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    product: z.string().optional(),
    quantity: z.number().int().optional(),
    reference: z.string().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive"]).optional(),
    taxCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      product: "product",
      quantity: "quantity",
      reference: "reference",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxCalculationCreateBodyLineItemsItem = {
  in: SchemaIn$TaxCalculationCreateBodyLineItemsItem,
  out: SchemaOut$TaxCalculationCreateBodyLineItemsItem,
};
