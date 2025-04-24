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

export type PersonRequirements = {
  /**
   * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
   */
  alternatives?: AccountRequirementsAlternative[] | null | undefined;
  /**
   * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
   */
  currentlyDue: string[];
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors: AccountRequirementsError[];
  /**
   * Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set.
   */
  eventuallyDue: string[];
  /**
   * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account.
   */
  pastDue: string[];
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification: string[];
};

/**
 * @internal
 * PersonRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PersonRequirements = {
  alternatives?: External$AccountRequirementsAlternative[] | null | undefined;
  currently_due: string[];
  errors: External$AccountRequirementsError[];
  eventually_due: string[];
  past_due: string[];
  pending_verification: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PersonRequirements
 */
const SchemaIn$PersonRequirements: z.ZodType<
  PersonRequirements, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PersonRequirements
 */
const SchemaOut$PersonRequirements: z.ZodType<
  External$PersonRequirements, // output type of this zod object
  z.ZodTypeDef,
  PersonRequirements // the object to be transformed
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

export const Schemas$PersonRequirements = {
  in: SchemaIn$PersonRequirements,
  out: SchemaOut$PersonRequirements,
};
