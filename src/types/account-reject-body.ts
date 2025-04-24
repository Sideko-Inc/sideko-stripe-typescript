import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountRejectBody
 */
export type AccountRejectBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
   */
  reason: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountRejectBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountRejectBody = {
  expand?: string[] | undefined;
  reason: string;

  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | External$AccountRejectBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountRejectBody
 */
const SchemaIn$AccountRejectBody: z.ZodType<
  AccountRejectBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reason: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reason: "reason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountRejectBody
 */
const SchemaOut$AccountRejectBody: z.ZodType<
  External$AccountRejectBody, // output type of this zod object
  z.ZodTypeDef,
  AccountRejectBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reason: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reason: "reason",
    });
  });

export const Schemas$AccountRejectBody = {
  in: SchemaIn$AccountRejectBody,
  out: SchemaOut$AccountRejectBody,
};
