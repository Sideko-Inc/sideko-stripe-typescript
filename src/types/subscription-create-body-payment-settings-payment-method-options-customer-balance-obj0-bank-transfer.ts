import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
} from "./subscription-create-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    euBankTransfer?:
      | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
      | undefined;
    type?: string | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    eu_bank_transfer?:
      | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
      | undefined;
    type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer.out.optional(),
    type: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      type: "type",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  };
