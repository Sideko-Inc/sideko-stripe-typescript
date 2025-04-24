import {
  AccountUpdateBodySettingsPayoutsSchedule,
  External$AccountUpdateBodySettingsPayoutsSchedule,
  Schemas$AccountUpdateBodySettingsPayoutsSchedule,
} from "./account-update-body-settings-payouts-schedule";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsPayouts
 */
export type AccountUpdateBodySettingsPayouts = {
  debitNegativeBalances?: boolean | undefined;
  schedule?: AccountUpdateBodySettingsPayoutsSchedule | undefined;
  statementDescriptor?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsPayouts without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsPayouts = {
  debit_negative_balances?: boolean | undefined;
  schedule?: External$AccountUpdateBodySettingsPayoutsSchedule | undefined;
  statement_descriptor?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsPayouts
 */
const SchemaIn$AccountUpdateBodySettingsPayouts: z.ZodType<
  AccountUpdateBodySettingsPayouts, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    debit_negative_balances: z.boolean().optional(),
    schedule: Schemas$AccountUpdateBodySettingsPayoutsSchedule.in.optional(),
    statement_descriptor: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsPayouts
 */
const SchemaOut$AccountUpdateBodySettingsPayouts: z.ZodType<
  External$AccountUpdateBodySettingsPayouts, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsPayouts // the object to be transformed
> = z
  .object({
    debitNegativeBalances: z.boolean().optional(),
    schedule: Schemas$AccountUpdateBodySettingsPayoutsSchedule.out.optional(),
    statementDescriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debitNegativeBalances: "debit_negative_balances",
      schedule: "schedule",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$AccountUpdateBodySettingsPayouts = {
  in: SchemaIn$AccountUpdateBodySettingsPayouts,
  out: SchemaOut$AccountUpdateBodySettingsPayouts,
};
