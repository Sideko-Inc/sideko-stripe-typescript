import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySubscriptionDataMetadata
 */
export type CheckoutSessionCreateBodySubscriptionDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionDataMetadata = {
  [additionalProperty: string]:
    | External$CheckoutSessionCreateBodySubscriptionDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionDataMetadata
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionDataMetadata: z.ZodType<
  CheckoutSessionCreateBodySubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionDataMetadata
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionDataMetadata: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodySubscriptionDataMetadata = {
  in: SchemaIn$CheckoutSessionCreateBodySubscriptionDataMetadata,
  out: SchemaOut$CheckoutSessionCreateBodySubscriptionDataMetadata,
};
