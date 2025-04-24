import {
  External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
  Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
} from "./test-helper-treasury-received-debit-create-body-initiating-payment-method-details-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Initiating payment method details for the object.
 */
export type TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails =
  {
    type: "us_bank_account";
    usBankAccount?:
      | TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
      | undefined;
  };

/**
 * @internal
 * TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails =
  {
    type: "us_bank_account";
    us_bank_account?:
      | External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
 */
const SchemaIn$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails: z.ZodType<
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["us_bank_account"]),
    us_bank_account:
      Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
 */
const SchemaOut$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails: z.ZodType<
  External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails // the object to be transformed
> = z
  .object({
    type: z.enum(["us_bank_account"]),
    usBankAccount:
      Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetailsUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails =
  {
    in: SchemaIn$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
    out: SchemaOut$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
  };
