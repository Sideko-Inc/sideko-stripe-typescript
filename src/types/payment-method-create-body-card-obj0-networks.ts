import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodCreateBodyCardObj0Networks
 */
export type PaymentMethodCreateBodyCardObj0Networks = {
  preferred?: ("cartes_bancaires" | "mastercard" | "visa") | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyCardObj0Networks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyCardObj0Networks = {
  preferred?: ("cartes_bancaires" | "mastercard" | "visa") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyCardObj0Networks
 */
const SchemaIn$PaymentMethodCreateBodyCardObj0Networks: z.ZodType<
  PaymentMethodCreateBodyCardObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred: z.enum(["cartes_bancaires", "mastercard", "visa"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyCardObj0Networks
 */
const SchemaOut$PaymentMethodCreateBodyCardObj0Networks: z.ZodType<
  External$PaymentMethodCreateBodyCardObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyCardObj0Networks // the object to be transformed
> = z
  .object({
    preferred: z.enum(["cartes_bancaires", "mastercard", "visa"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

export const Schemas$PaymentMethodCreateBodyCardObj0Networks = {
  in: SchemaIn$PaymentMethodCreateBodyCardObj0Networks,
  out: SchemaOut$PaymentMethodCreateBodyCardObj0Networks,
};
