import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyInvoiceSettingsIssuer
 */
export type CustomerSubscriptionCreateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyInvoiceSettingsIssuer
 */
const SchemaIn$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer: z.ZodType<
  CustomerSubscriptionCreateBodyInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer
 */
const SchemaOut$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer: z.ZodType<
  External$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer = {
  in: SchemaIn$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer,
  out: SchemaOut$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer,
};
