import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCurrencyConversion = {
  /**
   * Total of all items in source currency before discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total of all items in source currency after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * Exchange rate used to convert source currency amounts to customer currency amounts
   */
  fxRate: string;
  /**
   * Creation currency of the CheckoutSession before localization
   */
  sourceCurrency: string;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCurrencyConversion without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCurrencyConversion = {
  amount_subtotal: number;
  amount_total: number;
  fx_rate: string;
  source_currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCurrencyConversion
 */
const SchemaIn$PaymentPagesCheckoutSessionCurrencyConversion: z.ZodType<
  PaymentPagesCheckoutSessionCurrencyConversion, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_subtotal: z.number().int(),
    amount_total: z.number().int(),
    fx_rate: z.string(),
    source_currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
      fx_rate: "fxRate",
      source_currency: "sourceCurrency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCurrencyConversion
 */
const SchemaOut$PaymentPagesCheckoutSessionCurrencyConversion: z.ZodType<
  External$PaymentPagesCheckoutSessionCurrencyConversion, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCurrencyConversion // the object to be transformed
> = z
  .object({
    amountSubtotal: z.number().int(),
    amountTotal: z.number().int(),
    fxRate: z.string(),
    sourceCurrency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
      fxRate: "fx_rate",
      sourceCurrency: "source_currency",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCurrencyConversion = {
  in: SchemaIn$PaymentPagesCheckoutSessionCurrencyConversion,
  out: SchemaOut$PaymentPagesCheckoutSessionCurrencyConversion,
};
