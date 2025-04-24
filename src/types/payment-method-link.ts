import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodLink = {
  /**
   * Account owner's email address.
   */
  email?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodLink = {
  email?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodLink
 */
const SchemaIn$PaymentMethodLink: z.ZodType<
  PaymentMethodLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodLink
 */
const SchemaOut$PaymentMethodLink: z.ZodType<
  External$PaymentMethodLink, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodLink // the object to be transformed
> = z
  .object({
    email: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
    });
  });

export const Schemas$PaymentMethodLink = {
  in: SchemaIn$PaymentMethodLink,
  out: SchemaOut$PaymentMethodLink,
};
