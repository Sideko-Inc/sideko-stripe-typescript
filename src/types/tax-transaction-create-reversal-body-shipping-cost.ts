import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The shipping cost to reverse.
 */
export type TaxTransactionCreateReversalBodyShippingCost = {
  amount: number;
  amountTax: number;
};

/**
 * @internal
 * TaxTransactionCreateReversalBodyShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionCreateReversalBodyShippingCost = {
  amount: number;
  amount_tax: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionCreateReversalBodyShippingCost
 */
const SchemaIn$TaxTransactionCreateReversalBodyShippingCost: z.ZodType<
  TaxTransactionCreateReversalBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_tax: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_tax: "amountTax",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionCreateReversalBodyShippingCost
 */
const SchemaOut$TaxTransactionCreateReversalBodyShippingCost: z.ZodType<
  External$TaxTransactionCreateReversalBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionCreateReversalBodyShippingCost // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountTax: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountTax: "amount_tax",
    });
  });

export const Schemas$TaxTransactionCreateReversalBodyShippingCost = {
  in: SchemaIn$TaxTransactionCreateReversalBodyShippingCost,
  out: SchemaOut$TaxTransactionCreateReversalBodyShippingCost,
};
