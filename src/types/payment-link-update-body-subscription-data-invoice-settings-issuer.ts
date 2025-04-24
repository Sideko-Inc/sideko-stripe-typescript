import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer
 */
export type PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer
 */
const SchemaIn$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer: z.ZodType<
  PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer
 */
const SchemaOut$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer: z.ZodType<
  External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer =
  {
    in: SchemaIn$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer,
    out: SchemaOut$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer,
  };
