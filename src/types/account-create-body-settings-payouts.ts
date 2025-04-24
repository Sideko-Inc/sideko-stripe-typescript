import {
  AccountCreateBodySettingsPayoutsSchedule,
  External$AccountCreateBodySettingsPayoutsSchedule,
  Schemas$AccountCreateBodySettingsPayoutsSchedule,
} from "./account-create-body-settings-payouts-schedule";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsPayouts
 */
export type AccountCreateBodySettingsPayouts = {
  debitNegativeBalances?: boolean | undefined;
  schedule?: AccountCreateBodySettingsPayoutsSchedule | undefined;
  statementDescriptor?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsPayouts without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsPayouts = {
  debit_negative_balances?: boolean | undefined;
  schedule?: External$AccountCreateBodySettingsPayoutsSchedule | undefined;
  statement_descriptor?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsPayouts
 */
const SchemaIn$AccountCreateBodySettingsPayouts: z.ZodType<
  AccountCreateBodySettingsPayouts, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    debit_negative_balances: z.boolean().optional(),
    schedule: Schemas$AccountCreateBodySettingsPayoutsSchedule.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsPayouts
 */
const SchemaOut$AccountCreateBodySettingsPayouts: z.ZodType<
  External$AccountCreateBodySettingsPayouts, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsPayouts // the object to be transformed
> = z
  .object({
    debitNegativeBalances: z.boolean().optional(),
    schedule: Schemas$AccountCreateBodySettingsPayoutsSchedule.out.optional(),
    statementDescriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debitNegativeBalances: "debit_negative_balances",
      schedule: "schedule",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$AccountCreateBodySettingsPayouts = {
  in: SchemaIn$AccountCreateBodySettingsPayouts,
  out: SchemaOut$AccountCreateBodySettingsPayouts,
};
