import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCapabilityCreateBody
 */
export type AccountCapabilityCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * To request a new capability for an account, pass true. There can be a delay before the requested capability becomes active. If the capability has any activation requirements, the response includes them in the `requirements` arrays.
   *
   * If a capability isn't permanent, you can remove it from the account by passing false. Some capabilities are permanent after they've been requested. Attempting to remove a permanent capability returns an error.
   */
  requested?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountCapabilityCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCapabilityCreateBody = {
  expand?: string[] | undefined;
  requested?: boolean | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | External$AccountCapabilityCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCapabilityCreateBody
 */
const SchemaIn$AccountCapabilityCreateBody: z.ZodType<
  AccountCapabilityCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    requested: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCapabilityCreateBody
 */
const SchemaOut$AccountCapabilityCreateBody: z.ZodType<
  External$AccountCapabilityCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountCapabilityCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    requested: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      requested: "requested",
    });
  });

export const Schemas$AccountCapabilityCreateBody = {
  in: SchemaIn$AccountCapabilityCreateBody,
  out: SchemaOut$AccountCapabilityCreateBody,
};
