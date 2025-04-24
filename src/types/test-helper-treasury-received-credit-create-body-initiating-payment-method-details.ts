import {
  External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
  Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
  TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount,
} from "./test-helper-treasury-received-credit-create-body-initiating-payment-method-details-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Initiating payment method details for the object.
 */
export type TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails =
  {
    type: "us_bank_account";
    usBankAccount?:
      | TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
      | undefined;
  };

/**
 * @internal
 * TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails =
  {
    type: "us_bank_account";
    us_bank_account?:
      | External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails
 */
const SchemaIn$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails: z.ZodType<
  TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["us_bank_account"]),
    us_bank_account:
      Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails
 */
const SchemaOut$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails: z.ZodType<
  External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails // the object to be transformed
> = z
  .object({
    type: z.enum(["us_bank_account"]),
    usBankAccount:
      Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetailsUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails =
  {
    in: SchemaIn$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails,
    out: SchemaOut$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails,
  };
