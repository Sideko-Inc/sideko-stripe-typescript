import {
  CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments,
} from "./checkout-session-create-body-payment-method-options-card-installments";
import {
  CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions,
} from "./checkout-session-create-body-payment-method-options-card-restrictions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCard
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCard = {
  installments?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments
    | undefined;
  requestExtendedAuthorization?: ("if_available" | "never") | undefined;
  requestIncrementalAuthorization?: ("if_available" | "never") | undefined;
  requestMulticapture?: ("if_available" | "never") | undefined;
  requestOvercapture?: ("if_available" | "never") | undefined;
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | undefined;
  restrictions?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions
    | undefined;
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  statementDescriptorSuffixKana?: string | undefined;
  statementDescriptorSuffixKanji?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCard = {
  installments?:
    | External$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments
    | undefined;
  request_extended_authorization?: ("if_available" | "never") | undefined;
  request_incremental_authorization?: ("if_available" | "never") | undefined;
  request_multicapture?: ("if_available" | "never") | undefined;
  request_overcapture?: ("if_available" | "never") | undefined;
  request_three_d_secure?: ("any" | "automatic" | "challenge") | undefined;
  restrictions?:
    | External$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions
    | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  statement_descriptor_suffix_kana?: string | undefined;
  statement_descriptor_suffix_kanji?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCard
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCard: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    installments:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments.in.optional(),
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
    restrictions:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions.in.optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    statement_descriptor_suffix_kana: z.string().optional(),
    statement_descriptor_suffix_kanji: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      request_extended_authorization: "requestExtendedAuthorization",
      request_incremental_authorization: "requestIncrementalAuthorization",
      request_multicapture: "requestMulticapture",
      request_overcapture: "requestOvercapture",
      request_three_d_secure: "requestThreeDSecure",
      restrictions: "restrictions",
      setup_future_usage: "setupFutureUsage",
      statement_descriptor_suffix_kana: "statementDescriptorSuffixKana",
      statement_descriptor_suffix_kanji: "statementDescriptorSuffixKanji",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCard
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCard: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCard // the object to be transformed
> = z
  .object({
    installments:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments.out.optional(),
    requestExtendedAuthorization: z.enum(["if_available", "never"]).optional(),
    requestIncrementalAuthorization: z
      .enum(["if_available", "never"])
      .optional(),
    requestMulticapture: z.enum(["if_available", "never"]).optional(),
    requestOvercapture: z.enum(["if_available", "never"]).optional(),
    requestThreeDSecure: z.enum(["any", "automatic", "challenge"]).optional(),
    restrictions:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions.out.optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    statementDescriptorSuffixKana: z.string().optional(),
    statementDescriptorSuffixKanji: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorization: "request_incremental_authorization",
      requestMulticapture: "request_multicapture",
      requestOvercapture: "request_overcapture",
      requestThreeDSecure: "request_three_d_secure",
      restrictions: "restrictions",
      setupFutureUsage: "setup_future_usage",
      statementDescriptorSuffixKana: "statement_descriptor_suffix_kana",
      statementDescriptorSuffixKanji: "statement_descriptor_suffix_kanji",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCard = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCard,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCard,
};
