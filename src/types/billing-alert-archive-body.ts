import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingAlertArchiveBody
 */
export type BillingAlertArchiveBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: (string[] | undefined) | any | null | undefined;
};

/**
 * @internal
 * BillingAlertArchiveBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingAlertArchiveBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$BillingAlertArchiveBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingAlertArchiveBody
 */
const SchemaIn$BillingAlertArchiveBody: z.ZodType<
  BillingAlertArchiveBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingAlertArchiveBody
 */
const SchemaOut$BillingAlertArchiveBody: z.ZodType<
  External$BillingAlertArchiveBody, // output type of this zod object
  z.ZodTypeDef,
  BillingAlertArchiveBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

export const Schemas$BillingAlertArchiveBody = {
  in: SchemaIn$BillingAlertArchiveBody,
  out: SchemaOut$BillingAlertArchiveBody,
};
