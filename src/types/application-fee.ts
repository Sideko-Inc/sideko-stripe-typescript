import { Account, External$Account, Schemas$Account } from "./account";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import {
  ApplicationFeeRefunds,
  External$ApplicationFeeRefunds,
  Schemas$ApplicationFeeRefunds,
} from "./application-fee-refunds";
import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$PlatformEarningFeeSource,
  PlatformEarningFeeSource,
  Schemas$PlatformEarningFeeSource,
} from "./platform-earning-fee-source";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ApplicationFee = {
  /**
   * ID of the Stripe account this fee was taken from.
   */
  account: string | Account;
  /**
   * Amount earned, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued)
   */
  amountRefunded: number;
  /**
   * ID of the Connect application that earned the fee.
   */
  application: string | Application;
  /**
   * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * ID of the charge that the application fee was taken from.
   */
  charge: string | Charge;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  feeSource?: PlatformEarningFeeSource | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "application_fee";
  /**
   * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
   */
  originatingTransaction?: (string | Charge) | undefined;
  /**
   * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
   */
  refunded: boolean;
  /**
   * A list of refunds that have been applied to the fee.
   */
  refunds: ApplicationFeeRefunds;
};

/**
 * @internal
 * ApplicationFee without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFee = {
  account: string | External$Account;
  amount: number;
  amount_refunded: number;
  application: string | External$Application;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  charge: string | External$Charge;
  created: number;
  currency: string;
  fee_source?: External$PlatformEarningFeeSource | undefined;
  id: string;
  livemode: boolean;
  object: "application_fee";
  originating_transaction?: (string | External$Charge) | undefined;
  refunded: boolean;
  refunds: External$ApplicationFeeRefunds;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFee
 */
const SchemaIn$ApplicationFee: z.ZodType<
  ApplicationFee, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]),
    amount: z.number().int(),
    amount_refunded: z.number().int(),
    application: z.union([z.string(), Schemas$Application.in]),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]),
    created: z.number().int(),
    currency: z.string(),
    fee_source: Schemas$PlatformEarningFeeSource.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["application_fee"]),
    originating_transaction: z
      .union([z.string(), z.lazy(() => Schemas$Charge.in)])
      .optional(),
    refunded: z.boolean(),
    refunds: z.lazy(() => Schemas$ApplicationFeeRefunds.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      amount: "amount",
      amount_refunded: "amountRefunded",
      application: "application",
      balance_transaction: "balanceTransaction",
      charge: "charge",
      created: "created",
      currency: "currency",
      fee_source: "feeSource",
      id: "id",
      livemode: "livemode",
      object: "object",
      originating_transaction: "originatingTransaction",
      refunded: "refunded",
      refunds: "refunds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFee
 */
const SchemaOut$ApplicationFee: z.ZodType<
  External$ApplicationFee, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFee // the object to be transformed
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.out)]),
    amount: z.number().int(),
    amountRefunded: z.number().int(),
    application: z.union([z.string(), Schemas$Application.out]),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]),
    created: z.number().int(),
    currency: z.string(),
    feeSource: Schemas$PlatformEarningFeeSource.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["application_fee"]),
    originatingTransaction: z
      .union([z.string(), z.lazy(() => Schemas$Charge.out)])
      .optional(),
    refunded: z.boolean(),
    refunds: z.lazy(() => Schemas$ApplicationFeeRefunds.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      amount: "amount",
      amountRefunded: "amount_refunded",
      application: "application",
      balanceTransaction: "balance_transaction",
      charge: "charge",
      created: "created",
      currency: "currency",
      feeSource: "fee_source",
      id: "id",
      livemode: "livemode",
      object: "object",
      originatingTransaction: "originating_transaction",
      refunded: "refunded",
      refunds: "refunds",
    });
  });

export const Schemas$ApplicationFee = {
  in: SchemaIn$ApplicationFee,
  out: SchemaOut$ApplicationFee,
};
