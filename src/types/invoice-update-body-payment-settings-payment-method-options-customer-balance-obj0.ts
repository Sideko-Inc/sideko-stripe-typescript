import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./invoice-update-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bankTransfer?:
      | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    fundingType?: string | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
    funding_type: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
      funding_type: "fundingType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
    fundingType: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
    });
  });

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  };
