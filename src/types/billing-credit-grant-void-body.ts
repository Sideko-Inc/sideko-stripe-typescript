import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditGrantVoidBody
 */
export type BillingCreditGrantVoidBody = {
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
 * BillingCreditGrantVoidBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantVoidBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$BillingCreditGrantVoidBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantVoidBody
 */
const SchemaIn$BillingCreditGrantVoidBody: z.ZodType<
  BillingCreditGrantVoidBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantVoidBody
 */
const SchemaOut$BillingCreditGrantVoidBody: z.ZodType<
  External$BillingCreditGrantVoidBody, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantVoidBody // the object to be transformed
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

export const Schemas$BillingCreditGrantVoidBody = {
  in: SchemaIn$BillingCreditGrantVoidBody,
  out: SchemaOut$BillingCreditGrantVoidBody,
};
