import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bankTransfer?:
      | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    fundingType?: string | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
    fundingType: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  };
