import {
  External$SetupIntentPaymentMethodOptionsCardMandateOptions,
  Schemas$SetupIntentPaymentMethodOptionsCardMandateOptions,
  SetupIntentPaymentMethodOptionsCardMandateOptions,
} from "./setup-intent-payment-method-options-card-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptionsCard1 = {
  mandateOptions?:
    | SetupIntentPaymentMethodOptionsCardMandateOptions
    | undefined;
  /**
   * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
   */
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
    | null
    | undefined;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | null | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptionsCard1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptionsCard1 = {
  mandate_options?:
    | External$SetupIntentPaymentMethodOptionsCardMandateOptions
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
    | null
    | undefined;
  request_three_d_secure?:
    | ("any" | "automatic" | "challenge")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptionsCard1
 */
const SchemaIn$SetupIntentPaymentMethodOptionsCard1: z.ZodType<
  SetupIntentPaymentMethodOptionsCard1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentPaymentMethodOptionsCardMandateOptions.in.optional(),
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
      .nullable()
      .optional(),
    request_three_d_secure: z
      .enum(["any", "automatic", "challenge"])
      .nullable()
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptionsCard1
 */
const SchemaOut$SetupIntentPaymentMethodOptionsCard1: z.ZodType<
  External$SetupIntentPaymentMethodOptionsCard1, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptionsCard1 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentPaymentMethodOptionsCardMandateOptions.out.optional(),
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
      .nullable()
      .optional(),
    requestThreeDSecure: z
      .enum(["any", "automatic", "challenge"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      network: "network",
      requestThreeDSecure: "request_three_d_secure",
    });
  });

export const Schemas$SetupIntentPaymentMethodOptionsCard1 = {
  in: SchemaIn$SetupIntentPaymentMethodOptionsCard1,
  out: SchemaOut$SetupIntentPaymentMethodOptionsCard1,
};
