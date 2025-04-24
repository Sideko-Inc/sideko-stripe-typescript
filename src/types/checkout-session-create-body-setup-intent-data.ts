import {
  CheckoutSessionCreateBodySetupIntentDataMetadata,
  External$CheckoutSessionCreateBodySetupIntentDataMetadata,
  Schemas$CheckoutSessionCreateBodySetupIntentDataMetadata,
} from "./checkout-session-create-body-setup-intent-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
 */
export type CheckoutSessionCreateBodySetupIntentData = {
  description?: string | undefined;
  metadata?: CheckoutSessionCreateBodySetupIntentDataMetadata | undefined;
  onBehalfOf?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodySetupIntentData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySetupIntentData = {
  description?: string | undefined;
  metadata?:
    | External$CheckoutSessionCreateBodySetupIntentDataMetadata
    | undefined;
  on_behalf_of?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySetupIntentData
 */
const SchemaIn$CheckoutSessionCreateBodySetupIntentData: z.ZodType<
  CheckoutSessionCreateBodySetupIntentData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodySetupIntentDataMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySetupIntentData
 */
const SchemaOut$CheckoutSessionCreateBodySetupIntentData: z.ZodType<
  External$CheckoutSessionCreateBodySetupIntentData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySetupIntentData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodySetupIntentDataMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
    });
  });

export const Schemas$CheckoutSessionCreateBodySetupIntentData = {
  in: SchemaIn$CheckoutSessionCreateBodySetupIntentData,
  out: SchemaOut$CheckoutSessionCreateBodySetupIntentData,
};
