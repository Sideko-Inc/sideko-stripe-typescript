import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
} from "./payment-intent-confirm-body-payment-method-options-customer-balance-obj0-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    euBankTransfer?:
      | PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
      | undefined;
    requestedAddressTypes?:
      | ("aba" | "iban" | "sepa" | "sort_code" | "spei" | "swift" | "zengin")[]
      | undefined;
    type:
      | "eu_bank_transfer"
      | "gb_bank_transfer"
      | "jp_bank_transfer"
      | "mx_bank_transfer"
      | "us_bank_transfer";
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    eu_bank_transfer?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
      | undefined;
    requested_address_types?:
      | ("aba" | "iban" | "sepa" | "sort_code" | "spei" | "swift" | "zengin")[]
      | undefined;
    type:
      | "eu_bank_transfer"
      | "gb_bank_transfer"
      | "jp_bank_transfer"
      | "mx_bank_transfer"
      | "us_bank_transfer";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.in.optional(),
    requested_address_types: z
      .array(
        z.enum(["aba", "iban", "sepa", "sort_code", "spei", "swift", "zengin"]),
      )
      .optional(),
    type: z.enum([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eu_bank_transfer: "euBankTransfer",
      requested_address_types: "requestedAddressTypes",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.out.optional(),
    requestedAddressTypes: z
      .array(
        z.enum(["aba", "iban", "sepa", "sort_code", "spei", "swift", "zengin"]),
      )
      .optional(),
    type: z.enum([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      requestedAddressTypes: "requested_address_types",
      type: "type",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  };
