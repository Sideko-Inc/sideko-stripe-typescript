import {
  External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer,
  PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer,
  Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer,
} from "./payment-link-update-body-subscription-data-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodySubscriptionDataInvoiceSettings
 */
export type PaymentLinkUpdateBodySubscriptionDataInvoiceSettings = {
  issuer?:
    | PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodySubscriptionDataInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings = {
  issuer?:
    | External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodySubscriptionDataInvoiceSettings
 */
const SchemaIn$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings: z.ZodType<
  PaymentLinkUpdateBodySubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    issuer:
      Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings
 */
const SchemaOut$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings: z.ZodType<
  External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodySubscriptionDataInvoiceSettings // the object to be transformed
> = z
  .object({
    issuer:
      Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

export const Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings = {
  in: SchemaIn$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings,
  out: SchemaOut$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings,
};
