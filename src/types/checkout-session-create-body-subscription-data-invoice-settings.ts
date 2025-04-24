import {
  CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer,
  External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer,
  Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer,
} from "./checkout-session-create-body-subscription-data-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySubscriptionDataInvoiceSettings
 */
export type CheckoutSessionCreateBodySubscriptionDataInvoiceSettings = {
  issuer?:
    | CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionDataInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings =
  {
    issuer?:
      | External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionDataInvoiceSettings
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings: z.ZodType<
  CheckoutSessionCreateBodySubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    issuer:
      Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionDataInvoiceSettings // the object to be transformed
> = z
  .object({
    issuer:
      Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

export const Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings =
  {
    in: SchemaIn$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings,
    out: SchemaOut$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings,
  };
