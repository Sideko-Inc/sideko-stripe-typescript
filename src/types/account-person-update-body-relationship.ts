import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The relationship that this person has with the account's legal entity.
 */
export type AccountPersonUpdateBodyRelationship = {
  authorizer?: boolean | undefined;
  director?: boolean | undefined;
  executive?: boolean | undefined;
  legalGuardian?: boolean | undefined;
  owner?: boolean | undefined;
  percentOwnership?: (number | string) | undefined;
  representative?: boolean | undefined;
  title?: string | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyRelationship without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyRelationship = {
  authorizer?: boolean | undefined;
  director?: boolean | undefined;
  executive?: boolean | undefined;
  legal_guardian?: boolean | undefined;
  owner?: boolean | undefined;
  percent_ownership?: (number | string) | undefined;
  representative?: boolean | undefined;
  title?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyRelationship
 */
const SchemaIn$AccountPersonUpdateBodyRelationship: z.ZodType<
  AccountPersonUpdateBodyRelationship, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizer: z.boolean().optional(),
    director: z.boolean().optional(),
    executive: z.boolean().optional(),
    legal_guardian: z.boolean().optional(),
    owner: z.boolean().optional(),
    percent_ownership: z.union([z.number(), z.string()]).optional(),
    representative: z.boolean().optional(),
    title: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizer: "authorizer",
      director: "director",
      executive: "executive",
      legal_guardian: "legalGuardian",
      owner: "owner",
      percent_ownership: "percentOwnership",
      representative: "representative",
      title: "title",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyRelationship
 */
const SchemaOut$AccountPersonUpdateBodyRelationship: z.ZodType<
  External$AccountPersonUpdateBodyRelationship, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyRelationship // the object to be transformed
> = z
  .object({
    authorizer: z.boolean().optional(),
    director: z.boolean().optional(),
    executive: z.boolean().optional(),
    legalGuardian: z.boolean().optional(),
    owner: z.boolean().optional(),
    percentOwnership: z.union([z.number(), z.string()]).optional(),
    representative: z.boolean().optional(),
    title: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizer: "authorizer",
      director: "director",
      executive: "executive",
      legalGuardian: "legal_guardian",
      owner: "owner",
      percentOwnership: "percent_ownership",
      representative: "representative",
      title: "title",
    });
  });

export const Schemas$AccountPersonUpdateBodyRelationship = {
  in: SchemaIn$AccountPersonUpdateBodyRelationship,
  out: SchemaOut$AccountPersonUpdateBodyRelationship,
};
