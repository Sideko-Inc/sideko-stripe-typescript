import { Account, External$Account, Schemas$Account } from "./account";
import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$TransferMetadata,
  Schemas$TransferMetadata,
  TransferMetadata,
} from "./transfer-metadata";
import {
  External$TransferReversals,
  Schemas$TransferReversals,
  TransferReversals,
} from "./transfer-reversals";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A `Transfer` object is created when you move funds between Stripe accounts as
 * part of Connect.
 *
 * Before April 6, 2017, transfers also represented movement of funds from a
 * Stripe account to a card or bank account. This behavior has since been split
 * out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more
 * information, read about the
 * [transfer/payout split](https://stripe.com/docs/transfer-payout-split).
 *
 * Related guide: [Creating separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers)
 */
export type Transfer = {
  /**
   * Amount in cents (or local equivalent) to be transferred.
   */
  amount: number;
  /**
   * Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
   */
  amountReversed: number;
  /**
   * Balance transaction that describes the impact of this transfer on your account balance.
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * Time that this record of the transfer was first created.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * ID of the Stripe account the transfer was sent to.
   */
  destination?: (string | Account) | undefined;
  /**
   * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
   */
  destinationPayment?: (string | Charge) | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: TransferMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "transfer";
  /**
   * A list of reversals that have been applied to the transfer.
   */
  reversals: TransferReversals;
  /**
   * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
   */
  reversed: boolean;
  /**
   * ID of the charge that was used to fund the transfer. If null, the transfer was funded from the available balance.
   */
  sourceTransaction?: (string | Charge) | undefined;
  /**
   * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
   */
  sourceType?: string | undefined;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | null | undefined;
};

/**
 * @internal
 * Transfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Transfer = {
  amount: number;
  amount_reversed: number;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  created: number;
  currency: string;
  description?: string | null | undefined;
  destination?: (string | External$Account) | undefined;
  destination_payment?: (string | External$Charge) | undefined;
  id: string;
  livemode: boolean;
  metadata: External$TransferMetadata;
  object: "transfer";
  reversals: External$TransferReversals;
  reversed: boolean;
  source_transaction?: (string | External$Charge) | undefined;
  source_type?: string | undefined;
  transfer_group?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Transfer
 */
const SchemaIn$Transfer: z.ZodType<
  Transfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_reversed: z.number().int(),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    destination: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    destination_payment: z
      .union([z.string(), z.lazy(() => Schemas$Charge.in)])
      .optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TransferMetadata.in,
    object: z.enum(["transfer"]),
    reversals: z.lazy(() => Schemas$TransferReversals.in),
    reversed: z.boolean(),
    source_transaction: z
      .union([z.string(), z.lazy(() => Schemas$Charge.in)])
      .optional(),
    source_type: z.string().optional(),
    transfer_group: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_reversed: "amountReversed",
      balance_transaction: "balanceTransaction",
      created: "created",
      currency: "currency",
      description: "description",
      destination: "destination",
      destination_payment: "destinationPayment",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      reversals: "reversals",
      reversed: "reversed",
      source_transaction: "sourceTransaction",
      source_type: "sourceType",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Transfer
 */
const SchemaOut$Transfer: z.ZodType<
  External$Transfer, // output type of this zod object
  z.ZodTypeDef,
  Transfer // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountReversed: z.number().int(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    destination: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    destinationPayment: z
      .union([z.string(), z.lazy(() => Schemas$Charge.out)])
      .optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TransferMetadata.out,
    object: z.enum(["transfer"]),
    reversals: z.lazy(() => Schemas$TransferReversals.out),
    reversed: z.boolean(),
    sourceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$Charge.out)])
      .optional(),
    sourceType: z.string().optional(),
    transferGroup: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountReversed: "amount_reversed",
      balanceTransaction: "balance_transaction",
      created: "created",
      currency: "currency",
      description: "description",
      destination: "destination",
      destinationPayment: "destination_payment",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      reversals: "reversals",
      reversed: "reversed",
      sourceTransaction: "source_transaction",
      sourceType: "source_type",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$Transfer = {
  in: SchemaIn$Transfer,
  out: SchemaOut$Transfer,
};
