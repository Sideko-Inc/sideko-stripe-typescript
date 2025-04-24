import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItem,
  InvoicePreviewBodyScheduleDetailsPhasesItem,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItem,
} from "./invoice-preview-body-schedule-details-phases-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The schedule creation or modification params to apply as a preview. Cannot be used with `subscription` or `subscription_` prefixed fields.
 */
export type InvoicePreviewBodyScheduleDetails = {
  endBehavior?: ("cancel" | "release") | undefined;
  phases?: InvoicePreviewBodyScheduleDetailsPhasesItem[] | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetails = {
  end_behavior?: ("cancel" | "release") | undefined;
  phases?: External$InvoicePreviewBodyScheduleDetailsPhasesItem[] | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetails
 */
const SchemaIn$InvoicePreviewBodyScheduleDetails: z.ZodType<
  InvoicePreviewBodyScheduleDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior: z.enum(["cancel", "release"]).optional(),
    phases: z
      .array(Schemas$InvoicePreviewBodyScheduleDetailsPhasesItem.in)
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
      phases: "phases",
      proration_behavior: "prorationBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetails
 */
const SchemaOut$InvoicePreviewBodyScheduleDetails: z.ZodType<
  External$InvoicePreviewBodyScheduleDetails, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetails // the object to be transformed
> = z
  .object({
    endBehavior: z.enum(["cancel", "release"]).optional(),
    phases: z
      .array(Schemas$InvoicePreviewBodyScheduleDetailsPhasesItem.out)
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
      phases: "phases",
      prorationBehavior: "proration_behavior",
    });
  });

export const Schemas$InvoicePreviewBodyScheduleDetails = {
  in: SchemaIn$InvoicePreviewBodyScheduleDetails,
  out: SchemaOut$InvoicePreviewBodyScheduleDetails,
};
