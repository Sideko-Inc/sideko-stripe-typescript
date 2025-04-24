import {
  External$QuoteUpdateBodyInvoiceSettingsIssuer,
  QuoteUpdateBodyInvoiceSettingsIssuer,
  Schemas$QuoteUpdateBodyInvoiceSettingsIssuer,
} from "./quote-update-body-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * All invoices will be billed using the specified settings.
 */
export type QuoteUpdateBodyInvoiceSettings = {
  daysUntilDue?: number | undefined;
  issuer?: QuoteUpdateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyInvoiceSettings = {
  days_until_due?: number | undefined;
  issuer?: External$QuoteUpdateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyInvoiceSettings
 */
const SchemaIn$QuoteUpdateBodyInvoiceSettings: z.ZodType<
  QuoteUpdateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    days_until_due: z.number().int().optional(),
    issuer: Schemas$QuoteUpdateBodyInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      days_until_due: "daysUntilDue",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyInvoiceSettings
 */
const SchemaOut$QuoteUpdateBodyInvoiceSettings: z.ZodType<
  External$QuoteUpdateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    daysUntilDue: z.number().int().optional(),
    issuer: Schemas$QuoteUpdateBodyInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$QuoteUpdateBodyInvoiceSettings = {
  in: SchemaIn$QuoteUpdateBodyInvoiceSettings,
  out: SchemaOut$QuoteUpdateBodyInvoiceSettings,
};
