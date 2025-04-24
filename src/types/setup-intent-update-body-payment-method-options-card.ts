import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions,
  SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions,
} from "./setup-intent-update-body-payment-method-options-card-mandate-options";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure,
  SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure,
} from "./setup-intent-update-body-payment-method-options-card-three-d-secure";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsCard
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsCard = {
  mandateOptions?:
    | SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions
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
    | SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure
    | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsCard = {
  mandate_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions
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
    | External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsCard
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsCard: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions.in.optional(),
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
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsCard
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsCard: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsCard // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardMandateOptions.out.optional(),
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
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecure.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      network: "network",
      requestThreeDSecure: "request_three_d_secure",
      threeDSecure: "three_d_secure",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCard = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsCard,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsCard,
};
