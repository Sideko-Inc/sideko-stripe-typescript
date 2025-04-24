import {
  AccountRequirementsError,
  External$AccountRequirementsError,
  Schemas$AccountRequirementsError,
} from "./account-requirements-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ExternalAccountRequirements = {
  /**
   * Fields that need to be collected to keep the external account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
   */
  currentlyDue?: string[] | null | undefined;
  /**
   * Fields that are `currently_due` and need to be collected again because validation or verification failed.
   */
  errors?: AccountRequirementsError[] | null | undefined;
  /**
   * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the external account.
   */
  pastDue?: string[] | null | undefined;
  /**
   * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
   */
  pendingVerification?: string[] | null | undefined;
};

/**
 * @internal
 * ExternalAccountRequirements without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExternalAccountRequirements = {
  currently_due?: string[] | null | undefined;
  errors?: External$AccountRequirementsError[] | null | undefined;
  past_due?: string[] | null | undefined;
  pending_verification?: string[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExternalAccountRequirements
 */
const SchemaIn$ExternalAccountRequirements: z.ZodType<
  ExternalAccountRequirements, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currently_due: z.array(z.string()).nullable().optional(),
    errors: z.array(Schemas$AccountRequirementsError.in).nullable().optional(),
    past_due: z.array(z.string()).nullable().optional(),
    pending_verification: z.array(z.string()).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currently_due: "currentlyDue",
      errors: "errors",
      past_due: "pastDue",
      pending_verification: "pendingVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExternalAccountRequirements
 */
const SchemaOut$ExternalAccountRequirements: z.ZodType<
  External$ExternalAccountRequirements, // output type of this zod object
  z.ZodTypeDef,
  ExternalAccountRequirements // the object to be transformed
> = z
  .object({
    currentlyDue: z.array(z.string()).nullable().optional(),
    errors: z.array(Schemas$AccountRequirementsError.out).nullable().optional(),
    pastDue: z.array(z.string()).nullable().optional(),
    pendingVerification: z.array(z.string()).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currentlyDue: "currently_due",
      errors: "errors",
      pastDue: "past_due",
      pendingVerification: "pending_verification",
    });
  });

export const Schemas$ExternalAccountRequirements = {
  in: SchemaIn$ExternalAccountRequirements,
  out: SchemaOut$ExternalAccountRequirements,
};
