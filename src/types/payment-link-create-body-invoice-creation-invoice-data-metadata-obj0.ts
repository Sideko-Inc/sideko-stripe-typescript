import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0
 */
export type PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0 =
  {
    [additionalProperty: string]:
      | External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0
 */
const SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0: z.ZodType<
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0
 */
const SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0: z.ZodType<
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0 =
  {
    in: SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0,
    out: SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0,
  };
