import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions,
  SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions,
} from "./setup-intent-confirm-body-payment-method-options-card-mandate-options";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure,
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure,
} from "./setup-intent-confirm-body-payment-method-options-card-three-d-secure";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsCard
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsCard = {
  mandateOptions?:
    | SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions
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
  threeDSecure?:
    | SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure
    | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsCard = {
  mandate_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions
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
  three_d_secure?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsCard
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsCard: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions.in.optional(),
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
    three_d_secure:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
      network: "network",
      request_three_d_secure: "requestThreeDSecure",
      three_d_secure: "threeDSecure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsCard
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsCard: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsCard // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardMandateOptions.out.optional(),
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
    threeDSecure:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      network: "network",
      requestThreeDSecure: "request_three_d_secure",
      threeDSecure: "three_d_secure",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCard = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsCard,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsCard,
};
