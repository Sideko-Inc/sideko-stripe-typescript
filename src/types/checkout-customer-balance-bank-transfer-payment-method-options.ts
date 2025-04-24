import {
  External$PaymentMethodOptionsCustomerBalanceEuBankAccount,
  PaymentMethodOptionsCustomerBalanceEuBankAccount,
  Schemas$PaymentMethodOptionsCustomerBalanceEuBankAccount,
} from "./payment-method-options-customer-balance-eu-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutCustomerBalanceBankTransferPaymentMethodOptions = {
  euBankTransfer?: PaymentMethodOptionsCustomerBalanceEuBankAccount | undefined;
  /**
   * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
   *
   * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
   */
  requestedAddressTypes?:
    | ("aba" | "iban" | "sepa" | "sort_code" | "spei" | "swift" | "zengin")[]
    | undefined;
  /**
   * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
   */
  type?:
    | (
        | "eu_bank_transfer"
        | "gb_bank_transfer"
        | "jp_bank_transfer"
        | "mx_bank_transfer"
        | "us_bank_transfer"
      )
    | null
    | undefined;
};

/**
 * @internal
 * CheckoutCustomerBalanceBankTransferPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutCustomerBalanceBankTransferPaymentMethodOptions = {
  eu_bank_transfer?:
    | External$PaymentMethodOptionsCustomerBalanceEuBankAccount
    | undefined;
  requested_address_types?:
    | ("aba" | "iban" | "sepa" | "sort_code" | "spei" | "swift" | "zengin")[]
    | undefined;
  type?:
    | (
        | "eu_bank_transfer"
        | "gb_bank_transfer"
        | "jp_bank_transfer"
        | "mx_bank_transfer"
        | "us_bank_transfer"
      )
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutCustomerBalanceBankTransferPaymentMethodOptions
 */
const SchemaIn$CheckoutCustomerBalanceBankTransferPaymentMethodOptions: z.ZodType<
  CheckoutCustomerBalanceBankTransferPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$PaymentMethodOptionsCustomerBalanceEuBankAccount.in.optional(),
    requested_address_types: z
      .array(
        z.enum(["aba", "iban", "sepa", "sort_code", "spei", "swift", "zengin"]),
      )
      .optional(),
    type: z
      .enum([
        "eu_bank_transfer",
        "gb_bank_transfer",
        "jp_bank_transfer",
        "mx_bank_transfer",
        "us_bank_transfer",
      ])
      .nullable()
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutCustomerBalanceBankTransferPaymentMethodOptions
 */
const SchemaOut$CheckoutCustomerBalanceBankTransferPaymentMethodOptions: z.ZodType<
  External$CheckoutCustomerBalanceBankTransferPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutCustomerBalanceBankTransferPaymentMethodOptions // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$PaymentMethodOptionsCustomerBalanceEuBankAccount.out.optional(),
    requestedAddressTypes: z
      .array(
        z.enum(["aba", "iban", "sepa", "sort_code", "spei", "swift", "zengin"]),
      )
      .optional(),
    type: z
      .enum([
        "eu_bank_transfer",
        "gb_bank_transfer",
        "jp_bank_transfer",
        "mx_bank_transfer",
        "us_bank_transfer",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      requestedAddressTypes: "requested_address_types",
      type: "type",
    });
  });

export const Schemas$CheckoutCustomerBalanceBankTransferPaymentMethodOptions = {
  in: SchemaIn$CheckoutCustomerBalanceBankTransferPaymentMethodOptions,
  out: SchemaOut$CheckoutCustomerBalanceBankTransferPaymentMethodOptions,
};
