import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentApplyCustomerBalanceBody
 */
export type PaymentIntentApplyCustomerBalanceBody = {
  /**
   * Amount that you intend to apply to this PaymentIntent from the customer’s cash balance. If the PaymentIntent was created by an Invoice, the full amount of the PaymentIntent is applied regardless of this parameter.
   *
   * A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (for example, 100 cents to charge 1 USD or 100 to charge 100 JPY, a zero-decimal currency). The maximum amount is the amount of the PaymentIntent.
   *
   * When you omit the amount, it defaults to the remaining amount requested on the PaymentIntent.
   */
  amount?: number | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentIntentApplyCustomerBalanceBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentApplyCustomerBalanceBody = {
  amount?: number | undefined;
  currency?: string | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | External$PaymentIntentApplyCustomerBalanceBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentApplyCustomerBalanceBody
 */
const SchemaIn$PaymentIntentApplyCustomerBalanceBody: z.ZodType<
  PaymentIntentApplyCustomerBalanceBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentApplyCustomerBalanceBody
 */
const SchemaOut$PaymentIntentApplyCustomerBalanceBody: z.ZodType<
  External$PaymentIntentApplyCustomerBalanceBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentApplyCustomerBalanceBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      expand: "expand",
    });
  });

export const Schemas$PaymentIntentApplyCustomerBalanceBody = {
  in: SchemaIn$PaymentIntentApplyCustomerBalanceBody,
  out: SchemaOut$PaymentIntentApplyCustomerBalanceBody,
};
