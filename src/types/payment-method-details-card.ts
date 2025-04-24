import {
  External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization,
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization,
  Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization,
} from "./payment-flows-private-payment-methods-card-details-api-resource-enterprise-features-extended-authorization-extended-authorization";
import {
  External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization,
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization,
  Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization,
} from "./payment-flows-private-payment-methods-card-details-api-resource-enterprise-features-incremental-authorization-incremental-authorization";
import {
  External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture,
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture,
  Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture,
} from "./payment-flows-private-payment-methods-card-details-api-resource-enterprise-features-overcapture-overcapture";
import {
  External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture,
  PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture,
  Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture,
} from "./payment-flows-private-payment-methods-card-details-api-resource-multicapture";
import {
  External$PaymentMethodDetailsCardChecks,
  PaymentMethodDetailsCardChecks,
  Schemas$PaymentMethodDetailsCardChecks,
} from "./payment-method-details-card-checks";
import {
  External$PaymentMethodDetailsCardInstallments,
  PaymentMethodDetailsCardInstallments,
  Schemas$PaymentMethodDetailsCardInstallments,
} from "./payment-method-details-card-installments";
import {
  External$PaymentMethodDetailsCardNetworkToken,
  PaymentMethodDetailsCardNetworkToken,
  Schemas$PaymentMethodDetailsCardNetworkToken,
} from "./payment-method-details-card-network-token";
import {
  External$PaymentMethodDetailsCardWallet,
  PaymentMethodDetailsCardWallet,
  Schemas$PaymentMethodDetailsCardWallet,
} from "./payment-method-details-card-wallet";
import {
  External$ThreeDSecureDetailsCharge,
  Schemas$ThreeDSecureDetailsCharge,
  ThreeDSecureDetailsCharge,
} from "./three-d-secure-details-charge";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCard = {
  /**
   * The authorized amount.
   */
  amountAuthorized?: number | null | undefined;
  /**
   * Authorization code on the charge.
   */
  authorizationCode?: string | null | undefined;
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand?: string | null | undefined;
  /**
   * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
   */
  captureBefore?: number | undefined;
  checks?: PaymentMethodDetailsCardChecks | undefined;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string | null | undefined;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  extendedAuthorization?:
    | PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization
    | undefined;
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
  incrementalAuthorization?:
    | PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization
    | undefined;
  installments?: PaymentMethodDetailsCardInstallments | undefined;
  /**
   * The last four digits of the card.
   */
  last4?: string | null | undefined;
  /**
   * ID of the mandate used to make this payment or created by it.
   */
  mandate?: string | null | undefined;
  multicapture?:
    | PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture
    | undefined;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string | null | undefined;
  networkToken?: PaymentMethodDetailsCardNetworkToken | undefined;
  /**
   * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
   */
  networkTransactionId?: string | null | undefined;
  overcapture?:
    | PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture
    | undefined;
  /**
   * Status of a card based on the card issuer.
   */
  regulatedStatus?: ("regulated" | "unregulated") | null | undefined;
  threeDSecure?: ThreeDSecureDetailsCharge | undefined;
  wallet?: PaymentMethodDetailsCardWallet | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCard = {
  amount_authorized?: number | null | undefined;
  authorization_code?: string | null | undefined;
  brand?: string | null | undefined;
  capture_before?: number | undefined;
  checks?: External$PaymentMethodDetailsCardChecks | undefined;
  country?: string | null | undefined;
  exp_month: number;
  exp_year: number;
  extended_authorization?:
    | External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization
    | undefined;
  fingerprint?: string | null | undefined;
  funding?: string | null | undefined;
  incremental_authorization?:
    | External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization
    | undefined;
  installments?: External$PaymentMethodDetailsCardInstallments | undefined;
  last4?: string | null | undefined;
  mandate?: string | null | undefined;
  multicapture?:
    | External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture
    | undefined;
  network?: string | null | undefined;
  network_token?: External$PaymentMethodDetailsCardNetworkToken | undefined;
  network_transaction_id?: string | null | undefined;
  overcapture?:
    | External$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture
    | undefined;
  regulated_status?: ("regulated" | "unregulated") | null | undefined;
  three_d_secure?: External$ThreeDSecureDetailsCharge | undefined;
  wallet?: External$PaymentMethodDetailsCardWallet | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCard
 */
const SchemaIn$PaymentMethodDetailsCard: z.ZodType<
  PaymentMethodDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_authorized: z.number().int().nullable().optional(),
    authorization_code: z.string().nullable().optional(),
    brand: z.string().nullable().optional(),
    capture_before: z.number().int().optional(),
    checks: Schemas$PaymentMethodDetailsCardChecks.in.optional(),
    country: z.string().nullable().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    extended_authorization:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization.in.optional(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    incremental_authorization:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization.in.optional(),
    installments: Schemas$PaymentMethodDetailsCardInstallments.in.optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().nullable().optional(),
    multicapture:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture.in.optional(),
    network: z.string().nullable().optional(),
    network_token: Schemas$PaymentMethodDetailsCardNetworkToken.in.optional(),
    network_transaction_id: z.string().nullable().optional(),
    overcapture:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture.in.optional(),
    regulated_status: z
      .enum(["regulated", "unregulated"])
      .nullable()
      .optional(),
    three_d_secure: Schemas$ThreeDSecureDetailsCharge.in.optional(),
    wallet: Schemas$PaymentMethodDetailsCardWallet.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_authorized: "amountAuthorized",
      authorization_code: "authorizationCode",
      brand: "brand",
      capture_before: "captureBefore",
      checks: "checks",
      country: "country",
      exp_month: "expMonth",
      exp_year: "expYear",
      extended_authorization: "extendedAuthorization",
      fingerprint: "fingerprint",
      funding: "funding",
      incremental_authorization: "incrementalAuthorization",
      installments: "installments",
      last4: "last4",
      mandate: "mandate",
      multicapture: "multicapture",
      network: "network",
      network_token: "networkToken",
      network_transaction_id: "networkTransactionId",
      overcapture: "overcapture",
      regulated_status: "regulatedStatus",
      three_d_secure: "threeDSecure",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCard
 */
const SchemaOut$PaymentMethodDetailsCard: z.ZodType<
  External$PaymentMethodDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCard // the object to be transformed
> = z
  .object({
    amountAuthorized: z.number().int().nullable().optional(),
    authorizationCode: z.string().nullable().optional(),
    brand: z.string().nullable().optional(),
    captureBefore: z.number().int().optional(),
    checks: Schemas$PaymentMethodDetailsCardChecks.out.optional(),
    country: z.string().nullable().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    extendedAuthorization:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization.out.optional(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    incrementalAuthorization:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization.out.optional(),
    installments: Schemas$PaymentMethodDetailsCardInstallments.out.optional(),
    last4: z.string().nullable().optional(),
    mandate: z.string().nullable().optional(),
    multicapture:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture.out.optional(),
    network: z.string().nullable().optional(),
    networkToken: Schemas$PaymentMethodDetailsCardNetworkToken.out.optional(),
    networkTransactionId: z.string().nullable().optional(),
    overcapture:
      Schemas$PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture.out.optional(),
    regulatedStatus: z.enum(["regulated", "unregulated"]).nullable().optional(),
    threeDSecure: Schemas$ThreeDSecureDetailsCharge.out.optional(),
    wallet: Schemas$PaymentMethodDetailsCardWallet.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountAuthorized: "amount_authorized",
      authorizationCode: "authorization_code",
      brand: "brand",
      captureBefore: "capture_before",
      checks: "checks",
      country: "country",
      expMonth: "exp_month",
      expYear: "exp_year",
      extendedAuthorization: "extended_authorization",
      fingerprint: "fingerprint",
      funding: "funding",
      incrementalAuthorization: "incremental_authorization",
      installments: "installments",
      last4: "last4",
      mandate: "mandate",
      multicapture: "multicapture",
      network: "network",
      networkToken: "network_token",
      networkTransactionId: "network_transaction_id",
      overcapture: "overcapture",
      regulatedStatus: "regulated_status",
      threeDSecure: "three_d_secure",
      wallet: "wallet",
    });
  });

export const Schemas$PaymentMethodDetailsCard = {
  in: SchemaIn$PaymentMethodDetailsCard,
  out: SchemaOut$PaymentMethodDetailsCard,
};
