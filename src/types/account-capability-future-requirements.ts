import {
  AccountRequirementsAlternative,
  External$AccountRequirementsAlternative,
  Schemas$AccountRequirementsAlternative,
} from "./account-requirements-alternative";
import {
  AccountRequirementsError,
  External$AccountRequirementsError,
  Schemas$AccountRequirementsError,
} from "./account-requirements-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountCapabilityFutureRequirements = {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: AccountRequirementsAlternative[] | null | undefined;
  /**
   * Date on which `future_requirements` becomes the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on the capability's enablement state prior to transitioning.
   */
  currentDeadline?: number | null | undefined;
  /**
   * Fields that need to be collected to keep the capability enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
   */
  currentlyDue: string[];
  /**
   * This is typed as an enum for consistency with `requirements.disabled_reason`, but it safe to assume `future_requirements.disabled_reason` is null because fields in `future_requirements` will never disable the account.
   */
  disabledReason?:
    | (
        | "other"
        | "paused.inactivity"
        | "pending.onboarding"
        | "pending.review"
        | "platform_disabled"
        | "platform_paused"
        | "rejected.inactivity"
        | "rejected.other"
        | "rejected.unsupported_business"
        | "requirements.fields_needed"
      )
    | null
    | undefined;
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors: AccountRequirementsError[];
  /**
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well.
   */
  eventuallyDue: string[];
  /**
   * Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
   */
  pastDue: string[];
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification: string[];
};

/**
 * @internal
 * AccountCapabilityFutureRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCapabilityFutureRequirements = {
  alternatives?: External$AccountRequirementsAlternative[] | null | undefined;
  current_deadline?: number | null | undefined;
  currently_due: string[];
  disabled_reason?:
    | (
        | "other"
        | "paused.inactivity"
        | "pending.onboarding"
        | "pending.review"
        | "platform_disabled"
        | "platform_paused"
        | "rejected.inactivity"
        | "rejected.other"
        | "rejected.unsupported_business"
        | "requirements.fields_needed"
      )
    | null
    | undefined;
  errors: External$AccountRequirementsError[];
  eventually_due: string[];
  past_due: string[];
  pending_verification: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCapabilityFutureRequirements
 */
const SchemaIn$AccountCapabilityFutureRequirements: z.ZodType<
  AccountCapabilityFutureRequirements, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alternatives: z
      .array(Schemas$AccountRequirementsAlternative.in)
      .nullable()
      .optional(),
    current_deadline: z.number().int().nullable().optional(),
    currently_due: z.array(z.string()),
    disabled_reason: z
      .enum([
        "other",
        "paused.inactivity",
        "pending.onboarding",
        "pending.review",
        "platform_disabled",
        "platform_paused",
        "rejected.inactivity",
        "rejected.other",
        "rejected.unsupported_business",
        "requirements.fields_needed",
      ])
      .nullable()
      .optional(),
    errors: z.array(Schemas$AccountRequirementsError.in),
    eventually_due: z.array(z.string()),
    past_due: z.array(z.string()),
    pending_verification: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alternatives: "alternatives",
      current_deadline: "currentDeadline",
      currently_due: "currentlyDue",
      disabled_reason: "disabledReason",
      errors: "errors",
      eventually_due: "eventuallyDue",
      past_due: "pastDue",
      pending_verification: "pendingVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCapabilityFutureRequirements
 */
const SchemaOut$AccountCapabilityFutureRequirements: z.ZodType<
  External$AccountCapabilityFutureRequirements, // output type of this zod object
  z.ZodTypeDef,
  AccountCapabilityFutureRequirements // the object to be transformed
> = z
  .object({
    alternatives: z
      .array(Schemas$AccountRequirementsAlternative.out)
      .nullable()
      .optional(),
    currentDeadline: z.number().int().nullable().optional(),
    currentlyDue: z.array(z.string()),
    disabledReason: z
      .enum([
        "other",
        "paused.inactivity",
        "pending.onboarding",
        "pending.review",
        "platform_disabled",
        "platform_paused",
        "rejected.inactivity",
        "rejected.other",
        "rejected.unsupported_business",
        "requirements.fields_needed",
      ])
      .nullable()
      .optional(),
    errors: z.array(Schemas$AccountRequirementsError.out),
    eventuallyDue: z.array(z.string()),
    pastDue: z.array(z.string()),
    pendingVerification: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alternatives: "alternatives",
      currentDeadline: "current_deadline",
      currentlyDue: "currently_due",
      disabledReason: "disabled_reason",
      errors: "errors",
      eventuallyDue: "eventually_due",
      pastDue: "past_due",
      pendingVerification: "pending_verification",
    });
  });

export const Schemas$AccountCapabilityFutureRequirements = {
  in: SchemaIn$AccountCapabilityFutureRequirements,
  out: SchemaOut$AccountCapabilityFutureRequirements,
};
