import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividualRelationship
 */
export type TokenCreateBodyAccountIndividualRelationship = {
  director?: boolean | undefined;
  executive?: boolean | undefined;
  owner?: boolean | undefined;
  percentOwnership?: (number | string) | undefined;
  title?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividualRelationship without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividualRelationship = {
  director?: boolean | undefined;
  executive?: boolean | undefined;
  owner?: boolean | undefined;
  percent_ownership?: (number | string) | undefined;
  title?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividualRelationship
 */
const SchemaIn$TokenCreateBodyAccountIndividualRelationship: z.ZodType<
  TokenCreateBodyAccountIndividualRelationship, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividualRelationship
 */
const SchemaOut$TokenCreateBodyAccountIndividualRelationship: z.ZodType<
  External$TokenCreateBodyAccountIndividualRelationship, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividualRelationship // the object to be transformed
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

export const Schemas$TokenCreateBodyAccountIndividualRelationship = {
  in: SchemaIn$TokenCreateBodyAccountIndividualRelationship,
  out: SchemaOut$TokenCreateBodyAccountIndividualRelationship,
};
