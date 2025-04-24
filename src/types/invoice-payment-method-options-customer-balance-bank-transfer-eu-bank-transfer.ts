import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    /**
     * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
     */
    country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
  };

/**
 * @internal
 * InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
 */
const SchemaIn$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer: z.ZodType<
  InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.enum(["BE", "DE", "ES", "FR", "IE", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer
 */
const SchemaOut$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer: z.ZodType<
  External$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.enum(["BE", "DE", "ES", "FR", "IE", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    in: SchemaIn$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
    out: SchemaOut$InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
  };
