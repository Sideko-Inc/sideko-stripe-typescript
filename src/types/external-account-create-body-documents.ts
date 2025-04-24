import {
  External$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification,
  ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification,
  Schemas$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification,
} from "./external-account-create-body-documents-bank-account-ownership-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type ExternalAccountCreateBodyDocuments = {
  bankAccountOwnershipVerification?:
    | ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * @internal
 * ExternalAccountCreateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExternalAccountCreateBodyDocuments = {
  bank_account_ownership_verification?:
    | External$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExternalAccountCreateBodyDocuments
 */
const SchemaIn$ExternalAccountCreateBodyDocuments: z.ZodType<
  ExternalAccountCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExternalAccountCreateBodyDocuments
 */
const SchemaOut$ExternalAccountCreateBodyDocuments: z.ZodType<
  External$ExternalAccountCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  ExternalAccountCreateBodyDocuments // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$ExternalAccountCreateBodyDocumentsBankAccountOwnershipVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
    });
  });

export const Schemas$ExternalAccountCreateBodyDocuments = {
  in: SchemaIn$ExternalAccountCreateBodyDocuments,
  out: SchemaOut$ExternalAccountCreateBodyDocuments,
};
