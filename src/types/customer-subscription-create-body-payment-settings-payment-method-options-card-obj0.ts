import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-card-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandateOptions?:
      | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
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
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandate_options?:
      | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
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
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.out.optional(),
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

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  };
