import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCardWalletVisaCheckout = {
  billingAddress?: Address | undefined;
  /**
   * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  email?: string | null | undefined;
  /**
   * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  name?: string | null | undefined;
  shippingAddress?: Address | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsCardWalletVisaCheckout without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCardWalletVisaCheckout = {
  billing_address?: External$Address | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  shipping_address?: External$Address | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCardWalletVisaCheckout
 */
const SchemaIn$PaymentMethodDetailsCardWalletVisaCheckout: z.ZodType<
  PaymentMethodDetailsCardWalletVisaCheckout, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_address: Schemas$Address.in.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    shipping_address: Schemas$Address.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_address: "billingAddress",
      email: "email",
      name: "name",
      shipping_address: "shippingAddress",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCardWalletVisaCheckout
 */
const SchemaOut$PaymentMethodDetailsCardWalletVisaCheckout: z.ZodType<
  External$PaymentMethodDetailsCardWalletVisaCheckout, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCardWalletVisaCheckout // the object to be transformed
> = z
  .object({
    billingAddress: Schemas$Address.out.optional(),
    email: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    shippingAddress: Schemas$Address.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingAddress: "billing_address",
      email: "email",
      name: "name",
      shippingAddress: "shipping_address",
    });
  });

export const Schemas$PaymentMethodDetailsCardWalletVisaCheckout = {
  in: SchemaIn$PaymentMethodDetailsCardWalletVisaCheckout,
  out: SchemaOut$PaymentMethodDetailsCardWalletVisaCheckout,
};
