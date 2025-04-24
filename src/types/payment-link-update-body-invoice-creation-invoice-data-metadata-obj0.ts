import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0
 */
export type PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0 =
  {
    [additionalProperty: string]:
      | External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0
 */
const SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0: z.ZodType<
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0
 */
const SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0: z.ZodType<
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0 =
  {
    in: SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0,
    out: SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0,
  };
