import {
  AccountExternalAccountCreateBodyBankAccountObj0Documents,
  External$AccountExternalAccountCreateBodyBankAccountObj0Documents,
  Schemas$AccountExternalAccountCreateBodyBankAccountObj0Documents,
} from "./account-external-account-create-body-bank-account-obj0-documents";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountExternalAccountCreateBodyBankAccountObj0
 */
export type AccountExternalAccountCreateBodyBankAccountObj0 = {
  accountHolderName?: string | undefined;
  accountHolderType?: ("company" | "individual") | undefined;
  accountNumber: string;
  accountType?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  country: string;
  currency?: string | undefined;
  documents?:
    | AccountExternalAccountCreateBodyBankAccountObj0Documents
    | undefined;
  object?: "bank_account" | undefined;
  routingNumber?: string | undefined;
};

/**
 * @internal
 * AccountExternalAccountCreateBodyBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountCreateBodyBankAccountObj0 = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  account_number: string;
  account_type?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  country: string;
  currency?: string | undefined;
  documents?:
    | External$AccountExternalAccountCreateBodyBankAccountObj0Documents
    | undefined;
  object?: "bank_account" | undefined;
  routing_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountCreateBodyBankAccountObj0
 */
const SchemaIn$AccountExternalAccountCreateBodyBankAccountObj0: z.ZodType<
  AccountExternalAccountCreateBodyBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().optional(),
    account_holder_type: z.enum(["company", "individual"]).optional(),
    account_number: z.string(),
    account_type: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    country: z.string(),
    currency: z.string().optional(),
    documents:
      Schemas$AccountExternalAccountCreateBodyBankAccountObj0Documents.in.optional(),
    object: z.enum(["bank_account"]).optional(),
    routing_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      account_number: "accountNumber",
      account_type: "accountType",
      country: "country",
      currency: "currency",
      documents: "documents",
      object: "object",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountCreateBodyBankAccountObj0
 */
const SchemaOut$AccountExternalAccountCreateBodyBankAccountObj0: z.ZodType<
  External$AccountExternalAccountCreateBodyBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountCreateBodyBankAccountObj0 // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountNumber: z.string(),
    accountType: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    country: z.string(),
    currency: z.string().optional(),
    documents:
      Schemas$AccountExternalAccountCreateBodyBankAccountObj0Documents.out.optional(),
    object: z.enum(["bank_account"]).optional(),
    routingNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      accountNumber: "account_number",
      accountType: "account_type",
      country: "country",
      currency: "currency",
      documents: "documents",
      object: "object",
      routingNumber: "routing_number",
    });
  });

export const Schemas$AccountExternalAccountCreateBodyBankAccountObj0 = {
  in: SchemaIn$AccountExternalAccountCreateBodyBankAccountObj0,
  out: SchemaOut$AccountExternalAccountCreateBodyBankAccountObj0,
};
