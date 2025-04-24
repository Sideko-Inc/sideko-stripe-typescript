import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bankTransfer?:
      | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    fundingType?: string | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
    fundingType: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  };
