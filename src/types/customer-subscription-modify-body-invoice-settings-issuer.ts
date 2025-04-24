import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyInvoiceSettingsIssuer
 */
export type CustomerSubscriptionModifyBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyInvoiceSettingsIssuer
 */
const SchemaIn$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer: z.ZodType<
  CustomerSubscriptionModifyBodyInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer
 */
const SchemaOut$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer: z.ZodType<
  External$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer = {
  in: SchemaIn$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer,
  out: SchemaOut$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer,
};
