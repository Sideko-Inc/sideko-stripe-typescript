import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCompanyVerificationDocument
 */
export type AccountUpdateBodyCompanyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCompanyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCompanyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCompanyVerificationDocument
 */
const SchemaIn$AccountUpdateBodyCompanyVerificationDocument: z.ZodType<
  AccountUpdateBodyCompanyVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCompanyVerificationDocument
 */
const SchemaOut$AccountUpdateBodyCompanyVerificationDocument: z.ZodType<
  External$AccountUpdateBodyCompanyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCompanyVerificationDocument // the object to be transformed
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

export const Schemas$AccountUpdateBodyCompanyVerificationDocument = {
  in: SchemaIn$AccountUpdateBodyCompanyVerificationDocument,
  out: SchemaOut$AccountUpdateBodyCompanyVerificationDocument,
};
