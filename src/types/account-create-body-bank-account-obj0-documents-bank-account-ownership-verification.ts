import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
export type AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * @internal
 * AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  };
