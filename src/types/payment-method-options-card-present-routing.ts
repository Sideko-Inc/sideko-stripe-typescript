import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsCardPresentRouting = {
  /**
   * Requested routing priority
   */
  requestedPriority?: ("domestic" | "international") | null | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsCardPresentRouting without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsCardPresentRouting = {
  requested_priority?: ("domestic" | "international") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsCardPresentRouting
 */
const SchemaIn$PaymentMethodOptionsCardPresentRouting: z.ZodType<
  PaymentMethodOptionsCardPresentRouting, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested_priority: z
      .enum(["domestic", "international"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested_priority: "requestedPriority",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsCardPresentRouting
 */
const SchemaOut$PaymentMethodOptionsCardPresentRouting: z.ZodType<
  External$PaymentMethodOptionsCardPresentRouting, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsCardPresentRouting // the object to be transformed
> = z
  .object({
    requestedPriority: z
      .enum(["domestic", "international"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestedPriority: "requested_priority",
    });
  });

export const Schemas$PaymentMethodOptionsCardPresentRouting = {
  in: SchemaIn$PaymentMethodOptionsCardPresentRouting,
  out: SchemaOut$PaymentMethodOptionsCardPresentRouting,
};
