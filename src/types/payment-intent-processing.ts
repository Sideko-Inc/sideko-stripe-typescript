import {
  External$PaymentIntentCardProcessing,
  PaymentIntentCardProcessing,
  Schemas$PaymentIntentCardProcessing,
} from "./payment-intent-card-processing";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentProcessing = {
  card?: PaymentIntentCardProcessing | undefined;
  /**
   * Type of the payment method for which payment is in `processing` state, one of `card`.
   */
  type: "card";
};

/**
 * @internal
 * PaymentIntentProcessing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentProcessing = {
  card?: External$PaymentIntentCardProcessing | undefined;
  type: "card";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentProcessing
 */
const SchemaIn$PaymentIntentProcessing: z.ZodType<
  PaymentIntentProcessing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card: Schemas$PaymentIntentCardProcessing.in.optional(),
    type: z.enum(["card"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentProcessing
 */
const SchemaOut$PaymentIntentProcessing: z.ZodType<
  External$PaymentIntentProcessing, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentProcessing // the object to be transformed
> = z
  .object({
    card: Schemas$PaymentIntentCardProcessing.out.optional(),
    type: z.enum(["card"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      type: "type",
    });
  });

export const Schemas$PaymentIntentProcessing = {
  in: SchemaIn$PaymentIntentProcessing,
  out: SchemaOut$PaymentIntentProcessing,
};
