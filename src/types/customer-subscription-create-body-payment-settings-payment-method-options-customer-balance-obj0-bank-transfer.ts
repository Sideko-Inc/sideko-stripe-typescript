import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    euBankTransfer?:
      | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
      | undefined;
    type?: string | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    eu_bank_transfer?:
      | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
      | undefined;
    type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.in.optional(),
    type: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eu_bank_transfer: "euBankTransfer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.out.optional(),
    type: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      type: "type",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  };
