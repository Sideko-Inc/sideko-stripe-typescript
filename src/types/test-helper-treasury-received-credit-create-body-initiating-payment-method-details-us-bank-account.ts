import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
 */
export type TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount =
  {
    accountHolderName?: string | undefined;
    accountNumber?: string | undefined;
    routingNumber?: string | undefined;
  };

/**
 * @internal
 * TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount =
  {
    account_holder_name?: string | undefined;
    account_number?: string | undefined;
    routing_number?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
 */
const SchemaIn$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount: z.ZodType<
  TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().optional(),
    account_number: z.string().optional(),
    routing_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
 */
const SchemaOut$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount: z.ZodType<
  External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountNumber: z.string().optional(),
    routingNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      routingNumber: "routing_number",
    });
  });

export const Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount =
  {
    in: SchemaIn$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
    out: SchemaOut$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
  };
