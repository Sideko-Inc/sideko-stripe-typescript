import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
export type AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * @internal
 * AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
const SchemaIn$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification: z.ZodType<
  AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
 */
const SchemaOut$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification: z.ZodType<
  External$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification =
  {
    in: SchemaIn$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
    out: SchemaOut$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  };
