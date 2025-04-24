import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsCustomerBalanceEuBankAccount = {
  /**
   * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
   */
  country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
};

/**
 * @internal
 * PaymentMethodOptionsCustomerBalanceEuBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsCustomerBalanceEuBankAccount = {
  country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsCustomerBalanceEuBankAccount
 */
const SchemaIn$PaymentMethodOptionsCustomerBalanceEuBankAccount: z.ZodType<
  PaymentMethodOptionsCustomerBalanceEuBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.enum(["BE", "DE", "ES", "FR", "IE", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsCustomerBalanceEuBankAccount
 */
const SchemaOut$PaymentMethodOptionsCustomerBalanceEuBankAccount: z.ZodType<
  External$PaymentMethodOptionsCustomerBalanceEuBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsCustomerBalanceEuBankAccount // the object to be transformed
> = z
  .object({
    country: z.enum(["BE", "DE", "ES", "FR", "IE", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentMethodOptionsCustomerBalanceEuBankAccount = {
  in: SchemaIn$PaymentMethodOptionsCustomerBalanceEuBankAccount,
  out: SchemaOut$PaymentMethodOptionsCustomerBalanceEuBankAccount,
};
