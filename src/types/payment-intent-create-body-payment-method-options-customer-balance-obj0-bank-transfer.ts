import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
} from "./payment-intent-create-body-payment-method-options-customer-balance-obj0-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    euBankTransfer?:
      | PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
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
 * PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    eu_bank_transfer?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
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
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  };
