import {
  AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  External$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  Schemas$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification,
} from "./account-external-account-update-body-documents-bank-account-ownership-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountExternalAccountUpdateBodyDocuments = {
  bankAccountOwnershipVerification?:
    | AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * @internal
 * AccountExternalAccountUpdateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountUpdateBodyDocuments = {
  bank_account_ownership_verification?:
    | External$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountUpdateBodyDocuments
 */
const SchemaIn$AccountExternalAccountUpdateBodyDocuments: z.ZodType<
  AccountExternalAccountUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountUpdateBodyDocuments
 */
const SchemaOut$AccountExternalAccountUpdateBodyDocuments: z.ZodType<
  External$AccountExternalAccountUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountUpdateBodyDocuments // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountExternalAccountUpdateBodyDocumentsBankAccountOwnershipVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
    });
  });

export const Schemas$AccountExternalAccountUpdateBodyDocuments = {
  in: SchemaIn$AccountExternalAccountUpdateBodyDocuments,
  out: SchemaOut$AccountExternalAccountUpdateBodyDocuments,
};
