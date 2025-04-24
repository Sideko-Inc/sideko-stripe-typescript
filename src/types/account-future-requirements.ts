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

export type AccountFutureRequirements = {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: AccountRequirementsAlternative[] | null | undefined;
  /**
   * Date on which `future_requirements` becomes the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on its enablement state prior to transitioning.
   */
  currentDeadline?: number | null | undefined;
  /**
   * Fields that need to be collected to keep the account enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
   */
  currentlyDue?: string[] | null | undefined;
  /**
   * This is typed as an enum for consistency with `requirements.disabled_reason`.
   */
  disabledReason?:
    | (
        | "action_required.requested_capabilities"
        | "listed"
        | "other"
        | "platform_paused"
        | "rejected.fraud"
        | "rejected.incomplete_verification"
        | "rejected.listed"
        | "rejected.other"
        | "rejected.platform_fraud"
        | "rejected.platform_other"
        | "rejected.platform_terms_of_service"
        | "rejected.terms_of_service"
        | "requirements.past_due"
        | "requirements.pending_verification"
        | "under_review"
      )
    | null
    | undefined;
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors?: AccountRequirementsError[] | null | undefined;
  /**
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well.
   */
  eventuallyDue?: string[] | null | undefined;
  /**
   * Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
   */
  pastDue?: string[] | null | undefined;
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification?: string[] | null | undefined;
};

/**
 * @internal
 * AccountFutureRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountFutureRequirements = {
  alternatives?: External$AccountRequirementsAlternative[] | null | undefined;
  current_deadline?: number | null | undefined;
  currently_due?: string[] | null | undefined;
  disabled_reason?:
    | (
        | "action_required.requested_capabilities"
        | "listed"
        | "other"
        | "platform_paused"
        | "rejected.fraud"
        | "rejected.incomplete_verification"
        | "rejected.listed"
        | "rejected.other"
        | "rejected.platform_fraud"
        | "rejected.platform_other"
        | "rejected.platform_terms_of_service"
        | "rejected.terms_of_service"
        | "requirements.past_due"
        | "requirements.pending_verification"
        | "under_review"
      )
    | null
    | undefined;
  errors?: External$AccountRequirementsError[] | null | undefined;
  eventually_due?: string[] | null | undefined;
  past_due?: string[] | null | undefined;
  pending_verification?: string[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountFutureRequirements
 */
const SchemaIn$AccountFutureRequirements: z.ZodType<
  AccountFutureRequirements, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alternatives: z
      .array(Schemas$AccountRequirementsAlternative.in)
      .nullable()
      .optional(),
    current_deadline: z.number().int().nullable().optional(),
    currently_due: z.array(z.string()).nullable().optional(),
    disabled_reason: z
      .enum([
        "action_required.requested_capabilities",
        "listed",
        "other",
        "platform_paused",
        "rejected.fraud",
        "rejected.incomplete_verification",
        "rejected.listed",
        "rejected.other",
        "rejected.platform_fraud",
        "rejected.platform_other",
        "rejected.platform_terms_of_service",
        "rejected.terms_of_service",
        "requirements.past_due",
        "requirements.pending_verification",
        "under_review",
      ])
      .nullable()
      .optional(),
    errors: z.array(Schemas$AccountRequirementsError.in).nullable().optional(),
    eventually_due: z.array(z.string()).nullable().optional(),
    past_due: z.array(z.string()).nullable().optional(),
    pending_verification: z.array(z.string()).nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountFutureRequirements
 */
const SchemaOut$AccountFutureRequirements: z.ZodType<
  External$AccountFutureRequirements, // output type of this zod object
  z.ZodTypeDef,
  AccountFutureRequirements // the object to be transformed
> = z
  .object({
    alternatives: z
      .array(Schemas$AccountRequirementsAlternative.out)
      .nullable()
      .optional(),
    currentDeadline: z.number().int().nullable().optional(),
    currentlyDue: z.array(z.string()).nullable().optional(),
    disabledReason: z
      .enum([
        "action_required.requested_capabilities",
        "listed",
        "other",
        "platform_paused",
        "rejected.fraud",
        "rejected.incomplete_verification",
        "rejected.listed",
        "rejected.other",
        "rejected.platform_fraud",
        "rejected.platform_other",
        "rejected.platform_terms_of_service",
        "rejected.terms_of_service",
        "requirements.past_due",
        "requirements.pending_verification",
        "under_review",
      ])
      .nullable()
      .optional(),
    errors: z.array(Schemas$AccountRequirementsError.out).nullable().optional(),
    eventuallyDue: z.array(z.string()).nullable().optional(),
    pastDue: z.array(z.string()).nullable().optional(),
    pendingVerification: z.array(z.string()).nullable().optional(),
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

export const Schemas$AccountFutureRequirements = {
  in: SchemaIn$AccountFutureRequirements,
  out: SchemaOut$AccountFutureRequirements,
};
