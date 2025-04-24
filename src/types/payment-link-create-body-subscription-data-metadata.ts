import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodySubscriptionDataMetadata
 */
export type PaymentLinkCreateBodySubscriptionDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodySubscriptionDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodySubscriptionDataMetadata = {
  [additionalProperty: string]:
    | External$PaymentLinkCreateBodySubscriptionDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodySubscriptionDataMetadata
 */
const SchemaIn$PaymentLinkCreateBodySubscriptionDataMetadata: z.ZodType<
  PaymentLinkCreateBodySubscriptionDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodySubscriptionDataMetadata
 */
const SchemaOut$PaymentLinkCreateBodySubscriptionDataMetadata: z.ZodType<
  External$PaymentLinkCreateBodySubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodySubscriptionDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkCreateBodySubscriptionDataMetadata = {
  in: SchemaIn$PaymentLinkCreateBodySubscriptionDataMetadata,
  out: SchemaOut$PaymentLinkCreateBodySubscriptionDataMetadata,
};
