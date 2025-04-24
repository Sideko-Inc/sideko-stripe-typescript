import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodAttachBody
 */
export type PaymentMethodAttachBody = {
  /**
   * The ID of the customer to which to attach the PaymentMethod.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodAttachBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodAttachBody = {
  customer: string;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | External$PaymentMethodAttachBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodAttachBody
 */
const SchemaIn$PaymentMethodAttachBody: z.ZodType<
  PaymentMethodAttachBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodAttachBody
 */
const SchemaOut$PaymentMethodAttachBody: z.ZodType<
  External$PaymentMethodAttachBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodAttachBody // the object to be transformed
> = z
  .object({
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
    });
  });

export const Schemas$PaymentMethodAttachBody = {
  in: SchemaIn$PaymentMethodAttachBody,
  out: SchemaOut$PaymentMethodAttachBody,
};
