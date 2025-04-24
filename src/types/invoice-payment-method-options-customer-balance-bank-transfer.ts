import {
  External$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
  InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
  Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
} from "./invoice-payment-method-options-customer-balance-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsCustomerBalanceBankTransfer = {
  euBankTransfer?:
    | InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
    | undefined;
  /**
   * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
   */
  type?: string | null | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsCustomerBalanceBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer = {
  eu_bank_transfer?:
    | External$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
    | undefined;
  type?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsCustomerBalanceBankTransfer
 */
const SchemaIn$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer: z.ZodType<
  InvoicePaymentMethodOptionsCustomerBalanceBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.in.optional(),
    type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eu_bank_transfer: "euBankTransfer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer
 */
const SchemaOut$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer: z.ZodType<
  External$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsCustomerBalanceBankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.out.optional(),
    type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      type: "type",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer = {
  in: SchemaIn$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer,
  out: SchemaOut$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer,
};
