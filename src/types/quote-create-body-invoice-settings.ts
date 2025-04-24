import {
  External$QuoteCreateBodyInvoiceSettingsIssuer,
  QuoteCreateBodyInvoiceSettingsIssuer,
  Schemas$QuoteCreateBodyInvoiceSettingsIssuer,
} from "./quote-create-body-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * All invoices will be billed using the specified settings.
 */
export type QuoteCreateBodyInvoiceSettings = {
  daysUntilDue?: number | undefined;
  issuer?: QuoteCreateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * @internal
 * QuoteCreateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyInvoiceSettings = {
  days_until_due?: number | undefined;
  issuer?: External$QuoteCreateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyInvoiceSettings
 */
const SchemaIn$QuoteCreateBodyInvoiceSettings: z.ZodType<
  QuoteCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    days_until_due: z.number().int().optional(),
    issuer: Schemas$QuoteCreateBodyInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      days_until_due: "daysUntilDue",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyInvoiceSettings
 */
const SchemaOut$QuoteCreateBodyInvoiceSettings: z.ZodType<
  External$QuoteCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    daysUntilDue: z.number().int().optional(),
    issuer: Schemas$QuoteCreateBodyInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$QuoteCreateBodyInvoiceSettings = {
  in: SchemaIn$QuoteCreateBodyInvoiceSettings,
  out: SchemaOut$QuoteCreateBodyInvoiceSettings,
};
