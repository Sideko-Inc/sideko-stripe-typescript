import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments,
} from "./payment-intent-create-body-payment-method-options-card-obj0-installments";
import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions,
} from "./payment-intent-create-body-payment-method-options-card-obj0-mandate-options";
import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure,
} from "./payment-intent-create-body-payment-method-options-card-obj0-three-d-secure";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardObj0 = {
  captureMethod?: "manual" | undefined;
  cvcToken?: string | undefined;
  installments?:
    | PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments
    | undefined;
  mandateOptions?:
    | PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions
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
  requestExtendedAuthorization?: ("if_available" | "never") | undefined;
  requestIncrementalAuthorization?: ("if_available" | "never") | undefined;
  requestMulticapture?: ("if_available" | "never") | undefined;
  requestOvercapture?: ("if_available" | "never") | undefined;
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | undefined;
  requireCvcRecollection?: boolean | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  statementDescriptorSuffixKana?: (string | string) | undefined;
  statementDescriptorSuffixKanji?: (string | string) | undefined;
  threeDSecure?:
    | PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure
    | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0 = {
  capture_method?: "manual" | undefined;
  cvc_token?: string | undefined;
  installments?:
    | External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments
    | undefined;
  mandate_options?:
    | External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions
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
  request_extended_authorization?: ("if_available" | "never") | undefined;
  request_incremental_authorization?: ("if_available" | "never") | undefined;
  request_multicapture?: ("if_available" | "never") | undefined;
  request_overcapture?: ("if_available" | "never") | undefined;
  request_three_d_secure?: ("any" | "automatic" | "challenge") | undefined;
  require_cvc_recollection?: boolean | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  statement_descriptor_suffix_kana?: (string | string) | undefined;
  statement_descriptor_suffix_kanji?: (string | string) | undefined;
  three_d_secure?:
    | External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    cvc_token: z.string().optional(),
    installments:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments.in.optional(),
    mandate_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions.in.optional(),
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
    request_extended_authorization: z
      .enum(["if_available", "never"])
      .optional(),
    request_incremental_authorization: z
      .enum(["if_available", "never"])
      .optional(),
    request_multicapture: z.enum(["if_available", "never"]).optional(),
    request_overcapture: z.enum(["if_available", "never"]).optional(),
    request_three_d_secure: z
      .enum(["any", "automatic", "challenge"])
      .optional(),
    require_cvc_recollection: z.boolean().optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    statement_descriptor_suffix_kana: z
      .union([z.string(), z.string()])
      .optional(),
    statement_descriptor_suffix_kanji: z
      .union([z.string(), z.string()])
      .optional(),
    three_d_secure:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      cvc_token: "cvcToken",
      installments: "installments",
      mandate_options: "mandateOptions",
      network: "network",
      request_extended_authorization: "requestExtendedAuthorization",
      request_incremental_authorization: "requestIncrementalAuthorization",
      request_multicapture: "requestMulticapture",
      request_overcapture: "requestOvercapture",
      request_three_d_secure: "requestThreeDSecure",
      require_cvc_recollection: "requireCvcRecollection",
      setup_future_usage: "setupFutureUsage",
      statement_descriptor_suffix_kana: "statementDescriptorSuffixKana",
      statement_descriptor_suffix_kanji: "statementDescriptorSuffixKanji",
      three_d_secure: "threeDSecure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    cvcToken: z.string().optional(),
    installments:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments.out.optional(),
    mandateOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions.out.optional(),
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
    requestExtendedAuthorization: z.enum(["if_available", "never"]).optional(),
    requestIncrementalAuthorization: z
      .enum(["if_available", "never"])
      .optional(),
    requestMulticapture: z.enum(["if_available", "never"]).optional(),
    requestOvercapture: z.enum(["if_available", "never"]).optional(),
    requestThreeDSecure: z.enum(["any", "automatic", "challenge"]).optional(),
    requireCvcRecollection: z.boolean().optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    statementDescriptorSuffixKana: z.union([z.string(), z.string()]).optional(),
    statementDescriptorSuffixKanji: z
      .union([z.string(), z.string()])
      .optional(),
    threeDSecure:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecure.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      cvcToken: "cvc_token",
      installments: "installments",
      mandateOptions: "mandate_options",
      network: "network",
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorization: "request_incremental_authorization",
      requestMulticapture: "request_multicapture",
      requestOvercapture: "request_overcapture",
      requestThreeDSecure: "request_three_d_secure",
      requireCvcRecollection: "require_cvc_recollection",
      setupFutureUsage: "setup_future_usage",
      statementDescriptorSuffixKana: "statement_descriptor_suffix_kana",
      statementDescriptorSuffixKanji: "statement_descriptor_suffix_kanji",
      threeDSecure: "three_d_secure",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0,
};
