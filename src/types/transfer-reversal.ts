import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import { External$Refund, Refund, Schemas$Refund } from "./refund";
import { External$Transfer, Schemas$Transfer, Transfer } from "./transfer";
import {
  External$TransferReversalMetadata,
  Schemas$TransferReversalMetadata,
  TransferReversalMetadata,
} from "./transfer-reversal-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * [Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a
 * connected account, either entirely or partially, and can also specify whether
 * to refund any related application fees. Transfer reversals add to the
 * platform's balance and subtract from the destination account's balance.
 *
 * Reversing a transfer that was made for a [destination
 * charge](/docs/connect/destination-charges) is allowed only up to the amount of
 * the charge. It is possible to reverse a
 * [transfer_group](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options)
 * transfer only if the destination account has enough balance to cover the
 * reversal.
 *
 * Related guide: [Reverse transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#reverse-transfers)
 */
export type TransferReversal = {
  /**
   * Amount, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Balance transaction that describes the impact on your account balance.
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Linked payment refund for the transfer reversal.
   */
  destinationPaymentRefund?: (string | Refund) | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: TransferReversalMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "transfer_reversal";
  /**
   * ID of the refund responsible for the transfer reversal.
   */
  sourceRefund?: (string | Refund) | undefined;
  /**
   * ID of the transfer that was reversed.
   */
  transfer: string | Transfer;
};

/**
 * @internal
 * TransferReversal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferReversal = {
  amount: number;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  created: number;
  currency: string;
  destination_payment_refund?: (string | External$Refund) | undefined;
  id: string;
  metadata?: External$TransferReversalMetadata | null | undefined;
  object: "transfer_reversal";
  source_refund?: (string | External$Refund) | undefined;
  transfer: string | External$Transfer;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferReversal
 */
const SchemaIn$TransferReversal: z.ZodType<
  TransferReversal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    destination_payment_refund: z
      .union([z.string(), z.lazy(() => Schemas$Refund.in)])
      .optional(),
    id: z.string(),
    metadata: Schemas$TransferReversalMetadata.in.nullable().optional(),
    object: z.enum(["transfer_reversal"]),
    source_refund: z
      .union([z.string(), z.lazy(() => Schemas$Refund.in)])
      .optional(),
    transfer: z.union([z.string(), z.lazy(() => Schemas$Transfer.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balance_transaction: "balanceTransaction",
      created: "created",
      currency: "currency",
      destination_payment_refund: "destinationPaymentRefund",
      id: "id",
      metadata: "metadata",
      object: "object",
      source_refund: "sourceRefund",
      transfer: "transfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferReversal
 */
const SchemaOut$TransferReversal: z.ZodType<
  External$TransferReversal, // output type of this zod object
  z.ZodTypeDef,
  TransferReversal // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    destinationPaymentRefund: z
      .union([z.string(), z.lazy(() => Schemas$Refund.out)])
      .optional(),
    id: z.string(),
    metadata: Schemas$TransferReversalMetadata.out.nullable().optional(),
    object: z.enum(["transfer_reversal"]),
    sourceRefund: z
      .union([z.string(), z.lazy(() => Schemas$Refund.out)])
      .optional(),
    transfer: z.union([z.string(), z.lazy(() => Schemas$Transfer.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balanceTransaction: "balance_transaction",
      created: "created",
      currency: "currency",
      destinationPaymentRefund: "destination_payment_refund",
      id: "id",
      metadata: "metadata",
      object: "object",
      sourceRefund: "source_refund",
      transfer: "transfer",
    });
  });

export const Schemas$TransferReversal = {
  in: SchemaIn$TransferReversal,
  out: SchemaOut$TransferReversal,
};
