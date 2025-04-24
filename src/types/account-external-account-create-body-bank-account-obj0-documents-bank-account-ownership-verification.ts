import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
export type AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * @internal
 * AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  };
