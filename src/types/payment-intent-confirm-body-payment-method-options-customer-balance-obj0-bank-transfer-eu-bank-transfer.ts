import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransferEuBankTransfer,
  };
