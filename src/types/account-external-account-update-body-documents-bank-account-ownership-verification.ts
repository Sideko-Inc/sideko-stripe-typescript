import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
export type AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * @internal
 * AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  };
