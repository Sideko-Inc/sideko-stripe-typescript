import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0
 */
export type InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0 =
  {
    [additionalProperty: string]:
      | External$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0
 */
const SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0: z.ZodType<
  InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0
 */
const SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0: z.ZodType<
  External$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0 =
  {
    in: SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0,
    out: SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0,
  };
