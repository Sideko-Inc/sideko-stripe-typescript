import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
 */
export type TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount =
  {
    accountHolderName?: string | undefined;
    accountNumber?: string | undefined;
    routingNumber?: string | undefined;
  };

/**
 * @internal
 * TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount =
  {
    account_holder_name?: string | undefined;
    account_number?: string | undefined;
    routing_number?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
 */
const SchemaIn$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount: z.ZodType<
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
 */
const SchemaOut$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount: z.ZodType<
  External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount // the object to be transformed
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

export const Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount =
  {
    in: SchemaIn$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
    out: SchemaOut$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
  };
