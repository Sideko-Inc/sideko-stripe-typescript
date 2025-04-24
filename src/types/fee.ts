import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type Fee = {
  /**
   * Amount of the fee, in cents.
   */
  amount: number;
  /**
   * ID of the Connect application that earned the fee.
   */
  application?: string | null | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Type of the fee, one of: `application_fee`, `payment_method_passthrough_fee`, `stripe_fee` or `tax`.
   */
  type: string;
};

/**
 * @internal
 * Fee without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Fee = {
  amount: number;
  application?: string | null | undefined;
  currency: string;
  description?: string | null | undefined;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Fee
 */
const SchemaIn$Fee: z.ZodType<
  Fee, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    application: z.string().nullable().optional(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application: "application",
      currency: "currency",
      description: "description",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Fee
 */
const SchemaOut$Fee: z.ZodType<
  External$Fee, // output type of this zod object
  z.ZodTypeDef,
  Fee // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    application: z.string().nullable().optional(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application: "application",
      currency: "currency",
      description: "description",
      type: "type",
    });
  });

export const Schemas$Fee = {
  in: SchemaIn$Fee,
  out: SchemaOut$Fee,
};
