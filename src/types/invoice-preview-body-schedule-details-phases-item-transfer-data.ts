import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemTransferData
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemTransferData = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemTransferData
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_percent: z.number().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_percent: "amountPercent",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemTransferData // the object to be transformed
> = z
  .object({
    amountPercent: z.number().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountPercent: "amount_percent",
      destination: "destination",
    });
  });

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData = {
  in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData,
  out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData,
};
