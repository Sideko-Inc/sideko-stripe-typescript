import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsBankAccountOwnershipVerification
 */
export type AccountCreateBodyDocumentsBankAccountOwnershipVerification = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountCreateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountCreateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountCreateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountCreateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountCreateBodyDocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountCreateBodyDocumentsBankAccountOwnershipVerification,
  };
