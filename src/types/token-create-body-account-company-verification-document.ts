import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountCompanyVerificationDocument
 */
export type TokenCreateBodyAccountCompanyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountCompanyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountCompanyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountCompanyVerificationDocument
 */
const SchemaIn$TokenCreateBodyAccountCompanyVerificationDocument: z.ZodType<
  TokenCreateBodyAccountCompanyVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountCompanyVerificationDocument
 */
const SchemaOut$TokenCreateBodyAccountCompanyVerificationDocument: z.ZodType<
  External$TokenCreateBodyAccountCompanyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountCompanyVerificationDocument // the object to be transformed
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

export const Schemas$TokenCreateBodyAccountCompanyVerificationDocument = {
  in: SchemaIn$TokenCreateBodyAccountCompanyVerificationDocument,
  out: SchemaOut$TokenCreateBodyAccountCompanyVerificationDocument,
};
