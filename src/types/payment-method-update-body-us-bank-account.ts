import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
 */
export type PaymentMethodUpdateBodyUsBankAccount = {
  accountHolderType?: ("company" | "individual") | undefined;
  accountType?: ("checking" | "savings") | undefined;
};

/**
 * @internal
 * PaymentMethodUpdateBodyUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUpdateBodyUsBankAccount = {
  account_holder_type?: ("company" | "individual") | undefined;
  account_type?: ("checking" | "savings") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUpdateBodyUsBankAccount
 */
const SchemaIn$PaymentMethodUpdateBodyUsBankAccount: z.ZodType<
  PaymentMethodUpdateBodyUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_type: z.enum(["company", "individual"]).optional(),
    account_type: z.enum(["checking", "savings"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_type: "accountHolderType",
      account_type: "accountType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUpdateBodyUsBankAccount
 */
const SchemaOut$PaymentMethodUpdateBodyUsBankAccount: z.ZodType<
  External$PaymentMethodUpdateBodyUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUpdateBodyUsBankAccount // the object to be transformed
> = z
  .object({
    accountHolderType: z.enum(["company", "individual"]).optional(),
    accountType: z.enum(["checking", "savings"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderType: "account_holder_type",
      accountType: "account_type",
    });
  });

export const Schemas$PaymentMethodUpdateBodyUsBankAccount = {
  in: SchemaIn$PaymentMethodUpdateBodyUsBankAccount,
  out: SchemaOut$PaymentMethodUpdateBodyUsBankAccount,
};
