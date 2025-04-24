import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCardPresentNetworks = {
  /**
   * All networks available for selection via [payment_method_options.card.network](/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
   */
  available: string[];
  /**
   * The preferred network for the card.
   */
  preferred?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodCardPresentNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCardPresentNetworks = {
  available: string[];
  preferred?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCardPresentNetworks
 */
const SchemaIn$PaymentMethodCardPresentNetworks: z.ZodType<
  PaymentMethodCardPresentNetworks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available: z.array(z.string()),
    preferred: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      preferred: "preferred",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCardPresentNetworks
 */
const SchemaOut$PaymentMethodCardPresentNetworks: z.ZodType<
  External$PaymentMethodCardPresentNetworks, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCardPresentNetworks // the object to be transformed
> = z
  .object({
    available: z.array(z.string()),
    preferred: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      preferred: "preferred",
    });
  });

export const Schemas$PaymentMethodCardPresentNetworks = {
  in: SchemaIn$PaymentMethodCardPresentNetworks,
  out: SchemaOut$PaymentMethodCardPresentNetworks,
};
