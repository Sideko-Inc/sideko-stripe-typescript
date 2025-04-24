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

export type AccountRequirements = {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: AccountRequirementsAlternative[] | null | undefined;
  /**
   * Date by which the fields in `currently_due` must be collected to keep the account enabled. These fields may disable the account sooner if the next threshold is reached before they are collected.
   */
  currentDeadline?: number | null | undefined;
  /**
   * Fields that need to be collected to keep the account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
   */
  currentlyDue?: string[] | null | undefined;
  /**
   * If the account is disabled, this enum describes why. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
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
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
   */
  eventuallyDue?: string[] | null | undefined;
  /**
   * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the account.
   */
  pastDue?: string[] | null | undefined;
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification?: string[] | null | undefined;
};

/**
 * @internal
 * AccountRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountRequirements = {
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
 * Takes network data, validates it, and transforms keys to match typescript object AccountRequirements
 */
const SchemaIn$AccountRequirements: z.ZodType<
  AccountRequirements, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountRequirements
 */
const SchemaOut$AccountRequirements: z.ZodType<
  External$AccountRequirements, // output type of this zod object
  z.ZodTypeDef,
  AccountRequirements // the object to be transformed
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

export const Schemas$AccountRequirements = {
  in: SchemaIn$AccountRequirements,
  out: SchemaOut$AccountRequirements,
};
