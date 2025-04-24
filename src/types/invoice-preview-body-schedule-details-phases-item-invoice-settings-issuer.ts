import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer =
  {
    in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer,
    out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer,
  };
