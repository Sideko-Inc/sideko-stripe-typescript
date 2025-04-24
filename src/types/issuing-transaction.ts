import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  External$IssuingAuthorization,
  IssuingAuthorization,
  Schemas$IssuingAuthorization,
} from "./issuing-authorization";
import {
  External$IssuingAuthorizationMerchantData,
  IssuingAuthorizationMerchantData,
  Schemas$IssuingAuthorizationMerchantData,
} from "./issuing-authorization-merchant-data";
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
  External$IssuingDispute,
  IssuingDispute,
  Schemas$IssuingDispute,
} from "./issuing-dispute";
import {
  External$IssuingToken,
  IssuingToken,
  Schemas$IssuingToken,
} from "./issuing-token";
import {
  External$IssuingTransactionAmountDetails,
  IssuingTransactionAmountDetails,
  Schemas$IssuingTransactionAmountDetails,
} from "./issuing-transaction-amount-details";
import {
  External$IssuingTransactionMetadata,
  IssuingTransactionMetadata,
  Schemas$IssuingTransactionMetadata,
} from "./issuing-transaction-metadata";
import {
  External$IssuingTransactionNetworkData,
  IssuingTransactionNetworkData,
  Schemas$IssuingTransactionNetworkData,
} from "./issuing-transaction-network-data";
import {
  External$IssuingTransactionPurchaseDetails,
  IssuingTransactionPurchaseDetails,
  Schemas$IssuingTransactionPurchaseDetails,
} from "./issuing-transaction-purchase-details";
import {
  External$IssuingTransactionTreasury,
  IssuingTransactionTreasury,
  Schemas$IssuingTransactionTreasury,
} from "./issuing-transaction-treasury";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Any use of an [issued card](https://stripe.com/docs/issuing) that results in funds entering or leaving
 * your Stripe account, such as a completed purchase or refund, is represented by an Issuing
 * `Transaction` object.
 *
 * Related guide: [Issued card transactions](https://stripe.com/docs/issuing/purchases/transactions)
 */
export type IssuingTransaction = {
  /**
   * The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  amountDetails?: IssuingTransactionAmountDetails | undefined;
  /**
   * The `Authorization` object that led to this transaction.
   */
  authorization?: (string | IssuingAuthorization) | undefined;
  /**
   * ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this transaction.
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * The card used to make this transaction.
   */
  card: string | IssuingCard;
  /**
   * The cardholder to whom this transaction belongs.
   */
  cardholder?: (string | IssuingCardholder) | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * If you've disputed the transaction, the ID of the dispute.
   */
  dispute?: (string | IssuingDispute) | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency.
   */
  merchantAmount: number;
  /**
   * The currency with which the merchant is taking payment.
   */
  merchantCurrency: string;
  merchantData: IssuingAuthorizationMerchantData;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingTransactionMetadata;
  networkData?: IssuingTransactionNetworkData | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.transaction";
  purchaseDetails?: IssuingTransactionPurchaseDetails | undefined;
  /**
   * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this transaction. If a network token was not used for this transaction, this field will be null.
   */
  token?: (string | IssuingToken) | undefined;
  treasury?: IssuingTransactionTreasury | undefined;
  /**
   * The nature of the transaction.
   */
  type: "capture" | "refund";
  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
   */
  wallet?: ("apple_pay" | "google_pay" | "samsung_pay") | null | undefined;
};

/**
 * @internal
 * IssuingTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransaction = {
  amount: number;
  amount_details?: External$IssuingTransactionAmountDetails | undefined;
  authorization?: (string | External$IssuingAuthorization) | undefined;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  card: string | External$IssuingCard;
  cardholder?: (string | External$IssuingCardholder) | undefined;
  created: number;
  currency: string;
  dispute?: (string | External$IssuingDispute) | undefined;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: External$IssuingAuthorizationMerchantData;
  metadata: External$IssuingTransactionMetadata;
  network_data?: External$IssuingTransactionNetworkData | undefined;
  object: "issuing.transaction";
  purchase_details?: External$IssuingTransactionPurchaseDetails | undefined;
  token?: (string | External$IssuingToken) | undefined;
  treasury?: External$IssuingTransactionTreasury | undefined;
  type: "capture" | "refund";
  wallet?: ("apple_pay" | "google_pay" | "samsung_pay") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransaction
 */
const SchemaIn$IssuingTransaction: z.ZodType<
  IssuingTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_details: Schemas$IssuingTransactionAmountDetails.in.optional(),
    authorization: z
      .union([z.string(), z.lazy(() => Schemas$IssuingAuthorization.in)])
      .optional(),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    card: z.union([z.string(), z.lazy(() => Schemas$IssuingCard.in)]),
    cardholder: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCardholder.in)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    dispute: z
      .union([z.string(), z.lazy(() => Schemas$IssuingDispute.in)])
      .optional(),
    id: z.string(),
    livemode: z.boolean(),
    merchant_amount: z.number().int(),
    merchant_currency: z.string(),
    merchant_data: Schemas$IssuingAuthorizationMerchantData.in,
    metadata: Schemas$IssuingTransactionMetadata.in,
    network_data: Schemas$IssuingTransactionNetworkData.in.optional(),
    object: z.enum(["issuing.transaction"]),
    purchase_details: Schemas$IssuingTransactionPurchaseDetails.in.optional(),
    token: z
      .union([z.string(), z.lazy(() => Schemas$IssuingToken.in)])
      .optional(),
    treasury: Schemas$IssuingTransactionTreasury.in.optional(),
    type: z.enum(["capture", "refund"]),
    wallet: z
      .enum(["apple_pay", "google_pay", "samsung_pay"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_details: "amountDetails",
      authorization: "authorization",
      balance_transaction: "balanceTransaction",
      card: "card",
      cardholder: "cardholder",
      created: "created",
      currency: "currency",
      dispute: "dispute",
      id: "id",
      livemode: "livemode",
      merchant_amount: "merchantAmount",
      merchant_currency: "merchantCurrency",
      merchant_data: "merchantData",
      metadata: "metadata",
      network_data: "networkData",
      object: "object",
      purchase_details: "purchaseDetails",
      token: "token",
      treasury: "treasury",
      type: "type",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransaction
 */
const SchemaOut$IssuingTransaction: z.ZodType<
  External$IssuingTransaction, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransaction // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountDetails: Schemas$IssuingTransactionAmountDetails.out.optional(),
    authorization: z
      .union([z.string(), z.lazy(() => Schemas$IssuingAuthorization.out)])
      .optional(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    card: z.union([z.string(), z.lazy(() => Schemas$IssuingCard.out)]),
    cardholder: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCardholder.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    dispute: z
      .union([z.string(), z.lazy(() => Schemas$IssuingDispute.out)])
      .optional(),
    id: z.string(),
    livemode: z.boolean(),
    merchantAmount: z.number().int(),
    merchantCurrency: z.string(),
    merchantData: Schemas$IssuingAuthorizationMerchantData.out,
    metadata: Schemas$IssuingTransactionMetadata.out,
    networkData: Schemas$IssuingTransactionNetworkData.out.optional(),
    object: z.enum(["issuing.transaction"]),
    purchaseDetails: Schemas$IssuingTransactionPurchaseDetails.out.optional(),
    token: z
      .union([z.string(), z.lazy(() => Schemas$IssuingToken.out)])
      .optional(),
    treasury: Schemas$IssuingTransactionTreasury.out.optional(),
    type: z.enum(["capture", "refund"]),
    wallet: z
      .enum(["apple_pay", "google_pay", "samsung_pay"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountDetails: "amount_details",
      authorization: "authorization",
      balanceTransaction: "balance_transaction",
      card: "card",
      cardholder: "cardholder",
      created: "created",
      currency: "currency",
      dispute: "dispute",
      id: "id",
      livemode: "livemode",
      merchantAmount: "merchant_amount",
      merchantCurrency: "merchant_currency",
      merchantData: "merchant_data",
      metadata: "metadata",
      networkData: "network_data",
      object: "object",
      purchaseDetails: "purchase_details",
      token: "token",
      treasury: "treasury",
      type: "type",
      wallet: "wallet",
    });
  });

export const Schemas$IssuingTransaction = {
  in: SchemaIn$IssuingTransaction,
  out: SchemaOut$IssuingTransaction,
};
