import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
} from "./payment-intent-update-body-payment-method-options-customer-balance-obj0-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    euBankTransfer?:
      | PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
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
 * PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    eu_bank_transfer?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
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
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.out.optional(),
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  };
