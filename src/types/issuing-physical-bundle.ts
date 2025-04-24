import {
  External$IssuingPhysicalBundleFeatures,
  IssuingPhysicalBundleFeatures,
  Schemas$IssuingPhysicalBundleFeatures,
} from "./issuing-physical-bundle-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Physical Bundle represents the bundle of physical items - card stock, carrier letter, and envelope - that is shipped to a cardholder when you create a physical card.
 */
export type IssuingPhysicalBundle = {
  features: IssuingPhysicalBundleFeatures;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Friendly display name.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.physical_bundle";
  /**
   * Whether this physical bundle can be used to create cards.
   */
  status: "active" | "inactive" | "review";
  /**
   * Whether this physical bundle is a standard Stripe offering or custom-made for you.
   */
  type: "custom" | "standard";
};

/**
 * @internal
 * IssuingPhysicalBundle without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingPhysicalBundle = {
  features: External$IssuingPhysicalBundleFeatures;
  id: string;
  livemode: boolean;
  name: string;
  object: "issuing.physical_bundle";
  status: "active" | "inactive" | "review";
  type: "custom" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingPhysicalBundle
 */
const SchemaIn$IssuingPhysicalBundle: z.ZodType<
  IssuingPhysicalBundle, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    features: Schemas$IssuingPhysicalBundleFeatures.in,
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["issuing.physical_bundle"]),
    status: z.enum(["active", "inactive", "review"]),
    type: z.enum(["custom", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      features: "features",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingPhysicalBundle
 */
const SchemaOut$IssuingPhysicalBundle: z.ZodType<
  External$IssuingPhysicalBundle, // output type of this zod object
  z.ZodTypeDef,
  IssuingPhysicalBundle // the object to be transformed
> = z
  .object({
    features: Schemas$IssuingPhysicalBundleFeatures.out,
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["issuing.physical_bundle"]),
    status: z.enum(["active", "inactive", "review"]),
    type: z.enum(["custom", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      features: "features",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      status: "status",
      type: "type",
    });
  });

export const Schemas$IssuingPhysicalBundle = {
  in: SchemaIn$IssuingPhysicalBundle,
  out: SchemaOut$IssuingPhysicalBundle,
};
