import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyInvoiceSettingsIssuer
 */
export type QuoteUpdateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * QuoteUpdateBodyInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyInvoiceSettingsIssuer
 */
const SchemaIn$QuoteUpdateBodyInvoiceSettingsIssuer: z.ZodType<
  QuoteUpdateBodyInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyInvoiceSettingsIssuer
 */
const SchemaOut$QuoteUpdateBodyInvoiceSettingsIssuer: z.ZodType<
  External$QuoteUpdateBodyInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$QuoteUpdateBodyInvoiceSettingsIssuer = {
  in: SchemaIn$QuoteUpdateBodyInvoiceSettingsIssuer,
  out: SchemaOut$QuoteUpdateBodyInvoiceSettingsIssuer,
};
