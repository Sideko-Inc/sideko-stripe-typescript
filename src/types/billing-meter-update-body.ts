import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingMeterUpdateBody
 */
export type BillingMeterUpdateBody = {
  /**
   * The meter’s name. Not visible to the customer.
   */
  displayName?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingMeterUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterUpdateBody = {
  display_name?: string | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | External$BillingMeterUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterUpdateBody
 */
const SchemaIn$BillingMeterUpdateBody: z.ZodType<
  BillingMeterUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_name: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      display_name: "displayName",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterUpdateBody
 */
const SchemaOut$BillingMeterUpdateBody: z.ZodType<
  External$BillingMeterUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterUpdateBody // the object to be transformed
> = z
  .object({
    displayName: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      displayName: "display_name",
      expand: "expand",
    });
  });

export const Schemas$BillingMeterUpdateBody = {
  in: SchemaIn$BillingMeterUpdateBody,
  out: SchemaOut$BillingMeterUpdateBody,
};
