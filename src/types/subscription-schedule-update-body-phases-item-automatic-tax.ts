import {
  External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability,
  SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability,
} from "./subscription-schedule-update-body-phases-item-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax
 */
export type SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax = {
  enabled: boolean;
  liability?:
    | SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax = {
  enabled: boolean;
  liability?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax,
  out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax,
};
