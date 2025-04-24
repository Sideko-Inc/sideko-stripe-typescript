import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationReverseBody
 */
export type TestHelperIssuingAuthorizationReverseBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The amount to reverse from the authorization. If not provided, the full amount of the authorization will be reversed. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  reverseAmount?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationReverseBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationReverseBody = {
  expand?: string[] | undefined;
  reverse_amount?: number | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | External$TestHelperIssuingAuthorizationReverseBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationReverseBody
 */
const SchemaIn$TestHelperIssuingAuthorizationReverseBody: z.ZodType<
  TestHelperIssuingAuthorizationReverseBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reverse_amount: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reverse_amount: "reverseAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationReverseBody
 */
const SchemaOut$TestHelperIssuingAuthorizationReverseBody: z.ZodType<
  External$TestHelperIssuingAuthorizationReverseBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationReverseBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reverseAmount: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reverseAmount: "reverse_amount",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationReverseBody = {
  in: SchemaIn$TestHelperIssuingAuthorizationReverseBody,
  out: SchemaOut$TestHelperIssuingAuthorizationReverseBody,
};
