import {
  AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  External$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  Schemas$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
} from "./account-bank-account-update-body-documents-bank-account-ownership-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountBankAccountUpdateBodyDocuments = {
  bankAccountOwnershipVerification?:
    | AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * @internal
 * AccountBankAccountUpdateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBankAccountUpdateBodyDocuments = {
  bank_account_ownership_verification?:
    | External$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBankAccountUpdateBodyDocuments
 */
const SchemaIn$AccountBankAccountUpdateBodyDocuments: z.ZodType<
  AccountBankAccountUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBankAccountUpdateBodyDocuments
 */
const SchemaOut$AccountBankAccountUpdateBodyDocuments: z.ZodType<
  External$AccountBankAccountUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountBankAccountUpdateBodyDocuments // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountBankAccountUpdateBodyDocumentsBankAccountOwnershipVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
    });
  });

export const Schemas$AccountBankAccountUpdateBodyDocuments = {
  in: SchemaIn$AccountBankAccountUpdateBodyDocuments,
  out: SchemaOut$AccountBankAccountUpdateBodyDocuments,
};
