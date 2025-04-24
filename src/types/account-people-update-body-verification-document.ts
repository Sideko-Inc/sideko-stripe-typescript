import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyVerificationDocument
 */
export type AccountPeopleUpdateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyVerificationDocument
 */
const SchemaIn$AccountPeopleUpdateBodyVerificationDocument: z.ZodType<
  AccountPeopleUpdateBodyVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyVerificationDocument
 */
const SchemaOut$AccountPeopleUpdateBodyVerificationDocument: z.ZodType<
  External$AccountPeopleUpdateBodyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyVerificationDocument // the object to be transformed
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

export const Schemas$AccountPeopleUpdateBodyVerificationDocument = {
  in: SchemaIn$AccountPeopleUpdateBodyVerificationDocument,
  out: SchemaOut$AccountPeopleUpdateBodyVerificationDocument,
};
