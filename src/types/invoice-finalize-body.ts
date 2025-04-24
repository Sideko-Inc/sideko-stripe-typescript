import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceFinalizeBody
 */
export type InvoiceFinalizeBody = {
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceFinalizeBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceFinalizeBody = {
  auto_advance?: boolean | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | External$InvoiceFinalizeBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceFinalizeBody
 */
const SchemaIn$InvoiceFinalizeBody: z.ZodType<
  InvoiceFinalizeBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    auto_advance: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      auto_advance: "autoAdvance",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceFinalizeBody
 */
const SchemaOut$InvoiceFinalizeBody: z.ZodType<
  External$InvoiceFinalizeBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceFinalizeBody // the object to be transformed
> = z
  .object({
    autoAdvance: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      autoAdvance: "auto_advance",
      expand: "expand",
    });
  });

export const Schemas$InvoiceFinalizeBody = {
  in: SchemaIn$InvoiceFinalizeBody,
  out: SchemaOut$InvoiceFinalizeBody,
};
