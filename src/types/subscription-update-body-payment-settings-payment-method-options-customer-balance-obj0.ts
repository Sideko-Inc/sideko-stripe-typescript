import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./subscription-update-body-payment-settings-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bankTransfer?:
      | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    fundingType?: string | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
    fundingType: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
    });
  });

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  };
