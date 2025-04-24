import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
 */
export type InvoiceUpdateBodyIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * InvoiceUpdateBodyIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyIssuer
 */
const SchemaIn$InvoiceUpdateBodyIssuer: z.ZodType<
  InvoiceUpdateBodyIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyIssuer
 */
const SchemaOut$InvoiceUpdateBodyIssuer: z.ZodType<
  External$InvoiceUpdateBodyIssuer, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyIssuer // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyIssuer = {
  in: SchemaIn$InvoiceUpdateBodyIssuer,
  out: SchemaOut$InvoiceUpdateBodyIssuer,
};
