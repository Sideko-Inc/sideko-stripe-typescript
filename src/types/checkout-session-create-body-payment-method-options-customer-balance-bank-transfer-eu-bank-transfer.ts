import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
  };
