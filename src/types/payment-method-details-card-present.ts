import {
  External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
  PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
  Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet,
} from "./payment-flows-private-payment-methods-card-present-common-wallet";
import {
  External$PaymentMethodDetailsCardPresentOffline,
  PaymentMethodDetailsCardPresentOffline,
  Schemas$PaymentMethodDetailsCardPresentOffline,
} from "./payment-method-details-card-present-offline";
import {
  External$PaymentMethodDetailsCardPresentReceipt,
  PaymentMethodDetailsCardPresentReceipt,
  Schemas$PaymentMethodDetailsCardPresentReceipt,
} from "./payment-method-details-card-present-receipt";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCardPresent = {
  /**
   * The authorized amount
   */
  amountAuthorized?: number | null | undefined;
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand?: string | null | undefined;
  /**
   * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
   */
  brandProduct?: string | null | undefined;
  /**
   * When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured.
   */
  captureBefore?: number | undefined;
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
   * Authorization response cryptogram.
   */
  emvAuthData?: string | null | undefined;
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
   * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
   */
  generatedCard?: string | null | undefined;
  /**
   * Whether this [PaymentIntent](https://stripe.com/docs/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support).
   */
  incrementalAuthorizationSupported: boolean;
  /**
   * The name of the card's issuing bank.
   */
  issuer?: string | null | undefined;
  /**
   * The last four digits of the card.
   */
  last4?: string | null | undefined;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string | null | undefined;
  /**
   * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
   */
  networkTransactionId?: string | null | undefined;
  offline?: PaymentMethodDetailsCardPresentOffline | undefined;
  /**
   * Defines whether the authorized amount can be over-captured or not
   */
  overcaptureSupported: boolean;
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
  receipt?: PaymentMethodDetailsCardPresentReceipt | undefined;
  wallet?: PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsCardPresent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCardPresent = {
  amount_authorized?: number | null | undefined;
  brand?: string | null | undefined;
  brand_product?: string | null | undefined;
  capture_before?: number | undefined;
  cardholder_name?: string | null | undefined;
  country?: string | null | undefined;
  description?: string | null | undefined;
  emv_auth_data?: string | null | undefined;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null | undefined;
  funding?: string | null | undefined;
  generated_card?: string | null | undefined;
  incremental_authorization_supported: boolean;
  issuer?: string | null | undefined;
  last4?: string | null | undefined;
  network?: string | null | undefined;
  network_transaction_id?: string | null | undefined;
  offline?: External$PaymentMethodDetailsCardPresentOffline | undefined;
  overcapture_supported: boolean;
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
  receipt?: External$PaymentMethodDetailsCardPresentReceipt | undefined;
  wallet?:
    | External$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCardPresent
 */
const SchemaIn$PaymentMethodDetailsCardPresent: z.ZodType<
  PaymentMethodDetailsCardPresent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_authorized: z.number().int().nullable().optional(),
    brand: z.string().nullable().optional(),
    brand_product: z.string().nullable().optional(),
    capture_before: z.number().int().optional(),
    cardholder_name: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    emv_auth_data: z.string().nullable().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    generated_card: z.string().nullable().optional(),
    incremental_authorization_supported: z.boolean(),
    issuer: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    network: z.string().nullable().optional(),
    network_transaction_id: z.string().nullable().optional(),
    offline: Schemas$PaymentMethodDetailsCardPresentOffline.in.optional(),
    overcapture_supported: z.boolean(),
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
    receipt: Schemas$PaymentMethodDetailsCardPresentReceipt.in.optional(),
    wallet:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_authorized: "amountAuthorized",
      brand: "brand",
      brand_product: "brandProduct",
      capture_before: "captureBefore",
      cardholder_name: "cardholderName",
      country: "country",
      description: "description",
      emv_auth_data: "emvAuthData",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      generated_card: "generatedCard",
      incremental_authorization_supported: "incrementalAuthorizationSupported",
      issuer: "issuer",
      last4: "last4",
      network: "network",
      network_transaction_id: "networkTransactionId",
      offline: "offline",
      overcapture_supported: "overcaptureSupported",
      preferred_locales: "preferredLocales",
      read_method: "readMethod",
      receipt: "receipt",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCardPresent
 */
const SchemaOut$PaymentMethodDetailsCardPresent: z.ZodType<
  External$PaymentMethodDetailsCardPresent, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCardPresent // the object to be transformed
> = z
  .object({
    amountAuthorized: z.number().int().nullable().optional(),
    brand: z.string().nullable().optional(),
    brandProduct: z.string().nullable().optional(),
    captureBefore: z.number().int().optional(),
    cardholderName: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    emvAuthData: z.string().nullable().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    generatedCard: z.string().nullable().optional(),
    incrementalAuthorizationSupported: z.boolean(),
    issuer: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    network: z.string().nullable().optional(),
    networkTransactionId: z.string().nullable().optional(),
    offline: Schemas$PaymentMethodDetailsCardPresentOffline.out.optional(),
    overcaptureSupported: z.boolean(),
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
    receipt: Schemas$PaymentMethodDetailsCardPresentReceipt.out.optional(),
    wallet:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountAuthorized: "amount_authorized",
      brand: "brand",
      brandProduct: "brand_product",
      captureBefore: "capture_before",
      cardholderName: "cardholder_name",
      country: "country",
      description: "description",
      emvAuthData: "emv_auth_data",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      generatedCard: "generated_card",
      incrementalAuthorizationSupported: "incremental_authorization_supported",
      issuer: "issuer",
      last4: "last4",
      network: "network",
      networkTransactionId: "network_transaction_id",
      offline: "offline",
      overcaptureSupported: "overcapture_supported",
      preferredLocales: "preferred_locales",
      readMethod: "read_method",
      receipt: "receipt",
      wallet: "wallet",
    });
  });

export const Schemas$PaymentMethodDetailsCardPresent = {
  in: SchemaIn$PaymentMethodDetailsCardPresent,
  out: SchemaOut$PaymentMethodDetailsCardPresent,
};
