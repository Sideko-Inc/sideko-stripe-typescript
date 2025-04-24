import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsProofOfRegistration
 */
export type AccountCreateBodyDocumentsProofOfRegistration = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsProofOfRegistration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsProofOfRegistration = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsProofOfRegistration
 */
const SchemaIn$AccountCreateBodyDocumentsProofOfRegistration: z.ZodType<
  AccountCreateBodyDocumentsProofOfRegistration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsProofOfRegistration
 */
const SchemaOut$AccountCreateBodyDocumentsProofOfRegistration: z.ZodType<
  External$AccountCreateBodyDocumentsProofOfRegistration, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsProofOfRegistration // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsProofOfRegistration = {
  in: SchemaIn$AccountCreateBodyDocumentsProofOfRegistration,
  out: SchemaOut$AccountCreateBodyDocumentsProofOfRegistration,
};
