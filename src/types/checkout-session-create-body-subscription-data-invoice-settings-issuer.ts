import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer
 */
export type CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer: z.ZodType<
  CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer =
  {
    in: SchemaIn$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer,
    out: SchemaOut$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer,
  };
