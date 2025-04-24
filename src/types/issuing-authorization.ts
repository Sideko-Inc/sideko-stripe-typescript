import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  External$IssuingAuthorizationAmountDetails,
  IssuingAuthorizationAmountDetails,
  Schemas$IssuingAuthorizationAmountDetails,
} from "./issuing-authorization-amount-details";
import {
  External$IssuingAuthorizationFleetData,
  IssuingAuthorizationFleetData,
  Schemas$IssuingAuthorizationFleetData,
} from "./issuing-authorization-fleet-data";
import {
  External$IssuingAuthorizationFraudChallenge,
  IssuingAuthorizationFraudChallenge,
  Schemas$IssuingAuthorizationFraudChallenge,
} from "./issuing-authorization-fraud-challenge";
import {
  External$IssuingAuthorizationFuelData,
  IssuingAuthorizationFuelData,
  Schemas$IssuingAuthorizationFuelData,
} from "./issuing-authorization-fuel-data";
import {
  External$IssuingAuthorizationMerchantData,
  IssuingAuthorizationMerchantData,
  Schemas$IssuingAuthorizationMerchantData,
} from "./issuing-authorization-merchant-data";
import {
  External$IssuingAuthorizationMetadata,
  IssuingAuthorizationMetadata,
  Schemas$IssuingAuthorizationMetadata,
} from "./issuing-authorization-metadata";
import {
  External$IssuingAuthorizationNetworkData,
  IssuingAuthorizationNetworkData,
  Schemas$IssuingAuthorizationNetworkData,
} from "./issuing-authorization-network-data";
import {
  External$IssuingAuthorizationPendingRequest,
  IssuingAuthorizationPendingRequest,
  Schemas$IssuingAuthorizationPendingRequest,
} from "./issuing-authorization-pending-request";
import {
  External$IssuingAuthorizationRequest,
  IssuingAuthorizationRequest,
  Schemas$IssuingAuthorizationRequest,
} from "./issuing-authorization-request";
import {
  External$IssuingAuthorizationTreasury,
  IssuingAuthorizationTreasury,
  Schemas$IssuingAuthorizationTreasury,
} from "./issuing-authorization-treasury";
import {
  External$IssuingAuthorizationVerificationData,
  IssuingAuthorizationVerificationData,
  Schemas$IssuingAuthorizationVerificationData,
} from "./issuing-authorization-verification-data";
import {
  External$IssuingCard,
  IssuingCard,
  Schemas$IssuingCard,
} from "./issuing-card";
import {
  External$IssuingCardholder,
  IssuingCardholder,
  Schemas$IssuingCardholder,
} from "./issuing-cardholder";
import {
  External$IssuingToken,
  IssuingToken,
  Schemas$IssuingToken,
} from "./issuing-token";
import {
  External$IssuingTransaction,
  IssuingTransaction,
  Schemas$IssuingTransaction,
} from "./issuing-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
 * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
 * purchase to be completed successfully.
 *
 * Related guide: [Issued card authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
 */
export type IssuingAuthorization = {
  /**
   * The total amount that was authorized or rejected. This amount is in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `amount` should be the same as `merchant_amount`, unless `currency` and `merchant_currency` are different.
   */
  amount: number;
  amountDetails?: IssuingAuthorizationAmountDetails | undefined;
  /**
   * Whether the authorization has been approved.
   */
  approved: boolean;
  /**
   * How the card details were provided.
   */
  authorizationMethod: "chip" | "contactless" | "keyed_in" | "online" | "swipe";
  /**
   * List of balance transactions associated with this authorization.
   */
  balanceTransactions: BalanceTransaction[];
  /**
   * You can [create physical or virtual cards](https://stripe.com/docs/issuing) that are issued to cardholders.
   */
  card: IssuingCard;
  /**
   * The cardholder to whom this authorization belongs.
   */
  cardholder?: (string | IssuingCardholder) | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The currency of the cardholder. This currency can be different from the currency presented at authorization and the `merchant_currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  fleet?: IssuingAuthorizationFleetData | undefined;
  /**
   * Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons.
   */
  fraudChallenges?: IssuingAuthorizationFraudChallenge[] | null | undefined;
  fuel?: IssuingAuthorizationFuelData | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `merchant_amount` should be the same as `amount`, unless `merchant_currency` and `currency` are different.
   */
  merchantAmount: number;
  /**
   * The local currency that was presented to the cardholder for the authorization. This currency can be different from the cardholder currency and the `currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchantCurrency: string;
  merchantData: IssuingAuthorizationMerchantData;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingAuthorizationMetadata;
  networkData?: IssuingAuthorizationNetworkData | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.authorization";
  pendingRequest?: IssuingAuthorizationPendingRequest | undefined;
  /**
   * History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. based on your spending_controls). If the merchant changes the authorization by performing an incremental authorization, you can look at this field to see the previous requests for the authorization. This field can be helpful in determining why a given authorization was approved/declined.
   */
  requestHistory: IssuingAuthorizationRequest[];
  /**
   * The current status of the authorization in its lifecycle.
   */
  status: "closed" | "expired" | "pending" | "reversed";
  /**
   * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this authorization. If a network token was not used for this authorization, this field will be null.
   */
  token?: (string | IssuingToken) | undefined;
  /**
   * List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
   */
  transactions: IssuingTransaction[];
  treasury?: IssuingAuthorizationTreasury | undefined;
  verificationData: IssuingAuthorizationVerificationData;
  /**
   * Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant.
   */
  verifiedByFraudChallenge?: boolean | null | undefined;
  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
   */
  wallet?: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorization without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorization = {
  amount: number;
  amount_details?: External$IssuingAuthorizationAmountDetails | undefined;
  approved: boolean;
  authorization_method:
    | "chip"
    | "contactless"
    | "keyed_in"
    | "online"
    | "swipe";
  balance_transactions: External$BalanceTransaction[];
  card: External$IssuingCard;
  cardholder?: (string | External$IssuingCardholder) | undefined;
  created: number;
  currency: string;
  fleet?: External$IssuingAuthorizationFleetData | undefined;
  fraud_challenges?:
    | External$IssuingAuthorizationFraudChallenge[]
    | null
    | undefined;
  fuel?: External$IssuingAuthorizationFuelData | undefined;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: External$IssuingAuthorizationMerchantData;
  metadata: External$IssuingAuthorizationMetadata;
  network_data?: External$IssuingAuthorizationNetworkData | undefined;
  object: "issuing.authorization";
  pending_request?: External$IssuingAuthorizationPendingRequest | undefined;
  request_history: External$IssuingAuthorizationRequest[];
  status: "closed" | "expired" | "pending" | "reversed";
  token?: (string | External$IssuingToken) | undefined;
  transactions: External$IssuingTransaction[];
  treasury?: External$IssuingAuthorizationTreasury | undefined;
  verification_data: External$IssuingAuthorizationVerificationData;
  verified_by_fraud_challenge?: boolean | null | undefined;
  wallet?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorization
 */
const SchemaIn$IssuingAuthorization: z.ZodType<
  IssuingAuthorization, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_details: Schemas$IssuingAuthorizationAmountDetails.in.optional(),
    approved: z.boolean(),
    authorization_method: z.enum([
      "chip",
      "contactless",
      "keyed_in",
      "online",
      "swipe",
    ]),
    balance_transactions: z.array(z.lazy(() => Schemas$BalanceTransaction.in)),
    card: z.lazy(() => Schemas$IssuingCard.in),
    cardholder: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCardholder.in)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    fleet: Schemas$IssuingAuthorizationFleetData.in.optional(),
    fraud_challenges: z
      .array(Schemas$IssuingAuthorizationFraudChallenge.in)
      .nullable()
      .optional(),
    fuel: Schemas$IssuingAuthorizationFuelData.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    merchant_amount: z.number().int(),
    merchant_currency: z.string(),
    merchant_data: Schemas$IssuingAuthorizationMerchantData.in,
    metadata: Schemas$IssuingAuthorizationMetadata.in,
    network_data: Schemas$IssuingAuthorizationNetworkData.in.optional(),
    object: z.enum(["issuing.authorization"]),
    pending_request: Schemas$IssuingAuthorizationPendingRequest.in.optional(),
    request_history: z.array(Schemas$IssuingAuthorizationRequest.in),
    status: z.enum(["closed", "expired", "pending", "reversed"]),
    token: z
      .union([z.string(), z.lazy(() => Schemas$IssuingToken.in)])
      .optional(),
    transactions: z.array(z.lazy(() => Schemas$IssuingTransaction.in)),
    treasury: Schemas$IssuingAuthorizationTreasury.in.optional(),
    verification_data: Schemas$IssuingAuthorizationVerificationData.in,
    verified_by_fraud_challenge: z.boolean().nullable().optional(),
    wallet: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_details: "amountDetails",
      approved: "approved",
      authorization_method: "authorizationMethod",
      balance_transactions: "balanceTransactions",
      card: "card",
      cardholder: "cardholder",
      created: "created",
      currency: "currency",
      fleet: "fleet",
      fraud_challenges: "fraudChallenges",
      fuel: "fuel",
      id: "id",
      livemode: "livemode",
      merchant_amount: "merchantAmount",
      merchant_currency: "merchantCurrency",
      merchant_data: "merchantData",
      metadata: "metadata",
      network_data: "networkData",
      object: "object",
      pending_request: "pendingRequest",
      request_history: "requestHistory",
      status: "status",
      token: "token",
      transactions: "transactions",
      treasury: "treasury",
      verification_data: "verificationData",
      verified_by_fraud_challenge: "verifiedByFraudChallenge",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorization
 */
const SchemaOut$IssuingAuthorization: z.ZodType<
  External$IssuingAuthorization, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorization // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountDetails: Schemas$IssuingAuthorizationAmountDetails.out.optional(),
    approved: z.boolean(),
    authorizationMethod: z.enum([
      "chip",
      "contactless",
      "keyed_in",
      "online",
      "swipe",
    ]),
    balanceTransactions: z.array(z.lazy(() => Schemas$BalanceTransaction.out)),
    card: z.lazy(() => Schemas$IssuingCard.out),
    cardholder: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCardholder.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    fleet: Schemas$IssuingAuthorizationFleetData.out.optional(),
    fraudChallenges: z
      .array(Schemas$IssuingAuthorizationFraudChallenge.out)
      .nullable()
      .optional(),
    fuel: Schemas$IssuingAuthorizationFuelData.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    merchantAmount: z.number().int(),
    merchantCurrency: z.string(),
    merchantData: Schemas$IssuingAuthorizationMerchantData.out,
    metadata: Schemas$IssuingAuthorizationMetadata.out,
    networkData: Schemas$IssuingAuthorizationNetworkData.out.optional(),
    object: z.enum(["issuing.authorization"]),
    pendingRequest: Schemas$IssuingAuthorizationPendingRequest.out.optional(),
    requestHistory: z.array(Schemas$IssuingAuthorizationRequest.out),
    status: z.enum(["closed", "expired", "pending", "reversed"]),
    token: z
      .union([z.string(), z.lazy(() => Schemas$IssuingToken.out)])
      .optional(),
    transactions: z.array(z.lazy(() => Schemas$IssuingTransaction.out)),
    treasury: Schemas$IssuingAuthorizationTreasury.out.optional(),
    verificationData: Schemas$IssuingAuthorizationVerificationData.out,
    verifiedByFraudChallenge: z.boolean().nullable().optional(),
    wallet: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountDetails: "amount_details",
      approved: "approved",
      authorizationMethod: "authorization_method",
      balanceTransactions: "balance_transactions",
      card: "card",
      cardholder: "cardholder",
      created: "created",
      currency: "currency",
      fleet: "fleet",
      fraudChallenges: "fraud_challenges",
      fuel: "fuel",
      id: "id",
      livemode: "livemode",
      merchantAmount: "merchant_amount",
      merchantCurrency: "merchant_currency",
      merchantData: "merchant_data",
      metadata: "metadata",
      networkData: "network_data",
      object: "object",
      pendingRequest: "pending_request",
      requestHistory: "request_history",
      status: "status",
      token: "token",
      transactions: "transactions",
      treasury: "treasury",
      verificationData: "verification_data",
      verifiedByFraudChallenge: "verified_by_fraud_challenge",
      wallet: "wallet",
    });
  });

export const Schemas$IssuingAuthorization = {
  in: SchemaIn$IssuingAuthorization,
  out: SchemaOut$IssuingAuthorization,
};
