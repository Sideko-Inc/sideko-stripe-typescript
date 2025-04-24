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

export type AccountCapabilityRequirements = {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: AccountRequirementsAlternative[] | null | undefined;
  /**
   * Date by which the fields in `currently_due` must be collected to keep the capability enabled for the account. These fields may disable the capability sooner if the next threshold is reached before they are collected.
   */
  currentDeadline?: number | null | undefined;
  /**
   * Fields that need to be collected to keep the capability enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
   */
  currentlyDue: string[];
  /**
   * Description of why the capability is disabled. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
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
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
   */
  eventuallyDue: string[];
  /**
   * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the capability on the account.
   */
  pastDue: string[];
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification: string[];
};

/**
 * @internal
 * AccountCapabilityRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCapabilityRequirements = {
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
 * Takes network data, validates it, and transforms keys to match typescript object AccountCapabilityRequirements
 */
const SchemaIn$AccountCapabilityRequirements: z.ZodType<
  AccountCapabilityRequirements, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCapabilityRequirements
 */
const SchemaOut$AccountCapabilityRequirements: z.ZodType<
  External$AccountCapabilityRequirements, // output type of this zod object
  z.ZodTypeDef,
  AccountCapabilityRequirements // the object to be transformed
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

export const Schemas$AccountCapabilityRequirements = {
  in: SchemaIn$AccountCapabilityRequirements,
  out: SchemaOut$AccountCapabilityRequirements,
};
