import {
  BalanceAmount,
  External$BalanceAmount,
  Schemas$BalanceAmount,
} from "./balance-amount";
import {
  BalanceAmountNet,
  External$BalanceAmountNet,
  Schemas$BalanceAmountNet,
} from "./balance-amount-net";
import {
  BalanceDetail,
  External$BalanceDetail,
  Schemas$BalanceDetail,
} from "./balance-detail";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This is an object representing your Stripe balance. You can retrieve it to see
 * the balance currently on your Stripe account.
 *
 * You can also retrieve the balance history, which contains a list of
 * [transactions](https://stripe.com/docs/reporting/balance-transaction-types) that contributed to the balance
 * (charges, payouts, and so forth).
 *
 * The available and pending amounts for each currency are broken down further by
 * payment source types.
 *
 * Related guide: [Understanding Connect account balances](https://stripe.com/docs/connect/account-balances)
 */
export type Balance = {
  /**
   * Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). You can find the available balance for each currency and payment type in the `source_types` property.
   */
  available: BalanceAmount[];
  /**
   * Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. You can find the connect reserve balance for each currency and payment type in the `source_types` property.
   */
  connectReserved?: BalanceAmount[] | undefined;
  /**
   * Funds that you can pay out using Instant Payouts.
   */
  instantAvailable?: BalanceAmountNet[] | undefined;
  issuing?: BalanceDetail | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "balance";
  /**
   * Funds that aren't available in the balance yet. You can find the pending balance for each currency and each payment type in the `source_types` property.
   */
  pending: BalanceAmount[];
};

/**
 * @internal
 * Balance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Balance = {
  available: External$BalanceAmount[];
  connect_reserved?: External$BalanceAmount[] | undefined;
  instant_available?: External$BalanceAmountNet[] | undefined;
  issuing?: External$BalanceDetail | undefined;
  livemode: boolean;
  object: "balance";
  pending: External$BalanceAmount[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Balance
 */
const SchemaIn$Balance: z.ZodType<
  Balance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available: z.array(Schemas$BalanceAmount.in),
    connect_reserved: z.array(Schemas$BalanceAmount.in).optional(),
    instant_available: z.array(Schemas$BalanceAmountNet.in).optional(),
    issuing: Schemas$BalanceDetail.in.optional(),
    livemode: z.boolean(),
    object: z.enum(["balance"]),
    pending: z.array(Schemas$BalanceAmount.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      connect_reserved: "connectReserved",
      instant_available: "instantAvailable",
      issuing: "issuing",
      livemode: "livemode",
      object: "object",
      pending: "pending",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Balance
 */
const SchemaOut$Balance: z.ZodType<
  External$Balance, // output type of this zod object
  z.ZodTypeDef,
  Balance // the object to be transformed
> = z
  .object({
    available: z.array(Schemas$BalanceAmount.out),
    connectReserved: z.array(Schemas$BalanceAmount.out).optional(),
    instantAvailable: z.array(Schemas$BalanceAmountNet.out).optional(),
    issuing: Schemas$BalanceDetail.out.optional(),
    livemode: z.boolean(),
    object: z.enum(["balance"]),
    pending: z.array(Schemas$BalanceAmount.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      connectReserved: "connect_reserved",
      instantAvailable: "instant_available",
      issuing: "issuing",
      livemode: "livemode",
      object: "object",
      pending: "pending",
    });
  });

export const Schemas$Balance = {
  in: SchemaIn$Balance,
  out: SchemaOut$Balance,
};
