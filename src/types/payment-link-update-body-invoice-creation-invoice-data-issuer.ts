import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer
 */
export type PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer
 */
const SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer: z.ZodType<
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer
 */
const SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer: z.ZodType<
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer = {
  in: SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer,
  out: SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer,
};
