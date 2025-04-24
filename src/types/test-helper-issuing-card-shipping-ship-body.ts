import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingCardShippingShipBody
 */
export type TestHelperIssuingCardShippingShipBody = {
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
 * TestHelperIssuingCardShippingShipBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingCardShippingShipBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TestHelperIssuingCardShippingShipBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingCardShippingShipBody
 */
const SchemaIn$TestHelperIssuingCardShippingShipBody: z.ZodType<
  TestHelperIssuingCardShippingShipBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingCardShippingShipBody
 */
const SchemaOut$TestHelperIssuingCardShippingShipBody: z.ZodType<
  External$TestHelperIssuingCardShippingShipBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingCardShippingShipBody // the object to be transformed
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

export const Schemas$TestHelperIssuingCardShippingShipBody = {
  in: SchemaIn$TestHelperIssuingCardShippingShipBody,
  out: SchemaOut$TestHelperIssuingCardShippingShipBody,
};
