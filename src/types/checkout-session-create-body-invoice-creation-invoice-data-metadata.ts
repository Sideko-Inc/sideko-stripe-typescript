import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata
 */
export type CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata =
  {
    [additionalProperty: string]:
      | External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata
 */
const SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata: z.ZodType<
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata
 */
const SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata: z.ZodType<
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata =
  {
    in: SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata,
    out: SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata,
  };
