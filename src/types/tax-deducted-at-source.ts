import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxDeductedAtSource = {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax_deducted_at_source";
  /**
   * The end of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
   */
  periodEnd: number;
  /**
   * The start of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
   */
  periodStart: number;
  /**
   * The TAN that was supplied to Stripe when TDS was assessed
   */
  taxDeductionAccountNumber: string;
};

/**
 * @internal
 * TaxDeductedAtSource without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxDeductedAtSource = {
  id: string;
  object: "tax_deducted_at_source";
  period_end: number;
  period_start: number;
  tax_deduction_account_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxDeductedAtSource
 */
const SchemaIn$TaxDeductedAtSource: z.ZodType<
  TaxDeductedAtSource, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    object: z.enum(["tax_deducted_at_source"]),
    period_end: z.number().int(),
    period_start: z.number().int(),
    tax_deduction_account_number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      object: "object",
      period_end: "periodEnd",
      period_start: "periodStart",
      tax_deduction_account_number: "taxDeductionAccountNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxDeductedAtSource
 */
const SchemaOut$TaxDeductedAtSource: z.ZodType<
  External$TaxDeductedAtSource, // output type of this zod object
  z.ZodTypeDef,
  TaxDeductedAtSource // the object to be transformed
> = z
  .object({
    id: z.string(),
    object: z.enum(["tax_deducted_at_source"]),
    periodEnd: z.number().int(),
    periodStart: z.number().int(),
    taxDeductionAccountNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      object: "object",
      periodEnd: "period_end",
      periodStart: "period_start",
      taxDeductionAccountNumber: "tax_deduction_account_number",
    });
  });

export const Schemas$TaxDeductedAtSource = {
  in: SchemaIn$TaxDeductedAtSource,
  out: SchemaOut$TaxDeductedAtSource,
};
