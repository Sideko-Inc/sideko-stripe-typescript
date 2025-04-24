import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  };
