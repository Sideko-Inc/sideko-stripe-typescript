import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodConfigResourceDisplayPreference = {
  /**
   * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
   */
  overridable?: boolean | null | undefined;
  /**
   * The account's display preference.
   */
  preference: "none" | "off" | "on";
  /**
   * The effective display preference value.
   */
  value: "off" | "on";
};

/**
 * @internal
 * PaymentMethodConfigResourceDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigResourceDisplayPreference = {
  overridable?: boolean | null | undefined;
  preference: "none" | "off" | "on";
  value: "off" | "on";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigResourceDisplayPreference
 */
const SchemaIn$PaymentMethodConfigResourceDisplayPreference: z.ZodType<
  PaymentMethodConfigResourceDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    overridable: z.boolean().nullable().optional(),
    preference: z.enum(["none", "off", "on"]),
    value: z.enum(["off", "on"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      overridable: "overridable",
      preference: "preference",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigResourceDisplayPreference
 */
const SchemaOut$PaymentMethodConfigResourceDisplayPreference: z.ZodType<
  External$PaymentMethodConfigResourceDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigResourceDisplayPreference // the object to be transformed
> = z
  .object({
    overridable: z.boolean().nullable().optional(),
    preference: z.enum(["none", "off", "on"]),
    value: z.enum(["off", "on"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      overridable: "overridable",
      preference: "preference",
      value: "value",
    });
  });

export const Schemas$PaymentMethodConfigResourceDisplayPreference = {
  in: SchemaIn$PaymentMethodConfigResourceDisplayPreference,
  out: SchemaOut$PaymentMethodConfigResourceDisplayPreference,
};
