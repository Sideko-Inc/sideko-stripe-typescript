import {
  AccountCreateBodyBankAccountObj0Documents,
  External$AccountCreateBodyBankAccountObj0Documents,
  Schemas$AccountCreateBodyBankAccountObj0Documents,
} from "./account-create-body-bank-account-obj0-documents";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyBankAccountObj0
 */
export type AccountCreateBodyBankAccountObj0 = {
  accountHolderName?: string | undefined;
  accountHolderType?: ("company" | "individual") | undefined;
  accountNumber: string;
  accountType?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  country: string;
  currency?: string | undefined;
  documents?: AccountCreateBodyBankAccountObj0Documents | undefined;
  object?: "bank_account" | undefined;
  routingNumber?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyBankAccountObj0 = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  account_number: string;
  account_type?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  country: string;
  currency?: string | undefined;
  documents?: External$AccountCreateBodyBankAccountObj0Documents | undefined;
  object?: "bank_account" | undefined;
  routing_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyBankAccountObj0
 */
const SchemaIn$AccountCreateBodyBankAccountObj0: z.ZodType<
  AccountCreateBodyBankAccountObj0, // output type of this zod object
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
    documents: Schemas$AccountCreateBodyBankAccountObj0Documents.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyBankAccountObj0
 */
const SchemaOut$AccountCreateBodyBankAccountObj0: z.ZodType<
  External$AccountCreateBodyBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyBankAccountObj0 // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountNumber: z.string(),
    accountType: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    country: z.string(),
    currency: z.string().optional(),
    documents: Schemas$AccountCreateBodyBankAccountObj0Documents.out.optional(),
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

export const Schemas$AccountCreateBodyBankAccountObj0 = {
  in: SchemaIn$AccountCreateBodyBankAccountObj0,
  out: SchemaOut$AccountCreateBodyBankAccountObj0,
};
