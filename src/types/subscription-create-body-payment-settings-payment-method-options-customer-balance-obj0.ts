import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./subscription-create-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bankTransfer?:
      | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    fundingType?: string | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
    fundingType: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  };
