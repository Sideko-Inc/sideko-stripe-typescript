import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  };
