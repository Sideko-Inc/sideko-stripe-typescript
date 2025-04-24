import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability
 */
export type SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability,
  };
