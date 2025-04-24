import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyVerificationAdditionalDocument
 */
export type AccountPeopleCreateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyVerificationAdditionalDocument
 */
const SchemaIn$AccountPeopleCreateBodyVerificationAdditionalDocument: z.ZodType<
  AccountPeopleCreateBodyVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyVerificationAdditionalDocument
 */
const SchemaOut$AccountPeopleCreateBodyVerificationAdditionalDocument: z.ZodType<
  External$AccountPeopleCreateBodyVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$AccountPeopleCreateBodyVerificationAdditionalDocument = {
  in: SchemaIn$AccountPeopleCreateBodyVerificationAdditionalDocument,
  out: SchemaOut$AccountPeopleCreateBodyVerificationAdditionalDocument,
};
