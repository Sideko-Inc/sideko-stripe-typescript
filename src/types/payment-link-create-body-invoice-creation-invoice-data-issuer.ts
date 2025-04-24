import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer
 */
export type PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer
 */
const SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer: z.ZodType<
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer
 */
const SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer: z.ZodType<
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer = {
  in: SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer,
  out: SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer,
};
