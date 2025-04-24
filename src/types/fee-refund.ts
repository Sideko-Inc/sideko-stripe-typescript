import {
  ApplicationFee,
  External$ApplicationFee,
  Schemas$ApplicationFee,
} from "./application-fee";
import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  External$FeeRefundMetadata,
  FeeRefundMetadata,
  Schemas$FeeRefundMetadata,
} from "./fee-refund-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * `Application Fee Refund` objects allow you to refund an application fee that
 * has previously been created but not yet refunded. Funds will be refunded to
 * the Stripe account from which the fee was originally collected.
 *
 * Related guide: [Refunding application fees](https://stripe.com/docs/connect/destination-charges#refunding-app-fee)
 */
export type FeeRefund = {
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
   * ID of the application fee that was refunded.
   */
  fee: string | ApplicationFee;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: FeeRefundMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "fee_refund";
};

/**
 * @internal
 * FeeRefund without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FeeRefund = {
  amount: number;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  created: number;
  currency: string;
  fee: string | External$ApplicationFee;
  id: string;
  metadata?: External$FeeRefundMetadata | null | undefined;
  object: "fee_refund";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FeeRefund
 */
const SchemaIn$FeeRefund: z.ZodType<
  FeeRefund, // output type of this zod object
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
    fee: z.union([z.string(), z.lazy(() => Schemas$ApplicationFee.in)]),
    id: z.string(),
    metadata: Schemas$FeeRefundMetadata.in.nullable().optional(),
    object: z.enum(["fee_refund"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balance_transaction: "balanceTransaction",
      created: "created",
      currency: "currency",
      fee: "fee",
      id: "id",
      metadata: "metadata",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FeeRefund
 */
const SchemaOut$FeeRefund: z.ZodType<
  External$FeeRefund, // output type of this zod object
  z.ZodTypeDef,
  FeeRefund // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    fee: z.union([z.string(), z.lazy(() => Schemas$ApplicationFee.out)]),
    id: z.string(),
    metadata: Schemas$FeeRefundMetadata.out.nullable().optional(),
    object: z.enum(["fee_refund"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balanceTransaction: "balance_transaction",
      created: "created",
      currency: "currency",
      fee: "fee",
      id: "id",
      metadata: "metadata",
      object: "object",
    });
  });

export const Schemas$FeeRefund = {
  in: SchemaIn$FeeRefund,
  out: SchemaOut$FeeRefund,
};
