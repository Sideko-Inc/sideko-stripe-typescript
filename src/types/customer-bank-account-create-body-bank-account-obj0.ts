import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountCreateBodyBankAccountObj0
 */
export type CustomerBankAccountCreateBodyBankAccountObj0 = {
  accountHolderName?: string | undefined;
  accountHolderType?: ("company" | "individual") | undefined;
  accountNumber: string;
  country: string;
  currency?: string | undefined;
  object?: "bank_account" | undefined;
  routingNumber?: string | undefined;
};

/**
 * @internal
 * CustomerBankAccountCreateBodyBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountCreateBodyBankAccountObj0 = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  account_number: string;
  country: string;
  currency?: string | undefined;
  object?: "bank_account" | undefined;
  routing_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountCreateBodyBankAccountObj0
 */
const SchemaIn$CustomerBankAccountCreateBodyBankAccountObj0: z.ZodType<
  CustomerBankAccountCreateBodyBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().optional(),
    account_holder_type: z.enum(["company", "individual"]).optional(),
    account_number: z.string(),
    country: z.string(),
    currency: z.string().optional(),
    object: z.enum(["bank_account"]).optional(),
    routing_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      account_number: "accountNumber",
      country: "country",
      currency: "currency",
      object: "object",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountCreateBodyBankAccountObj0
 */
const SchemaOut$CustomerBankAccountCreateBodyBankAccountObj0: z.ZodType<
  External$CustomerBankAccountCreateBodyBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountCreateBodyBankAccountObj0 // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountNumber: z.string(),
    country: z.string(),
    currency: z.string().optional(),
    object: z.enum(["bank_account"]).optional(),
    routingNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      accountNumber: "account_number",
      country: "country",
      currency: "currency",
      object: "object",
      routingNumber: "routing_number",
    });
  });

export const Schemas$CustomerBankAccountCreateBodyBankAccountObj0 = {
  in: SchemaIn$CustomerBankAccountCreateBodyBankAccountObj0,
  out: SchemaOut$CustomerBankAccountCreateBodyBankAccountObj0,
};
