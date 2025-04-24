import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  };
