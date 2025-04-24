import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-card-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandateOptions?:
      | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
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
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    mandate_options?:
      | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
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
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions.out.optional(),
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

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  };
