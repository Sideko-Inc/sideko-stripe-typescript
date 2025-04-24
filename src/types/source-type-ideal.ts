import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeIdeal
 */
export type SourceTypeIdeal = {
  bank?: string | null | undefined;
  bic?: string | null | undefined;
  ibanLast4?: string | null | undefined;
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeIdeal = {
  bank?: string | null | undefined;
  bic?: string | null | undefined;
  iban_last4?: string | null | undefined;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeIdeal
 */
const SchemaIn$SourceTypeIdeal: z.ZodType<
  SourceTypeIdeal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    iban_last4: z.string().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
      bic: "bic",
      iban_last4: "ibanLast4",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeIdeal
 */
const SchemaOut$SourceTypeIdeal: z.ZodType<
  External$SourceTypeIdeal, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeIdeal // the object to be transformed
> = z
  .object({
    bank: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    ibanLast4: z.string().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
      bic: "bic",
      ibanLast4: "iban_last4",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeIdeal = {
  in: SchemaIn$SourceTypeIdeal,
  out: SchemaOut$SourceTypeIdeal,
};
