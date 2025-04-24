import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyVerificationAdditionalDocument
 */
export type AccountPeopleUpdateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyVerificationAdditionalDocument
 */
const SchemaIn$AccountPeopleUpdateBodyVerificationAdditionalDocument: z.ZodType<
  AccountPeopleUpdateBodyVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    back: z.string().optional(),
    front: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyVerificationAdditionalDocument
 */
const SchemaOut$AccountPeopleUpdateBodyVerificationAdditionalDocument: z.ZodType<
  External$AccountPeopleUpdateBodyVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyVerificationAdditionalDocument // the object to be transformed
> = z
  .object({
    back: z.string().optional(),
    front: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

export const Schemas$AccountPeopleUpdateBodyVerificationAdditionalDocument = {
  in: SchemaIn$AccountPeopleUpdateBodyVerificationAdditionalDocument,
  out: SchemaOut$AccountPeopleUpdateBodyVerificationAdditionalDocument,
};
