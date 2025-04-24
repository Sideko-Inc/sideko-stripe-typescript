import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification
 */
export type ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * @internal
 * ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaIn$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification
 */
const SchemaOut$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification: z.ZodType<
  External$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification,
    out: SchemaOut$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification,
  };
