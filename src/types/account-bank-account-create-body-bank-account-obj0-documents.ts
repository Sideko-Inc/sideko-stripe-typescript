import {
  AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  External$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
  Schemas$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification,
} from "./account-bank-account-create-body-bank-account-obj0-documents-bank-account-ownership-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountBankAccountCreateBodyBankAccountObj0Documents
 */
export type AccountBankAccountCreateBodyBankAccountObj0Documents = {
  bankAccountOwnershipVerification?:
    | AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * @internal
 * AccountBankAccountCreateBodyBankAccountObj0Documents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBankAccountCreateBodyBankAccountObj0Documents = {
  bank_account_ownership_verification?:
    | External$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBankAccountCreateBodyBankAccountObj0Documents
 */
const SchemaIn$AccountBankAccountCreateBodyBankAccountObj0Documents: z.ZodType<
  AccountBankAccountCreateBodyBankAccountObj0Documents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBankAccountCreateBodyBankAccountObj0Documents
 */
const SchemaOut$AccountBankAccountCreateBodyBankAccountObj0Documents: z.ZodType<
  External$AccountBankAccountCreateBodyBankAccountObj0Documents, // output type of this zod object
  z.ZodTypeDef,
  AccountBankAccountCreateBodyBankAccountObj0Documents // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountBankAccountCreateBodyBankAccountObj0DocumentsBankAccountOwnershipVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
    });
  });

export const Schemas$AccountBankAccountCreateBodyBankAccountObj0Documents = {
  in: SchemaIn$AccountBankAccountCreateBodyBankAccountObj0Documents,
  out: SchemaOut$AccountBankAccountCreateBodyBankAccountObj0Documents,
};
