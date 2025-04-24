import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxTransactionLineItemResourceReversal = {
  /**
   * The `id` of the line item to reverse in the original transaction.
   */
  originalLineItem: string;
};

/**
 * @internal
 * TaxProductResourceTaxTransactionLineItemResourceReversal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxTransactionLineItemResourceReversal =
  {
    original_line_item: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxTransactionLineItemResourceReversal
 */
const SchemaIn$TaxProductResourceTaxTransactionLineItemResourceReversal: z.ZodType<
  TaxProductResourceTaxTransactionLineItemResourceReversal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    original_line_item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      original_line_item: "originalLineItem",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxTransactionLineItemResourceReversal
 */
const SchemaOut$TaxProductResourceTaxTransactionLineItemResourceReversal: z.ZodType<
  External$TaxProductResourceTaxTransactionLineItemResourceReversal, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxTransactionLineItemResourceReversal // the object to be transformed
> = z
  .object({
    originalLineItem: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      originalLineItem: "original_line_item",
    });
  });

export const Schemas$TaxProductResourceTaxTransactionLineItemResourceReversal =
  {
    in: SchemaIn$TaxProductResourceTaxTransactionLineItemResourceReversal,
    out: SchemaOut$TaxProductResourceTaxTransactionLineItemResourceReversal,
  };
