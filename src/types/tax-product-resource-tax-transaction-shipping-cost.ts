import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxTransactionShippingCost = {
  /**
   * The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
   */
  amount: number;
  /**
   * The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTax: number;
  /**
   * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object).
   */
  shippingRate?: string | undefined;
  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  taxBehavior: "exclusive" | "inclusive";
  /**
   * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
   */
  taxCode: string;
};

/**
 * @internal
 * TaxProductResourceTaxTransactionShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxTransactionShippingCost = {
  amount: number;
  amount_tax: number;
  shipping_rate?: string | undefined;
  tax_behavior: "exclusive" | "inclusive";
  tax_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxTransactionShippingCost
 */
const SchemaIn$TaxProductResourceTaxTransactionShippingCost: z.ZodType<
  TaxProductResourceTaxTransactionShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_tax: z.number().int(),
    shipping_rate: z.string().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive"]),
    tax_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_tax: "amountTax",
      shipping_rate: "shippingRate",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxTransactionShippingCost
 */
const SchemaOut$TaxProductResourceTaxTransactionShippingCost: z.ZodType<
  External$TaxProductResourceTaxTransactionShippingCost, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxTransactionShippingCost // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountTax: z.number().int(),
    shippingRate: z.string().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive"]),
    taxCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountTax: "amount_tax",
      shippingRate: "shipping_rate",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxProductResourceTaxTransactionShippingCost = {
  in: SchemaIn$TaxProductResourceTaxTransactionShippingCost,
  out: SchemaOut$TaxProductResourceTaxTransactionShippingCost,
};
