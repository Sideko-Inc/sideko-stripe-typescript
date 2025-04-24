import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Filters on the list of people returned based on the person's relationship to the account's company.
 */
export type AccountPersonListRelationship = {
  authorizer?: boolean | undefined;
  director?: boolean | undefined;
  executive?: boolean | undefined;
  legalGuardian?: boolean | undefined;
  owner?: boolean | undefined;
  representative?: boolean | undefined;
};

/**
 * @internal
 * AccountPersonListRelationship without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonListRelationship = {
  authorizer?: boolean | undefined;
  director?: boolean | undefined;
  executive?: boolean | undefined;
  legal_guardian?: boolean | undefined;
  owner?: boolean | undefined;
  representative?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonListRelationship
 */
const SchemaIn$AccountPersonListRelationship: z.ZodType<
  AccountPersonListRelationship, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizer: z.boolean().optional(),
    director: z.boolean().optional(),
    executive: z.boolean().optional(),
    legal_guardian: z.boolean().optional(),
    owner: z.boolean().optional(),
    representative: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizer: "authorizer",
      director: "director",
      executive: "executive",
      legal_guardian: "legalGuardian",
      owner: "owner",
      representative: "representative",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonListRelationship
 */
const SchemaOut$AccountPersonListRelationship: z.ZodType<
  External$AccountPersonListRelationship, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonListRelationship // the object to be transformed
> = z
  .object({
    authorizer: z.boolean().optional(),
    director: z.boolean().optional(),
    executive: z.boolean().optional(),
    legalGuardian: z.boolean().optional(),
    owner: z.boolean().optional(),
    representative: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizer: "authorizer",
      director: "director",
      executive: "executive",
      legalGuardian: "legal_guardian",
      owner: "owner",
      representative: "representative",
    });
  });

export const Schemas$AccountPersonListRelationship = {
  in: SchemaIn$AccountPersonListRelationship,
  out: SchemaOut$AccountPersonListRelationship,
};
