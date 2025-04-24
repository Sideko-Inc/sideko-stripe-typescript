import {
  AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  External$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  Schemas$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
} from "./account-create-body-bank-account-obj0-documents-bank-account-ownership-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyBankAccountObj0Documents
 */
export type AccountCreateBodyBankAccountObj0Documents = {
  bankAccountOwnershipVerification?:
    | AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * @internal
 * AccountCreateBodyBankAccountObj0Documents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyBankAccountObj0Documents = {
  bank_account_ownership_verification?:
    | External$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyBankAccountObj0Documents
 */
const SchemaIn$AccountCreateBodyBankAccountObj0Documents: z.ZodType<
  AccountCreateBodyBankAccountObj0Documents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyBankAccountObj0Documents
 */
const SchemaOut$AccountCreateBodyBankAccountObj0Documents: z.ZodType<
  External$AccountCreateBodyBankAccountObj0Documents, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyBankAccountObj0Documents // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
    });
  });

export const Schemas$AccountCreateBodyBankAccountObj0Documents = {
  in: SchemaIn$AccountCreateBodyBankAccountObj0Documents,
  out: SchemaOut$AccountCreateBodyBankAccountObj0Documents,
};
