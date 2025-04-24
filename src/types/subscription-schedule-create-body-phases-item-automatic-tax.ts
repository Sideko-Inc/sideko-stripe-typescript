import {
  External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability,
  SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability,
} from "./subscription-schedule-create-body-phases-item-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemAutomaticTax
 */
export type SubscriptionScheduleCreateBodyPhasesItemAutomaticTax = {
  enabled: boolean;
  liability?:
    | SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax = {
  enabled: boolean;
  liability?:
    | External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemAutomaticTax
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax = {
  in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax,
  out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax,
};
