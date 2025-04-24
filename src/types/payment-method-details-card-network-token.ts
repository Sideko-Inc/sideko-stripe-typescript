import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCardNetworkToken = {
  /**
   * Indicates if Stripe used a network token, either user provided or Stripe managed when processing the transaction.
   */
  used: boolean;
};

/**
 * @internal
 * PaymentMethodDetailsCardNetworkToken without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCardNetworkToken = {
  used: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCardNetworkToken
 */
const SchemaIn$PaymentMethodDetailsCardNetworkToken: z.ZodType<
  PaymentMethodDetailsCardNetworkToken, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    used: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      used: "used",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCardNetworkToken
 */
const SchemaOut$PaymentMethodDetailsCardNetworkToken: z.ZodType<
  External$PaymentMethodDetailsCardNetworkToken, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCardNetworkToken // the object to be transformed
> = z
  .object({
    used: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      used: "used",
    });
  });

export const Schemas$PaymentMethodDetailsCardNetworkToken = {
  in: SchemaIn$PaymentMethodDetailsCardNetworkToken,
  out: SchemaOut$PaymentMethodDetailsCardNetworkToken,
};
