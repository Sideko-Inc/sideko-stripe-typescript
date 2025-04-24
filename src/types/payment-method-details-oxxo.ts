import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsOxxo = {
  /**
   * OXXO reference number
   */
  number?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsOxxo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsOxxo = {
  number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsOxxo
 */
const SchemaIn$PaymentMethodDetailsOxxo: z.ZodType<
  PaymentMethodDetailsOxxo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      number: "number",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsOxxo
 */
const SchemaOut$PaymentMethodDetailsOxxo: z.ZodType<
  External$PaymentMethodDetailsOxxo, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsOxxo // the object to be transformed
> = z
  .object({
    number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      number: "number",
    });
  });

export const Schemas$PaymentMethodDetailsOxxo = {
  in: SchemaIn$PaymentMethodDetailsOxxo,
  out: SchemaOut$PaymentMethodDetailsOxxo,
};
