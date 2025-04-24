import {
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
} from "./checkout-session-create-body-payment-method-options-customer-balance-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer =
  {
    euBankTransfer?:
      | CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
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
 * CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer =
  {
    eu_bank_transfer?:
      | External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
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
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer,
  };
