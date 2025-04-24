import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
export type AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * @internal
 * AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  };
