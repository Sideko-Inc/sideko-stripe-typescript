import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataUsBankAccount
 */
export type SetupIntentUpdateBodyPaymentMethodDataUsBankAccount = {
  accountHolderType?: ("company" | "individual") | undefined;
  accountNumber?: string | undefined;
  accountType?: ("checking" | "savings") | undefined;
  financialConnectionsAccount?: string | undefined;
  routingNumber?: string | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount = {
  account_holder_type?: ("company" | "individual") | undefined;
  account_number?: string | undefined;
  account_type?: ("checking" | "savings") | undefined;
  financial_connections_account?: string | undefined;
  routing_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataUsBankAccount
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_type: z.enum(["company", "individual"]).optional(),
    account_number: z.string().optional(),
    account_type: z.enum(["checking", "savings"]).optional(),
    financial_connections_account: z.string().optional(),
    routing_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_type: "accountHolderType",
      account_number: "accountNumber",
      account_type: "accountType",
      financial_connections_account: "financialConnectionsAccount",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataUsBankAccount // the object to be transformed
> = z
  .object({
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountNumber: z.string().optional(),
    accountType: z.enum(["checking", "savings"]).optional(),
    financialConnectionsAccount: z.string().optional(),
    routingNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderType: "account_holder_type",
      accountNumber: "account_number",
      accountType: "account_type",
      financialConnectionsAccount: "financial_connections_account",
      routingNumber: "routing_number",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount,
};
