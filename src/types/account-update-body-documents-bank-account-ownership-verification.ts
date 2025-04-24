import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
export type AccountUpdateBodyDocumentsBankAccountOwnershipVerification = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountUpdateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountUpdateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountUpdateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountUpdateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountUpdateBodyDocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  };
