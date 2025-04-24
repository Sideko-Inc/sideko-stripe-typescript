import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyIndividualRelationship
 */
export type AccountUpdateBodyIndividualRelationship = {
  director?: boolean | undefined;
  executive?: boolean | undefined;
  owner?: boolean | undefined;
  percentOwnership?: (number | string) | undefined;
  title?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodyIndividualRelationship without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividualRelationship = {
  director?: boolean | undefined;
  executive?: boolean | undefined;
  owner?: boolean | undefined;
  percent_ownership?: (number | string) | undefined;
  title?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividualRelationship
 */
const SchemaIn$AccountUpdateBodyIndividualRelationship: z.ZodType<
  AccountUpdateBodyIndividualRelationship, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    director: z.boolean().optional(),
    executive: z.boolean().optional(),
    owner: z.boolean().optional(),
    percent_ownership: z.union([z.number(), z.string()]).optional(),
    title: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      director: "director",
      executive: "executive",
      owner: "owner",
      percent_ownership: "percentOwnership",
      title: "title",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividualRelationship
 */
const SchemaOut$AccountUpdateBodyIndividualRelationship: z.ZodType<
  External$AccountUpdateBodyIndividualRelationship, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividualRelationship // the object to be transformed
> = z
  .object({
    director: z.boolean().optional(),
    executive: z.boolean().optional(),
    owner: z.boolean().optional(),
    percentOwnership: z.union([z.number(), z.string()]).optional(),
    title: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      director: "director",
      executive: "executive",
      owner: "owner",
      percentOwnership: "percent_ownership",
      title: "title",
    });
  });

export const Schemas$AccountUpdateBodyIndividualRelationship = {
  in: SchemaIn$AccountUpdateBodyIndividualRelationship,
  out: SchemaOut$AccountUpdateBodyIndividualRelationship,
};
