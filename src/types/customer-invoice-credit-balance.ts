import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
 */
export type CustomerInvoiceCreditBalance = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * CustomerInvoiceCreditBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerInvoiceCreditBalance = {
  [additionalProperty: string]:
    | External$CustomerInvoiceCreditBalance
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerInvoiceCreditBalance
 */
const SchemaIn$CustomerInvoiceCreditBalance: z.ZodType<
  CustomerInvoiceCreditBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerInvoiceCreditBalance
 */
const SchemaOut$CustomerInvoiceCreditBalance: z.ZodType<
  External$CustomerInvoiceCreditBalance, // output type of this zod object
  z.ZodTypeDef,
  CustomerInvoiceCreditBalance // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerInvoiceCreditBalance = {
  in: SchemaIn$CustomerInvoiceCreditBalance,
  out: SchemaOut$CustomerInvoiceCreditBalance,
};
