import {
  External$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer,
  PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer,
  Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer,
} from "./payment-link-create-body-subscription-data-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodySubscriptionDataInvoiceSettings
 */
export type PaymentLinkCreateBodySubscriptionDataInvoiceSettings = {
  issuer?:
    | PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodySubscriptionDataInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodySubscriptionDataInvoiceSettings = {
  issuer?:
    | External$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodySubscriptionDataInvoiceSettings
 */
const SchemaIn$PaymentLinkCreateBodySubscriptionDataInvoiceSettings: z.ZodType<
  PaymentLinkCreateBodySubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    issuer:
      Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodySubscriptionDataInvoiceSettings
 */
const SchemaOut$PaymentLinkCreateBodySubscriptionDataInvoiceSettings: z.ZodType<
  External$PaymentLinkCreateBodySubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodySubscriptionDataInvoiceSettings // the object to be transformed
> = z
  .object({
    issuer:
      Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

export const Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettings = {
  in: SchemaIn$PaymentLinkCreateBodySubscriptionDataInvoiceSettings,
  out: SchemaOut$PaymentLinkCreateBodySubscriptionDataInvoiceSettings,
};
