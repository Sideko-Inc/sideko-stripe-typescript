import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodCreateBodyCardObj1
 */
export type PaymentMethodCreateBodyCardObj1 = {
  token: string;
};

/**
 * @internal
 * PaymentMethodCreateBodyCardObj1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyCardObj1 = {
  token: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyCardObj1
 */
const SchemaIn$PaymentMethodCreateBodyCardObj1: z.ZodType<
  PaymentMethodCreateBodyCardObj1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    token: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      token: "token",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyCardObj1
 */
const SchemaOut$PaymentMethodCreateBodyCardObj1: z.ZodType<
  External$PaymentMethodCreateBodyCardObj1, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyCardObj1 // the object to be transformed
> = z
  .object({
    token: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      token: "token",
    });
  });

export const Schemas$PaymentMethodCreateBodyCardObj1 = {
  in: SchemaIn$PaymentMethodCreateBodyCardObj1,
  out: SchemaOut$PaymentMethodCreateBodyCardObj1,
};
