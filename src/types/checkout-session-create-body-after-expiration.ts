import {
  CheckoutSessionCreateBodyAfterExpirationRecovery,
  External$CheckoutSessionCreateBodyAfterExpirationRecovery,
  Schemas$CheckoutSessionCreateBodyAfterExpirationRecovery,
} from "./checkout-session-create-body-after-expiration-recovery";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configure actions after a Checkout Session has expired.
 */
export type CheckoutSessionCreateBodyAfterExpiration = {
  recovery?: CheckoutSessionCreateBodyAfterExpirationRecovery | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyAfterExpiration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyAfterExpiration = {
  recovery?:
    | External$CheckoutSessionCreateBodyAfterExpirationRecovery
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyAfterExpiration
 */
const SchemaIn$CheckoutSessionCreateBodyAfterExpiration: z.ZodType<
  CheckoutSessionCreateBodyAfterExpiration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    recovery:
      Schemas$CheckoutSessionCreateBodyAfterExpirationRecovery.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      recovery: "recovery",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyAfterExpiration
 */
const SchemaOut$CheckoutSessionCreateBodyAfterExpiration: z.ZodType<
  External$CheckoutSessionCreateBodyAfterExpiration, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyAfterExpiration // the object to be transformed
> = z
  .object({
    recovery:
      Schemas$CheckoutSessionCreateBodyAfterExpirationRecovery.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      recovery: "recovery",
    });
  });

export const Schemas$CheckoutSessionCreateBodyAfterExpiration = {
  in: SchemaIn$CheckoutSessionCreateBodyAfterExpiration,
  out: SchemaOut$CheckoutSessionCreateBodyAfterExpiration,
};
