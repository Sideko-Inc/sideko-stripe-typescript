import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyVerificationDocument
 */
export type AccountPeopleCreateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyVerificationDocument
 */
const SchemaIn$AccountPeopleCreateBodyVerificationDocument: z.ZodType<
  AccountPeopleCreateBodyVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyVerificationDocument
 */
const SchemaOut$AccountPeopleCreateBodyVerificationDocument: z.ZodType<
  External$AccountPeopleCreateBodyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyVerificationDocument // the object to be transformed
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

export const Schemas$AccountPeopleCreateBodyVerificationDocument = {
  in: SchemaIn$AccountPeopleCreateBodyVerificationDocument,
  out: SchemaOut$AccountPeopleCreateBodyVerificationDocument,
};
