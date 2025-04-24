import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer
 */
export type PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer
 */
const SchemaIn$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer: z.ZodType<
  PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer
 */
const SchemaOut$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer: z.ZodType<
  External$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer =
  {
    in: SchemaIn$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer,
    out: SchemaOut$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer,
  };
