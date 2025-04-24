import {
  External$TransferSchedule,
  Schemas$TransferSchedule,
  TransferSchedule,
} from "./transfer-schedule";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountPayoutSettings = {
  /**
   * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
   */
  debitNegativeBalances: boolean;
  schedule: TransferSchedule;
  /**
   * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
   */
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * AccountPayoutSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPayoutSettings = {
  debit_negative_balances: boolean;
  schedule: External$TransferSchedule;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPayoutSettings
 */
const SchemaIn$AccountPayoutSettings: z.ZodType<
  AccountPayoutSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    debit_negative_balances: z.boolean(),
    schedule: Schemas$TransferSchedule.in,
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debit_negative_balances: "debitNegativeBalances",
      schedule: "schedule",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPayoutSettings
 */
const SchemaOut$AccountPayoutSettings: z.ZodType<
  External$AccountPayoutSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountPayoutSettings // the object to be transformed
> = z
  .object({
    debitNegativeBalances: z.boolean(),
    schedule: Schemas$TransferSchedule.out,
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debitNegativeBalances: "debit_negative_balances",
      schedule: "schedule",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$AccountPayoutSettings = {
  in: SchemaIn$AccountPayoutSettings,
  out: SchemaOut$AccountPayoutSettings,
};
