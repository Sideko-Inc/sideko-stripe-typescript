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

export type PersonFutureRequirements = {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: AccountRequirementsAlternative[] | null | undefined;
  /**
   * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash, and may immediately become `past_due`, but the account may also be given a grace period depending on the account's enablement state prior to transition.
   */
  currentlyDue: string[];
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors: AccountRequirementsError[];
  /**
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `future_requirements[current_deadline]` becomes set.
   */
  eventuallyDue: string[];
  /**
   * Fields that weren't collected by the account's `requirements.current_deadline`. These fields need to be collected to enable the person's account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
   */
  pastDue: string[];
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification: string[];
};

/**
 * @internal
 * PersonFutureRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PersonFutureRequirements = {
  alternatives?: External$AccountRequirementsAlternative[] | null | undefined;
  currently_due: string[];
  errors: External$AccountRequirementsError[];
  eventually_due: string[];
  past_due: string[];
  pending_verification: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PersonFutureRequirements
 */
const SchemaIn$PersonFutureRequirements: z.ZodType<
  PersonFutureRequirements, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alternatives: z
      .array(Schemas$AccountRequirementsAlternative.in)
      .nullable()
      .optional(),
    currently_due: z.array(z.string()),
    errors: z.array(Schemas$AccountRequirementsError.in),
    eventually_due: z.array(z.string()),
    past_due: z.array(z.string()),
    pending_verification: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alternatives: "alternatives",
      currently_due: "currentlyDue",
      errors: "errors",
      eventually_due: "eventuallyDue",
      past_due: "pastDue",
      pending_verification: "pendingVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PersonFutureRequirements
 */
const SchemaOut$PersonFutureRequirements: z.ZodType<
  External$PersonFutureRequirements, // output type of this zod object
  z.ZodTypeDef,
  PersonFutureRequirements // the object to be transformed
> = z
  .object({
    alternatives: z
      .array(Schemas$AccountRequirementsAlternative.out)
      .nullable()
      .optional(),
    currentlyDue: z.array(z.string()),
    errors: z.array(Schemas$AccountRequirementsError.out),
    eventuallyDue: z.array(z.string()),
    pastDue: z.array(z.string()),
    pendingVerification: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alternatives: "alternatives",
      currentlyDue: "currently_due",
      errors: "errors",
      eventuallyDue: "eventually_due",
      pastDue: "past_due",
      pendingVerification: "pending_verification",
    });
  });

export const Schemas$PersonFutureRequirements = {
  in: SchemaIn$PersonFutureRequirements,
  out: SchemaOut$PersonFutureRequirements,
};
