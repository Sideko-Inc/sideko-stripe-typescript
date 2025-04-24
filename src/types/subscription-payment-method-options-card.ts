import {
  External$InvoiceMandateOptionsCard,
  InvoiceMandateOptionsCard,
  Schemas$InvoiceMandateOptionsCard,
} from "./invoice-mandate-options-card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionPaymentMethodOptionsCard = {
  mandateOptions?: InvoiceMandateOptionsCard | undefined;
  /**
   * Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.
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
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | null | undefined;
};

/**
 * @internal
 * SubscriptionPaymentMethodOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionPaymentMethodOptionsCard = {
  mandate_options?: External$InvoiceMandateOptionsCard | undefined;
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
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionPaymentMethodOptionsCard
 */
const SchemaIn$SubscriptionPaymentMethodOptionsCard: z.ZodType<
  SubscriptionPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options: Schemas$InvoiceMandateOptionsCard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionPaymentMethodOptionsCard
 */
const SchemaOut$SubscriptionPaymentMethodOptionsCard: z.ZodType<
  External$SubscriptionPaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionPaymentMethodOptionsCard // the object to be transformed
> = z
  .object({
    mandateOptions: Schemas$InvoiceMandateOptionsCard.out.optional(),
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

export const Schemas$SubscriptionPaymentMethodOptionsCard = {
  in: SchemaIn$SubscriptionPaymentMethodOptionsCard,
  out: SchemaOut$SubscriptionPaymentMethodOptionsCard,
};
