import {
  AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  External$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  Schemas$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
} from "./account-external-account-create-body-bank-account-obj0-documents-bank-account-ownership-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountExternalAccountCreateBodyBankAccountObj0Documents
 */
export type AccountExternalAccountCreateBodyBankAccountObj0Documents = {
  bankAccountOwnershipVerification?:
    | AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * @internal
 * AccountExternalAccountCreateBodyBankAccountObj0Documents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountCreateBodyBankAccountObj0Documents =
  {
    bank_account_ownership_verification?:
      | External$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountCreateBodyBankAccountObj0Documents
 */
const SchemaIn$AccountExternalAccountCreateBodyBankAccountObj0Documents: z.ZodType<
  AccountExternalAccountCreateBodyBankAccountObj0Documents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountCreateBodyBankAccountObj0Documents
 */
const SchemaOut$AccountExternalAccountCreateBodyBankAccountObj0Documents: z.ZodType<
  External$AccountExternalAccountCreateBodyBankAccountObj0Documents, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountCreateBodyBankAccountObj0Documents // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountExternalAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
    });
  });

export const Schemas$AccountExternalAccountCreateBodyBankAccountObj0Documents =
  {
    in: SchemaIn$AccountExternalAccountCreateBodyBankAccountObj0Documents,
    out: SchemaOut$AccountExternalAccountCreateBodyBankAccountObj0Documents,
  };
