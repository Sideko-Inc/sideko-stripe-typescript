import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability,
  InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability,
} from "./invoice-preview-body-schedule-details-phases-item-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax = {
  enabled: boolean;
  liability?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability
    | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax = {
  enabled: boolean;
  liability?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax = {
  in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax,
  out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax,
};
