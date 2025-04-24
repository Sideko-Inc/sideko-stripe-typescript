import {
  External$SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions,
  SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions,
} from "./setup-intent-create-body-payment-method-options-card-mandate-options";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure,
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure,
} from "./setup-intent-create-body-payment-method-options-card-three-d-secure";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsCard
 */
export type SetupIntentCreateBodyPaymentMethodOptionsCard = {
  mandateOptions?:
    | SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions
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
    | SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure
    | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsCard = {
  mandate_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions
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
    | External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsCard
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsCard: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions.in.optional(),
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
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsCard
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsCard: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsCard // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardMandateOptions.out.optional(),
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
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      network: "network",
      requestThreeDSecure: "request_three_d_secure",
      threeDSecure: "three_d_secure",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsCard = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsCard,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsCard,
};
