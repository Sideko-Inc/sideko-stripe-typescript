import {
  External$PaymentPagesCheckoutSessionAfterExpirationRecovery,
  PaymentPagesCheckoutSessionAfterExpirationRecovery,
  Schemas$PaymentPagesCheckoutSessionAfterExpirationRecovery,
} from "./payment-pages-checkout-session-after-expiration-recovery";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionAfterExpiration = {
  recovery?: PaymentPagesCheckoutSessionAfterExpirationRecovery | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionAfterExpiration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionAfterExpiration = {
  recovery?:
    | External$PaymentPagesCheckoutSessionAfterExpirationRecovery
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionAfterExpiration
 */
const SchemaIn$PaymentPagesCheckoutSessionAfterExpiration: z.ZodType<
  PaymentPagesCheckoutSessionAfterExpiration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    recovery:
      Schemas$PaymentPagesCheckoutSessionAfterExpirationRecovery.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      recovery: "recovery",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionAfterExpiration
 */
const SchemaOut$PaymentPagesCheckoutSessionAfterExpiration: z.ZodType<
  External$PaymentPagesCheckoutSessionAfterExpiration, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionAfterExpiration // the object to be transformed
> = z
  .object({
    recovery:
      Schemas$PaymentPagesCheckoutSessionAfterExpirationRecovery.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      recovery: "recovery",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionAfterExpiration = {
  in: SchemaIn$PaymentPagesCheckoutSessionAfterExpiration,
  out: SchemaOut$PaymentPagesCheckoutSessionAfterExpiration,
};
