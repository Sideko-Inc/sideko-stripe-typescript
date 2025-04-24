import {
  External$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer,
  InvoicePaymentMethodOptionsCustomerBalanceBankTransfer,
  Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer,
} from "./invoice-payment-method-options-customer-balance-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsCustomerBalance = {
  bankTransfer?:
    | InvoicePaymentMethodOptionsCustomerBalanceBankTransfer
    | undefined;
  /**
   * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
   */
  fundingType?: "bank_transfer" | null | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsCustomerBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsCustomerBalance = {
  bank_transfer?:
    | External$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer
    | undefined;
  funding_type?: "bank_transfer" | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsCustomerBalance
 */
const SchemaIn$InvoicePaymentMethodOptionsCustomerBalance: z.ZodType<
  InvoicePaymentMethodOptionsCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer.in.optional(),
    funding_type: z.enum(["bank_transfer"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
      funding_type: "fundingType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsCustomerBalance
 */
const SchemaOut$InvoicePaymentMethodOptionsCustomerBalance: z.ZodType<
  External$InvoicePaymentMethodOptionsCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsCustomerBalance // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransfer.out.optional(),
    fundingType: z.enum(["bank_transfer"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsCustomerBalance = {
  in: SchemaIn$InvoicePaymentMethodOptionsCustomerBalance,
  out: SchemaOut$InvoicePaymentMethodOptionsCustomerBalance,
};
