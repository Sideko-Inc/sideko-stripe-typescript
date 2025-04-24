import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySetupIntentDataMetadata
 */
export type CheckoutSessionCreateBodySetupIntentDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodySetupIntentDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySetupIntentDataMetadata = {
  [additionalProperty: string]:
    | External$CheckoutSessionCreateBodySetupIntentDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySetupIntentDataMetadata
 */
const SchemaIn$CheckoutSessionCreateBodySetupIntentDataMetadata: z.ZodType<
  CheckoutSessionCreateBodySetupIntentDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySetupIntentDataMetadata
 */
const SchemaOut$CheckoutSessionCreateBodySetupIntentDataMetadata: z.ZodType<
  External$CheckoutSessionCreateBodySetupIntentDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySetupIntentDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodySetupIntentDataMetadata = {
  in: SchemaIn$CheckoutSessionCreateBodySetupIntentDataMetadata,
  out: SchemaOut$CheckoutSessionCreateBodySetupIntentDataMetadata,
};
