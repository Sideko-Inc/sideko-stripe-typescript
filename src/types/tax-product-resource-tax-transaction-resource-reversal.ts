import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxTransactionResourceReversal = {
  /**
   * The `id` of the reversed `Transaction` object.
   */
  originalTransaction?: string | null | undefined;
};

/**
 * @internal
 * TaxProductResourceTaxTransactionResourceReversal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxTransactionResourceReversal = {
  original_transaction?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxTransactionResourceReversal
 */
const SchemaIn$TaxProductResourceTaxTransactionResourceReversal: z.ZodType<
  TaxProductResourceTaxTransactionResourceReversal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    original_transaction: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      original_transaction: "originalTransaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxTransactionResourceReversal
 */
const SchemaOut$TaxProductResourceTaxTransactionResourceReversal: z.ZodType<
  External$TaxProductResourceTaxTransactionResourceReversal, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxTransactionResourceReversal // the object to be transformed
> = z
  .object({
    originalTransaction: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      originalTransaction: "original_transaction",
    });
  });

export const Schemas$TaxProductResourceTaxTransactionResourceReversal = {
  in: SchemaIn$TaxProductResourceTaxTransactionResourceReversal,
  out: SchemaOut$TaxProductResourceTaxTransactionResourceReversal,
};
