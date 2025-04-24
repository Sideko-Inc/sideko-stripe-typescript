import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceTransactionPaperCheckData = {
  /**
   * Time at which the deposited funds will be available for use. Measured in seconds since the Unix epoch.
   */
  availableAt?: string | undefined;
  /**
   * Comma-separated list of invoice IDs associated with the paper check.
   */
  invoices?: string | undefined;
};

/**
 * @internal
 * SourceTransactionPaperCheckData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTransactionPaperCheckData = {
  available_at?: string | undefined;
  invoices?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTransactionPaperCheckData
 */
const SchemaIn$SourceTransactionPaperCheckData: z.ZodType<
  SourceTransactionPaperCheckData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available_at: z.string().optional(),
    invoices: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available_at: "availableAt",
      invoices: "invoices",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTransactionPaperCheckData
 */
const SchemaOut$SourceTransactionPaperCheckData: z.ZodType<
  External$SourceTransactionPaperCheckData, // output type of this zod object
  z.ZodTypeDef,
  SourceTransactionPaperCheckData // the object to be transformed
> = z
  .object({
    availableAt: z.string().optional(),
    invoices: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availableAt: "available_at",
      invoices: "invoices",
    });
  });

export const Schemas$SourceTransactionPaperCheckData = {
  in: SchemaIn$SourceTransactionPaperCheckData,
  out: SchemaOut$SourceTransactionPaperCheckData,
};
