import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemMetadata
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata = {
  [additionalProperty: string]:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemMetadata
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata = {
  in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata,
  out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata,
};
