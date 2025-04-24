import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type TerminalReaderRefundPaymentBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TerminalReaderRefundPaymentBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderRefundPaymentBodyMetadata = {
  [additionalProperty: string]:
    | External$TerminalReaderRefundPaymentBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderRefundPaymentBodyMetadata
 */
const SchemaIn$TerminalReaderRefundPaymentBodyMetadata: z.ZodType<
  TerminalReaderRefundPaymentBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderRefundPaymentBodyMetadata
 */
const SchemaOut$TerminalReaderRefundPaymentBodyMetadata: z.ZodType<
  External$TerminalReaderRefundPaymentBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderRefundPaymentBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TerminalReaderRefundPaymentBodyMetadata = {
  in: SchemaIn$TerminalReaderRefundPaymentBodyMetadata,
  out: SchemaOut$TerminalReaderRefundPaymentBodyMetadata,
};
