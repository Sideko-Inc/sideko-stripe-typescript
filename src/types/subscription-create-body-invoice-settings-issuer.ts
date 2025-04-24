import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyInvoiceSettingsIssuer
 */
export type SubscriptionCreateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionCreateBodyInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyInvoiceSettingsIssuer
 */
const SchemaIn$SubscriptionCreateBodyInvoiceSettingsIssuer: z.ZodType<
  SubscriptionCreateBodyInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyInvoiceSettingsIssuer
 */
const SchemaOut$SubscriptionCreateBodyInvoiceSettingsIssuer: z.ZodType<
  External$SubscriptionCreateBodyInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyInvoiceSettingsIssuer = {
  in: SchemaIn$SubscriptionCreateBodyInvoiceSettingsIssuer,
  out: SchemaOut$SubscriptionCreateBodyInvoiceSettingsIssuer,
};
