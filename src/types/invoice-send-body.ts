import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceSendBody
 */
export type InvoiceSendBody = {
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
 * InvoiceSendBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceSendBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$InvoiceSendBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceSendBody
 */
const SchemaIn$InvoiceSendBody: z.ZodType<
  InvoiceSendBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceSendBody
 */
const SchemaOut$InvoiceSendBody: z.ZodType<
  External$InvoiceSendBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceSendBody // the object to be transformed
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

export const Schemas$InvoiceSendBody = {
  in: SchemaIn$InvoiceSendBody,
  out: SchemaOut$InvoiceSendBody,
};
