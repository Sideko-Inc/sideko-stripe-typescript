import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability
 */
export type SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability,
  };
