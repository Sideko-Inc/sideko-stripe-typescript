import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability =
  {
    in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability,
    out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability,
  };
