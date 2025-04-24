import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type EphemeralKey = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Time at which the key will expire. Measured in seconds since the Unix epoch.
   */
  expires: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "ephemeral_key";
  /**
   * The key's secret. You can use this value to make authorized requests to the Stripe API.
   */
  secret?: string | undefined;
};

/**
 * @internal
 * EphemeralKey without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EphemeralKey = {
  created: number;
  expires: number;
  id: string;
  livemode: boolean;
  object: "ephemeral_key";
  secret?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EphemeralKey
 */
const SchemaIn$EphemeralKey: z.ZodType<
  EphemeralKey, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    expires: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["ephemeral_key"]),
    secret: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expires: "expires",
      id: "id",
      livemode: "livemode",
      object: "object",
      secret: "secret",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EphemeralKey
 */
const SchemaOut$EphemeralKey: z.ZodType<
  External$EphemeralKey, // output type of this zod object
  z.ZodTypeDef,
  EphemeralKey // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    expires: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["ephemeral_key"]),
    secret: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expires: "expires",
      id: "id",
      livemode: "livemode",
      object: "object",
      secret: "secret",
    });
  });

export const Schemas$EphemeralKey = {
  in: SchemaIn$EphemeralKey,
  out: SchemaOut$EphemeralKey,
};
