import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingCardShippingReturnedBody
 */
export type TestHelperIssuingCardShippingReturnedBody = {
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
 * TestHelperIssuingCardShippingReturnedBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingCardShippingReturnedBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TestHelperIssuingCardShippingReturnedBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingCardShippingReturnedBody
 */
const SchemaIn$TestHelperIssuingCardShippingReturnedBody: z.ZodType<
  TestHelperIssuingCardShippingReturnedBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingCardShippingReturnedBody
 */
const SchemaOut$TestHelperIssuingCardShippingReturnedBody: z.ZodType<
  External$TestHelperIssuingCardShippingReturnedBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingCardShippingReturnedBody // the object to be transformed
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

export const Schemas$TestHelperIssuingCardShippingReturnedBody = {
  in: SchemaIn$TestHelperIssuingCardShippingReturnedBody,
  out: SchemaOut$TestHelperIssuingCardShippingReturnedBody,
};
