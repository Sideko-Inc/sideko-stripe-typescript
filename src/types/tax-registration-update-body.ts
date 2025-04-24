import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationUpdateBody
 */
export type TaxRegistrationUpdateBody = {
  /**
   * Time at which the registration becomes active. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
   */
  activeFrom?: ("now" | number) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
   */
  expiresAt?: ("now" | number | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (("now" | number) | undefined)
    | (string[] | undefined)
    | (("now" | number | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxRegistrationUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationUpdateBody = {
  active_from?: ("now" | number) | undefined;
  expand?: string[] | undefined;
  expires_at?: ("now" | number | string) | undefined;

  [additionalProperty: string]:
    | (("now" | number) | undefined)
    | (string[] | undefined)
    | (("now" | number | string) | undefined)
    | External$TaxRegistrationUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationUpdateBody
 */
const SchemaIn$TaxRegistrationUpdateBody: z.ZodType<
  TaxRegistrationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active_from: z.union([z.enum(["now"]), z.number().int()]).optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z
      .union([z.enum(["now"]), z.number().int(), z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active_from: "activeFrom",
      expand: "expand",
      expires_at: "expiresAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationUpdateBody
 */
const SchemaOut$TaxRegistrationUpdateBody: z.ZodType<
  External$TaxRegistrationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationUpdateBody // the object to be transformed
> = z
  .object({
    activeFrom: z.union([z.enum(["now"]), z.number().int()]).optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z
      .union([z.enum(["now"]), z.number().int(), z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      activeFrom: "active_from",
      expand: "expand",
      expiresAt: "expires_at",
    });
  });

export const Schemas$TaxRegistrationUpdateBody = {
  in: SchemaIn$TaxRegistrationUpdateBody,
  out: SchemaOut$TaxRegistrationUpdateBody,
};
