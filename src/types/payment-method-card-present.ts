import {
  External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
  PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
  Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
} from "./payment-flows-private-payment-methods-card-present-common-wallet";
import {
  External$PaymentMethodCardPresentNetworks,
  PaymentMethodCardPresentNetworks,
  Schemas$PaymentMethodCardPresentNetworks,
} from "./payment-method-card-present-networks";
import {
  External$PaymentMethodDetailsCardPresentOffline,
  PaymentMethodDetailsCardPresentOffline,
  Schemas$PaymentMethodDetailsCardPresentOffline,
} from "./payment-method-details-card-present-offline";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCardPresent = {
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand?: string | null | undefined;
  /**
   * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
   */
  brandProduct?: string | null | undefined;
  /**
   * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
   */
  cardholderName?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string | null | undefined;
  /**
   * A high-level description of the type of cards issued in this range.
   */
  description?: string | null | undefined;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string | null | undefined;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding?: string | null | undefined;
  /**
   * The name of the card's issuing bank.
   */
  issuer?: string | null | undefined;
  /**
   * The last four digits of the card.
   */
  last4?: string | null | undefined;
  networks?: PaymentMethodCardPresentNetworks | undefined;
  offline?: PaymentMethodDetailsCardPresentOffline | undefined;
  /**
   * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
   */
  preferredLocales?: string[] | null | undefined;
  /**
   * How card details were read in this transaction.
   */
  readMethod?:
    | (
        | "contact_emv"
        | "contactless_emv"
        | "contactless_magstripe_mode"
        | "magnetic_stripe_fallback"
        | "magnetic_stripe_track2"
      )
    | null
    | undefined;
  wallet?: PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet | undefined;
};

/**
 * @internal
 * PaymentMethodCardPresent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCardPresent = {
  brand?: string | null | undefined;
  brand_product?: string | null | undefined;
  cardholder_name?: string | null | undefined;
  country?: string | null | undefined;
  description?: string | null | undefined;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null | undefined;
  funding?: string | null | undefined;
  issuer?: string | null | undefined;
  last4?: string | null | undefined;
  networks?: External$PaymentMethodCardPresentNetworks | undefined;
  offline?: External$PaymentMethodDetailsCardPresentOffline | undefined;
  preferred_locales?: string[] | null | undefined;
  read_method?:
    | (
        | "contact_emv"
        | "contactless_emv"
        | "contactless_magstripe_mode"
        | "magnetic_stripe_fallback"
        | "magnetic_stripe_track2"
      )
    | null
    | undefined;
  wallet?:
    | External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCardPresent
 */
const SchemaIn$PaymentMethodCardPresent: z.ZodType<
  PaymentMethodCardPresent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string().nullable().optional(),
    brand_product: z.string().nullable().optional(),
    cardholder_name: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    issuer: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    networks: Schemas$PaymentMethodCardPresentNetworks.in.optional(),
    offline: Schemas$PaymentMethodDetailsCardPresentOffline.in.optional(),
    preferred_locales: z.array(z.string()).nullable().optional(),
    read_method: z
      .enum([
        "contact_emv",
        "contactless_emv",
        "contactless_magstripe_mode",
        "magnetic_stripe_fallback",
        "magnetic_stripe_track2",
      ])
      .nullable()
      .optional(),
    wallet:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      brand_product: "brandProduct",
      cardholder_name: "cardholderName",
      country: "country",
      description: "description",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      issuer: "issuer",
      last4: "last4",
      networks: "networks",
      offline: "offline",
      preferred_locales: "preferredLocales",
      read_method: "readMethod",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCardPresent
 */
const SchemaOut$PaymentMethodCardPresent: z.ZodType<
  External$PaymentMethodCardPresent, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCardPresent // the object to be transformed
> = z
  .object({
    brand: z.string().nullable().optional(),
    brandProduct: z.string().nullable().optional(),
    cardholderName: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    issuer: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    networks: Schemas$PaymentMethodCardPresentNetworks.out.optional(),
    offline: Schemas$PaymentMethodDetailsCardPresentOffline.out.optional(),
    preferredLocales: z.array(z.string()).nullable().optional(),
    readMethod: z
      .enum([
        "contact_emv",
        "contactless_emv",
        "contactless_magstripe_mode",
        "magnetic_stripe_fallback",
        "magnetic_stripe_track2",
      ])
      .nullable()
      .optional(),
    wallet:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      brandProduct: "brand_product",
      cardholderName: "cardholder_name",
      country: "country",
      description: "description",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      issuer: "issuer",
      last4: "last4",
      networks: "networks",
      offline: "offline",
      preferredLocales: "preferred_locales",
      readMethod: "read_method",
      wallet: "wallet",
    });
  });

export const Schemas$PaymentMethodCardPresent = {
  in: SchemaIn$PaymentMethodCardPresent,
  out: SchemaOut$PaymentMethodCardPresent,
};
