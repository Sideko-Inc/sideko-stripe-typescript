import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.
 */
export type AccountLinkCreateBodyCollectionOptions = {
  fields?: ("currently_due" | "eventually_due") | undefined;
  futureRequirements?: ("include" | "omit") | undefined;
};

/**
 * @internal
 * AccountLinkCreateBodyCollectionOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountLinkCreateBodyCollectionOptions = {
  fields?: ("currently_due" | "eventually_due") | undefined;
  future_requirements?: ("include" | "omit") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountLinkCreateBodyCollectionOptions
 */
const SchemaIn$AccountLinkCreateBodyCollectionOptions: z.ZodType<
  AccountLinkCreateBodyCollectionOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fields: z.enum(["currently_due", "eventually_due"]).optional(),
    future_requirements: z.enum(["include", "omit"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fields: "fields",
      future_requirements: "futureRequirements",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountLinkCreateBodyCollectionOptions
 */
const SchemaOut$AccountLinkCreateBodyCollectionOptions: z.ZodType<
  External$AccountLinkCreateBodyCollectionOptions, // output type of this zod object
  z.ZodTypeDef,
  AccountLinkCreateBodyCollectionOptions // the object to be transformed
> = z
  .object({
    fields: z.enum(["currently_due", "eventually_due"]).optional(),
    futureRequirements: z.enum(["include", "omit"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fields: "fields",
      futureRequirements: "future_requirements",
    });
  });

export const Schemas$AccountLinkCreateBodyCollectionOptions = {
  in: SchemaIn$AccountLinkCreateBodyCollectionOptions,
  out: SchemaOut$AccountLinkCreateBodyCollectionOptions,
};
