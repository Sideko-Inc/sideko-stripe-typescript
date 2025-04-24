import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCompanyVerificationDocument
 */
export type AccountCreateBodyCompanyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyCompanyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCompanyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCompanyVerificationDocument
 */
const SchemaIn$AccountCreateBodyCompanyVerificationDocument: z.ZodType<
  AccountCreateBodyCompanyVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCompanyVerificationDocument
 */
const SchemaOut$AccountCreateBodyCompanyVerificationDocument: z.ZodType<
  External$AccountCreateBodyCompanyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCompanyVerificationDocument // the object to be transformed
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

export const Schemas$AccountCreateBodyCompanyVerificationDocument = {
  in: SchemaIn$AccountCreateBodyCompanyVerificationDocument,
  out: SchemaOut$AccountCreateBodyCompanyVerificationDocument,
};
