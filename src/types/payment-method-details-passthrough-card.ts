import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsPassthroughCard = {
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string | null | undefined;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth?: number | null | undefined;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear?: number | null | undefined;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding?: string | null | undefined;
  /**
   * The last four digits of the card.
   */
  last4?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsPassthroughCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsPassthroughCard = {
  brand?: string | null | undefined;
  country?: string | null | undefined;
  exp_month?: number | null | undefined;
  exp_year?: number | null | undefined;
  funding?: string | null | undefined;
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsPassthroughCard
 */
const SchemaIn$PaymentMethodDetailsPassthroughCard: z.ZodType<
  PaymentMethodDetailsPassthroughCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    exp_month: z.number().int().nullable().optional(),
    exp_year: z.number().int().nullable().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      country: "country",
      exp_month: "expMonth",
      exp_year: "expYear",
      funding: "funding",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsPassthroughCard
 */
const SchemaOut$PaymentMethodDetailsPassthroughCard: z.ZodType<
  External$PaymentMethodDetailsPassthroughCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsPassthroughCard // the object to be transformed
> = z
  .object({
    brand: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    expMonth: z.number().int().nullable().optional(),
    expYear: z.number().int().nullable().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      country: "country",
      expMonth: "exp_month",
      expYear: "exp_year",
      funding: "funding",
      last4: "last4",
    });
  });

export const Schemas$PaymentMethodDetailsPassthroughCard = {
  in: SchemaIn$PaymentMethodDetailsPassthroughCard,
  out: SchemaOut$PaymentMethodDetailsPassthroughCard,
};
