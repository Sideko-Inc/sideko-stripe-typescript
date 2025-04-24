import {
  External$PaymentMethodUpdateBodyBillingDetails,
  PaymentMethodUpdateBodyBillingDetails,
  Schemas$PaymentMethodUpdateBodyBillingDetails,
} from "./payment-method-update-body-billing-details";
import {
  External$PaymentMethodUpdateBodyCard,
  PaymentMethodUpdateBodyCard,
  Schemas$PaymentMethodUpdateBodyCard,
} from "./payment-method-update-body-card";
import {
  External$PaymentMethodUpdateBodyMetadataObj0,
  PaymentMethodUpdateBodyMetadataObj0,
  Schemas$PaymentMethodUpdateBodyMetadataObj0,
} from "./payment-method-update-body-metadata-obj0";
import {
  External$PaymentMethodUpdateBodyUsBankAccount,
  PaymentMethodUpdateBodyUsBankAccount,
  Schemas$PaymentMethodUpdateBodyUsBankAccount,
} from "./payment-method-update-body-us-bank-account";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodUpdateBody
 */
export type PaymentMethodUpdateBody = {
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
   */
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  /**
   * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
   */
  billingDetails?: PaymentMethodUpdateBodyBillingDetails | undefined;
  /**
   * If this is a `card` PaymentMethod, this hash contains the user's card details.
   */
  card?: PaymentMethodUpdateBodyCard | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
   */
  link?: Record<string, any> | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PaymentMethodUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * If this is a `pay_by_bank` PaymentMethod, this hash contains details about the PayByBank payment method.
   */
  payByBank?: Record<string, any> | undefined;
  /**
   * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
   */
  usBankAccount?: PaymentMethodUpdateBodyUsBankAccount | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (("always" | "limited" | "unspecified") | undefined)
    | (PaymentMethodUpdateBodyBillingDetails | undefined)
    | (PaymentMethodUpdateBodyCard | undefined)
    | (string[] | undefined)
    | (Record<string, any> | undefined)
    | ((PaymentMethodUpdateBodyMetadataObj0 | string) | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodUpdateBodyUsBankAccount | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUpdateBody = {
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  billing_details?: External$PaymentMethodUpdateBodyBillingDetails | undefined;
  card?: External$PaymentMethodUpdateBodyCard | undefined;
  expand?: string[] | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | (External$PaymentMethodUpdateBodyMetadataObj0 | string)
    | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  us_bank_account?: External$PaymentMethodUpdateBodyUsBankAccount | undefined;

  [additionalProperty: string]:
    | (("always" | "limited" | "unspecified") | undefined)
    | (External$PaymentMethodUpdateBodyBillingDetails | undefined)
    | (External$PaymentMethodUpdateBodyCard | undefined)
    | (string[] | undefined)
    | (Record<string, any> | undefined)
    | ((External$PaymentMethodUpdateBodyMetadataObj0 | string) | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodUpdateBodyUsBankAccount | undefined)
    | External$PaymentMethodUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUpdateBody
 */
const SchemaIn$PaymentMethodUpdateBody: z.ZodType<
  PaymentMethodUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    billing_details:
      Schemas$PaymentMethodUpdateBodyBillingDetails.in.optional(),
    card: Schemas$PaymentMethodUpdateBodyCard.in.optional(),
    expand: z.array(z.string()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata: z
      .union([Schemas$PaymentMethodUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    us_bank_account: Schemas$PaymentMethodUpdateBodyUsBankAccount.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay: "allowRedisplay",
      billing_details: "billingDetails",
      card: "card",
      expand: "expand",
      link: "link",
      metadata: "metadata",
      pay_by_bank: "payByBank",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUpdateBody
 */
const SchemaOut$PaymentMethodUpdateBody: z.ZodType<
  External$PaymentMethodUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUpdateBody // the object to be transformed
> = z
  .object({
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    billingDetails:
      Schemas$PaymentMethodUpdateBodyBillingDetails.out.optional(),
    card: Schemas$PaymentMethodUpdateBodyCard.out.optional(),
    expand: z.array(z.string()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata: z
      .union([Schemas$PaymentMethodUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    usBankAccount: Schemas$PaymentMethodUpdateBodyUsBankAccount.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplay: "allow_redisplay",
      billingDetails: "billing_details",
      card: "card",
      expand: "expand",
      link: "link",
      metadata: "metadata",
      payByBank: "pay_by_bank",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$PaymentMethodUpdateBody = {
  in: SchemaIn$PaymentMethodUpdateBody,
  out: SchemaOut$PaymentMethodUpdateBody,
};
