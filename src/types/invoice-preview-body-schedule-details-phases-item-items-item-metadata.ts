import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata =
  {
    [additionalProperty: string]:
      | External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata =
  {
    in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata,
    out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata,
  };
