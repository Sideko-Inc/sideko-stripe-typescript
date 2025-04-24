import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer
 */
export type CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer
 */
const SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer: z.ZodType<
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer
 */
const SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer: z.ZodType<
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer =
  {
    in: SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer,
    out: SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer,
  };
