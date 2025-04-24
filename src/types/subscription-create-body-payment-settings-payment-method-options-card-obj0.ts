import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
} from "./subscription-create-body-payment-settings-payment-method-options-card-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandateOptions?:
      | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
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
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandate_options?:
      | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
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
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.out.optional(),
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

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  };
