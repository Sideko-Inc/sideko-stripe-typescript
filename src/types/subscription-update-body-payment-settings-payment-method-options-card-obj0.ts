import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
} from "./subscription-update-body-payment-settings-payment-method-options-card-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandateOptions?:
      | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
      | undefined;
    network?:
      | (
          | "amex"
          | "cartes_bancaires"
          | "diners"
          | "discover"
          | "eftpos_au"
          | "girocard"
          | "interac"
          | "jcb"
          | "link"
          | "mastercard"
          | "unionpay"
          | "unknown"
          | "visa"
        )
      | undefined;
    requestThreeDSecure?: ("any" | "automatic" | "challenge") | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandate_options?:
      | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
      | undefined;
    network?:
      | (
          | "amex"
          | "cartes_bancaires"
          | "diners"
          | "discover"
          | "eftpos_au"
          | "girocard"
          | "interac"
          | "jcb"
          | "link"
          | "mastercard"
          | "unionpay"
          | "unknown"
          | "visa"
        )
      | undefined;
    request_three_d_secure?: ("any" | "automatic" | "challenge") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.in.optional(),
    network: z
      .enum([
        "amex",
        "cartes_bancaires",
        "diners",
        "discover",
        "eftpos_au",
        "girocard",
        "interac",
        "jcb",
        "link",
        "mastercard",
        "unionpay",
        "unknown",
        "visa",
      ])
      .optional(),
    request_three_d_secure: z
      .enum(["any", "automatic", "challenge"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
      network: "network",
      request_three_d_secure: "requestThreeDSecure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.out.optional(),
    network: z
      .enum([
        "amex",
        "cartes_bancaires",
        "diners",
        "discover",
        "eftpos_au",
        "girocard",
        "interac",
        "jcb",
        "link",
        "mastercard",
        "unionpay",
        "unknown",
        "visa",
      ])
      .optional(),
    requestThreeDSecure: z.enum(["any", "automatic", "challenge"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      network: "network",
      requestThreeDSecure: "request_three_d_secure",
    });
  });

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  };
