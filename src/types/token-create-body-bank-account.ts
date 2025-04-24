import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The bank account this token will represent.
 */
export type TokenCreateBodyBankAccount = {
  accountHolderName?: string | undefined;
  accountHolderType?: ("company" | "individual") | undefined;
  accountNumber: string;
  accountType?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  country: string;
  currency?: string | undefined;
  paymentMethod?: string | undefined;
  routingNumber?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyBankAccount = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  account_number: string;
  account_type?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  country: string;
  currency?: string | undefined;
  payment_method?: string | undefined;
  routing_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyBankAccount
 */
const SchemaIn$TokenCreateBodyBankAccount: z.ZodType<
  TokenCreateBodyBankAccount, // output type of this zod object
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
    payment_method: z.string().optional(),
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
      payment_method: "paymentMethod",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyBankAccount
 */
const SchemaOut$TokenCreateBodyBankAccount: z.ZodType<
  External$TokenCreateBodyBankAccount, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyBankAccount // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountNumber: z.string(),
    accountType: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    country: z.string(),
    currency: z.string().optional(),
    paymentMethod: z.string().optional(),
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
      paymentMethod: "payment_method",
      routingNumber: "routing_number",
    });
  });

export const Schemas$TokenCreateBodyBankAccount = {
  in: SchemaIn$TokenCreateBodyBankAccount,
  out: SchemaOut$TokenCreateBodyBankAccount,
};
