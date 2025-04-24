import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingCardShippingFailBody
 */
export type TestHelperIssuingCardShippingFailBody = {
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
 * TestHelperIssuingCardShippingFailBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingCardShippingFailBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TestHelperIssuingCardShippingFailBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingCardShippingFailBody
 */
const SchemaIn$TestHelperIssuingCardShippingFailBody: z.ZodType<
  TestHelperIssuingCardShippingFailBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingCardShippingFailBody
 */
const SchemaOut$TestHelperIssuingCardShippingFailBody: z.ZodType<
  External$TestHelperIssuingCardShippingFailBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingCardShippingFailBody // the object to be transformed
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

export const Schemas$TestHelperIssuingCardShippingFailBody = {
  in: SchemaIn$TestHelperIssuingCardShippingFailBody,
  out: SchemaOut$TestHelperIssuingCardShippingFailBody,
};
