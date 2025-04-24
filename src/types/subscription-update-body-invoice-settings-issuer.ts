import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyInvoiceSettingsIssuer
 */
export type SubscriptionUpdateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionUpdateBodyInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyInvoiceSettingsIssuer
 */
const SchemaIn$SubscriptionUpdateBodyInvoiceSettingsIssuer: z.ZodType<
  SubscriptionUpdateBodyInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyInvoiceSettingsIssuer
 */
const SchemaOut$SubscriptionUpdateBodyInvoiceSettingsIssuer: z.ZodType<
  External$SubscriptionUpdateBodyInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$SubscriptionUpdateBodyInvoiceSettingsIssuer = {
  in: SchemaIn$SubscriptionUpdateBodyInvoiceSettingsIssuer,
  out: SchemaOut$SubscriptionUpdateBodyInvoiceSettingsIssuer,
};
